/**
 * CS CONNECT PAKISTAN
 * YouTube Playlist Auto-Fetch
 *
 * Fetches latest videos from YouTube playlists and renders them
 * on the homepage, podcasts page, and resources page.
 *
 * SETUP:
 * 1. Copy js/config.example.js to js/config.js
 * 2. Add your YouTube Data API key to config.js
 * 3. config.js is gitignored to keep the key off GitHub
 */

(function () {
  'use strict';

  var cfg = window.CSCONNECT_CONFIG || {};

  var CONFIG = {
    API_KEY: cfg.YOUTUBE_API_KEY || '',
    PODCAST_PLAYLIST: cfg.PODCAST_PLAYLIST_ID || 'PLeDoXr4-Cyfn-YIkvOT3Cw3WjDZ8dlU20',
    SESSIONS_PLAYLIST: cfg.SESSIONS_PLAYLIST_ID || 'PLeDoXr4-CyfnSgSh01zZV4M-JCZWmD0o_',
    MAX_RESULTS: 50,
    CACHE_DURATION: 30 * 60 * 1000,
    SESSIONS_INITIAL: 2,
  };

  // ─── HELPERS ─────────────────────────────────────────

  function formatDuration(iso) {
    if (!iso) return '';
    var m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!m) return '';
    var h = parseInt(m[1] || 0, 10);
    var min = parseInt(m[2] || 0, 10);
    return h > 0 ? h + 'h ' + (min > 0 ? min + 'm' : '') : min + 'm';
  }

  function formatDate(str) {
    var d = new Date(str);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return months[d.getMonth()] + ' ' + d.getFullYear();
  }

  function escapeHtml(text) {
    var el = document.createElement('span');
    el.textContent = text;
    return el.innerHTML;
  }

  function getCached(key) {
    try {
      var raw = sessionStorage.getItem(key);
      if (!raw) return null;
      var c = JSON.parse(raw);
      if (Date.now() - c.timestamp > CONFIG.CACHE_DURATION) {
        sessionStorage.removeItem(key);
        return null;
      }
      return c.data;
    } catch (e) { return null; }
  }

  function setCache(key, data) {
    try {
      sessionStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), data: data }));
    } catch (e) { /* storage full */ }
  }

  var PLAY_SVG = '<svg viewBox="0 0 24 24" fill="#000" stroke="none"><polygon points="6,3 20,12 6,21"/></svg>';

  // ─── API FETCHERS ────────────────────────────────────

  async function fetchPlaylist(playlistId) {
    var all = [];
    var pageToken = '';
    do {
      var url = 'https://www.googleapis.com/youtube/v3/playlistItems?' +
        'part=snippet&playlistId=' + playlistId +
        '&maxResults=' + CONFIG.MAX_RESULTS + '&key=' + CONFIG.API_KEY +
        (pageToken ? '&pageToken=' + pageToken : '');
      var res = await fetch(url);
      if (!res.ok) throw new Error('YouTube API: ' + res.status);
      var data = await res.json();
      all = all.concat(data.items || []);
      pageToken = data.nextPageToken || '';
    } while (pageToken);
    return all;
  }

  async function fetchVideoDurations(ids) {
    if (ids.length === 0) return {};
    var map = {};
    for (var i = 0; i < ids.length; i += 50) {
      var batch = ids.slice(i, i + 50);
      var url = 'https://www.googleapis.com/youtube/v3/videos?' +
        'part=contentDetails&id=' + batch.join(',') + '&key=' + CONFIG.API_KEY;
      var res = await fetch(url);
      if (!res.ok) throw new Error('Video details: ' + res.status);
      var data = await res.json();
      (data.items || []).forEach(function (d) { map[d.id] = d.contentDetails.duration; });
    }
    return map;
  }

  async function getPlaylistVideos(playlistId, cacheKey) {
    var cached = getCached(cacheKey);
    if (cached) return cached;

    var items = await fetchPlaylist(playlistId);
    // Filter out deleted/private videos
    items = items.filter(function (i) {
      return i.snippet.title !== 'Deleted video' && i.snippet.title !== 'Private video';
    });
    var ids = items.map(function (i) { return i.snippet.resourceId.videoId; });
    var durations = await fetchVideoDurations(ids);

    var videos = items.map(function (item, idx) {
      var s = item.snippet;
      var vid = s.resourceId.videoId;
      return {
        videoId: vid,
        title: s.title,
        description: s.description ? s.description.substring(0, 200) + '...' : '',
        thumbnail: (s.thumbnails && s.thumbnails.high && s.thumbnails.high.url) ||
                   (s.thumbnails && s.thumbnails.medium && s.thumbnails.medium.url) ||
                   'https://img.youtube.com/vi/' + vid + '/hqdefault.jpg',
        publishedAt: s.publishedAt,
        formattedDate: formatDate(s.publishedAt),
        duration: formatDuration(durations[vid] || ''),
        episodeNumber: items.length - idx,
        url: 'https://www.youtube.com/watch?v=' + vid
      };
    });

    setCache(cacheKey, videos);
    return videos;
  }

  // ─── PODCAST RENDERERS ───────────────────────────────

  function renderPodcastFeatured(container, ep) {
    var title = escapeHtml(ep.title);
    container.innerHTML =
      '<span class="featured-episode__label" data-reveal>Latest Episode</span>' +
      '<a href="' + ep.url + '" target="_blank" rel="noopener" class="featured-episode" data-reveal>' +
        '<div class="featured-episode__thumbnail">' +
          '<img src="' + ep.thumbnail + '" alt="' + title + '" loading="lazy">' +
          '<div class="podcast-spotlight__play-icon">' +
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="#000" stroke="none"><polygon points="6,3 20,12 6,21"/></svg>' +
          '</div>' +
        '</div>' +
        '<div class="featured-episode__content">' +
          '<h2 class="featured-episode__title">' + title + '</h2>' +
          '<p class="featured-episode__desc">' + escapeHtml(ep.description) + '</p>' +
          '<div class="featured-episode__meta">' +
            '<span>Episode ' + ep.episodeNumber + '</span>' +
            (ep.duration ? '<span>' + ep.duration + '</span>' : '') +
            '<span>' + ep.formattedDate + '</span>' +
          '</div>' +
        '</div>' +
      '</a>';
  }

  function renderHomepageFeatured(container, ep) {
    var title = escapeHtml(ep.title);
    container.innerHTML =
      '<a href="' + ep.url + '" target="_blank" rel="noopener" class="podcast-spotlight__featured" data-reveal>' +
        '<div class="podcast-spotlight__featured-thumbnail">' +
          '<img src="' + ep.thumbnail + '" alt="' + title + '" loading="lazy">' +
          '<div class="podcast-spotlight__play-icon">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="#000" stroke="none"><polygon points="6,3 20,12 6,21"/></svg>' +
          '</div>' +
        '</div>' +
        '<div class="podcast-spotlight__featured-content">' +
          '<span class="podcast-spotlight__featured-label">Latest Episode</span>' +
          '<h3 class="podcast-spotlight__featured-title">' + title + '</h3>' +
          '<p class="podcast-spotlight__featured-desc">' + escapeHtml(ep.description) + '</p>' +
          '<div class="podcast-spotlight__featured-meta">' +
            '<span>Episode ' + ep.episodeNumber + '</span>' +
            (ep.duration ? '<span>' + ep.duration + '</span>' : '') +
            '<span>' + ep.formattedDate + '</span>' +
          '</div>' +
        '</div>' +
      '</a>';
  }

  function renderEpisodesGrid(container, episodes) {
    container.innerHTML = episodes.map(function (ep, i) {
      var delay = ['', 'delay-1', 'delay-2'][i % 3];
      var title = escapeHtml(ep.title);
      return '<a href="' + ep.url + '" target="_blank" rel="noopener" class="episode-card" data-reveal="' + delay + '">' +
        '<div class="episode-card__thumbnail">' +
          '<img src="' + ep.thumbnail + '" alt="' + title + '" loading="lazy">' +
          '<div class="episode-card__play">' + PLAY_SVG + '</div>' +
        '</div>' +
        '<div class="episode-card__body">' +
          '<span class="episode-card__number">EP ' + String(ep.episodeNumber).padStart(2, '0') + '</span>' +
          '<h3 class="episode-card__title">' + title + '</h3>' +
          '<div class="episode-card__meta">' +
            (ep.duration ? '<span>' + ep.duration + '</span>' : '') +
            '<span>' + ep.formattedDate + '</span>' +
          '</div>' +
        '</div>' +
      '</a>';
    }).join('');
  }

  // ─── SESSIONS RENDERER ──────────────────────────────

  function renderSessions(container, videos) {
    var html = '<div class="feature-rows">';

    videos.forEach(function (vid, i) {
      var num = String(i + 1).padStart(2, '0');
      var title = escapeHtml(vid.title);
      var desc = escapeHtml(vid.description);
      var hidden = i >= CONFIG.SESSIONS_INITIAL ? ' data-session-extra style="display:none"' : '';

      html +=
      '<a href="' + vid.url + '" target="_blank" rel="noopener" class="feature-row" data-reveal' + hidden + '>' +
        '<div class="feature-row__text">' +
          '<span class="feature-row__number">' + num + '</span>' +
          '<span class="feature-row__tag">VIDEO</span>' +
          '<h3 class="feature-row__title">' + title + '</h3>' +
          '<p class="feature-row__desc">' + desc + '</p>' +
          '<span class="btn-ghost mt-md">Watch on YouTube &rarr;</span>' +
        '</div>' +
        '<div class="feature-row__visual">' +
          '<div class="feature-row__image feature-row__image--video">' +
            '<img src="' + vid.thumbnail + '" alt="' + title + '" loading="lazy">' +
            '<div class="card__play">' + PLAY_SVG + '</div>' +
          '</div>' +
        '</div>' +
      '</a>';
    });

    html += '</div>';

    if (videos.length > CONFIG.SESSIONS_INITIAL) {
      html +=
      '<button class="view-more-toggle" data-sessions-toggle>' +
        '<span class="view-more-toggle__text">View more videos</span>' +
        '<svg class="view-more-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
      '</button>';
    }

    container.innerHTML = html;

    var toggleBtn = container.querySelector('[data-sessions-toggle]');
    if (toggleBtn) {
      var expanded = false;
      toggleBtn.addEventListener('click', function () {
        expanded = !expanded;
        var extras = container.querySelectorAll('[data-session-extra]');
        extras.forEach(function (el) {
          el.style.display = expanded ? '' : 'none';
          if (expanded) {
            setTimeout(function () { el.classList.add('revealed'); }, 50);
          }
        });
        toggleBtn.querySelector('.view-more-toggle__text').textContent =
          expanded ? 'Show fewer videos' : 'View more videos';
        toggleBtn.classList.toggle('view-more-toggle--open', expanded);
      });
    }
  }

  // ─── RE-OBSERVE REVEALS ──────────────────────────────

  function reobserveReveals() {
    var els = document.querySelectorAll('[data-reveal]:not(.revealed)');
    if (els.length === 0 || typeof IntersectionObserver === 'undefined') return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { obs.observe(el); });
  }

  // ─── INIT ────────────────────────────────────────────

  async function init() {
    if (!CONFIG.API_KEY) return;

    try {
      var hasPodcast = document.querySelector('[data-yt-podcast-featured]') ||
                       document.querySelector('[data-yt-episodes-grid]') ||
                       document.querySelector('[data-yt-featured]');

      if (hasPodcast) {
        var episodes = await getPlaylistVideos(CONFIG.PODCAST_PLAYLIST, 'csconnect_yt_podcast');
        if (episodes.length > 0) {
          var latest = episodes[0];
          var hf = document.querySelector('[data-yt-featured]');
          if (hf) renderHomepageFeatured(hf, latest);
          var pf = document.querySelector('[data-yt-podcast-featured]');
          if (pf) renderPodcastFeatured(pf, latest);
          var pg = document.querySelector('[data-yt-episodes-grid]');
          if (pg) renderEpisodesGrid(pg, episodes);
        }
      }

      var sessionsContainer = document.querySelector('[data-yt-sessions]');
      if (sessionsContainer) {
        var sessions = await getPlaylistVideos(CONFIG.SESSIONS_PLAYLIST, 'csconnect_yt_sessions');
        if (sessions.length > 0) {
          renderSessions(sessionsContainer, sessions);
        }
      }

      reobserveReveals();
    } catch (err) {
      console.warn('CS Connect YouTube fetch failed:', err.message);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

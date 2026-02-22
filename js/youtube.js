/**
 * CS CONNECT PAKISTAN
 * YouTube Playlist Auto-Fetch
 *
 * Fetches latest episodes from a YouTube playlist and renders them
 * on the homepage (featured episode) and podcasts page (full grid).
 *
 * SETUP:
 * 1. Go to https://console.cloud.google.com
 * 2. Create a project & enable "YouTube Data API v3"
 * 3. Create an API key (restrict to YouTube Data API + your domain)
 * 4. Set your YOUTUBE_API_KEY and PLAYLIST_ID below
 */

(function () {
  'use strict';

  // ─── CONFIGURATION ───────────────────────────────────
  const CONFIG = {
    YOUTUBE_API_KEY: 'YOUR_API_KEY_HERE',  // Replace with your YouTube Data API key
    PLAYLIST_ID: 'PLeDoXr4-Cyfn-YIkvOT3Cw3WjDZ8dlU20',  // CS Connect Podcast playlist
    MAX_RESULTS: 50,                        // Max episodes to fetch
    CACHE_KEY: 'csconnect_yt_episodes',
    CACHE_DURATION: 30 * 60 * 1000,        // 30 minutes cache
  };

  // ─── HELPERS ─────────────────────────────────────────

  function formatDuration(isoDuration) {
    if (!isoDuration) return '';
    const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return '';
    const h = parseInt(match[1] || 0, 10);
    const m = parseInt(match[2] || 0, 10);
    if (h > 0) return h + 'h ' + (m > 0 ? m + 'm' : '');
    return m + 'm';
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()] + ' ' + date.getFullYear();
  }

  function getCachedData() {
    try {
      const raw = sessionStorage.getItem(CONFIG.CACHE_KEY);
      if (!raw) return null;
      const cached = JSON.parse(raw);
      if (Date.now() - cached.timestamp > CONFIG.CACHE_DURATION) {
        sessionStorage.removeItem(CONFIG.CACHE_KEY);
        return null;
      }
      return cached.data;
    } catch { return null; }
  }

  function setCachedData(data) {
    try {
      sessionStorage.setItem(CONFIG.CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        data: data
      }));
    } catch { /* storage full, ignore */ }
  }

  // ─── API FETCHERS ────────────────────────────────────

  async function fetchPlaylistItems() {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?` +
      `part=snippet&playlistId=${CONFIG.PLAYLIST_ID}` +
      `&maxResults=${CONFIG.MAX_RESULTS}&key=${CONFIG.YOUTUBE_API_KEY}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error('YouTube API request failed: ' + res.status);
    const data = await res.json();
    return data.items || [];
  }

  async function fetchVideoDetails(videoIds) {
    if (videoIds.length === 0) return [];
    const url = `https://www.googleapis.com/youtube/v3/videos?` +
      `part=contentDetails&id=${videoIds.join(',')}&key=${CONFIG.YOUTUBE_API_KEY}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error('YouTube video details failed: ' + res.status);
    const data = await res.json();
    return data.items || [];
  }

  async function getEpisodes() {
    // Check cache first
    const cached = getCachedData();
    if (cached) return cached;

    const items = await fetchPlaylistItems();
    const videoIds = items.map(i => i.snippet.resourceId.videoId);
    const details = await fetchVideoDetails(videoIds);

    const durationMap = {};
    details.forEach(d => { durationMap[d.id] = d.contentDetails.duration; });

    const episodes = items.map((item, index) => {
      const s = item.snippet;
      const videoId = s.resourceId.videoId;
      return {
        videoId: videoId,
        title: s.title,
        description: s.description ? s.description.substring(0, 200) + '...' : '',
        thumbnail: s.thumbnails?.high?.url || s.thumbnails?.medium?.url || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        publishedAt: s.publishedAt,
        formattedDate: formatDate(s.publishedAt),
        duration: formatDuration(durationMap[videoId] || ''),
        episodeNumber: items.length - index,
        url: `https://www.youtube.com/watch?v=${videoId}`
      };
    });

    setCachedData(episodes);
    return episodes;
  }

  // ─── RENDERERS ───────────────────────────────────────

  function renderFeaturedEpisode(container, episode) {
    container.innerHTML = `
      <a href="${episode.url}" target="_blank" rel="noopener" class="podcast-spotlight__featured" data-reveal>
        <div class="podcast-spotlight__featured-thumbnail">
          <img src="${episode.thumbnail}" alt="${episode.title}" loading="lazy">
          <div class="podcast-spotlight__play-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#000" stroke="none"><polygon points="6,3 20,12 6,21"/></svg>
          </div>
        </div>
        <div class="podcast-spotlight__featured-content">
          <span class="podcast-spotlight__featured-label">Latest Episode</span>
          <h3 class="podcast-spotlight__featured-title">${episode.title}</h3>
          <p class="podcast-spotlight__featured-desc">${episode.description}</p>
          <div class="podcast-spotlight__featured-meta">
            <span>Episode ${episode.episodeNumber}</span>
            ${episode.duration ? `<span>${episode.duration}</span>` : ''}
            <span>${episode.formattedDate}</span>
          </div>
        </div>
      </a>
    `;
  }

  function renderHomepageFeatured(container, episode) {
    container.innerHTML = `
      <a href="${episode.url}" target="_blank" rel="noopener" class="featured-episode" data-reveal>
        <div class="featured-episode__thumbnail">
          <img src="${episode.thumbnail}" alt="${episode.title}" loading="lazy">
          <div class="podcast-spotlight__play-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" stroke="none"><polygon points="6,3 20,12 6,21"/></svg>
          </div>
        </div>
        <div class="featured-episode__content">
          <span class="featured-episode__label">Latest Episode</span>
          <h2 class="featured-episode__title">${episode.title}</h2>
          <p class="featured-episode__desc">${episode.description}</p>
          <div class="featured-episode__meta">
            <span>Episode ${episode.episodeNumber}</span>
            ${episode.duration ? `<span>${episode.duration}</span>` : ''}
            <span>${episode.formattedDate}</span>
          </div>
        </div>
      </a>
    `;
  }

  function renderEpisodesGrid(container, episodes) {
    container.innerHTML = episodes.map((ep, i) => {
      const delay = ['', 'delay-1', 'delay-2'][i % 3];
      return `
        <a href="${ep.url}" target="_blank" rel="noopener" class="episode-card" data-reveal="${delay}">
          <div class="episode-card__thumbnail">
            <img src="${ep.thumbnail}" alt="${ep.title}" loading="lazy">
            <div class="episode-card__play"><svg viewBox="0 0 24 24" fill="#000" stroke="none"><polygon points="6,3 20,12 6,21"/></svg></div>
          </div>
          <div class="episode-card__body">
            <span class="episode-card__number">EP ${String(ep.episodeNumber).padStart(2, '0')}</span>
            <h3 class="episode-card__title">${ep.title}</h3>
            <div class="episode-card__meta">
              ${ep.duration ? `<span>${ep.duration}</span>` : ''}
              <span>${ep.formattedDate}</span>
            </div>
          </div>
        </a>
      `;
    }).join('');
  }

  // ─── INITIALIZATION ──────────────────────────────────

  async function init() {
    // Don't run if API key isn't configured
    if (CONFIG.YOUTUBE_API_KEY === 'YOUR_API_KEY_HERE' ||
        CONFIG.PLAYLIST_ID === 'YOUR_PLAYLIST_ID_HERE') {
      return;
    }

    try {
      const episodes = await getEpisodes();
      if (episodes.length === 0) return;

      const latest = episodes[0];

      // Homepage: render featured episode
      const homeFeatured = document.querySelector('[data-yt-featured]');
      if (homeFeatured) {
        renderFeaturedEpisode(homeFeatured, latest);
      }

      // Podcasts page: render featured + grid
      const podcastFeatured = document.querySelector('[data-yt-podcast-featured]');
      if (podcastFeatured) {
        renderHomepageFeatured(podcastFeatured, latest);
      }

      const podcastGrid = document.querySelector('[data-yt-episodes-grid]');
      if (podcastGrid) {
        renderEpisodesGrid(podcastGrid, episodes);
      }

      // Re-observe newly added [data-reveal] elements
      const newReveals = document.querySelectorAll('[data-reveal]:not(.revealed)');
      if (newReveals.length > 0 && typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        newReveals.forEach(el => observer.observe(el));
      }

    } catch (err) {
      console.warn('CS Connect YouTube fetch failed:', err.message);
      // Fallback: keep the static HTML as-is
    }
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

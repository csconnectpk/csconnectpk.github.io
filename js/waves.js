/* ========================================
   Wave Background — Vanilla JS
   Ported from React wave-background component
   ======================================== */

// --- Simplex 2D Noise ---
function createNoise2D() {
  var F2 = 0.5 * (Math.sqrt(3) - 1);
  var G2 = (3 - Math.sqrt(3)) / 6;

  var grad3 = [
    [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
    [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
    [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
  ];

  var perm = new Uint8Array(512);
  var permMod12 = new Uint8Array(512);
  var p = new Uint8Array(256);

  for (var i = 0; i < 256; i++) p[i] = i;
  for (var i = 255; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = p[i]; p[i] = p[j]; p[j] = tmp;
  }
  for (var i = 0; i < 512; i++) {
    perm[i] = p[i & 255];
    permMod12[i] = perm[i] % 12;
  }

  return function(x, y) {
    var s = (x + y) * F2;
    var i = Math.floor(x + s);
    var j = Math.floor(y + s);
    var t = (i + j) * G2;
    var x0 = x - (i - t);
    var y0 = y - (j - t);

    var i1 = x0 > y0 ? 1 : 0;
    var j1 = x0 > y0 ? 0 : 1;

    var x1 = x0 - i1 + G2;
    var y1 = y0 - j1 + G2;
    var x2 = x0 - 1 + 2 * G2;
    var y2 = y0 - 1 + 2 * G2;

    var ii = i & 255;
    var jj = j & 255;

    var n0 = 0, n1 = 0, n2 = 0;

    var t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) {
      var gi = permMod12[ii + perm[jj]];
      t0 *= t0;
      n0 = t0 * t0 * (grad3[gi][0] * x0 + grad3[gi][1] * y0);
    }

    var t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) {
      var gi = permMod12[ii + i1 + perm[jj + j1]];
      t1 *= t1;
      n1 = t1 * t1 * (grad3[gi][0] * x1 + grad3[gi][1] * y1);
    }

    var t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) {
      var gi = permMod12[ii + 1 + perm[jj + 1]];
      t2 *= t2;
      n2 = t2 * t2 * (grad3[gi][0] * x2 + grad3[gi][1] * y2);
    }

    return 70 * (n0 + n1 + n2);
  };
}


// --- Wave Background ---
function WaveBackground(container, opts) {
  opts = opts || {};

  this.container = container;
  this.xGap = opts.xGap || 12;
  this.yGap = opts.yGap || 10;

  this.mouse = {
    x: -200, y: 0,
    lx: 0, ly: 0,
    sx: 0, sy: 0,
    v: 0, vs: 0, a: 0,
    set: false
  };

  this.paths = [];
  this.lines = [];
  this.noise = createNoise2D();
  this.raf = null;
  this.bounding = null;

  this._onResize = this._onResize.bind(this);
  this._onMouseMove = this._onMouseMove.bind(this);
  this._tick = this._tick.bind(this);

  this._init();
}

WaveBackground.prototype._init = function() {
  this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  this.container.appendChild(this.svg);

  this._setSize();
  this._setLines();

  window.addEventListener('resize', this._onResize);
  window.addEventListener('mousemove', this._onMouseMove);

  this.raf = requestAnimationFrame(this._tick);
};

WaveBackground.prototype._setSize = function() {
  this.bounding = this.container.getBoundingClientRect();
  this.svg.style.width = this.bounding.width + 'px';
  this.svg.style.height = this.bounding.height + 'px';
};

WaveBackground.prototype._setLines = function() {
  if (!this.bounding) return;

  var w = this.bounding.width;
  var h = this.bounding.height;

  // Clear existing
  for (var i = 0; i < this.paths.length; i++) this.paths[i].remove();
  this.paths = [];
  this.lines = [];

  var oW = w + 100;
  var oH = h + 30;
  var totalLines = Math.ceil(oW / this.xGap);
  var totalPoints = Math.ceil(oH / this.yGap);
  var xStart = (w - this.xGap * totalLines) / 2;
  var yStart = (h - this.yGap * totalPoints) / 2;

  for (var i = 0; i < totalLines; i++) {
    var points = [];
    for (var j = 0; j < totalPoints; j++) {
      points.push({
        x: xStart + this.xGap * i,
        y: yStart + this.yGap * j,
        wave: { x: 0, y: 0 },
        cursor: { x: 0, y: 0, vx: 0, vy: 0 }
      });
    }

    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.svg.appendChild(path);
    this.paths.push(path);
    this.lines.push(points);
  }
};

WaveBackground.prototype._onResize = function() {
  this._setSize();
  this._setLines();
};

WaveBackground.prototype._onMouseMove = function(e) {
  if (!this.bounding) return;
  var m = this.mouse;
  m.x = e.pageX - this.bounding.left;
  m.y = e.pageY - this.bounding.top;

  if (!m.set) {
    m.sx = m.x; m.sy = m.y;
    m.lx = m.x; m.ly = m.y;
    m.set = true;
  }
};

WaveBackground.prototype._movePoints = function(time) {
  var m = this.mouse;
  var noise = this.noise;

  for (var i = 0; i < this.lines.length; i++) {
    var points = this.lines[i];
    for (var j = 0; j < points.length; j++) {
      var p = points[j];

      // Wave motion via noise
      var move = noise(
        (p.x + time * 0.008) * 0.003,
        (p.y + time * 0.003) * 0.002
      ) * 8;

      p.wave.x = Math.cos(move) * 12;
      p.wave.y = Math.sin(move) * 6;

      // Cursor influence
      var dx = p.x - m.sx;
      var dy = p.y - m.sy;
      var d = Math.sqrt(dx * dx + dy * dy);
      var l = Math.max(175, m.vs);

      if (d < l) {
        var s = 1 - d / l;
        var f = Math.cos(d * 0.001) * s;
        p.cursor.vx += Math.cos(m.a) * f * l * m.vs * 0.00035;
        p.cursor.vy += Math.sin(m.a) * f * l * m.vs * 0.00035;
      }

      // Spring back
      p.cursor.vx += (0 - p.cursor.x) * 0.01;
      p.cursor.vy += (0 - p.cursor.y) * 0.01;
      p.cursor.vx *= 0.95;
      p.cursor.vy *= 0.95;
      p.cursor.x += p.cursor.vx;
      p.cursor.y += p.cursor.vy;

      // Clamp
      p.cursor.x = Math.min(50, Math.max(-50, p.cursor.x));
      p.cursor.y = Math.min(50, Math.max(-50, p.cursor.y));
    }
  }
};

WaveBackground.prototype._moved = function(point, withCursor) {
  if (withCursor === undefined) withCursor = true;
  return {
    x: point.x + point.wave.x + (withCursor ? point.cursor.x : 0),
    y: point.y + point.wave.y + (withCursor ? point.cursor.y : 0)
  };
};

WaveBackground.prototype._drawLines = function() {
  for (var i = 0; i < this.lines.length; i++) {
    var points = this.lines[i];
    if (points.length < 2 || !this.paths[i]) continue;

    var first = this._moved(points[0], false);
    var d = 'M ' + first.x + ' ' + first.y;

    for (var j = 1; j < points.length; j++) {
      var pt = this._moved(points[j]);
      d += 'L ' + pt.x + ' ' + pt.y;
    }

    this.paths[i].setAttribute('d', d);
  }
};

WaveBackground.prototype._tick = function(time) {
  var m = this.mouse;

  // Smooth cursor position
  m.sx += (m.x - m.sx) * 0.1;
  m.sy += (m.y - m.sy) * 0.1;

  // Velocity
  var dx = m.x - m.lx;
  var dy = m.y - m.ly;
  m.v = Math.sqrt(dx * dx + dy * dy);
  m.vs += (m.v - m.vs) * 0.1;
  m.vs = Math.min(100, m.vs);

  m.lx = m.x;
  m.ly = m.y;
  m.a = Math.atan2(dy, dx);

  this._movePoints(time);
  this._drawLines();

  this.raf = requestAnimationFrame(this._tick);
};

WaveBackground.prototype.destroy = function() {
  if (this.raf) cancelAnimationFrame(this.raf);
  window.removeEventListener('resize', this._onResize);
  window.removeEventListener('mousemove', this._onMouseMove);
  if (this.svg) this.svg.remove();
};


// --- Initialize ---
document.addEventListener('DOMContentLoaded', function() {
  var container = document.querySelector('.hero__waves');
  if (!container) return;

  // Skip on mobile — no cursor interaction + saves battery/CPU
  if (window.innerWidth < 768) return;

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  new WaveBackground(container);
});

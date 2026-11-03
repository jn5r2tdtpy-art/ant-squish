// Midway coins: one purse shared by every game on this device.
// Win a round or race in any game to earn coins; Sonny the Sorta Psychic charges 1 coin per fortune.
(function () {
  const KEY = "midway-coins", STARTER = 1; // everyone starts with 1 free coin
  function read() {
    try { const v = localStorage.getItem(KEY); if (v === null) { localStorage.setItem(KEY, String(STARTER)); return STARTER; } return Math.max(0, parseInt(v, 10) || 0); }
    catch (e) { return window.__midwayCoins != null ? window.__midwayCoins : STARTER; }
  }
  function write(n) { window.__midwayCoins = n; try { localStorage.setItem(KEY, String(n)); } catch (e) {} }
  window.Coins = {
    get: read,
    add(n) { const v = read() + n; write(v); return v; },
    spend(n) { const v = read(); if (v < n) return false; write(v - n); return true; },
    // coins for winning round (or race) number r: 1 coin for rounds 1-5, 2 for 6-10, 3 for 11-15, and so on
    forRound(r) { return 1 + Math.floor((Math.max(1, r) - 1) / 5); },
    label(n) { return n === 1 ? "1 coin" : n + " coins"; },
    chime() {
      try {
        const A = window.AudioContext || window.webkitAudioContext; if (!A) return;
        const ac = window.__coinAC || (window.__coinAC = new A()), t = ac.currentTime;
        [1568, 2093].forEach((f, i) => { const o = ac.createOscillator(), g = ac.createGain(); o.type = "triangle"; o.frequency.value = f;
          g.gain.setValueAtTime(0.0001, t + i * 0.09); g.gain.exponentialRampToValueAtTime(0.12, t + i * 0.09 + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.09 + 0.4);
          o.connect(g).connect(ac.destination); o.start(t + i * 0.09); o.stop(t + i * 0.09 + 0.45); });
      } catch (e) {}
    },
  };
})();

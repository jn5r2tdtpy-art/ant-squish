// Midway coins: your one purse, shared by every game on this phone.
// Win a round or race in any game to earn coins; Sonny the Sorta Psychic charges 1 coin per fortune.
(function () {
  const KEY = "midway-coins", STARTER = 50; // everyone starts with 50 free coins
  // one-time top-up: anyone who started with fewer coins gets brought up to 50
  try { if (!localStorage.getItem("midway-coins-50")) { const v = parseInt(localStorage.getItem(KEY), 10); if (!(v >= STARTER)) localStorage.setItem(KEY, String(STARTER)); localStorage.setItem("midway-coins-50", "1"); } } catch (e) {}
  // If players were set up on this phone for a while, add all of their coins together into this one purse
  try {
    const d = JSON.parse(localStorage.getItem("midway-players") || "null");
    if (d && Array.isArray(d.players)) {
      const total = d.players.reduce((n, p) => n + Math.max(0, p.coins | 0), 0);
      localStorage.setItem(KEY, String(Math.max(total, STARTER)));
      localStorage.removeItem("midway-players");
    }
  } catch (e) {}
  function read() {
    try { const v = localStorage.getItem(KEY); if (v === null) { localStorage.setItem(KEY, String(STARTER)); return STARTER; } return Math.max(0, parseInt(v, 10) || 0); }
    catch (e) { return window.__midwayCoins != null ? window.__midwayCoins : STARTER; }
  }
  function write(n) { window.__midwayCoins = n; try { localStorage.setItem(KEY, String(n)); } catch (e) {} }
  window.Coins = {
    get: read,
    add(n) { const v = read() + n; write(v); return v; },
    spend(n) { const v = read(); if (v < n) return false; write(v - n); return true; },
    // coins for winning round (or race) number r: 3 coins for rounds 1-3, 4 for 4-6, 5 for 7-9, and so on
    forRound(r) { return 3 + Math.floor((Math.max(1, r) - 1) / 3); },
    BONUS: 1,      // gold clown, gold tooth or bullseye
    GAME_OVER: 1,  // a coin just for playing
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

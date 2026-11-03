// Midway coins: one purse per player, shared by every game on this device.
// Win a round or race in any game to earn coins; Sonny the Sorta Psychic charges 1 coin per fortune.
(function () {
  // Each person who plays on this phone can have their own purse. Coins live on this phone only.
  const KEY = "midway-players", STARTER = 5; // every new player starts with 5 free coins
  function load() {
    let d = null;
    try { d = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) {}
    if (!d || !Array.isArray(d.players) || !d.players.length) {
      // first time: turn the old single purse into the first player
      let old = STARTER; try { const v = parseInt(localStorage.getItem("midway-coins"), 10); if (v >= 0) old = Math.max(v, STARTER); } catch (e) {}
      d = { players: [{ name: "Player 1", coins: old }], current: 0 };
      if (window.__midwayPlayers) d = window.__midwayPlayers;
      save(d);
    }
    if (!(d.current >= 0 && d.current < d.players.length)) d.current = 0;
    return d;
  }
  function save(d) { window.__midwayPlayers = d; try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
  function read() { const d = load(); return Math.max(0, d.players[d.current].coins | 0); }
  function write(n) { const d = load(); d.players[d.current].coins = Math.max(0, n); save(d); }
  window.Coins = {
    get: read,
    who() { const d = load(); return d.players[d.current].name; },
    players() { const d = load(); return d.players.map((p, i) => ({ name: p.name, coins: p.coins, current: i === d.current })); },
    choose(i) { const d = load(); if (i >= 0 && i < d.players.length) { d.current = i; save(d); } },
    addPlayer(name) { const d = load(); d.players.push({ name: String(name).trim().slice(0, 20) || "Player " + (d.players.length + 1), coins: STARTER }); d.current = d.players.length - 1; save(d); },
    rename(i, name) { const d = load(); if (d.players[i] && String(name).trim()) { d.players[i].name = String(name).trim().slice(0, 20); save(d); } },
    remove(i) { const d = load(); if (d.players.length > 1 && d.players[i]) { d.players.splice(i, 1); d.current = Math.min(d.current, d.players.length - 1); save(d); } },
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

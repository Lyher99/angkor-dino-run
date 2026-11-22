pal({
  k: "#140d21", // deep outline
  K: "#2a1b12", // dark brown outline
  w: "#fff6d6", // cream white
  y: "#ebb03d", // Khmer gold
  Y: "#ffe885", // bright gold
  o: "#9e6214", // gold shadow
  g: "#2f9e44", // play green
  G: "#51cf66", // play green hi
  d: "#1f6b2e", // play green shadow
  b: "#2b59c3", // map blue
  B: "#4dabf7", // map blue hi
  D: "#1b3a82", // map blue shadow
  r: "#c92a2a", // hero red
  R: "#ff6b6b", // hero red hi
  m: "#7a1616", // hero red shadow
  s: "#7d6e5d", // stone mid
  S: "#a69582", // stone hi
  t: "#54473a", // stone shadow
  p: "#3b265c", // krama purple
  P: "#674199", // krama purple hi
  c: "#495057", // screen dark
  C: "#74c0fc", // screen glow
});

// Helper: beveled Khmer rectangular button with gold corner accents
function makeBtn(name, w, h, hi, mid, lo, label) {
  const tx = Math.floor((w - (label.length * 4 - 1)) / 2);
  const ty = Math.floor((h - 5) / 2);
  sprite(name, { w, h, outline: "k" },
    rect(0, 0, w, h, lo),
    rect(0, 0, w, h - 2, mid),
    rect(1, 1, w - 2, 2, hi),
    // Gold Khmer corner brackets
    rect(0, 0, 4, 4, "y"), rect(1, 1, 2, 2, "Y"),
    rect(w - 4, 0, 4, 4, "y"), rect(w - 3, 1, 2, 2, "Y"),
    rect(0, h - 4, 4, 4, "y"), rect(1, h - 3, 2, 2, "Y"),
    rect(w - 4, h - 4, 4, 4, "y"), rect(w - 3, h - 3, 2, 2, "Y"),
    text(tx, ty + 1, label, "k"),
    text(tx, ty, label, "w")
  );
}

makeBtn("btn_play", 72, 22, "G", "g", "d", "PLAY");
makeBtn("btn_map", 72, 22, "B", "b", "D", "MAP");
makeBtn("btn_hero", 72, 22, "R", "r", "m", "HERO");
makeBtn("btn_settings", 72, 22, "S", "s", "t", "SETTINGS");
makeBtn("btn_next", 72, 22, "Y", "y", "o", "NEXT >");
makeBtn("btn_start", 84, 22, "G", "g", "d", "START RUN");

// Round icon buttons (20x20)
function makeCircleBtn(name, hi, mid, lo, ...glyph) {
  sprite(name, { w: 20, h: 20, outline: "k" },
    circ(10, 10, 9, "y"),
    circ(10, 10, 8, "Y"),
    circ(10, 10, 7, lo),
    circ(10, 9, 6, mid),
    circ(9, 8, 4, hi),
    ...glyph
  );
}

makeCircleBtn("btn_pause", "R", "r", "m",
  rect(7, 6, 2, 8, "w"), rect(11, 6, 2, 8, "w")
);
makeCircleBtn("btn_restart", "S", "s", "t",
  ring(10, 10, 4, "w"), rect(10, 5, 4, 3, "w")
);
makeCircleBtn("btn_home", "R", "r", "m",
  poly([10, 5, 5, 10, 15, 10], "w"),
  rect(7, 10, 6, 4, "w")
);
makeCircleBtn("btn_back", "P", "p", "k",
  poly([6, 10, 11, 6, 11, 14], "w"),
  rect(11, 9, 3, 2, "w")
);
makeCircleBtn("btn_close", "Y", "y", "o",
  line(7, 7, 13, 13, "k", 2),
  line(13, 7, 7, 13, "k", 2)
);

// Krama Banner (160x28)
sprite("banner_krama", { w: 160, h: 28, outline: "k" },
  // Left & right ribbon tails
  rect(2, 8, 156, 14, "p"),
  rect(2, 8, 156, 3, "P"),
  // Krama checkered accents on ends
  dither(4, 10, 22, 10, "r", "w", 0.5),
  dither(134, 10, 22, 10, "r", "w", 0.5),
  // Center gold plaque
  rect(28, 6, 104, 18, "y"),
  rect(30, 8, 100, 14, "p"),
  // Top Khmer crown spire
  poly([72, 6, 80, 0, 88, 6], "Y"),
  rect(76, 3, 8, 3, "y")
);

// Platform Cards: PC & MOBILE (52x56)
sprite("card_pc", { w: 52, h: 56, outline: "k" },
  rect(0, 0, 52, 56, "s"),
  rect(2, 2, 48, 36, "S"),
  // Monitor
  rect(10, 6, 32, 24, "t"),
  rect(12, 8, 28, 18, "c"),
  rect(14, 10, 10, 4, "C"),
  // Stand
  rect(22, 30, 8, 4, "t"),
  rect(17, 34, 18, 3, "t"),
  // Label bar
  rect(2, 40, 48, 14, "p"),
  rect(2, 40, 48, 2, "y"),
  text(23, 45, "PC", "w")
);

sprite("card_mobile", { w: 52, h: 56, outline: "k" },
  rect(0, 0, 52, 56, "s"),
  rect(2, 2, 48, 36, "S"),
  // Phone
  rect(17, 5, 18, 31, "t"),
  rect(19, 8, 14, 23, "c"),
  rect(21, 10, 6, 4, "C"),
  rect(25, 33, 2, 2, "w"),
  // Label bar
  rect(2, 40, 48, 14, "p"),
  rect(2, 40, 48, 2, "y"),
  text(15, 45, "MOBILE", "w")
);

// SFX Icons (20x16)
sprite("icon_sfx_on", { w: 20, h: 16, outline: "k" },
  rect(2, 5, 4, 6, "y"),
  poly([6, 5, 11, 2, 11, 14, 6, 11], "Y"),
  line(14, 5, 14, 11, "w", 1),
  line(17, 3, 17, 13, "w", 1)
);

sprite("icon_sfx_off", { w: 20, h: 16, outline: "k" },
  rect(2, 5, 4, 6, "s"),
  poly([6, 5, 11, 2, 11, 14, 6, 11], "S"),
  line(13, 5, 18, 11, "R", 2),
  line(18, 5, 13, 11, "R", 2)
);

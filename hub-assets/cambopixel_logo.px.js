// CamboPixel Game — Official Pixel-Art Console Logo & Emblem
// Golden Angkor Wat 3-prang silhouette + Retro Pixel Gamepad + Crimson-Gold Krama Ribbon

pal({
  k: "#120c1f", // deepest ink outline
  K: "#251a3d", // dark console charcoal
  d: "#3a2c59", // mid console slate
  s: "#5c4a82", // lit console bezel
  h: "#9784bd", // highlight bezel
  // Royal Khmer Gold
  O: "#6e3914", // bronze shadow
  o: "#b36b1e", // dark gold
  y: "#ebb03d", // rich gold
  Y: "#ffe373", // bright gold
  w: "#fff9d6", // cream specular
  // Khmer Crimson & Krama
  R: "#5c1224", // dark maroon
  r: "#b8233a", // royal crimson
  p: "#f05463", // bright coral-red
  // Emerald & Sky buttons
  G: "#1c5e42",
  g: "#46c278",
  E: "#a8ff9e",
  B: "#25589e",
  b: "#4ea3f0",
})

// 1. Main Emblem Logo (96x64): Golden Angkor 3-Tower Crown over Retro Pixel Gamepad
sprite("cambopixel_logo", { w: 96, h: 64 }, (c) => {
  const dy = 7
  // === TOP: Golden Angkor Wat 3-Prang Silhouette rising behind the gamepad ===
  const prang = (cx, baseY, h, hw) => {
    const tiers = Math.max(5, Math.floor(h / 3))
    for (let i = 0; i < tiers; i++) {
      const t = i / tiers
      const th = Math.ceil(h / tiers) + 1
      const y = baseY - Math.round(t * h) - th
      const bulge = Math.sin(t * Math.PI * 0.85) * 0.22
      const w = Math.max(1, Math.round(hw * (Math.pow(1 - t, 0.72) + bulge * (1 - t))))
      c.rect(cx - w - 1, y - 1, (w + 1) * 2 + 1, th + 2, "k")
      c.rect(cx - w, y, w * 2 + 1, th, "o")
      if (w >= 2) c.rect(cx - w + 1, y, Math.max(1, w * 2 - 2), th, "y")
      c.vline(cx, y, th, "Y")
      if (i % 2 === 0 && w >= 2) c.hline(cx - w, y + th - 1, w * 2 + 1, "O")
    }
    c.vline(cx, baseY - h - 4, 4, "Y")
    c.px(cx, baseY - h - 5, "w")
  }

  // Outer gallery base behind gamepad
  c.rect(18, 20 + dy, 60, 7, "k")
  c.rect(19, 21 + dy, 58, 5, "o")
  c.hline(19, 21 + dy, 58, "Y")
  // 3 Angkor towers (left, tall center, right)
  prang(28, 22 + dy, 14, 5)
  prang(68, 22 + dy, 14, 5)
  prang(48, 22 + dy, 20, 7)

  // === MIDDLE: Retro Pixel Arcade Gamepad ===
  c.rect(14, 24 + dy, 68, 22, "k")
  c.circ(20, 39 + dy, 12, "k")
  c.circ(76, 39 + dy, 12, "k")
  c.rect(16, 26 + dy, 64, 18, "K")
  c.circ(20, 39 + dy, 10, "K")
  c.circ(76, 39 + dy, 10, "K")
  c.rect(18, 27 + dy, 60, 14, "d")
  c.circ(20, 38 + dy, 8, "d")
  c.circ(76, 38 + dy, 8, "d")
  c.hline(18, 27 + dy, 60, "s")
  c.hline(20, 28 + dy, 56, "h")

  // Gold trim border around Khmer Krama center badge
  c.rect(36, 29 + dy, 24, 11, "k")
  c.rect(37, 30 + dy, 22, 9, "R")
  for (let y = 31 + dy; y <= 37 + dy; y++) {
    for (let x = 38; x <= 57; x++) {
      const ch = ((x + y) % 2 === 0) ? "r" : ((x % 3 === 0) ? "w" : "p")
      c.px(x, y, ch)
    }
  }
  c.box(37, 30 + dy, 22, 9, "y")

  // Left: Crisp Golden Pixel D-Pad
  c.rect(20, 30 + dy, 6, 14, "k")
  c.rect(16, 34 + dy, 14, 6, "k")
  c.rect(21, 31 + dy, 4, 12, "y")
  c.rect(17, 35 + dy, 12, 4, "y")
  c.hline(21, 31 + dy, 4, "Y")
  c.hline(17, 35 + dy, 4, "Y")
  c.hline(25, 35 + dy, 4, "Y")
  c.rect(22, 36 + dy, 2, 2, "O")

  // Right: 4 Vibrant Jewel Arcade Action Buttons
  const btn = (bx, by, base, lit, hi) => {
    c.circ(bx, by, 3, "k")
    c.circ(bx, by, 2, base)
    c.px(bx, by, lit)
    c.px(bx - 1, by - 1, hi)
  }
  btn(74, 32 + dy, "y", "Y", "w") // Top (Bright Gold)
  btn(80, 36 + dy, "r", "p", "w") // Right (Vibrant Crimson)
  btn(74, 40 + dy, "g", "E", "w") // Bottom (Emerald)
  btn(68, 36 + dy, "b", "b", "w") // Left (Sky Blue)

  // Sparkle stars flanking the temple crown
  const star = (sx, sy) => {
    c.px(sx, sy, "w")
    c.px(sx - 1, sy, "Y"); c.px(sx + 1, sy, "Y")
    c.px(sx, sy - 1, "Y"); c.px(sx, sy + 1, "Y")
  }
  star(12, 14 + dy)
  star(84, 14 + dy)
  star(36, 7 + dy)
  star(60, 7 + dy)
})

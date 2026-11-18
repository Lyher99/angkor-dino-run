// Khmer Dino Runner — High-Detail Pixel Art Game Assets
// Virtual screen: 480x270 (scales 2x -> 960x540 or 4x -> 1920x1080)

pal({
  // Outlines & deep shadows
  k: "#141020",
  K: "#252038",
  // Jade-emerald Dino scales
  D: "#194d3b",
  d: "#277352",
  g: "#3ea36b",
  G: "#6fd184",
  E: "#a9f0a8",
  // Royal Khmer Gold (crown, sash, lotus, accents)
  O: "#7a4419",
  o: "#b87427",
  y: "#ebb03d",
  Y: "#ffe373",
  w: "#fff9d6",
  // Khmer Crimson / Sash & Garuda
  R: "#6e1b2c",
  r: "#b32d3f",
  p: "#eb5963",
  // Angkor Sandstone & Laterite
  S: "#47372d",
  s: "#6e5543",
  b: "#99785c",
  B: "#c49f7b",
  c: "#e6c69c",
  // Sky, Mist & Jungle
  n: "#2d1e40",
  m: "#663657",
  a: "#d46c55",
  A: "#f2a463",
  u: "#fbd685",
  t: "#3b5e54",
  T: "#5b8572",
  h: "#86ab93",
  H: "#b4cfba",
  // Lotus Pink
  l: "#d95b85",
  L: "#ff9ec0",
})

ramps("kK", "DdgGE", "OoyYw", "Rrp", "SsbBc", "tThH")

// 1. Royal Khmer Dino — Run (48x48 -> 50x50 with outline, 6 frames, 10fps)
anim("dino_run", { w: 48, h: 48, frames: 6, fps: 10, outline: "k" }, (c) => {
  const bob = [0, -1, -2, 0, -1, -2][c.frame]
  const legA = [0, 4, 6, 2, -3, -5][c.frame]
  const legB = [-4, -5, -2, 2, 5, 3][c.frame]
  const tailY = [0, 1, 2, 1, 0, -1][c.frame]

  // Tail (left)
  c.poly([4, 24 + tailY, 15, 22 + bob, 16, 30 + bob, 6, 28 + tailY], "d")
  c.line(6, 24 + tailY, 14, 22 + bob, "g")
  c.px(5, 23 + tailY, "y") // tail spike
  c.px(9, 22 + tailY, "y")

  // Back leg (darker)
  c.rect(18 + legB, 34 + bob, 5, 9, "D")
  c.rect(18 + legB, 42 + bob, 7, 3, "D")

  // Torso
  c.ellipse(22, 27 + bob, 9, 8, "d")
  c.ellipse(23, 25 + bob, 7, 6, "g")
  // Belly scales (warm gold-cream)
  c.rect(24, 26 + bob, 6, 7, "Y")
  c.hline(25, 29 + bob, 5, "y")
  c.hline(25, 32 + bob, 4, "y")

  // Royal Khmer Crimson & Gold Sash
  c.line(16, 22 + bob, 27, 30 + bob, "r", 3)
  c.line(17, 22 + bob, 27, 29 + bob, "y")

  // Back dorsal spikes
  c.poly([14, 20 + bob, 16, 17 + bob, 18, 20 + bob], "y")
  c.poly([18, 18 + bob, 20, 15 + bob, 22, 18 + bob], "Y")

  // Front leg (brighter)
  c.rect(20 + legA, 34 + bob, 5, 10, "g")
  c.rect(20 + legA, 43 + bob, 8, 3, "G")
  c.px(27 + legA, 45 + bob, "w") // claw

  // Tiny front arm
  c.rect(29, 27 + bob, 5, 3, "g")
  c.px(34, 28 + bob, "G")

  // Head & Jaw (High-Detail)
  c.rect(23, 10 + bob, 17, 12, "g")
  c.rect(25, 10 + bob, 14, 5, "G")
  c.rect(27, 19 + bob, 12, 4, "d") // lower jaw
  // Snout highlight & nostril
  c.px(38, 12 + bob, "E")
  c.px(37, 13 + bob, "D")
  // Teeth
  c.px(33, 19 + bob, "w")
  c.px(36, 19 + bob, "w")
  // Expressive Eye
  c.rect(28, 13 + bob, 4, 4, "w")
  c.rect(30, 14 + bob, 2, 2, "k")
  c.px(30, 14 + bob, "Y")

  // Golden Khmer Mokot (Spire Crown)
  c.rect(24, 8 + bob, 10, 3, "y")
  c.hline(24, 8 + bob, 10, "Y")
  c.poly([26, 8 + bob, 29, 2 + bob, 32, 8 + bob], "y")
  c.vline(29, 1 + bob, 7, "Y")
  c.px(29, 1 + bob, "w")
  c.px(27, 9 + bob, "r") // crown ruby
})

// 2. Royal Khmer Dino — Duck (56x32 -> 58x34 with outline, 4 frames, 10fps)
anim("dino_duck", { w: 56, h: 32, frames: 4, fps: 10, outline: "k" }, (c) => {
  const bob = [0, 1, 0, -1][c.frame]
  const legA = [0, 4, 0, -4][c.frame]
  const legB = [0, -4, 0, 4][c.frame]

  // Stretched tail
  c.poly([3, 14 + bob, 17, 13 + bob, 17, 20 + bob, 5, 18 + bob], "d")
  c.line(4, 14 + bob, 16, 13 + bob, "g")

  // Legs
  c.rect(20 + legB, 21 + bob, 5, 8, "D")
  c.rect(20 + legB, 27 + bob, 7, 3, "D")
  c.rect(24 + legA, 21 + bob, 5, 8, "g")
  c.rect(24 + legA, 27 + bob, 7, 3, "G")

  // Low horizontal torso
  c.ellipse(26, 16 + bob, 11, 6, "g")
  c.hline(20, 20 + bob, 12, "y")
  c.line(20, 12 + bob, 30, 19 + bob, "r", 2)
  c.line(21, 12 + bob, 30, 18 + bob, "y")

  // Forward low head
  c.rect(34, 10 + bob, 17, 11, "g")
  c.rect(36, 10 + bob, 14, 4, "G")
  c.rect(37, 18 + bob, 12, 3, "d")
  c.px(48, 12 + bob, "E")
  c.rect(39, 12 + bob, 4, 4, "w")
  c.rect(41, 13 + bob, 2, 2, "k")
  // Crown tilted back
  c.rect(34, 7 + bob, 9, 3, "y")
  c.poly([35, 7 + bob, 38, 2 + bob, 41, 7 + bob], "Y")
  c.px(38, 1 + bob, "w")
})

// 3. Royal Khmer Dino — Jump (48x48 -> 50x50 with outline, 2 frames: rise / fall)
anim("dino_jump", { w: 48, h: 48, frames: 2, fps: 4, outline: "k" }, (c) => {
  const f = c.frame
  const legOff = f === 0 ? -2 : 2
  // Tail angled
  c.poly([5, 28 - f * 4, 16, 22, 16, 29, 7, 31 - f * 4], "d")
  c.line(6, 28 - f * 4, 15, 22, "g")
  // Tucked legs
  c.rect(18, 33 + legOff, 5, 7, "D")
  c.rect(23, 32 + legOff, 5, 8, "g")
  c.rect(23, 39 + legOff, 7, 3, "G")
  // Torso
  c.ellipse(22, 26, 9, 8, "d")
  c.ellipse(23, 24, 7, 6, "g")
  c.rect(24, 25, 6, 7, "Y")
  c.line(16, 21, 27, 29, "r", 3)
  c.line(17, 21, 27, 28, "y")
  // Head
  c.rect(23, 9, 17, 12, "g")
  c.rect(25, 9, 14, 5, "G")
  c.rect(27, 18, 12, 4, "d")
  c.rect(28, 12, 4, 4, "w")
  c.rect(30, 13, 2, 2, "k")
  // Crown
  c.rect(24, 7, 10, 3, "y")
  c.poly([26, 7, 29, 1, 32, 7], "Y")
  c.px(29, 0, "w")
})

// 4. Obstacle: Carved Angkor Sandstone Pillar (32x48)
sprite("obs_pillar", { w: 32, h: 48, outline: "k" }, (c) => {
  // Stepped lotus base
  c.rect(4, 40, 24, 7, "s")
  c.hline(4, 40, 24, "B")
  c.rect(6, 36, 20, 4, "b")
  c.hline(6, 36, 20, "c")
  // Carved shaft
  c.rect(9, 12, 14, 24, "b")
  c.rect(11, 12, 9, 24, "B")
  c.vline(19, 12, 24, "c")
  // Khmer relief carvings & moss
  for (let y = 16; y <= 32; y += 5) {
    c.hline(10, y, 12, "S")
    c.hline(12, y - 1, 8, "c")
  }
  c.rect(9, 28, 4, 6, "g") // moss patch
  c.px(10, 29, "G")
  // Lotus finial top
  c.rect(7, 8, 18, 4, "B")
  c.hline(7, 8, 18, "c")
  c.poly([10, 8, 16, 1, 22, 8], "B")
  c.vline(16, 2, 6, "c")
})

// 5. Obstacle: Three-Headed Naga Guardian Statue (48x40)
sprite("obs_naga", { w: 48, h: 40, outline: "k" }, (c) => {
  // Pedestal
  c.rect(8, 32, 32, 7, "s")
  c.hline(8, 32, 32, "B")
  // Coiled body
  c.ellipse(24, 26, 12, 7, "b")
  c.ellipse(24, 25, 9, 5, "B")
  // Hooded Naga fan
  c.circ(24, 15, 11, "s")
  c.circ(24, 14, 9, "B")
  // Central Naga head + two flanking heads
  const heads = [[24, 11, 4], [14, 15, 3], [34, 15, 3]]
  for (const [hx, hy, hr] of heads) {
    c.circ(hx, hy, hr, "c")
    c.px(hx - 1, hy, "k")
    c.px(hx + 1, hy, "k")
    // Golden crown tip on each Naga head
    c.vline(hx, hy - hr - 3, 3, "y")
    c.px(hx, hy - hr - 3, "Y")
  }
  // Moss accents
  c.rect(10, 34, 5, 3, "g")
  c.rect(32, 30, 4, 3, "g")
})

// 6. Obstacle: Flying Mythical Garuda Bird (40x32 -> 42x34 with outline, 4 frames, 8fps)
anim("fly_garuda", { w: 40, h: 32, frames: 4, fps: 8, outline: "k" }, (c) => {
  const wingY = [-7, -2, 6, 1][c.frame]
  // Wings (crimson & gold tips)
  c.poly([18, 16, 26, 12 + wingY, 37, 14 + wingY, 24, 19], "r")
  c.line(25, 12 + wingY, 37, 14 + wingY, "Y")
  c.poly([16, 16, 10, 11 + wingY, 3, 13 + wingY, 14, 19], "R")
  // Body & golden chest
  c.ellipse(19, 17, 7, 5, "r")
  c.ellipse(17, 18, 4, 4, "y")
  // Garuda head & hooked golden beak
  c.circ(12, 13, 4, "r")
  c.poly([8, 12, 3, 14, 8, 15], "Y") // beak
  c.px(11, 12, "w") // eye
  // Golden crown
  c.poly([11, 9, 14, 4, 16, 9], "Y")
})

// 7. Collectible: Sacred Glowing Lotus (24x24 -> 26x26 with outline, 4 frames, 6fps)
anim("item_lotus", { w: 24, h: 24, frames: 4, fps: 6, outline: "k" }, (c) => {
  const bob = [0, -1, -2, -1][c.frame]
  // Lily pad
  c.ellipse(12, 18, 8, 3, "d")
  c.ellipse(12, 17, 6, 2, "g")
  // Pink & gold lotus petals
  c.poly([6, 15 + bob, 12, 7 + bob, 18, 15 + bob], "l")
  c.poly([8, 15 + bob, 12, 5 + bob, 16, 15 + bob], "L")
  c.poly([10, 15 + bob, 12, 8 + bob, 14, 15 + bob], "w")
  // Golden center
  c.rect(11, 12 + bob, 2, 2, "Y")
})

// 8. Ground Tile (64x48, seamless horizontal)
sprite("ground_tile", { w: 64, h: 48 }, (c) => {
  // Top grass/moss rim
  c.rect(0, 0, 64, 4, "g")
  c.hline(0, 0, 64, "G")
  c.hline(0, 4, 64, "k")
  // Laterite/sandstone block courses
  c.rect(0, 5, 64, 43, "S")
  c.rect(0, 5, 64, 12, "s")
  c.hline(0, 5, 64, "b")
  c.hline(0, 16, 64, "k")
  c.hline(0, 30, 64, "k")
  // Vertical stone seams
  for (const x of [0, 21, 43]) c.vline(x, 5, 11, "k")
  for (const x of [10, 32, 54]) c.vline(x, 17, 13, "k")
  // Subtle grass tufts & pebbles
  for (const x of [8, 28, 50]) {
    c.px(x, 1, "E")
    c.px(x + 1, 2, "D")
  }
})

// 9. Parallax Sky + Sun (960x540 High-Detail)
sprite("bg_sky", { w: 960, h: 540 }, (c) => {
  c.grad(0, 0, 960, 420, "nmaAu", "v", 0.75)
  c.rect(0, 420, 960, 120, "u")
  // Soft sunrise clouds
  const clouds = [[120, 95, 110], [340, 68, 140], [580, 110, 95], [810, 145, 120]]
  for (const [cx, cy, cw] of clouds) {
    c.ellipse(cx, cy, cw, 10, "a")
    c.ellipse(cx + 10, cy - 5, Math.round(cw * 0.7), 8, "A")
    c.ellipse(cx + 15, cy - 8, Math.round(cw * 0.4), 5, "u")
  }
  // Glowing sun
  c.circ(780, 112, 54, "A")
  c.circ(780, 112, 40, "Y")
  c.circ(780, 112, 26, "w")
})

// 10. Parallax Distant Angkor Wat (960x280, seamless, High-Detail 5-tower prangs + reflection)
sprite("bg_temples", { w: 960, h: 280 }, (c) => {
  const prang = (cx, baseY, h, hw, mainCol, midCol, rimCol) => {
    const tiers = Math.max(8, Math.floor(h / 9))
    for (let i = 0; i < tiers; i++) {
      const t = i / tiers
      const th = Math.ceil(h / tiers) + 1
      const y = baseY - Math.round(t * h) - th
      const bulge = Math.sin(t * Math.PI * 0.85) * 0.22
      const w = Math.max(3, Math.round(hw * (Math.pow(1 - t, 0.72) + bulge * (1 - t))))
      c.rect(cx - w, y, w * 2, th, mainCol)
      c.hline(cx - w - 2, y + th - 1, w * 2 + 4, mainCol)
      c.vline(cx, y, th, midCol)
      c.vline(cx + w - 1, y, th, rimCol)
      c.vline(cx + w - 2, y, th, rimCol)
    }
    c.vline(cx, baseY - h - 9, 9, rimCol)
    c.px(cx, baseY - h - 10, "w")
  }

  // Rolling distant jungle hills
  c.poly([0, 280, 0, 224, 140, 200, 300, 230, 500, 204, 680, 234, 860, 198, 960, 220, 960, 280], "h")

  // Angkor Wat outer gallery & colonnade
  c.rect(96, 204, 428, 76, "H")
  c.hline(96, 204, 428, "A")
  c.hline(96, 205, 428, "u")
  for (let x = 112; x <= 508; x += 14) {
    c.rect(x, 216, 4, 28, "t")
  }
  // Upper terrace & 5 iconic Angkor Wat prangs
  c.rect(172, 176, 276, 30, "H")
  c.hline(172, 176, 276, "A")
  prang(132, 204, 72, 18, "H", "t", "A")
  prang(488, 204, 72, 18, "H", "t", "A")
  prang(224, 176, 98, 24, "H", "t", "A")
  prang(396, 176, 98, 24, "H", "t", "A")
  prang(310, 176, 130, 30, "H", "t", "u")
  // Central entrance gopura pediment
  c.poly([282, 204, 310, 180, 338, 204], "t")
  c.line(310, 180, 338, 204, "A", 2)
  c.rect(294, 204, 32, 40, "t")

  // Secondary distant shrine on right
  c.rect(696, 218, 164, 62, "h")
  c.hline(696, 218, 164, "A")
  prang(778, 218, 88, 22, "h", "t", "A")
})

// 11. Parallax Midground Palms & Ruins (960x200, seamless)
sprite("bg_jungle", { w: 960, h: 200 }, (c) => {
  c.poly([0, 200, 0, 148, 180, 136, 360, 156, 540, 128, 740, 152, 960, 140, 960, 200], "T")
  const palms = [84, 330, 590, 830]
  for (const px of palms) {
    c.line(px, 190, px + 6, 56, "t", 5)
    c.line(px + 2, 190, px + 8, 56, "D", 2)
    const tx = px + 6
    const ty = 56
    for (const [dx, dy] of [[-36, -8], [-40, 10], [-24, 24], [36, -8], [40, 10], [24, 24], [-14, -26], [14, -26]]) {
      c.line(tx, ty, tx + dx, ty + dy, "d", 3)
      c.line(tx, ty - 2, tx + dx, ty + dy - 2, "g", 2)
    }
  }
})

// ==================== LEVEL 2: BAYON TWILIGHT & GOLDEN SINGHA ====================

// Level 2 Sky: Deep Twilight Indigo + Crescent Moon + Stars (960x540)
sprite("bg_sky_lv2", { w: 960, h: 540 }, (c) => {
  c.grad(0, 0, 960, 440, "knm", "v", 0.75)
  c.rect(0, 440, 960, 100, "m")
  // Twinkling stars
  const stars = [[68, 56], [176, 104], [284, 44], [396, 128], [512, 64], [624, 96], [880, 60], [128, 184], [568, 176], [710, 48], [440, 82]]
  for (const [sx, sy] of stars) {
    c.rect(sx, sy, 2, 2, "w")
    if (sx % 2 === 0) c.px(sx + 2, sy, "Y")
  }
  // Glowing Crescent Moon
  c.circ(790, 104, 40, "Y")
  c.circ(790, 104, 34, "w")
  c.circ(806, 94, 32, "n")
})

// Level 2 Temples: Detailed Bayon Face Towers + Torch Glows (960x280)
sprite("bg_temples_lv2", { w: 960, h: 280 }, (c) => {
  c.poly([0, 280, 0, 216, 160, 192, 340, 228, 520, 192, 720, 224, 880, 188, 960, 212, 960, 280], "K")
  // Three detailed Bayon Face Towers
  const towers = [[220, 164, 36], [480, 196, 44], [750, 156, 34]]
  for (const [cx, h, hw] of towers) {
    const baseY = 244
    c.poly([cx - hw, baseY, cx - Math.round(hw * 0.72), baseY - Math.round(h * 0.65), cx, baseY - h, cx + Math.round(hw * 0.72), baseY - Math.round(h * 0.65), cx + hw, baseY], "n")
    // Rim highlight on right edge facing moon
    c.line(cx, baseY - h, cx + Math.round(hw * 0.72), baseY - Math.round(h * 0.65), "h", 2)
    // Carved Bayon face (brows, eyes, nose, serene smile)
    const fy = baseY - Math.round(h * 0.44)
    c.rect(cx - 14, fy - 4, 10, 2, "k")
    c.rect(cx + 4, fy - 4, 10, 2, "k")
    c.rect(cx - 13, fy, 8, 3, "h")
    c.rect(cx + 5, fy, 8, 3, "h")
    c.rect(cx - 2, fy + 2, 4, 9, "H")
    c.hline(cx - 10, fy + 14, 20, "h")
    // Warm torch ember at tower base
    c.circ(cx - hw + 10, baseY - 8, 8, "o")
    c.circ(cx - hw + 10, baseY - 8, 4, "Y")
  }
})

// Level 2 Midground: Dark Night Palms & Mossy Ruins (960x200)
sprite("bg_jungle_lv2", { w: 960, h: 200 }, (c) => {
  c.poly([0, 200, 0, 148, 200, 132, 400, 156, 600, 128, 800, 152, 960, 136, 960, 200], "k")
  for (const px of [110, 380, 650, 890]) {
    c.line(px, 190, px + 4, 60, "K", 5)
    for (const [dx, dy] of [[-34, -8], [-36, 10], [34, -8], [36, 10], [-12, -24], [12, -24]]) {
      c.line(px + 4, 60, px + 4 + dx, 60 + dy, "D", 3)
    }
  }
})

// Level 2 Ground Tile: Mossy Twilight Laterite (64x48)
sprite("ground_tile_lv2", { w: 64, h: 48 }, (c) => {
  c.rect(0, 0, 64, 4, "t")
  c.hline(0, 0, 64, "h")
  c.hline(0, 4, 64, "k")
  c.rect(0, 5, 64, 43, "K")
  c.rect(0, 5, 64, 12, "n")
  c.hline(0, 5, 64, "t")
  c.hline(0, 16, 64, "k")
  c.hline(0, 30, 64, "k")
  for (const x of [0, 21, 43]) c.vline(x, 5, 11, "k")
  for (const x of [10, 32, 54]) c.vline(x, 17, 13, "k")
  for (const x of [12, 38]) c.px(x, 1, "Y") // tiny firefly glow
})

// Level 2 New Character: Golden Khmer Singha (Temple Guardian Lion)
// 1. Singha — Run (48x48 -> 50x50, 6 frames, 10fps)
anim("singha_run", { w: 48, h: 48, frames: 6, fps: 10, outline: "k" }, (c) => {
  const bob = [0, -1, -2, 0, -1, -2][c.frame]
  const legA = [0, 4, 6, 2, -3, -5][c.frame]
  const legB = [-4, -5, -2, 2, 5, 3][c.frame]
  const tailY = [0, -2, -3, -1, 1, 2][c.frame]

  // Curled lion tail with golden tuft
  c.line(12, 26 + bob, 6, 17 + tailY, "y", 2)
  c.circ(5, 16 + tailY, 3, "r")
  c.px(5, 15 + tailY, "Y")

  // Back legs
  c.rect(14 + legB, 33 + bob, 5, 10, "o")
  c.rect(14 + legB, 42 + bob, 7, 3, "O")
  c.rect(25 + legA, 33 + bob, 5, 10, "y")
  c.rect(25 + legA, 42 + bob, 7, 3, "Y")

  // Muscular golden Singha body
  c.ellipse(22, 27 + bob, 11, 7, "y")
  c.ellipse(23, 25 + bob, 9, 5, "Y")
  // Royal crimson armor collar & sash
  c.line(18, 22 + bob, 28, 30 + bob, "r", 3)
  c.line(19, 22 + bob, 28, 29 + bob, "w")

  // Thick crimson-gold lion mane
  c.circ(30, 18 + bob, 9, "r")
  c.circ(30, 17 + bob, 7, "p")

  // Lion Head & Snout
  c.rect(28, 11 + bob, 13, 11, "y")
  c.rect(30, 11 + bob, 10, 5, "Y")
  c.rect(35, 17 + bob, 7, 4, "w") // muzzle
  c.px(41, 17 + bob, "r") // nose
  // Fierce golden-white eye
  c.rect(33, 13 + bob, 3, 3, "w")
  c.px(35, 14 + bob, "k")

  // Golden Khmer Mokot Crown
  c.rect(28, 8 + bob, 9, 3, "Y")
  c.poly([29, 8 + bob, 32, 2 + bob, 35, 8 + bob], "Y")
  c.px(32, 1 + bob, "w")
})

// 2. Singha — Duck (56x32 -> 58x34, 4 frames, 10fps)
anim("singha_duck", { w: 56, h: 32, frames: 4, fps: 10, outline: "k" }, (c) => {
  const bob = [0, 1, 0, -1][c.frame]
  const legA = [0, 4, 0, -4][c.frame]
  const legB = [0, -4, 0, 4][c.frame]

  c.line(12, 16 + bob, 4, 12 + bob, "y", 2)
  c.circ(4, 12 + bob, 2, "r")
  c.rect(18 + legB, 21 + bob, 5, 8, "o")
  c.rect(26 + legA, 21 + bob, 5, 8, "y")
  c.ellipse(25, 16 + bob, 12, 6, "y")
  c.line(20, 12 + bob, 30, 19 + bob, "r", 2)
  c.circ(36, 15 + bob, 7, "r")
  c.rect(36, 10 + bob, 13, 10, "Y")
  c.rect(42, 16 + bob, 7, 3, "w")
  c.rect(40, 12 + bob, 3, 3, "w")
  c.px(42, 13 + bob, "k")
  c.poly([36, 9 + bob, 39, 3 + bob, 42, 9 + bob], "Y")
})

// 3. Singha — Jump (48x48 -> 50x50, 2 frames)
anim("singha_jump", { w: 48, h: 48, frames: 2, fps: 4, outline: "k" }, (c) => {
  const f = c.frame
  c.line(12, 27 - f * 3, 6, 18 - f * 3, "y", 2)
  c.circ(5, 17 - f * 3, 3, "r")
  c.rect(15, 32 + f * 2, 5, 8, "o")
  c.rect(26, 31 + f * 2, 5, 9, "Y")
  c.ellipse(22, 25, 11, 7, "y")
  c.ellipse(23, 23, 9, 5, "Y")
  c.line(18, 20, 28, 28, "r", 3)
  c.circ(30, 16, 9, "r")
  c.rect(28, 9, 13, 11, "y")
  c.rect(30, 9, 10, 5, "Y")
  c.rect(35, 15, 7, 4, "w")
  c.rect(33, 11, 3, 3, "w")
  c.px(35, 12, "k")
  c.rect(28, 6, 9, 3, "Y")
  c.poly([29, 6, 32, 0, 35, 6], "Y")
})

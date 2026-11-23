// Angkor Wat at Sunrise — Animated Pixel Art Scene
pal({
  // Sky (sunrise gradient)
  n: "#1d1838",
  p: "#482852",
  m: "#8a3b64",
  o: "#d96b43",
  a: "#f2a649",
  y: "#ffe28a",
  w: "#fff4cc",
  // Sandstone & shadow
  k: "#1e1418",
  D: "#3d2824",
  d: "#664536",
  s: "#8f664b",
  S: "#b88b67",
  h: "#deb68a",
  // Jungle & palms
  F: "#183328",
  f: "#28593d",
  g: "#4b854e",
  G: "#7bb05d",
  // Reflecting pond
  W: "#172136",
  b: "#263b57",
  B: "#3a5b7a",
  r: "#785c6b",
  R: "#b37d62",
  // Lotus & torch
  l: "#e87898",
  L: "#ffb3c6",
  t: "#ff7b33",
})

ramps("kDdsSh", "FfgG", "WbB", "pmoayw")

// Helper: draw one Angkor Wat lotus-bud prang (tower) at center x, base y
function drawPrang(c, cx, baseY, h, halfW, litSide) {
  // Tiered stepped body narrowing toward lotus tip
  const tiers = Math.max(5, Math.floor(h / 4))
  for (let i = 0; i < tiers; i++) {
    const t = i / tiers
    const tierH = Math.ceil(h / tiers) + 1
    const y = baseY - Math.round(t * h) - tierH
    // Lotus-bud profile: slight bulge near 25% height, then tapers to a point
    const bulge = Math.sin(t * Math.PI * 0.85) * 0.22
    const taper = Math.pow(1 - t, 0.72)
    const w = Math.max(1, Math.round(halfW * (taper + bulge * (1 - t))))
    const x0 = cx - w
    const fullW = w * 2 + 1

    // Base shadow stone
    c.rect(x0, y, fullW, tierH, "d")
    // Lit middle face
    if (fullW >= 3) {
      c.rect(x0 + 1, y, Math.max(1, fullW - 2), tierH, "s")
    }
    // Stepped cornice lip
    if (i % 2 === 0 && fullW >= 3) {
      c.hline(x0 - 1, y + tierH - 1, fullW + 2, "D")
      c.hline(x0, y, fullW, "S")
    }
    // Sunlit rim (center-facing or right-facing from rising sun behind center)
    if (litSide === "both") {
      c.px(x0, y, "S")
      c.px(x0 + fullW - 1, y, "S")
    } else if (litSide === "left") {
      c.vline(x0, y, tierH, "S")
      c.px(x0, y, "h")
    } else if (litSide === "right") {
      c.vline(x0 + fullW - 1, y, tierH, "S")
      c.px(x0 + fullW - 1, y, "h")
    }
    // Dark vertical carve lines for Khmer reliefs
    if (fullW >= 5 && i < tiers - 2) {
      c.vline(cx, y + 1, Math.max(1, tierH - 1), "D")
    }
  }
  // Finial spire
  c.vline(cx, baseY - h - 3, 3, "h")
  c.px(cx, baseY - h - 4, "y")
}

// Static temple silhouette + detailed sandstone facade (160x60)
sprite("_temple", { w: 160, h: 64 }, (c) => {
  const baseY = 60

  // Outer gallery walls
  c.rect(14, baseY - 12, 132, 12, "D")
  c.rect(16, baseY - 11, 128, 10, "d")
  c.hline(14, baseY - 12, 132, "s")
  c.hline(14, baseY - 13, 132, "k")

  // Gallery colonnade pillars
  for (let x = 18; x <= 140; x += 4) {
    if (Math.abs(x - 80) > 10) {
      c.vline(x, baseY - 9, 7, "k")
      c.vline(x + 1, baseY - 9, 7, "s")
    }
  }

  // Upper terrace
  c.rect(34, baseY - 20, 92, 9, "d")
  c.hline(34, baseY - 20, 92, "S")
  c.hline(34, baseY - 21, 92, "k")

  // 5 iconic prang towers (outer pair, inner pair, tall central tower)
  drawPrang(c, 28, baseY - 12, 22, 5, "right")
  drawPrang(c, 132, baseY - 12, 22, 5, "left")
  drawPrang(c, 53, baseY - 20, 28, 7, "right")
  drawPrang(c, 107, baseY - 20, 28, 7, "left")
  drawPrang(c, 80, baseY - 20, 34, 9, "both")

  // Central entrance gopura & causeway gate
  c.rect(71, baseY - 16, 18, 16, "d")
  c.rect(73, baseY - 15, 14, 15, "s")
  c.hline(70, baseY - 16, 20, "S")
  c.poly([72, baseY - 16, 80, baseY - 23, 88, baseY - 16], "S")
  c.poly([74, baseY - 16, 80, baseY - 21, 86, baseY - 16], "d")
  // Dark doorway arch
  c.rect(77, baseY - 10, 6, 10, "k")
  c.hline(78, baseY - 11, 4, "k")

  // Causeway base plinth
  c.rect(10, baseY, 140, 4, "D")
  c.hline(10, baseY, 140, "s")
  c.rect(72, baseY, 16, 4, "S")
})

// Swaying palm tree animation (8 frames, 100ms each = 800ms loop)
anim("_palm", { w: 22, h: 34, frames: 8, fps: 10 }, (c) => {
  const sway = Math.round(Math.sin(c.phase * Math.PI * 2) * 1.2)
  const topX = 10 + sway
  const topY = 9
  // Curved trunk
  for (let y = 33; y >= topY; y--) {
    const t = (33 - y) / (33 - topY)
    const tx = Math.round(11 + sway * t * t)
    c.px(tx, y, "D")
    c.px(tx + 1, y, "k")
  }
  // Fronds
  const fronds = [
    [-7, -2], [-8, 2], [-5, 5],
    [7, -2], [8, 2], [5, 5],
    [-2, -6], [3, -6],
  ]
  for (const [dx, dy] of fronds) {
    const fx = topX + dx + Math.round(sway * 0.5)
    const fy = topY + dy
    c.line(topX, topY, fx, fy, "f")
    c.line(topX, topY - 1, fx, fy - 1, "g")
    c.px(fx, fy, "F")
  }
  c.rect(topX - 1, topY - 1, 3, 2, "G")
})

// Flickering torch flame (4 frames, 100ms each = 400ms loop)
anim("_torch", { w: 5, h: 7, frames: 4, fps: 10 },
  ".....\n..y..\n.oto.\n.tDt.\n..D..\n..k..\n..k..",
  frame(),
  frame(grid(1, 0, ".w.\noyo\n.t.")),
  frame(grid(1, 0, "..y\noto\n.t.")),
  frame(grid(1, 0, "y..\noyo\n.t."))
)

// Small pink lotus on pond
sprite("_lotus", { mx: true }, `
  ..lL
  .lLl
  Fggf`)

// Flying bird silhouette (4 frames, 200ms each = 800ms loop)
anim("_bird", { w: 7, h: 4, frames: 4, fps: 5 },
  "n\n",
  frame(grid(0, 0, "k.....k\n.kk.kk.\n...k...")),
  frame(grid(0, 1, ".kk.kk.\n...k...")),
  frame(grid(0, 1, "...k...\n.kk.kk.")),
  frame(grid(0, 1, ".kk.kk.\n...k..."))
)

// Animated sunrise sky + sun glow + drifting clouds + birds (8 frames, 100ms each)
anim("_sky_anim", { w: 160, h: 64, frames: 8, fps: 10 }, (c) => {
  // Sunrise gradient
  c.grad(0, 0, 160, 64, "npmoay", "v", 0.65)

  // Rising sun behind central tower
  const sunY = 44
  c.circ(80, sunY, 16, "a")
  c.circ(80, sunY, 11, "y")
  c.circ(80, sunY, 6, "w")

  // Soft drifting clouds
  const shift = Math.round(c.phase * 16)
  const clouds = [
    [18 + shift, 14, 18],
    [110 + Math.round(shift * 0.5), 11, 22],
    [52 - Math.round(shift * 0.5), 22, 14],
  ]
  for (const [cx, cy, cw] of clouds) {
    const x = ((cx % 180) + 180) % 180 - 20
    c.hline(x, cy, cw, "o")
    c.hline(x + 2, cy - 1, Math.max(2, cw - 4), "a")
    c.hline(x + 4, cy + 1, Math.max(2, cw - 6), "m")
  }
})

// Animated reflecting lotus pond (8 frames, 100ms each)
anim("_pond_anim", { w: 160, h: 40, frames: 8, fps: 10 }, (c) => {
  c.grad(0, 0, 160, 40, "bWB", "v", 0.5)

  // Sun reflection column down the center
  for (let y = 0; y < 38; y++) {
    const wave = Math.round(Math.sin(c.phase * Math.PI * 2 + y * 0.65) * 1.5)
    const half = Math.max(1, Math.round(7 - y * 0.14))
    if ((y + c.frame) % 2 === 0) {
      c.hline(80 - half + wave, y, half * 2, y < 14 ? "y" : "a")
    } else {
      c.hline(80 - Math.max(1, half - 2) + wave, y, Math.max(2, (half - 2) * 2), "o")
    }
  }

  // Inverted temple tower reflections with horizontal ripple
  const towers = [
    [28, 16, 4],
    [53, 22, 6],
    [80, 30, 8],
    [107, 22, 6],
    [132, 16, 4],
  ]
  for (const [cx, len, hw] of towers) {
    for (let y = 1; y < len; y++) {
      const t = y / len
      const w = Math.max(1, Math.round(hw * (1 - t * 0.85)))
      const ripple = Math.round(Math.sin(c.phase * Math.PI * 2 + y * 0.8) * 1.2)
      if ((y + c.frame) % 3 !== 0) {
        c.hline(cx - w + ripple, y, w * 2, y % 2 === 0 ? "r" : "R")
      }
    }
  }

  // Water shimmer lines
  for (let i = 0; i < 12; i++) {
    const ry = 4 + ((i * 3) % 32)
    const rx = ((i * 29 + c.frame * 3) % 140) + 6
    c.hline(rx, ry, 5 + (i % 4), "B")
  }
})

// Final animated scene: Angkor Wat at Sunrise (160x104)
scene("angkor_wat", { w: 160, h: 104 },
  layer("sky", stamp("_sky_anim", 0, 0)),
  layer("birds",
    stamp("_bird", 32, 18),
    stamp("_bird", 42, 23, { delay: 200 }),
    stamp("_bird", 118, 15, { delay: 400 })
  ),
  layer("jungle_bg",
    rect(0, 52, 24, 12, "F"),
    rect(136, 52, 24, 12, "F"),
    circ(10, 52, 9, "f"),
    circ(20, 55, 7, "F"),
    circ(150, 52, 9, "f"),
    circ(140, 55, 7, "F")
  ),
  layer("temple", stamp("_temple", 0, 0)),
  layer("torches",
    stamp("_torch", 68, 51),
    stamp("_torch", 87, 51, { delay: 200 })
  ),
  glow("yt", { r: 7, strength: 0.45, where: (x, y) => y >= 48 && y <= 60 }),
  layer("palms",
    stamp("_palm", 0, 28),
    stamp("_palm", 138, 30, { flip: "x", delay: 300 })
  ),
  layer("pond", { y: 64 },
    stamp("_pond_anim", 0, 0),
    // Causeway bridge edge & foreground bank
    rect(0, 0, 160, 2, "D"),
    rect(0, 36, 160, 4, "F"),
    hline(0, 36, 160, "f"),
    // Lotuses on pond
    stamp("_lotus", 18, 22),
    stamp("_lotus", 28, 28),
    stamp("_lotus", 124, 24),
    stamp("_lotus", 136, 19)
  )
)

// Level 3 Preah Vihear Sky-Cliff Ground Tile (64x48)
pal({
  k: "#140e24",
  S: "#47323d",
  s: "#6e4b52",
  b: "#9e6f63",
  B: "#cf9978",
  c: "#f2cba0",
  g: "#4a7a4f",
  G: "#7eb366",
  Y: "#ffe066",
  l: "#ff99be",
})

sprite("ground_tile_lv3", { w: 64, h: 48 }, (c) => {
  // Golden-moss cliff top rim
  c.rect(0, 0, 64, 4, "g")
  c.hline(0, 0, 64, "G")
  c.hline(0, 4, 64, "S")
  // Warm sunset-lit cliff sandstone blocks
  c.rect(0, 5, 64, 43, "b")
  c.rect(0, 5, 64, 11, "B")
  c.hline(0, 5, 64, "c")
  c.hline(0, 15, 64, "s")
  c.hline(0, 29, 64, "s")
  for (const x of [0, 21, 43]) c.vline(x, 5, 10, "s")
  for (const x of [10, 32, 54]) c.vline(x, 16, 13, "s")
  // Fallen pink petals & gold specks
  c.px(14, 1, "l"); c.px(46, 2, "l"); c.px(30, 1, "Y")
})

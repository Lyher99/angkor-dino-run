// Level 4 Ta Prohm Jungle-Root Ground Tile (64x48)
pal({
  k: "#140e24",
  D: "#1b3d2f",
  g: "#2f6b46",
  G: "#5da35a",
  S: "#3b302a",
  s: "#5e4e44",
  b: "#827060",
  B: "#ab9782",
  r: "#d4be98", // pale strangler fig root highlight
  Y: "#a8ff78", // spirit firefly
})

sprite("ground_tile_lv4", { w: 64, h: 48 }, (c) => {
  // Lush mossy top rim
  c.rect(0, 0, 64, 5, "g")
  c.hline(0, 0, 64, "G")
  c.hline(0, 5, 64, "S")
  // Weathered Ta Prohm sandstone blocks
  c.rect(0, 6, 64, 42, "s")
  c.rect(0, 6, 64, 11, "b")
  c.hline(0, 6, 64, "B")
  c.hline(0, 17, 64, "S")
  c.hline(0, 31, 64, "S")
  for (const x of [0, 21, 43]) c.vline(x, 6, 11, "S")
  for (const x of [10, 32, 54]) c.vline(x, 18, 13, "S")
  // Pale jungle root creeping across stones
  c.line(8, 5, 22, 19, "r", 2)
  c.line(22, 19, 36, 26, "B", 2)
  c.px(16, 1, "Y"); c.px(48, 2, "Y")
})

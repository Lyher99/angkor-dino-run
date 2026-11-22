pal({
  k: "#140d21", // deep outline
  p: "#24163d", // night purple
  P: "#3b235e", // twilight purple
  m: "#6e325c", // sunset magenta
  o: "#c95b3c", // sunset orange
  y: "#f5b841", // gold sky / trim
  Y: "#ffe885", // bright gold highlight
  d: "#1d122e", // temple silhouette
});

scene("icon64", { w: 64, h: 64, bg: "p" },
  // Sunset sky gradient bands
  rect(0, 0, 64, 18, "p"),
  rect(0, 18, 64, 14, "P"),
  rect(0, 32, 64, 10, "m"),
  rect(0, 42, 64, 8, "o"),
  rect(0, 50, 64, 6, "y"),

  // Angkor Wat 3-tower silhouette
  rect(14, 30, 36, 20, "d"),
  rect(27, 17, 10, 15, "d"),
  rect(30, 12, 4, 6, "d"),
  rect(17, 23, 7, 9, "d"),
  rect(19, 20, 3, 4, "d"),
  rect(40, 23, 7, 9, "d"),
  rect(42, 20, 3, 4, "d"),

  // Temple ground
  rect(0, 50, 64, 14, "k"),
  rect(0, 50, 64, 2, "y"),

  // Sparkle stars
  px(10, 11, "Y"), px(11, 10, "Y"), px(11, 12, "Y"), px(9, 11, "Y"), px(12, 11, "Y"),
  px(52, 14, "Y"), px(53, 13, "Y"), px(53, 15, "Y"), px(51, 14, "Y"), px(54, 14, "Y"),

  // Ornate Khmer Gold Border Frame
  box(0, 0, 64, 64, "k"),
  box(1, 1, 62, 62, "y"),
  box(2, 2, 60, 60, "Y"),
  box(3, 3, 58, 58, "k"),
  rect(1, 1, 6, 6, "Y"), rect(2, 2, 4, 4, "y"),
  rect(57, 1, 6, 6, "Y"), rect(58, 2, 4, 4, "y"),
  rect(1, 57, 6, 6, "Y"), rect(2, 58, 4, 4, "y"),
  rect(57, 57, 6, 6, "Y"), rect(58, 58, 4, 4, "y")
);

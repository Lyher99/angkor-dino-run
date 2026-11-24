// Phnom Penh Zombie Tsunami — Hand-Sculpted Pixel Art Sprites & Animations
// Built for CamboPixel Game (Cartridge 02)

pal({
  k: "#120c1c", // deep ink outline
  K: "#261d38", // dark charcoal
  // Zombie Jade-Lime Skin
  Z: "#265934", // dark zombie shadow
  z: "#45964a", // mid zombie green
  g: "#78d968", // bright zombie lime
  G: "#c2ff9e", // highlight lime
  // Khmer Krama Crimson & White
  R: "#691426", // dark maroon
  r: "#c7263e", // royal crimson
  p: "#ff5c6c", // bright coral-red
  w: "#fff8e8", // cream white
  // Gold & Amber
  O: "#6e3914",
  o: "#b86b1e",
  y: "#ebb03d",
  Y: "#ffe373",
  // Phnom Penh Vehicles (Tuk-Tuk Blue, City Bus Teal, Steel, Tires)
  B: "#1a3b6e",
  b: "#2e6bc2",
  c: "#69b7ff",
  T: "#145752",
  t: "#229c8b",
  a: "#6be8d0",
  s: "#575263",
  S: "#8e889e",
  h: "#c7c2d6",
  // Survivor Skin & Clothes
  n: "#8c573c",
  N: "#d99b73",
  // Heavy Truck Olive
  V: "#2b3d26",
  v: "#4c6942",
  m: "#799c68",
})

// 1. KHMER KRAMA ZOMBIE — RUN (24x28, 4 frames, 10fps, facing RIGHT)
anim("zombie_run", { w: 22, h: 26, frames: 4, fps: 10, outline: "k" }, (c) => {
  const f = c.frame
  const bob = [0, -1, 0, -1][f]
  const legA = [2, -2, -3, 1][f]
  const legB = [-2, 2, 3, -1][f]
  const scarf = [0, 1, 0, -1][f]

  // Trailing tattered red-white Khmer Krama scarf
  c.line(7, 13 + bob, 2, 12 + bob + scarf, "r", 3)
  c.px(4, 12 + bob + scarf, "w")
  c.px(2, 13 + bob + scarf, "R")

  // Legs (tattered dark shorts + green zombie legs)
  c.rect(9 + legB, 19 + bob, 3, 6, "Z")
  c.rect(11 + legA, 19 + bob, 3, 6, "z")
  c.rect(12 + legA, 24 + bob, 3, 2, "K")
  c.rect(9 + legB, 24 + bob, 3, 2, "K")

  // Torso (tattered purple-brown shirt + krama collar)
  c.rect(7, 12 + bob, 8, 8, "K")
  c.rect(8, 13 + bob, 6, 6, "s")
  c.hline(8, 12 + bob, 7, "r")
  c.px(10, 12 + bob, "w"); c.px(13, 12 + bob, "w")

  // Outstretched zombie arms reaching right!
  c.rect(14, 13 + bob, 6, 3, "z")
  c.hline(14, 13 + bob, 6, "g")
  c.px(20, 14 + bob, "G")

  // Big expressive Zombie Head
  c.rect(6, 3 + bob, 11, 9, "z")
  c.rect(7, 3 + bob, 9, 4, "g")
  c.px(8, 4 + bob, "G")
  // Spiky hair tuft
  c.px(7, 2 + bob, "K"); c.px(10, 2 + bob, "K"); c.px(13, 2 + bob, "K")
  // Wide glowing yellow-white eye
  c.rect(12, 5 + bob, 3, 3, "Y")
  c.px(14, 6 + bob, "k")
  // Open chomping mouth with white teeth
  c.rect(12, 9 + bob, 5, 3, "R")
  c.px(13, 9 + bob, "w"); c.px(15, 9 + bob, "w")
})

// 2. KHMER KRAMA ZOMBIE — JUMP (24x28, 1 frame)
sprite("zombie_jump", { w: 22, h: 26, outline: "k" }, (c) => {
  c.line(7, 13, 2, 16, "r", 3)
  c.px(4, 15, "w")
  // Tucked legs
  c.rect(7, 19, 3, 5, "Z")
  c.rect(12, 18, 3, 5, "z")
  // Torso
  c.rect(7, 12, 8, 8, "K")
  c.rect(8, 13, 6, 6, "s")
  c.hline(8, 12, 7, "r")
  c.px(10, 12, "w"); c.px(13, 12, "w")
  // Arms raised up-right
  c.line(14, 13, 19, 9, "z", 3)
  c.px(19, 9, "g")
  // Head
  c.rect(6, 3, 11, 9, "z")
  c.rect(7, 3, 9, 4, "g")
  c.rect(12, 5, 3, 3, "Y")
  c.px(14, 6, "k")
  c.rect(12, 9, 5, 3, "R")
  c.px(13, 9, "w"); c.px(15, 9, "w")
})

// 3. KUN KHMER NINJA ZOMBIE — RUN (24x28, 4 frames, crimson headband + gold sash!)
anim("zombie_ninja", { w: 22, h: 26, frames: 4, fps: 12, outline: "k" }, (c) => {
  const f = c.frame
  const bob = [0, -1, 0, -1][f]
  const legA = [3, -2, -3, 2][f]
  const legB = [-2, 3, 2, -3][f]
  const ribbon = [0, 1, -1, 0][f]

  // Flowing crimson headband tails
  c.line(6, 5 + bob, 1, 4 + bob + ribbon, "r", 2)
  c.line(6, 6 + bob, 2, 7 + bob - ribbon, "p", 1)

  // Legs
  c.rect(9 + legB, 19 + bob, 3, 6, "Z")
  c.rect(11 + legA, 19 + bob, 3, 6, "z")
  // Torso with golden Kun Khmer sash
  c.rect(7, 12 + bob, 8, 8, "R")
  c.line(8, 12 + bob, 14, 18 + bob, "Y", 2)
  // Punching fist with crimson handwrap
  c.rect(14, 13 + bob, 6, 3, "r")
  c.px(19, 13 + bob, "Y")
  // Head + crimson Mongkol headband
  c.rect(6, 3 + bob, 11, 9, "z")
  c.rect(7, 3 + bob, 9, 4, "g")
  c.hline(6, 4 + bob, 11, "r")
  c.hline(7, 4 + bob, 9, "Y")
  c.rect(12, 6 + bob, 3, 2, "w")
  c.px(14, 6 + bob, "r")
  c.rect(12, 9 + bob, 4, 2, "R")
  c.px(13, 9 + bob, "w")
})

// 4. FLEEING PHNOM PENH SURVIVOR — RUN (20x26, 4 frames, waving arms in panic!)
anim("survivor_run", { w: 18, h: 24, frames: 4, fps: 10, outline: "k" }, (c) => {
  const f = c.frame
  const bob = [0, -1, 0, -1][f]
  const legA = [2, -2, -2, 2][f]
  const legB = [-2, 2, 2, -2][f]
  const armY = [0, -2, 0, -2][f]

  // Legs (jeans)
  c.rect(7 + legB, 17 + bob, 3, 6, "B")
  c.rect(9 + legA, 17 + bob, 3, 6, "b")
  // Shirt (bright white/gold)
  c.rect(6, 10 + bob, 7, 7, "w")
  c.rect(7, 11 + bob, 5, 5, "c")
  // Waving panicked arms up in the air!
  c.line(6, 11 + bob, 3, 6 + bob + armY, "N", 2)
  c.line(12, 11 + bob, 15, 6 + bob - armY, "N", 2)
  // Head & scared face
  c.rect(6, 3 + bob, 7, 7, "N")
  c.rect(6, 2 + bob, 7, 3, "K") // hair
  c.px(11, 6 + bob, "k") // wide eye
  c.rect(11, 8 + bob, 2, 2, "R") // screaming mouth
})

// 5. VEHICLE 1: HONDA DREAM MOTO (needs 2+ zombies, 36x26)
sprite("veh_moto", { w: 34, h: 24, outline: "k" }, (c) => {
  // Wheels
  c.circ(8, 18, 5, "K"); c.circ(8, 18, 3, "S"); c.px(8, 18, "w")
  c.circ(26, 18, 5, "K"); c.circ(26, 18, 3, "S"); c.px(26, 18, "w")
  // Exhaust pipe & engine
  c.rect(11, 15, 11, 4, "s")
  c.hline(5, 17, 9, "h")
  // Red body frame & black seat
  c.rect(7, 10, 14, 5, "r")
  c.hline(7, 10, 14, "p")
  c.rect(8, 8, 11, 3, "K") // seat
  // Front fork, handlebars & headlight
  c.line(22, 6, 26, 17, "r", 3)
  c.rect(20, 4, 5, 3, "h")
  c.rect(25, 6, 4, 4, "Y") // headlight
  c.px(28, 7, "w")
})

// 6. SPEEDING INCOMING MOTO (facing LEFT, 36x26)
sprite("veh_moto_fast", { base: "veh_moto", flip: "x" })

// 7. VEHICLE 2: CAMBODIAN TUK-TUK REMORQUE (needs 4+ zombies, 58x36)
sprite("veh_tuktuk", { w: 56, h: 34, outline: "k" }, (c) => {
  // Rear carriage wheel + front moto wheels
  c.circ(14, 28, 5, "K"); c.circ(14, 28, 3, "S")
  c.circ(36, 28, 5, "K"); c.circ(36, 28, 3, "S")
  c.circ(49, 28, 5, "K"); c.circ(49, 28, 3, "S")

  // Rear passenger carriage (royal blue + gold Khmer trim!)
  c.rect(4, 15, 28, 13, "B")
  c.rect(5, 16, 26, 10, "b")
  c.hline(5, 22, 26, "y")
  c.hline(5, 23, 26, "Y")
  // Canopy poles & iconic striped Tuk-Tuk roof
  c.vline(5, 5, 11, "h"); c.vline(30, 5, 11, "h")
  c.rect(3, 3, 30, 5, "r")
  c.hline(3, 3, 30, "p")
  c.hline(3, 7, 30, "Y")
  // Passenger interior shadow
  c.rect(7, 9, 22, 7, "K")
  c.rect(8, 12, 8, 4, "o") // cushioned seat

  // Hitch bar + front red moto pulling it
  c.hline(31, 22, 7, "s")
  c.rect(35, 19, 14, 6, "r")
  c.rect(37, 17, 8, 3, "K")
  c.line(46, 14, 49, 27, "r", 3)
  c.rect(48, 15, 4, 4, "Y")
  c.px(51, 16, "w")
})

// 8. VEHICLE 3: PHNOM PENH CITY BUS (needs 8+ zombies, 86x42)
sprite("veh_bus", { w: 84, h: 40, outline: "k" }, (c) => {
  // Wheels
  c.circ(18, 34, 6, "K"); c.circ(18, 34, 3, "S")
  c.circ(66, 34, 6, "K"); c.circ(66, 34, 3, "S")
  // Main bus body (bright Phnom Penh City Bus teal + white + gold stripe)
  c.rect(3, 5, 78, 28, "T")
  c.rect(4, 6, 76, 25, "t")
  c.rect(4, 6, 76, 4, "a") // roof highlight
  c.rect(4, 21, 76, 4, "w") // white stripe
  c.hline(4, 25, 76, "Y") // gold trim
  // Row of tinted passenger windows
  for (let wx = 8; wx <= 56; wx += 12) {
    c.rect(wx, 10, 9, 9, "B")
    c.rect(wx + 1, 11, 7, 5, "c")
    c.px(wx + 2, 11, "w")
  }
  // Wide front windshield + glowing destination sign + headlights
  c.rect(68, 9, 11, 11, "B")
  c.rect(69, 10, 9, 7, "c")
  c.rect(70, 6, 9, 3, "Y") // route sign
  c.rect(78, 26, 3, 4, "Y") // headlight
  c.rect(3, 26, 3, 4, "r") // taillight
})

// 9. VEHICLE 4: HEAVY ARMORED TRUCK (needs 12+ zombies, 96x48)
sprite("veh_truck", { w: 94, h: 46, outline: "k" }, (c) => {
  // 3 heavy armored wheels
  for (const wx of [16, 42, 74]) {
    c.circ(wx, 38, 7, "K"); c.circ(wx, 38, 4, "s"); c.circ(wx, 38, 2, "h")
  }
  // Armored rear container
  c.rect(3, 6, 56, 30, "V")
  c.rect(5, 8, 52, 26, "v")
  c.hline(5, 8, 52, "m")
  for (let x = 14; x <= 48; x += 11) c.vline(x, 8, 26, "V")
  // Hazard yellow-black bumper stripe
  for (let x = 6; x <= 52; x += 6) c.rect(x, 30, 3, 3, "Y")
  // Heavy front cab
  c.rect(60, 12, 30, 24, "V")
  c.rect(62, 14, 26, 20, "v")
  c.rect(74, 16, 13, 9, "B")
  c.rect(75, 17, 11, 6, "c")
  // Exhaust stack & bumper
  c.rect(58, 3, 3, 12, "s")
  c.rect(88, 28, 4, 6, "Y")
})

// 10. HAZARD: ROAD BOMB (24x24, 4-frame flickering fuse!)
anim("obs_bomb", { w: 22, h: 22, frames: 4, fps: 10, outline: "k" }, (c) => {
  const f = c.frame
  c.circ(11, 14, 7, "K")
  c.circ(10, 13, 5, "s")
  c.rect(8, 10, 2, 2, "h")
  // Hazard stripe
  c.rect(8, 14, 6, 2, "r")
  // Cap & sizzling fuse
  c.rect(9, 5, 4, 3, "s")
  c.line(11, 5, 15, 2, "o", 2)
  // Flickering spark!
  const sc = f % 2 === 0 ? "Y" : "p"
  c.rect(14 + (f % 2), 1, 3, 3, sc)
  c.px(15, 2, "w")
})

// 11. MYSTERY "?" TRANSFORMATION CRATE (26x26, 4-frame pulsing glow!)
anim("item_mystery", { w: 24, h: 24, frames: 4, fps: 6, outline: "k" }, (c) => {
  const f = c.frame
  const pulse = f === 1 || f === 2
  // Golden-bordered purple magic crate
  c.rect(2, 2, 20, 20, "O")
  c.rect(3, 3, 18, 18, pulse ? "Y" : "y")
  c.rect(5, 5, 14, 14, "K")
  c.rect(6, 6, 12, 12, pulse ? "r" : "R")
  // Crisp pixel "?" symbol
  c.hline(9, 8, 6, "w")
  c.px(9, 9, "w"); c.px(14, 9, "w"); c.px(14, 10, "w")
  c.hline(11, 11, 3, "w")
  c.px(11, 12, "w"); c.px(11, 13, "w")
  c.rect(11, 15, 2, 2, "Y")
  // Corner sparkles
  if (pulse) { c.px(2, 2, "w"); c.px(21, 21, "w") }
})

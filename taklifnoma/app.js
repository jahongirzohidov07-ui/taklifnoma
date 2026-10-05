/* =====================================================================
   TAKLIFNOMA — SOZLAMALAR
   Faqat shu blokni o'zgartiring.
   ===================================================================== */
const CONFIG = {
  groom: "Jasurbek",
  bride: "Mohinur",

  dateISO: "2026-10-17T18:30:00+05:00",      // to'y sanasi (Toshkent vaqti)

  venue: "BAXT SAROYI to'yxonasi",
  address: "Toshkent, Yunusobod tumani, Amir Temur ko'chasi 108",

  telegramUser: "jasurbek",                   // t.me/... (@ belgisiz)
  whatsappPhone: "998901234567",              // + belgisiz

  // Fon musiqasi.
  //   "music/nikoh.mp3" — o'zingiz tashlagan fayl ishlaydi.
  //   Fayl topilmasa, taklifnoma o'zi jonli musiqa chaladi (pastdagi Musiqa bo'limi).
  music: "music/nikoh.mp3",
  musicVolume: 0.34,          // 0 dan 1 gacha
  musicAutoplay: false,       // true qilsangiz, taklifnoma ochilishi bilan yonadi

  meetText: "Baxt bilan",
  walkText: "Ikki yurak bir yo'lda uchrashdi...",

  // Tilaklar devorida doim turadigan tilaklar
  seedWishes: [
    { name: "Sanjar va Dilorom", side: "Kuyov tomondan", msg: "Ikkingizga uzoq umr, mustahkam oila va farzandlar quvonchini tilaymiz. Baxtingiz hech qachon kamaymasin." },
    { name: "Nodira opa", side: "Kelin tomondan", msg: "Bir-biringizga mehringiz shu kungidek abadiy bo'lsin. Oilangizga baraka tilayman." },
    { name: "Bekzod", side: "Kuyov tomondan", msg: "Do'stim, nihoyat! Yangi hayotingiz faqat yaxshiliklarga to'la bo'lsin." }
  ]
};

/* ===================================================================== */

const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============ 1. SOZLAMALARNI QO'LLASH ============ */
(function applyConfig() {
  $("#meetText").textContent = CONFIG.meetText;
  $("#walkCap").textContent = CONFIG.walkText;
  $("#stageNames").innerHTML = CONFIG.groom + " &amp; " + CONFIG.bride;
  document.title = "Taklifnoma — " + CONFIG.groom + " & " + CONFIG.bride;

  const q = encodeURIComponent(CONFIG.venue + ", " + CONFIG.address);
  $("#mapFrame").src   = "https://maps.google.com/maps?q=" + q + "&z=16&hl=uz&output=embed";
  $("#mapYandex").href = "https://yandex.uz/maps/?text=" + q;
  $("#mapGoogle").href = "https://www.google.com/maps/search/?api=1&query=" + q;

  $("#audio").src = CONFIG.music;
})();

/* ============ 2. ZARRACHA DVIGATELI ============ */
function makeCanvas(el) {
  const c = el.getContext("2d");
  let w = 0, h = 0;
  function size() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = el.clientWidth; h = el.clientHeight;
    el.width = w * dpr; el.height = h * dpr;
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size();
  addEventListener("resize", size);
  return { c, get w() { return w; }, get h() { return h; } };
}

const fxCanvas = $("#fx");
const fx = makeCanvas(fxCanvas);
let fxParts = [], fxRunning = false;

const GOLD = ["#fff6dd", "#f0dca6", "#e0be74", "#c9a227"];
const pick = a => a[(Math.random() * a.length) | 0];

/* oltin chang — uzuklar orqasidan */
function dust(x, y, n) {
  for (let i = 0; i < (n || 2); i++) {
    fxParts.push({
      x: x + (Math.random() - 0.5) * 26,
      y: y + (Math.random() - 0.5) * 26,
      vx: (Math.random() - 0.5) * 0.9,
      vy: (Math.random() - 0.5) * 0.9 - 0.1,
      g: 0.004, drag: 0.985,
      life: 1, decay: 0.012 + Math.random() * 0.014,
      size: 0.5 + Math.random() * 1.5,
      col: pick(GOLD), star: Math.random() < 0.3, rot: Math.random() * 6.28, spin: 0
    });
  }
  run();
}

/* portlash — uchrashuv lahzasi */
function burst(x, y, power) {
  const n = power || 150;
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = 1.5 + Math.random() * 10;
    fxParts.push({
      x, y,
      vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1.6,
      g: 0.075, drag: 0.982,
      life: 1, decay: 0.007 + Math.random() * 0.009,
      size: 0.6 + Math.random() * 2,
      col: pick(GOLD),
      star: Math.random() < 0.45,
      rot: Math.random() * 6.28, spin: (Math.random() - 0.5) * 0.12
    });
  }
  run();
}

function star(c, x, y, s, rot) {
  c.save(); c.translate(x, y); c.rotate(rot);
  c.beginPath();
  for (let i = 0; i < 4; i++) {
    c.rotate(Math.PI / 2);
    c.moveTo(0, 0);
    c.quadraticCurveTo(s * 0.3, s * 0.3, 0, s * 2.4);
    c.quadraticCurveTo(-s * 0.3, s * 0.3, 0, 0);
  }
  c.fill(); c.restore();
}

function run() { if (!fxRunning) { fxRunning = true; requestAnimationFrame(loop); } }
function loop() {
  const c = fx.c;
  c.clearRect(0, 0, fx.w, fx.h);
  fxParts = fxParts.filter(p => p.life > 0);
  for (const p of fxParts) {
    p.x += p.vx; p.y += p.vy;
    p.vy += p.g; p.vx *= p.drag; p.vy *= p.drag;
    p.rot += p.spin; p.life -= p.decay;
    c.globalAlpha = Math.max(0, p.life);
    c.fillStyle = p.col;
    if (p.star) star(c, p.x, p.y, p.size, p.rot);
    else { c.beginPath(); c.arc(p.x, p.y, p.size, 0, 6.3); c.fill(); }
  }
  c.globalAlpha = 1;
  if (fxParts.length) requestAnimationFrame(loop);
  else fxRunning = false;
}

/* --- asosiy sahifadagi gul barglari --- */
const pt = makeCanvas($("#petals"));
let petals = [], petalsOn = false;
function initPetals() {
  const n = innerWidth < 700 ? 11 : 20;
  petals = [];
  for (let i = 0; i < n; i++) petals.push(newPetal(true));
  petalsOn = true; petalLoop();
}
function newPetal(any) {
  return {
    x: Math.random() * pt.w, y: any ? Math.random() * pt.h : -24,
    r: 3 + Math.random() * 4.2, sp: 0.35 + Math.random() * 0.95,
    sway: 0.35 + Math.random() * 1.2, ph: Math.random() * 6.28,
    rot: Math.random() * 6.28, spin: (Math.random() - 0.5) * 0.026,
    op: 0.16 + Math.random() * 0.3,
    col: Math.random() < 0.55 ? "#e0be74" : (Math.random() < 0.5 ? "#efdfc2" : "#e3c3c8")
  };
}
function petalLoop() {
  if (!petalsOn) return;
  const c = pt.c;
  c.clearRect(0, 0, pt.w, pt.h);
  for (let i = 0; i < petals.length; i++) {
    const p = petals[i];
    p.y += p.sp; p.ph += 0.013; p.rot += p.spin; p.x += Math.sin(p.ph) * p.sway;
    if (p.y > pt.h + 30) petals[i] = newPetal(false);
    c.save(); c.translate(p.x, p.y); c.rotate(p.rot);
    c.globalAlpha = p.op; c.fillStyle = p.col;
    c.beginPath(); c.ellipse(0, 0, p.r, p.r * 0.5, 0, 0, 6.3); c.fill();
    c.restore();
  }
  c.globalAlpha = 1;
  requestAnimationFrame(petalLoop);
}

/* ============ 3. OCHILISH SAHNASI ============ */
const intro = $("#intro");
const startPanel = $("#startPanel");
const stage = $("#stage");
const timers = [];
const T = (fn, ms) => timers.push(setTimeout(fn, ms));
let trailing = false;

function trail() {
  if (!trailing) return;
  const a = $("#ringA").getBoundingClientRect();
  const b = $("#ringB").getBoundingClientRect();
  dust(a.left + a.width / 2, a.top + a.height / 2, 2);
  dust(b.left + b.width / 2, b.top + b.height / 2, 2);
  requestAnimationFrame(trail);
}

function openInvitation() {
  startPanel.classList.add("hide");
  $("#skipBtn").classList.add("on");
  tryMusic();

  // uzuklar ikki tomondan uchib keladi
  T(() => {
    stage.classList.add("on");
    $("#walkCap").classList.add("on");
    T(() => {
      stage.classList.add("fly");
      trailing = true; trail();
    }, 280);
  }, 600);

  // ilashish lahzasi
  T(lock, 3600);
}

function lock() {
  trailing = false;
  stage.classList.add("lock");
  $("#walkCap").classList.add("off");

  const r = $("#crest").getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height * 0.45;
  burst(cx, cy, 170);
  T(() => burst(cx, cy, 90), 240);

  T(() => stage.classList.add("crest-on"), 260);
  T(() => $("#meetText").classList.add("on"), 1500);
  T(reveal, 3400);
}

function reveal() {
  $("#seam").classList.add("on");
  stage.classList.add("fade");
  T(() => {
    intro.classList.add("open");
    document.body.classList.remove("locked");
    $("#musicBtn").classList.add("show");
    $("#dots").classList.add("show");
    initPetals();
    scan();
    T(() => intro.classList.add("gone"), 1800);
  }, 420);
}

function skipIntro() {
  trailing = false;
  timers.forEach(clearTimeout);
  startPanel.classList.add("hide");
  stage.classList.add("fade");
  reveal();
}

$("#startBtn").addEventListener("click", () => {
  if (reduced) { startPanel.classList.add("hide"); reveal(); return; }
  const s = $("#startBtn").getBoundingClientRect();
  dust(s.left + s.width / 2, s.top + s.height / 2, 60);
  openInvitation();
});
$("#skipBtn").addEventListener("click", skipIntro);

/* ============ 4. SKROLL ANIMATSIYALARI ============ */
const io = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: "0px 0px -7% 0px" });
function scan() { $$(".rv:not(.in)").forEach(el => io.observe(el)); }
scan();

const heroBg = $(".hero-bg");
let ticking = false;
addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = scrollY;
    if (heroBg && y < innerHeight * 1.3) heroBg.style.transform = "translateY(" + (y * 0.28) + "px)";
    let cur = null;
    navSecs.forEach(s => { if (s.el.getBoundingClientRect().top <= innerHeight * 0.4) cur = s; });
    navSecs.forEach(s => s.dot.classList.toggle("active", s === cur));
    ticking = false;
  });
}, { passive: true });

const navSecs = [];
(function buildDots() {
  const box = $("#dots");
  $$("[data-nav]").forEach(el => {
    const a = document.createElement("a");
    a.href = "#" + el.id;
    a.innerHTML = "<b>" + el.dataset.nav + "</b>";
    box.appendChild(a);
    navSecs.push({ el, dot: a });
  });
})();

/* ============ 5. COUNTDOWN ============ */
const target = new Date(CONFIG.dateISO).getTime();
const cd = { d: $("#cD"), h: $("#cH"), m: $("#cM"), s: $("#cS") };
function setVal(el, v) {
  const t = String(v).padStart(2, "0");
  if (el.textContent === t) return;
  el.textContent = t;
  el.classList.add("tick");
  setTimeout(() => el.classList.remove("tick"), 380);
}
function tickCount() {
  const diff = target - Date.now();
  if (diff <= 0) {
    setVal(cd.d, 0); setVal(cd.h, 0); setVal(cd.m, 0); setVal(cd.s, 0);
    $("#countNote").textContent = (typeof todayText === "function")
      ? todayText() : "Bugun bizning kunimiz — xush kelibsiz!";
    return;
  }
  const s = Math.floor(diff / 1000);
  setVal(cd.d, Math.floor(s / 86400));
  setVal(cd.h, Math.floor(s % 86400 / 3600));
  setVal(cd.m, Math.floor(s % 3600 / 60));
  setVal(cd.s, s % 60);
}
tickCount(); setInterval(tickCount, 1000);

/* ============ 6. FAQ ============ */
$$(".fq > button").forEach(b => b.addEventListener("click", () => {
  const item = b.parentElement, body = $(".fa", item), open = item.classList.contains("open");
  $$(".fq.open").forEach(o => { o.classList.remove("open"); $(".fa", o).style.maxHeight = null; });
  if (!open) { item.classList.add("open"); body.style.maxHeight = body.scrollHeight + "px"; }
}));

/* ============ 7. GALEREYA ============ */
$$(".g img").forEach(img => {
  img.addEventListener("error", () => img.classList.add("missing"));
  if (img.complete && img.naturalWidth === 0) img.classList.add("missing");
});

/* ============ 8. TILAKLAR DEVORI ============ */
/* Xotirada saqlanadi; localStorage mavjud bo'lsa, qo'shimcha saqlanadi.
   Shuning uchun brauzer saqlashni bloklasa ham devor ishlayveradi.        */
const KEY = "taklifnoma_tilaklar_v2";
let userWishes = [];
try {
  const raw = localStorage.getItem(KEY);
  const arr = raw ? JSON.parse(raw) : null;
  if (Array.isArray(arr)) userWishes = arr;
} catch (e) { /* localStorage yo'q — xotirada ishlaymiz */ }

function saveWishes() {
  try { localStorage.setItem(KEY, JSON.stringify(userWishes.slice(0, 80))); } catch (e) {}
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}
function renderWishes(freshFirst) {
  const box = $("#wishes");
  const items = userWishes.concat(CONFIG.seedWishes).filter(x => x && x.msg);
  box.innerHTML = items.map((x, i) =>
    '<div class="wish' + (freshFirst && i === 0 ? ' fresh' : '') + '" style="animation-delay:' + (i * 0.07) + 's">' +
      '<p>' + esc(x.msg) + '</p>' +
      '<b>' + esc(x.name || "Mehmon") + '</b>' +
      '<small>' + esc(x.side || "") + '</small>' +
    '</div>'
  ).join("");
}
renderWishes();

/* ============ 9. RSVP ============ */
$("#rsvpForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const data = {
    name: (f.get("name") || "").trim(),
    side: f.get("side"),
    guests: f.get("guests"),
    attend: f.get("attend"),
    msg: (f.get("msg") || "").trim()
  };

  if (data.msg) { userWishes.unshift({ name: data.name, side: data.side, msg: data.msg }); saveWishes(); }
  renderWishes(!!data.msg);

  const text =
    "TO'Y TAKLIFNOMASI — JAVOB\n" +
    "Ism: " + data.name + "\n" +
    "Tomon: " + data.side + "\n" +
    "Mehmonlar: " + data.guests + "\n" +
    "Javob: " + data.attend +
    (data.msg ? "\nTilak: " + data.msg : "");
  const enc = encodeURIComponent(text);
  $("#sendTg").href = "https://t.me/" + CONFIG.telegramUser + "?text=" + enc;
  $("#sendWa").href = "https://wa.me/" + CONFIG.whatsappPhone + "?text=" + enc;

  e.target.style.display = "none";
  $("#sent").classList.add("on");
  pageBurst();

  // tilak devorga tushganini ko'rsatamiz
  if (data.msg) T2(() => $("#s-tilak").scrollIntoView({ behavior: "smooth", block: "start" }), 900);
});
function T2(fn, ms) { setTimeout(fn, ms); }

$("#againBtn").addEventListener("click", () => {
  $("#sent").classList.remove("on");
  const form = $("#rsvpForm");
  form.reset(); form.style.display = "";
  form.scrollIntoView({ behavior: "smooth", block: "center" });
});

function pageBurst() {
  fxCanvas.style.cssText = "position:fixed;inset:0;z-index:60;pointer-events:none;display:block";
  document.body.appendChild(fxCanvas);
  intro.classList.add("gone");
  const r = fxCanvas.getBoundingClientRect();
  burst(r.width / 2, r.height * 0.5, 130);
}

/* ============ 10. MUSIQA ============================================
   Ikki rejim:
   A) music/ papkasida mp3 bo'lsa — o'sha chalinadi.
   B) fayl bo'lmasa — taklifnoma o'zi jonli musiqa yaratadi:
      royal, arfa va torli asboblar ohangi, Fa major, sekin, cheksiz.
      Hech qanday fayl yuklanmaydi, mualliflik huquqi muammosi yo'q.
   ==================================================================== */
const audio = $("#audio");
const mBtn = $("#musicBtn");

const Synth = (function () {
  const midi = m => 440 * Math.pow(2, (m - 69) / 12);
  // Fa major: Fmaj7 — Dm7 — Bbmaj7 — C7
  const CHORDS = [[53, 57, 60, 64], [50, 53, 57, 60], [46, 50, 53, 57], [48, 52, 55, 58]];
  const BAR = 4.4;                     // har bir akkord necha soniya
  const PATTERN = [0, 1, 2, 3, 2, 1, 2, 3];

  let ctx = null, master = null, wet = null, on = false, tmr = null, next = 0, bar = 0;

  function prepare() {                 // bosish lahzasida chaqiriladi (brauzer talabi)
    if (ctx) { if (ctx.state === "suspended") ctx.resume(); return true; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();

    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    // yumshoq aks-sado (ikki kechikish + past chastota filtri)
    wet = ctx.createGain(); wet.gain.value = 0.42;
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass"; lp.frequency.value = 2400;
    [0.27, 0.41].forEach(t => {
      const d = ctx.createDelay(1), fb = ctx.createGain();
      d.delayTime.value = t; fb.gain.value = 0.34;
      wet.connect(d); d.connect(fb); fb.connect(d); d.connect(lp);
    });
    lp.connect(master);
    return true;
  }

  function note(freq, t, dur, amp) {
    const o1 = ctx.createOscillator(), o2 = ctx.createOscillator();
    const g = ctx.createGain(), g2 = ctx.createGain();
    o1.type = "sine";     o1.frequency.value = freq;
    o2.type = "triangle"; o2.frequency.value = freq * 2.004;   // nozik jilo
    g2.gain.value = 0.14;
    o2.connect(g2); g2.connect(g); o1.connect(g);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(amp, t + 0.018);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    g.connect(master); g.connect(wet);
    o1.start(t); o2.start(t); o1.stop(t + dur + 0.05); o2.stop(t + dur + 0.05);
  }

  function pad(freqs, t, dur) {        // ostidagi torli "yostiq"
    freqs.forEach((f, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain(), fl = ctx.createBiquadFilter();
      o.type = "triangle"; o.frequency.value = f / 2;
      o.detune.value = i % 2 ? 4 : -4;
      fl.type = "lowpass"; fl.frequency.value = 700;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.028, t + 1.1);
      g.gain.setValueAtTime(0.028, t + dur - 1.2);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(fl); fl.connect(g); g.connect(master); g.connect(wet);
      o.start(t); o.stop(t + dur + 0.05);
    });
  }

  function scheduleBar() {
    if (!on) return;
    const ch = CHORDS[bar % CHORDS.length];
    const t0 = next;
    const step = BAR / PATTERN.length;

    pad([midi(ch[0]), midi(ch[2])], t0, BAR);
    PATTERN.forEach((p, i) => {
      const up = i >= 4 ? 12 : 0;                       // ikkinchi yarmi bir oktava tepada
      note(midi(ch[p] + up), t0 + i * step, 2.6, 0.075);
    });
    if (bar % 2 === 1) note(midi(ch[3] + 24), t0 + step * 5.5, 3.4, 0.03);  // uzoqdagi jaranglash

    bar++;
    next += BAR;
    // doim atigi ~0.5 s oldinda turamiz (aks holda notalar to'planib ketadi)
    tmr = setTimeout(scheduleBar, Math.max(60, (next - ctx.currentTime - 0.5) * 1000));
  }

  return {
    prepare,
    start(vol) {
      if (!ctx && !prepare()) return false;
      if (on) return true;
      on = true; bar = 0; next = ctx.currentTime + 0.15;
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(0.0001, ctx.currentTime);
      master.gain.linearRampToValueAtTime(vol, ctx.currentTime + 3.5);
      scheduleBar();
      return true;
    },
    stop() {
      if (!on) return;
      on = false;
      clearTimeout(tmr);
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
    },
    get playing() { return on; },
    get state() { return ctx ? ctx.state : "none"; },
    get level() { return master ? Math.round(master.gain.value * 1000) / 1000 : -1; }
  };
})();

let mode = null;            // "file" | "synth" | null (hali aniqlanmagan)
const VOL = CONFIG.musicVolume;

function fadeInFile() {
  let v = 0;
  const fade = setInterval(() => {
    if (mode !== "file" || audio.paused) { clearInterval(fade); return; }
    v = Math.min(VOL, v + 0.022);
    try { audio.volume = v; } catch (e) {}
    if (v >= VOL) clearInterval(fade);
  }, 130);
}

/* fayl bormi-yo'qmi — bir marta aniqlaymiz, keyin o'sha rejimda ishlaymiz */
function probeAndPlay() {
  if (!CONFIG.music) { mode = "synth"; Synth.start(VOL * 0.5); mBtn.classList.add("playing"); return; }
  let settled = false;
  const toSynth = () => {
    if (settled) return;
    settled = true; mode = "synth";
    Synth.start(VOL * 0.5); mBtn.classList.add("playing");
  };
  audio.addEventListener("canplay", () => {
    if (settled) return;
    settled = true; mode = "file"; fadeInFile();
  }, { once: true });
  audio.addEventListener("error", toSynth, { once: true });

  try { audio.volume = 0; } catch (e) {}
  const p = audio.play();
  if (p && p.catch) p.catch(toSynth);
  mBtn.classList.add("playing");
  setTimeout(toSynth, 2500);
}

function musicPlaying() {
  return mode === "synth" ? Synth.playing : (mode === "file" ? !audio.paused : false);
}
function startMusic() {
  Synth.prepare();
  if (mode === "synth") { Synth.start(VOL * 0.5); mBtn.classList.add("playing"); return; }
  if (mode === "file")  { audio.play().catch(() => {}); fadeInFile(); mBtn.classList.add("playing"); return; }
  probeAndPlay();
}
function stopMusic() {
  if (mode === "synth") Synth.stop();
  else { try { audio.pause(); } catch (e) {} }
  mBtn.classList.remove("playing");
}

/* Muhr bosilganda chaqiriladi.
   Tugma DARHOL ko'rinadi — mehmon istalgan payt o'chira (yoki yoqa) oladi. */
function tryMusic() {
  Synth.prepare();
  mBtn.classList.add("show");
  if (CONFIG.musicAutoplay) startMusic();
}

mBtn.addEventListener("click", () => {
  if (musicPlaying()) stopMusic(); else startMusic();
});

/* ============ 11. SILLIQ O'TISH ============ */
$$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
  const el = $(a.getAttribute("href"));
  if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
}));

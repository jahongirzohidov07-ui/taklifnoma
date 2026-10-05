/* =====================================================================
   TAKLIFNOMA — KLASSIK
   Odatda hech narsani o'zgartirish shart emas: admin.html havola yasaydi
   va hamma ma'lumot shu havoladan o'qiladi. Quyidagilar — standart qiymatlar.
   ===================================================================== */
const CONFIG = {
  groom: "Jasurbek",
  bride: "Mohinur",
  dateISO: "2026-10-17T18:30:00+05:00",
  venue: "Baxt saroyi",
  address: "Yunusobod tumani, Amir Temur ko'chasi 108",
  city: "Toshkent",
  phoneGroom: "+998 90 123 45 67",
  phoneBride: "+998 91 123 45 67",
  groomParents: "",
  brideParents: "",
  telegramUser: "jasurbek",
  whatsappPhone: "998901234567",
  music: "music/nikoh.mp3",       // fayl topilmasa — brauzerning o'zi jonli ohang chaladi
  musicVolume: 0.34,
  musicAutoplay: false,

  // Kun tartibi — boshlanish vaqtidan necha daqiqa keyin
  program: [
    { at: 0,   icon: "glass",  key: "p1" },
    { at: 60,  icon: "rings",  key: "p2" },
    { at: 120, icon: "cloche", key: "p3" },
    { at: 300, icon: "moon",   key: "p4" }
  ],

  seedWishes: [
    { name: "Nilufar", msg: "To'yingiz muborak! Har bir orzuingiz ushalib, baxtli hayot kechiring." },
    { name: "Oybek",   msg: "Sizlarga uzoq umr, mustahkam oila va cheksiz baxt tilayman." },
    { name: "Shahzoda", msg: "Alloh sizlarga sog'lik, xotirjamlik va solih farzandlar nasib etsin." },
    { name: "Bekzod",  msg: "Baxtingiz bardavom, muhabbatingiz abadiy bo'lsin. Chin dildan tabriklayman!" }
  ]
};

/* ============ HAVOLA ORQALI SOZLASH (admin.html bilan bir xil nomlar) ============ */
(function fromURL() {
  const p = new URLSearchParams(location.search);
  const get = k => { const v = p.get(k); return v && v.trim() ? v.trim() : null; };
  const put = (k, v) => { if (v) CONFIG[k] = v; };
  // Havola orqali ochilgan bo'lsa — namunaviy telefon va ismlar chiqmasin,
  // faqat admin panelda kiritilganlar ko'rsatilsin.
  if (p.get("kuyov") || p.get("kelin")) {
    ["phoneGroom", "phoneBride", "telegramUser", "whatsappPhone", "groomParents", "brideParents"]
      .forEach(k => { CONFIG[k] = ""; });
  }
  put("groom", get("kuyov"));
  put("bride", get("kelin"));
  put("venue", get("joy"));
  put("address", get("manzil"));
  put("city", get("shahar"));
  put("phoneGroom", get("tel1"));
  put("phoneBride", get("tel2"));
  put("groomParents", get("kuyovota"));
  put("brideParents", get("kelinota"));
  put("telegramUser", get("tg") && get("tg").replace(/^@/, ""));
  put("whatsappPhone", get("wa") && get("wa").replace(/\D/g, ""));
  put("music", get("mp3"));
  const d = get("sana");
  if (d) CONFIG.dateISO = /([+-]\d\d:\d\d|Z)$/.test(d) ? d : d.slice(0, 16) + ":00+05:00";
  if (get("auto") === "1") CONFIG.musicAutoplay = true;
  CONFIG.urlLang = get("til");
})();

/* ============ MATNLAR — UCH TILDA ============ */
const TEXTS = {
  uz: {
    coverKick: "Sizga taklifnoma keldi", open: "Ochish",
    ayahTr: "«Va o'rtangizda muhabbat va rahm-shafqat paydo qildi»", ayahSrc: "Rum surasi, 21",
    greet: "Aziz va qadrli insonimiz!", biz: "Biz", heroLine: "Sizni to'yimizga taklif qilishdan mamnunmiz",
    dearGuest: "Aziz mehmonimiz",
    invite: "Sizni farzandlarimizning nikoh to'yi munosabati bilan bo'lib o'tadigan tantanali kechaga taklif etamiz",
    respect: "Hurmat bilan,", date: "Sana", left: "To'ygacha qolgan vaqt",
    d: "kun", h: "soat", m: "daqiqa", s: "soniya", starts: "Boshlanishi",
    program: "Kun tartibi",
    p1: "Mehmonlarni kutib olish", p2: "Nikoh marosimi", p3: "Ziyofat", p4: "Kechaning yakuni",
    memories: "Bizning xotiralarimiz", galTitle: "Xotira galereyasi",
    venueTitle: "To'yxona", openMap: "Xaritada ochish", glad: "Sizni ko'rishdan mamnun bo'lamiz!",
    locTitle: "Joylashuv", locSub: "Sevgi va nafosat uchrashadigan joy",
    rsvpTitle: "Iltimos, ishtirokingizni tasdiqlang", rsvpSub: "Biz bilan bo'ling",
    guestName: "Mehmon ismi", phName: "Ismingizni kiriting", attend: "Qatnashasizmi?",
    yes: "Ha, albatta boraman!", no: "Afsus, kela olmayman", guests: "Necha kishi bo'lasiz?",
    msg: "Xabar", phMsg: "Kuyov-kelin bilan xabar ulashing...", sendReply: "Javob yuborish",
    thanks: "Rahmat! Javobingiz qabul qilindi", sendTo: "Endi javobni kelin-kuyovga yuboring:",
    again: "Yana javob qo'shish",
    bookKick: "Mehmonlar kitobi", bookTitle: "Mehmonlar kitobi", phWish: "Xabaringizni yozing", sendWish: "Xabar yuborish",
    gift1: "Sizning ishtirokingiz —", gift2: "biz uchun eng qimmatli sovg'a", withLove: "Sevgi bilan",
    rYes: "Albatta kelaman", rNo: "Kela olmayman", rTitle: "TO'Y TAKLIFNOMASI — JAVOB",
    rName: "Ism", rAns: "Javob", rCount: "Mehmonlar", rMsg: "Xabar",
    tgShare: "Telegram", waShare: "WhatsApp"
  },
  ru: {
    coverKick: "Вам пришло приглашение", open: "Открыть",
    ayahTr: "«И установил между вами любовь и милосердие»", ayahSrc: "Сура Ар-Рум, 21",
    greet: "Дорогой и уважаемый гость!", biz: "Мы", heroLine: "С радостью приглашаем вас на нашу свадьбу",
    dearGuest: "Дорогой гость",
    invite: "Приглашаем вас на торжественный вечер по случаю бракосочетания наших детей",
    respect: "С уважением,", date: "Дата", left: "До свадьбы осталось",
    d: "дней", h: "часов", m: "минут", s: "секунд", starts: "Начало в",
    program: "Программа",
    p1: "Встреча гостей", p2: "Никох", p3: "Банкет", p4: "Завершение вечера",
    memories: "Наши воспоминания", galTitle: "Галерея",
    venueTitle: "Место", openMap: "Открыть карту", glad: "Будем рады видеть вас!",
    locTitle: "Как добраться", locSub: "Место, где встречаются любовь и изящество",
    rsvpTitle: "Пожалуйста, подтвердите участие", rsvpSub: "Будьте с нами",
    guestName: "Имя гостя", phName: "Введите ваше имя", attend: "Вы придёте?",
    yes: "Да, обязательно приду!", no: "К сожалению, не смогу", guests: "Сколько вас будет?",
    msg: "Сообщение", phMsg: "Поделитесь словами с молодыми...", sendReply: "Отправить ответ",
    thanks: "Спасибо! Ваш ответ принят", sendTo: "Теперь отправьте ответ молодожёнам:",
    again: "Добавить ещё ответ",
    bookKick: "Книга гостей", bookTitle: "Книга гостей", phWish: "Напишите пожелание", sendWish: "Отправить",
    gift1: "Ваше присутствие —", gift2: "самый ценный подарок для нас", withLove: "С любовью",
    rYes: "Приду", rNo: "Не смогу", rTitle: "СВАДЕБНОЕ ПРИГЛАШЕНИЕ — ОТВЕТ",
    rName: "Имя", rAns: "Ответ", rCount: "Гостей", rMsg: "Сообщение",
    tgShare: "Telegram", waShare: "WhatsApp"
  },
  en: {
    coverKick: "You are invited", open: "Open",
    ayahTr: "“And He placed between you affection and mercy”", ayahSrc: "Surah Ar-Rum, 21",
    greet: "Our dear and honoured guest!", biz: "We", heroLine: "are delighted to invite you to our wedding",
    dearGuest: "Dear guest",
    invite: "We warmly invite you to the evening celebration of our children's wedding",
    respect: "With love and respect,", date: "Date", left: "Counting down to the day",
    d: "days", h: "hours", m: "minutes", s: "seconds", starts: "Starts at",
    program: "Order of the day",
    p1: "Welcome reception", p2: "Nikah ceremony", p3: "Dinner", p4: "Farewell",
    memories: "Our memories", galTitle: "Gallery",
    venueTitle: "The venue", openMap: "Open the map", glad: "We can't wait to see you!",
    locTitle: "Location", locSub: "Where love and elegance meet",
    rsvpTitle: "Please confirm your attendance", rsvpSub: "Celebrate with us",
    guestName: "Your name", phName: "Enter your name", attend: "Will you attend?",
    yes: "Yes, I'll be there!", no: "Sadly, I can't make it", guests: "How many of you?",
    msg: "Message", phMsg: "Share a few words with the couple...", sendReply: "Send reply",
    thanks: "Thank you! Your reply is in", sendTo: "Now send it to the couple:",
    again: "Add another reply",
    bookKick: "Guest book", bookTitle: "Guest book", phWish: "Write your wish", sendWish: "Send",
    gift1: "Your presence is", gift2: "the most precious gift to us", withLove: "With love",
    rYes: "Attending", rNo: "Not attending", rTitle: "WEDDING INVITATION — REPLY",
    rName: "Name", rAns: "Answer", rCount: "Guests", rMsg: "Message",
    tgShare: "Telegram", waShare: "WhatsApp"
  }
};

const MONTHS = {
  uz: ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentabr","oktabr","noyabr","dekabr"],
  ru: ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],
  en: ["January","February","March","April","May","June","July","August","September","October","November","December"]
};
const WEEK = {           // dushanbadan boshlab
  uz: ["Du","Se","Ch","Pa","Ju","Sh","Ya"],
  ru: ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],
  en: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
};

/* ============ YORDAMCHILAR ============ */
const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const pad = n => String(n).padStart(2, "0");
const ini = s => (String(s || "?").trim()[0] || "?").toUpperCase();
const esc = s => String(s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
let LANG = "uz";
const t = k => (TEXTS[LANG] && TEXTS[LANG][k]) || TEXTS.uz[k] || "";

/* Toshkent vaqti — mehmon qayerda bo'lmasin, sana va soat bir xil */
const AT = new Date(CONFIG.dateISO);
function tk(date) {
  const x = new Date(date.getTime() + 5 * 3600e3);
  return { d: x.getUTCDate(), m: x.getUTCMonth(), y: x.getUTCFullYear(), w: x.getUTCDay(), hh: x.getUTCHours(), mm: x.getUTCMinutes() };
}
const T0 = tk(AT);

/* ============ ISMLAR VA BO'LIMLAR ============ */
function applyStatic() {
  const G = CONFIG.groom, B = CONFIG.bride;
  $$(".nm-g").forEach(e => e.textContent = G);
  $$(".nm-b").forEach(e => e.textContent = B);
  document.documentElement.style.setProperty("--mono", '"' + ini(G) + " & " + ini(B) + '"');
  document.title = "To'yga marhamat — " + G + " & " + B;

  const par = [CONFIG.groomParents, CONFIG.brideParents].filter(Boolean);
  $("#parents").innerHTML = par.map(esc).join("<br>");

  $("#coverDate").textContent = [pad(T0.d), pad(T0.m + 1), T0.y].join(" · ");
  $("#bigDate").textContent = [pad(T0.d), pad(T0.m + 1), T0.y].join(" ");

  $("#venueName").textContent = CONFIG.venue;
  $("#venueAddr span").textContent = CONFIG.address + (CONFIG.city ? ", " + CONFIG.city : "");

  const q = encodeURIComponent(CONFIG.venue + ", " + CONFIG.address + ", " + CONFIG.city);
  const yx = "https://yandex.uz/maps/?text=" + q;
  $("#mapYandex").href = yx;
  $("#mapYandex2").href = yx;
  $("#mapOpen").href = "https://www.google.com/maps/search/?api=1&query=" + q;
  $("#mapGoogle").href = "https://www.google.com/maps/dir/?api=1&destination=" + q;
  $("#mapFrame").src = "https://maps.google.com/maps?q=" + q + "&z=16&output=embed";

  $("#footTel").innerHTML = [[G, CONFIG.phoneGroom], [B, CONFIG.phoneBride]]
    .filter(x => x[1])
    .map(([n, tel]) => '<a href="tel:' + esc(String(tel).replace(/[^\d+]/g, "")) + '"><svg><use href="#i-phone"/></svg>' + esc(n) + "</a>")
    .join("");

  $("#audio").src = CONFIG.music || "";
}

/* kalendar — dushanbadan boshlanadi, to'y kuni oltin doira */
function buildCalendar() {
  const first = new Date(Date.UTC(T0.y, T0.m, 1)).getUTCDay();     // 0 = yakshanba
  const lead = (first + 6) % 7;                                       // dushanba = 0
  const days = new Date(Date.UTC(T0.y, T0.m + 1, 0)).getUTCDate();
  let html = "<thead><tr>" + WEEK[LANG].map(w => "<th>" + w + "</th>").join("") + "</tr></thead><tbody><tr>";
  for (let i = 0; i < lead; i++) html += "<td></td>";
  for (let d = 1; d <= days; d++) {
    html += '<td' + (d === T0.d ? ' class="today"' : "") + "><span>" + d + "</span></td>";
    if ((lead + d) % 7 === 0 && d !== days) html += "</tr><tr>";
  }
  html += "</tr></tbody>";
  $("#cal").innerHTML = html;
  const mon = MONTHS[LANG][T0.m];
  $("#calTitle").textContent = mon.toUpperCase() + " " + T0.y;
  $("#starts").textContent = t("starts") + " " + pad(T0.hh) + ":" + pad(T0.mm);
}

/* kun tartibi — boshlanish vaqtiga qarab avtomatik */
function buildProgram() {
  const base = T0.hh * 60 + T0.mm;
  $("#prog").innerHTML = CONFIG.program.map((it, i) => {
    const m = (base + it.at) % 1440;
    return '<li class="rv' + (i ? " d" + Math.min(i, 3) : "") + '"><span class="pi"><svg><use href="#i-' + it.icon + '"/></svg></span>' +
           '<span class="pd"></span><span><b>' + pad(Math.floor(m / 60)) + ":" + pad(m % 60) + "</b><small>" + esc(t(it.key)) + "</small></span></li>";
  }).join("");
  observe();
}

/* ============ TIL ============ */
function applyLang(code) {
  LANG = TEXTS[code] ? code : "uz";
  $$("[data-t]").forEach(el => { const v = t(el.dataset.t); if (v) el.textContent = v; });
  $$("[data-ph]").forEach(el => { el.placeholder = t(el.dataset.ph); });
  $("#slider").setAttribute("aria-label", t("open"));
  $$("#lang button").forEach(b => b.classList.toggle("on", b.dataset.l === LANG));
  document.documentElement.lang = LANG;
  buildCalendar();
  buildProgram();
  renderWall();
  try { localStorage.setItem("taklifnoma_lang", LANG); } catch (e) {}
}
$("#lang").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (b) applyLang(b.dataset.l);
});

/* ============ SANOQ ============ */
const cd = { d: $("#cD"), h: $("#cH"), m: $("#cM"), s: $("#cS") };
function setN(el, v) {
  const s = pad(v);
  if (el.textContent === s) return;
  el.textContent = s;
  el.classList.add("tick");
  setTimeout(() => el.classList.remove("tick"), 350);
}
function tick() {
  const left = Math.max(0, Math.floor((AT.getTime() - Date.now()) / 1000));
  setN(cd.d, Math.floor(left / 86400));
  setN(cd.h, Math.floor(left % 86400 / 3600));
  setN(cd.m, Math.floor(left % 3600 / 60));
  setN(cd.s, left % 60);
}

/* ============ PAYDO BO'LISH ANIMATSIYASI ============ */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
function observe() { $$(".rv:not(.in)").forEach(el => io.observe(el)); }

/* ============ SURATLAR (yo'q bo'lsa — monogramma ko'rinadi) ============ */
$$("img").forEach(img => {
  const miss = () => img.classList.add("missing");
  img.addEventListener("error", miss);
  if (img.complete && img.naturalWidth === 0) miss();
});

/* ============ OLTIN UCHQUNLAR ============ */
const fx = $("#fx"), cx = fx.getContext("2d");
let parts = [], running = false;
function sizeFx() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  fx.width = innerWidth * dpr; fx.height = innerHeight * dpr;
  cx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
sizeFx(); addEventListener("resize", sizeFx);
function burst(x, y, n) {
  const C = ["#fff4dc", "#e6cf9f", "#c9a96e", "#f3e3c0"];
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, sp = 1.5 + Math.random() * 8;
    parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 2, life: 1,
                 dec: .008 + Math.random() * .012, r: .8 + Math.random() * 2.2, c: C[i % 4] });
  }
  if (!running) { running = true; requestAnimationFrame(loop); }
}
function loop() {
  cx.clearRect(0, 0, innerWidth, innerHeight);
  parts = parts.filter(p => p.life > 0);
  parts.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.vy += .07; p.vx *= .985; p.life -= p.dec;
    cx.globalAlpha = Math.max(0, p.life); cx.fillStyle = p.c;
    cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.3); cx.fill();
  });
  cx.globalAlpha = 1;
  if (parts.length) requestAnimationFrame(loop); else running = false;
}

/* ============ SURIB OCHISH ============ */
const slider = $("#slider"), knob = $("#knob"), fill = $("#sliderFill");
let dragging = false, startX = 0, pos = 0, opened = false;
const maxX = () => slider.clientWidth - knob.offsetWidth - 10;
function setPos(x) {
  pos = Math.max(0, Math.min(maxX(), x));
  knob.style.transform = "translateX(" + pos + "px)";
  fill.style.width = (pos + 60) + "px";
}
slider.addEventListener("pointerdown", e => {
  if (opened) return;
  dragging = true; startX = e.clientX - pos;
  slider.classList.remove("anim");
  slider.setPointerCapture(e.pointerId);
});
slider.addEventListener("pointermove", e => { if (dragging) setPos(e.clientX - startX); });
function release() {
  if (!dragging) return;
  dragging = false;
  slider.classList.add("anim");
  if (pos > maxX() * 0.62) { setPos(maxX()); openCover(); }
  else if (pos < 6) { setPos(maxX()); openCover(); }     // shunchaki bosilsa ham ochiladi
  else setPos(0);
}
slider.addEventListener("pointerup", release);
slider.addEventListener("pointercancel", () => { dragging = false; slider.classList.add("anim"); setPos(0); });
slider.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); slider.classList.add("anim"); setPos(maxX()); openCover(); }
});

function openCover() {
  if (opened) return;
  opened = true;
  Synth.prepare();
  $("#music").hidden = false;
  if (CONFIG.musicAutoplay) startMusic();
  const r = slider.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top, 120);
  setTimeout(() => {
    $("#cover").classList.add("gone");
    document.body.classList.remove("locked");
    observe();
  }, reduced ? 0 : 450);
  setTimeout(() => $("#cover").classList.add("removed"), 1800);
}

/* ============ MUSIQA ============ */
const Synth = (function () {
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);
  const CH = [[53, 57, 60, 64], [50, 53, 57, 60], [46, 50, 53, 57], [48, 52, 55, 58]];
  const BAR = 4.4, PAT = [0, 1, 2, 3, 2, 1, 2, 3];
  let ctx = null, out = null, wet = null, on = false, tmr = null, next = 0, bar = 0;
  function prepare() {
    if (ctx) { if (ctx.state === "suspended") ctx.resume(); return true; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    out = ctx.createGain(); out.gain.value = 0; out.connect(ctx.destination);
    wet = ctx.createGain(); wet.gain.value = .42;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 2400;
    [.27, .41].forEach(dt => {
      const d = ctx.createDelay(1), fb = ctx.createGain();
      d.delayTime.value = dt; fb.gain.value = .34;
      wet.connect(d); d.connect(fb); fb.connect(d); d.connect(lp);
    });
    lp.connect(out);
    return true;
  }
  function note(f, at, dur, amp) {
    const a = ctx.createOscillator(), b = ctx.createOscillator(), g = ctx.createGain(), g2 = ctx.createGain();
    a.type = "sine"; a.frequency.value = f; b.type = "triangle"; b.frequency.value = f * 2.004; g2.gain.value = .14;
    b.connect(g2); g2.connect(g); a.connect(g);
    g.gain.setValueAtTime(.0001, at); g.gain.linearRampToValueAtTime(amp, at + .018);
    g.gain.exponentialRampToValueAtTime(.0001, at + dur);
    g.connect(out); g.connect(wet);
    a.start(at); b.start(at); a.stop(at + dur + .05); b.stop(at + dur + .05);
  }
  function pad2(fs, at, dur) {
    fs.forEach((f, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter();
      o.type = "triangle"; o.frequency.value = f / 2; o.detune.value = i % 2 ? 4 : -4;
      lp.type = "lowpass"; lp.frequency.value = 700;
      g.gain.setValueAtTime(.0001, at); g.gain.linearRampToValueAtTime(.028, at + 1.1);
      g.gain.setValueAtTime(.028, at + dur - 1.2); g.gain.exponentialRampToValueAtTime(.0001, at + dur);
      o.connect(lp); lp.connect(g); g.connect(out); g.connect(wet); o.start(at); o.stop(at + dur + .05);
    });
  }
  function sched() {
    if (!on) return;
    const c = CH[bar % 4], step = BAR / PAT.length, at = next;
    pad2([hz(c[0]), hz(c[2])], at, BAR);
    PAT.forEach((p, i) => note(hz(c[p] + (i >= 4 ? 12 : 0)), at + i * step, 2.6, .075));
    if (bar % 2) note(hz(c[3] + 24), at + step * 5.5, 3.4, .03);
    bar++; next += BAR;
    tmr = setTimeout(sched, Math.max(60, (next - ctx.currentTime - .5) * 1000));
  }
  return {
    prepare,
    start(v) {
      if (!ctx && !prepare()) return false;
      if (on) return true;
      on = true; bar = 0; next = ctx.currentTime + .15;
      out.gain.cancelScheduledValues(ctx.currentTime);
      out.gain.setValueAtTime(.0001, ctx.currentTime);
      out.gain.linearRampToValueAtTime(v, ctx.currentTime + 3.5);
      sched(); return true;
    },
    stop() {
      if (!on) return;
      on = false; clearTimeout(tmr);
      out.gain.cancelScheduledValues(ctx.currentTime);
      out.gain.setValueAtTime(out.gain.value, ctx.currentTime);
      out.gain.linearRampToValueAtTime(.0001, ctx.currentTime + .8);
    },
    get playing() { return on; }
  };
})();

const audio = $("#audio"), mus = $("#music");
let mode = null;
function fadeIn() {
  let v = 0;
  const id = setInterval(() => {
    if (mode !== "file" || audio.paused) { clearInterval(id); return; }
    v = Math.min(CONFIG.musicVolume, v + .022);
    try { audio.volume = v; } catch (e) {}
    if (v >= CONFIG.musicVolume) clearInterval(id);
  }, 130);
}
function toSynth() { mode = "synth"; Synth.start(CONFIG.musicVolume * .5); mus.classList.add("on"); }
function startMusic() {
  Synth.prepare();
  if (mode === "synth") return toSynth();
  if (mode === "file") { audio.play().catch(() => {}); fadeIn(); mus.classList.add("on"); return; }
  if (!CONFIG.music) return toSynth();
  let done = false;
  const fail = () => { if (!done) { done = true; toSynth(); } };
  audio.addEventListener("canplay", () => { if (!done) { done = true; mode = "file"; fadeIn(); } }, { once: true });
  audio.addEventListener("error", fail, { once: true });
  try { audio.volume = 0; } catch (e) {}
  const pr = audio.play();
  if (pr && pr.catch) pr.catch(fail);
  mus.classList.add("on");
  setTimeout(fail, 2500);
}
function stopMusic() {
  if (mode === "synth") Synth.stop(); else { try { audio.pause(); } catch (e) {} }
  mus.classList.remove("on");
}
$("#musicBtn").addEventListener("click", () => {
  const playing = mode === "synth" ? Synth.playing : (mode === "file" && !audio.paused);
  playing ? stopMusic() : startMusic();
});

/* ============ TILAKLAR DEVORI ============ */
const KEY = "taklifnoma_klassik_tilaklar";
let mine = [];
try { const a = JSON.parse(localStorage.getItem(KEY)); if (Array.isArray(a)) mine = a; } catch (e) {}
function renderWall(fresh) {
  const all = mine.concat(CONFIG.seedWishes).filter(w => w && w.msg);
  $("#wall").innerHTML = all.map((w, i) =>
    '<div class="wish' + (fresh && i === 0 ? " fresh" : "") + '" style="animation-delay:' + Math.min(i * .05, .6) + 's">' +
    "<p>“" + esc(w.msg) + "”</p><b>— " + esc(w.name || "Mehmon") + "</b></div>").join("");
}
function addWish(name, msg) {
  if (!msg) return;
  mine.unshift({ name: name, msg: msg });
  try { localStorage.setItem(KEY, JSON.stringify(mine.slice(0, 60))); } catch (e) {}
  renderWall(true);
}

/* ============ R.S.V.P. ============ */
$("#rsvpForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const name = (f.get("name") || "").trim();
  const msg = (f.get("msg") || "").trim();
  const yes = f.get("attend") === "yes";
  if (!name) return;
  addWish(name, msg);

  const text = t("rTitle") + "\n" +
    t("rName") + ": " + name + "\n" +
    t("rAns") + ": " + (yes ? t("rYes") : t("rNo")) + "\n" +
    (yes ? t("rCount") + ": " + f.get("guests") + "\n" : "") +
    (msg ? t("rMsg") + ": " + msg : "");
  const enc = encodeURIComponent(text.trim());
  $("#sendTg").href = "https://t.me/" + encodeURIComponent(CONFIG.telegramUser) + "?text=" + enc;
  $("#sendWa").href = "https://wa.me/" + CONFIG.whatsappPhone + "?text=" + enc;
  $("#sendTg").hidden = !CONFIG.telegramUser;
  $("#sendWa").hidden = !CONFIG.whatsappPhone;
  // ikkalasi ham yo'q bo'lsa — "yuboring" so'zi ham chiqmasin
  $("#sent p").hidden = !CONFIG.telegramUser && !CONFIG.whatsappPhone;

  e.target.style.display = "none";
  $("#sent").classList.add("on");
  const r = $("#sent").getBoundingClientRect();
  burst(innerWidth / 2, Math.max(80, r.top + 40), 110);
});
$("#again").addEventListener("click", () => {
  $("#sent").classList.remove("on");
  const f = $("#rsvpForm");
  f.reset(); f.style.display = "";
});

/* ============ MEHMONLAR KITOBI ============ */
$("#bookForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const name = (f.get("name") || "").trim(), msg = (f.get("msg") || "").trim();
  if (!name || !msg) return;
  addWish(name, msg);
  e.target.reset();
  $("#wall").scrollTo({ top: 0, behavior: "smooth" });
  const r = $("#wall").getBoundingClientRect();
  burst(innerWidth / 2, Math.max(80, r.top), 80);
});

/* ============ ISHGA TUSHIRISH ============ */
applyStatic();
let startLang = TEXTS[CONFIG.urlLang] ? CONFIG.urlLang : null;
if (!startLang) { try { startLang = localStorage.getItem("taklifnoma_lang"); } catch (e) {} }
applyLang(startLang || "uz");
tick(); setInterval(tick, 1000);
observe();

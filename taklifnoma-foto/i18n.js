/* =====================================================================
   UCH TIL — O'ZBEKCHA / RUSCHA / INGLIZCHA
   Matnni o'zgartirmoqchi bo'lsangiz, faqat shu fayldagi TEXTS ni
   tahrirlang. HTML ga tegish shart emas.
   {groom} va {bride} — ismlar avtomatik qo'yiladi.
   ===================================================================== */

const DEFAULT_LANG = "uz";   // taklifnoma qaysi tilda ochilsin: "uz" | "ru" | "en"
const AUTO_DETECT  = false;  // true — mehmon brauzeri tiliga qarab o'zi tanlaydi

const TEXTS = {

  uz: {
    greet:      "Aziz va qadrli insonimiz!",
    pre:        "Bismillahir Rohmanir Rohiym",
    heroSub:    "Turmush qurish marosimimizga sizni chin dildan taklif qilamiz",
    dayName:    "Shanba",
    monthYear:  "Oktabr 2026",
    scroll:     "Pastga suring",

    ayah:       "Sizlarga o'zingizdan juft yaratib, ularga xotirjam bo'lishingiz uchun o'rtangizda muhabbat va rahm-shafqat paydo qilgani ham Uning oyatlaridandir.",
    ayahSrc:    "Rum surasi, 21-oyat",

    familyTitle:"Taklif qiluvchilar",
    familySub:  "Farzandlarimiz baxtini siz bilan bo'lishishdan mamnunmiz",
    groomPar:   "Kuyov ota-onasi",
    bridePar:   "Kelin ota-onasi",
    groomLine:  "o'g'illari <b>{groom}</b>ning<br>to'y marosimiga",
    brideLine:  "qizlari <b>{bride}</b>ning<br>to'y marosimiga",

    countTitle: "Baxtli kungacha",
    d:"kun", h:"soat", m:"daqiqa", s:"soniya",
    countNote:  "Sizni kutib qolamiz",
    countToday: "Bugun bizning kunimiz — xush kelibsiz!",

    progTitle:  "Marosim dasturi",
    progSub:    "17-oktabr, shanba",
    p1t:"Nikoh o'qilishi",        p1d:"Jome masjidida, yaqin qarindoshlar ishtirokida",
    p2t:"Mehmonlarni kutib olish", p2d:"Registratsiya, fotozona va yengil gazaklar",
    p3t:"Kelin-kuyov kirishi",     p3d:"Rasmiy qism va ota-onalar duosi",
    p4t:"Ziyofat va kontsert",     p4d:"Milliy taomlar, jonli ijro va raqslar",
    p5t:"Tort va salyut",          p5d:"Kechaning eng shirin yakuni",

    venueTitle: "To'y manzili",
    venueAddr:  "Toshkent shahri, Yunusobod tumani, Amir Temur ko'chasi 108-uy",
    parking:    "Bepul parkovka",
    fromTime:   "17:30 dan",
    btnYandex:  "Yandex Xaritada ochish",
    btnGoogle:  "Google Maps",

    galTitle:   "Suratlarimiz",
    galSub:     "Birga o'tkazgan eng yorqin lahzalar",
    g1:"Birinchi uchrashuv", g2:"Fotiha kuni", g3:"Sayohatda",
    g4:"Uzuk taqish",        g5:"Oilamiz bilan", g6:"Biz",

    dressTitle: "Kiyim uslubi",
    dressSub:   "Bayramimiz ranglariga mos kiyinsangiz, suratlarimiz yanada chiroyli chiqadi",
    c1:"To'q zumrad", c2:"Oltin", c3:"Krem", c4:"Marsala",
    dressMini:  "Iltimos, oq rangdan (kelin rangi) voz keching",

    faqTitle:   "Muhim eslatmalar",
    q1:"Necha kishi bilan kelsam bo'ladi?",
    a1:"Taklifnomada ko'rsatilgan joylar soni bo'yicha. Tasdiqlash shaklida mehmonlar sonini yozib qoldirsangiz, stolni tayyorlab qo'yamiz.",
    q2:"Bolalar bilan borsak bo'ladimi?",
    a2:"Albatta. Bolalar uchun alohida burchak va shirinliklar tayyorlanadi — faqat sonini oldindan bildirsangiz kifoya.",
    q3:"Sovg'a haqida",
    a3:"Eng katta sovg'a — sizning ishtirokingiz. Agar sovg'a bermoqchi bo'lsangiz, yosh oila uchun konvert eng qulay variant bo'ladi.",
    q4:"Qachon yetib borish kerak?",
    a4:"Mehmonlarni 17:30 dan kutib olamiz. Rasmiy qism 18:30 da boshlanadi — shu vaqtgacha yetib kelishingizni so'raymiz.",
    q5:"Surat va videoga olish",
    a5:"Bemalol suratga oling. Faqat rasmiy qism paytida professional suratchilarga xalaqit bermaslikni so'raymiz.",

    rsvpTitle:  "Ishtirokni tasdiqlash",
    rsvpSub:    "Iltimos, <b>10-oktabr</b>gacha javob bering",
    lblName:    "Ism familiyangiz",
    phName:     "Masalan: Alisher Tursunov",
    lblSide:    "Kim tomondan",
    optGroom:   "Kuyov tomondan", optBride:"Kelin tomondan", optBoth:"Ikkala tomondan",
    lblGuests:  "Mehmonlar soni",
    rdYes:      "Albatta kelaman",
    rdNo:       "Afsus, kela olmayman",
    lblMsg:     "Tilak yoki izoh",
    phMsg:      "Yosh oilaga tilaklaringiz...",
    btnSend:    "Javobni yuborish",
    sentH:      "Rahmat, javobingiz qabul qilindi",
    sentP:      "Tilagingiz «Tilaklar devori»da paydo bo'ldi. Endi javobni bizga yuboring:",
    btnTg:      "Telegram orqali", btnWa:"WhatsApp orqali",
    again:      "Yana bir javob qo'shish",

    wishTitle:  "Tilaklar devori",
    wishSub:    "Mehmonlarimiz qoldirgan iliq so'zlar",
    wishCta:    "Siz ham tilak qoldiring →",

    contactTitle:"Savollaringiz bormi?",
    footDate:   "17 Oktabr 2026 · Toshkent",
    footThanks: "Bizning baxtli kunimizni siz bilan bo'lishishdan mamnunmiz",

    introLabel: "Siz uchun maxsus taklifnoma",
    introHint:  "Muhrni bosing",
    skip:       "O'tkazib yuborish →",
    band1:      "Ikki yurak — bir taqdir",
    band2:      "Sizni kutamiz"
  },

  ru: {
    greet:      "Дорогой и уважаемый гость!",
    pre:        "Бисмиллахир Рохманир Рохийм",
    heroSub:    "От всего сердца приглашаем вас на наше свадебное торжество",
    dayName:    "Суббота",
    monthYear:  "Октябрь 2026",
    scroll:     "Листайте вниз",

    ayah:       "Среди Его знамений — то, что Он сотворил для вас жён из вас самих, чтобы вы находили в них покой, и установил между вами любовь и милосердие.",
    ayahSrc:    "Сура Ар-Рум, аят 21",

    familyTitle:"Приглашают",
    familySub:  "Мы счастливы разделить радость наших детей вместе с вами",
    groomPar:   "Родители жениха",
    bridePar:   "Родители невесты",
    groomLine:  "приглашают на свадьбу<br>своего сына <b>{groom}</b>",
    brideLine:  "приглашают на свадьбу<br>своей дочери <b>{bride}</b>",

    countTitle: "До счастливого дня",
    d:"дней", h:"часов", m:"минут", s:"секунд",
    countNote:  "Будем рады видеть вас",
    countToday: "Сегодня наш день — добро пожаловать!",

    progTitle:  "Программа торжества",
    progSub:    "17 октября, суббота",
    p1t:"Никох",                  p1d:"В соборной мечети, в кругу близких",
    p2t:"Встреча гостей",         p2d:"Регистрация, фотозона и лёгкие закуски",
    p3t:"Выход молодожёнов",      p3d:"Официальная часть и благословение родителей",
    p4t:"Банкет и концерт",       p4d:"Национальные блюда, живая музыка и танцы",
    p5t:"Торт и салют",           p5d:"Самый сладкий финал вечера",

    venueTitle: "Место проведения",
    venueAddr:  "г. Ташкент, Юнусабадский район, ул. Амира Темура, 108",
    parking:    "Бесплатная парковка",
    fromTime:   "с 17:30",
    btnYandex:  "Открыть в Яндекс Картах",
    btnGoogle:  "Google Maps",

    galTitle:   "Наши фотографии",
    galSub:     "Самые яркие моменты, прожитые вместе",
    g1:"Первая встреча", g2:"День помолвки", g3:"В путешествии",
    g4:"Кольца",         g5:"С нашими семьями", g6:"Мы",

    dressTitle: "Дресс-код",
    dressSub:   "Если ваш наряд будет в тон нашему празднику, фотографии получатся ещё красивее",
    c1:"Тёмно-изумрудный", c2:"Золотой", c3:"Кремовый", c4:"Марсала",
    dressMini:  "Просим воздержаться от белого — это цвет невесты",

    faqTitle:   "Полезно знать",
    q1:"Сколько человек можно взять с собой?",
    a1:"По количеству мест, указанному в приглашении. Укажите число гостей в форме — и мы подготовим стол.",
    q2:"Можно ли прийти с детьми?",
    a2:"Конечно. Для детей будет отдельная зона и сладости — просто сообщите их количество заранее.",
    q3:"О подарках",
    a3:"Лучший подарок — ваше присутствие. Если всё же хотите что-то подарить, конверт для молодой семьи будет самым удобным.",
    q4:"Во сколько нужно приехать?",
    a4:"Встречаем гостей с 17:30. Официальная часть начинается в 18:30 — просим приехать до этого времени.",
    q5:"Фото и видео",
    a5:"Снимайте на здоровье. Просим лишь не мешать профессиональным фотографам во время официальной части.",

    rsvpTitle:  "Подтверждение участия",
    rsvpSub:    "Пожалуйста, ответьте до <b>10 октября</b>",
    lblName:    "Имя и фамилия",
    phName:     "Например: Алишер Турсунов",
    lblSide:    "С чьей стороны",
    optGroom:   "Со стороны жениха", optBride:"Со стороны невесты", optBoth:"С обеих сторон",
    lblGuests:  "Количество гостей",
    rdYes:      "Обязательно приду",
    rdNo:       "К сожалению, не смогу",
    lblMsg:     "Пожелание или комментарий",
    phMsg:      "Ваши пожелания молодой семье...",
    btnSend:    "Отправить ответ",
    sentH:      "Спасибо, ваш ответ принят",
    sentP:      "Ваше пожелание появилось на «Стене пожеланий». Теперь отправьте ответ нам:",
    btnTg:      "Через Telegram", btnWa:"Через WhatsApp",
    again:      "Добавить ещё один ответ",

    wishTitle:  "Стена пожеланий",
    wishSub:    "Тёплые слова наших гостей",
    wishCta:    "Оставьте и вы пожелание →",

    contactTitle:"Остались вопросы?",
    footDate:   "17 октября 2026 · Ташкент",
    footThanks: "Мы счастливы разделить этот день вместе с вами",

    introLabel: "Персональное приглашение",
    introHint:  "Нажмите на печать",
    skip:       "Пропустить →",
    band1:      "Два сердца — одна судьба",
    band2:      "Мы вас ждём"
  },

  en: {
    greet:      "Our dear and honoured guest!",
    pre:        "Bismillahir Rahmanir Raheem",
    heroSub:    "We warmly invite you to celebrate our wedding day with us",
    dayName:    "Saturday",
    monthYear:  "October 2026",
    scroll:     "Scroll down",

    ayah:       "And of His signs is that He created for you mates from among yourselves, that you may find tranquillity in them; and He placed between you affection and mercy.",
    ayahSrc:    "Surah Ar-Rum, verse 21",

    familyTitle:"With joy, our families",
    familySub:  "We are delighted to share our children's happiness with you",
    groomPar:   "The groom's parents",
    bridePar:   "The bride's parents",
    groomLine:  "invite you to the wedding<br>of their son <b>{groom}</b>",
    brideLine:  "invite you to the wedding<br>of their daughter <b>{bride}</b>",

    countTitle: "Until the big day",
    d:"days", h:"hours", m:"minutes", s:"seconds",
    countNote:  "We can't wait to see you",
    countToday: "Today is the day — welcome!",

    progTitle:  "Order of the day",
    progSub:    "Saturday, 17 October",
    p1t:"Nikah ceremony",     p1d:"At the Jome mosque, with our closest family",
    p2t:"Welcome reception",  p2d:"Check-in, photo corner and canapés",
    p3t:"The couple's entrance", p3d:"Formal welcome and our parents' blessing",
    p4t:"Dinner and music",   p4d:"Traditional dishes, live music and dancing",
    p5t:"Cake and fireworks", p5d:"The sweetest end to the evening",

    venueTitle: "The venue",
    venueAddr:  "108 Amir Temur Street, Yunusobod district, Tashkent",
    parking:    "Free parking",
    fromTime:   "from 17:30",
    btnYandex:  "Open in Yandex Maps",
    btnGoogle:  "Google Maps",

    galTitle:   "Our photographs",
    galSub:     "The brightest moments we have shared",
    g1:"Our first date", g2:"The engagement", g3:"Travelling",
    g4:"The rings",      g5:"With our families", g6:"Us",

    dressTitle: "Dress code",
    dressSub:   "If your outfit follows our palette, the photographs will be lovelier still",
    c1:"Deep emerald", c2:"Gold", c3:"Cream", c4:"Marsala",
    dressMini:  "Please avoid white — that one belongs to the bride",

    faqTitle:   "Good to know",
    q1:"How many people may I bring?",
    a1:"As many as your invitation lists. Tell us the number in the form below and your table will be ready.",
    q2:"May we bring the children?",
    a2:"Of course. There will be a corner and sweets just for them — simply let us know how many are coming.",
    q3:"About gifts",
    a3:"Your presence is the greatest gift. If you would still like to give something, an envelope for the young family is the easiest.",
    q4:"When should we arrive?",
    a4:"We welcome guests from 17:30. The formal part begins at 18:30, so please arrive before then.",
    q5:"Photos and video",
    a5:"Do take photographs. We only ask that you leave the professionals room to work during the formal part.",

    rsvpTitle:  "Will you join us?",
    rsvpSub:    "Please reply by <b>10 October</b>",
    lblName:    "Your name",
    phName:     "For example: Alisher Tursunov",
    lblSide:    "Whose guest are you",
    optGroom:   "The groom's side", optBride:"The bride's side", optBoth:"Both",
    lblGuests:  "Number of guests",
    rdYes:      "I'll be there",
    rdNo:       "Sadly, I can't make it",
    lblMsg:     "A wish or a note",
    phMsg:      "Your wishes for the couple...",
    btnSend:    "Send my reply",
    sentH:      "Thank you — your reply is in",
    sentP:      "Your wish is now on the Wall of Wishes. Now send the reply to us:",
    btnTg:      "Via Telegram", btnWa:"Via WhatsApp",
    again:      "Add another reply",

    wishTitle:  "Wall of wishes",
    wishSub:    "Warm words from our guests",
    wishCta:    "Leave your own wish →",

    contactTitle:"Any questions?",
    footDate:   "17 October 2026 · Tashkent",
    footThanks: "We are so happy to share this day with you",

    introLabel: "A personal invitation",
    introHint:  "Press the seal",
    skip:       "Skip →",
    band1:      "Two hearts, one story",
    band2:      "We'll be waiting"
  }
};

/* --- selektor -> kalit (bitta element) --- */
const T_ONE = {
  ".hero .greet": "greet",
  ".hero .pre": "pre",
  ".hero-sub": "heroSub",
  ".hero-date span:first-child": "dayName",
  ".hero-date span:last-child": "monthYear",
  ".scroll-cue": "scroll",

  ".ayah": "ayah",
  ".ayah-src": "ayahSrc",

  "#s-oila .title": "familyTitle",
  "#s-oila .subtitle": "familySub",

  "#s-vaqt .title": "countTitle",
  "#countNote": "countNote",

  "#s-dastur .title": "progTitle",
  "#s-dastur .subtitle": "progSub",

  "#s-manzil .title": "venueTitle",
  ".venue-addr": "venueAddr",
  "#mapYandex": "btnYandex",
  "#mapGoogle": "btnGoogle",

  "#s-galereya .title": "galTitle",
  "#s-galereya .subtitle": "galSub",

  "#s-dress .title": "dressTitle",
  "#s-dress .subtitle": "dressSub",
  ".mini": "dressMini",

  "#s-faq .title": "faqTitle",

  "#s-rsvp .title": "rsvpTitle",
  "#s-rsvp .subtitle": "rsvpSub",
  "#rsvpForm button[type=submit]": "btnSend",
  "#sent h3": "sentH",
  "#sent p": "sentP",
  "#sendTg": "btnTg",
  "#sendWa": "btnWa",
  "#againBtn": "again",

  "#s-tilak .title": "wishTitle",
  "#s-tilak .subtitle": "wishSub",
  ".wish-cta a": "wishCta",

  "#s-aloqa .title": "contactTitle",
  ".foot-date": "footDate",
  ".foot-thanks": "footThanks",

  ".sp-label": "introLabel",
  ".sp-hint": "introHint",
  "#skipBtn": "skip",
  ".pb1 .pb-quote": "band1",
  ".pb2 .pb-quote": "band2"
};

/* --- selektor -> kalitlar ro'yxati (ko'p element) --- */
const T_MANY = {
  ".card-cap":        ["groomPar", "bridePar"],
  ".card > p":        ["groomLine", "brideLine"],
  ".cbox span":       ["d", "h", "m", "s"],
  ".prog-item h3":    ["p1t", "p2t", "p3t", "p4t", "p5t"],
  ".prog-item p":     ["p1d", "p2d", "p3d", "p4d", "p5d"],
  ".venue-meta span": [null, "parking", "fromTime"],   // birinchisi — telefon raqami
  ".g figcaption":    ["g1", "g2", "g3", "g4", "g5", "g6"],
  ".sw span":         ["c1", "c2", "c3", "c4"],
  ".fq > button":     ["q1", "q2", "q3", "q4", "q5"],
  ".fa p":            ["a1", "a2", "a3", "a4", "a5"],
  "#rsvpForm .row label": ["lblSide", "lblGuests"],
  ".rd span":         ["rdYes", "rdNo"],
  "select[name=side] option": ["optGroom", "optBride", "optBoth"]
};

/* --- matnni qo'yish: ichidagi ikonka/chiziqchani buzmaydi --- */
function setText(el, str) {
  if (!el || str == null) return;
  if (el.children.length && str.indexOf("<") === -1) {
    Array.from(el.childNodes).forEach(n => { if (n.nodeType === 3) n.remove(); });
    el.appendChild(document.createTextNode(str));
  } else if (/[<&]/.test(str)) {
    el.innerHTML = str;
  } else {
    el.textContent = str;
  }
}

/* label ichidagi faqat sarlavha matnini almashtiramiz (input tegilmaydi) */
function setLabel(el, str) {
  if (!el) return;
  const first = el.firstChild;
  if (first && first.nodeType === 3) first.nodeValue = str;
  else el.insertBefore(document.createTextNode(str), el.firstChild);
}

let LANG = "uz";

function applyLang(code) {
  const t = TEXTS[code] || TEXTS.uz;
  LANG = code;
  const fill = s => String(s)
    .replace(/\{groom\}/g, CONFIG.groom)
    .replace(/\{bride\}/g, CONFIG.bride);

  for (const sel in T_ONE) setText(document.querySelector(sel), fill(t[T_ONE[sel]]));

  for (const sel in T_MANY) {
    const els = document.querySelectorAll(sel);
    T_MANY[sel].forEach((key, i) => {
      if (key && els[i]) setText(els[i], fill(t[key]));
    });
  }

  // maxsus holatlar
  const nameLbl = document.querySelector("#rsvpForm label");
  if (nameLbl) { setLabel(nameLbl, t.lblName); nameLbl.querySelector("input").placeholder = t.phName; }
  const msgLbl = document.querySelectorAll("#rsvpForm > label")[1];
  if (msgLbl) { setLabel(msgLbl, t.lblMsg); msgLbl.querySelector("textarea").placeholder = t.phMsg; }

  document.documentElement.lang = code;
  document.querySelectorAll("#lang button").forEach(b =>
    b.classList.toggle("on", b.dataset.l === code));

  try { localStorage.setItem("taklifnoma_lang", code); } catch (e) {}
  if (typeof tickCount === "function") tickCount();
}

/* joriy tildagi "bugun" matni — app.js shundan foydalanadi */
function todayText() { return (TEXTS[LANG] || TEXTS.uz).countToday; }

/* --- til tugmalari va salomlashuv qatorini qo'shamiz --- */
(function initLang() {
  // bosh sahifaga murojaat qatori
  const pre = document.querySelector(".hero .pre");
  if (pre && !document.querySelector(".hero .greet")) {
    const g = document.createElement("p");
    g.className = "greet rv";
    pre.parentNode.insertBefore(g, pre);
  }

  const box = document.createElement("div");
  box.className = "lang";
  box.id = "lang";
  box.innerHTML = ["en", "uz", "ru"]
    .map(c => '<button type="button" data-l="' + c + '">' + c.toUpperCase() + "</button>").join("");
  document.body.appendChild(box);
  box.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (b) applyLang(b.dataset.l);
  });

  let saved = null;
  try { saved = localStorage.getItem("taklifnoma_lang"); } catch (e) {}
  if (!saved) {
    if (AUTO_DETECT) {
      const n = (navigator.language || "").slice(0, 2).toLowerCase();
      saved = n === "ru" ? "ru" : (n === "en" ? "en" : DEFAULT_LANG);
    } else {
      saved = DEFAULT_LANG;
    }
  }
  applyLang(saved);
})();

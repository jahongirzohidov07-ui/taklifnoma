# To'y taklifnomasi (FOTO versiya) — qo'llanma

Uch fayldan iborat: `index.html`, `style.css`, `app.js`.
Hech qanday o'rnatish kerak emas — faylni brauzerda ochsangiz ishlaydi.

## 1. Eng muhim: sozlamalar

`app.js` faylining eng yuqorisidagi **CONFIG** blokini o'zgartiring:

```js
const CONFIG = {
  groom: "Jasurbek",                      // kuyov ismi
  bride: "Mohinur",                       // kelin ismi
  dateISO: "2026-10-17T18:30:00+05:00",   // to'y sanasi va vaqti
  venue: "BAXT SAROYI to'yxonasi",        // to'yxona nomi
  address: "Toshkent, ... 108-uy",        // manzil (xaritada shu qidiriladi)
  telegramUser: "jasurbek",               // t.me/... (@ belgisiz)
  whatsappPhone: "998901234567",          // + belgisiz
  music: "music/nikoh.mp3",               // fon musiqasi
  meetText: "Baxt bilan!",                // uchrashuv paytidagi yozuv
  walkText: "Ikki yurak bir yo'lda uchrashdi..."
};
```

Qolgan matnlar (ota-onalar ismi, tarix, dastur, savollar, telefon raqamlar)
`index.html` ichida oddiy matn ko'rinishida turibdi — to'g'ridan-to'g'ri
tahrirlayvering. Har bir bo'lim `<!-- IZOH -->` bilan belgilangan.

## 2. Suratlar — ENG MUHIMI

Bu versiyada surat asosiy rol o'ynaydi. `images/` papkasiga uch dona
surat tashlang (nomlari aynan shunday bo'lsin):

| Fayl | Qayerda ko'rinadi | Tavsiya |
|------|-------------------|---------|
| `hero.jpg` | Ochilish mozaikasi + bosh sahifa foni | **Vertikal**, yuz aniq ko'rinsin, 1600x2000 atrofida |
| `foto1.jpg` | Birinchi keng surat lentasi | Gorizontal, 2000x1200 |
| `foto2.jpg` | Ikkinchi keng surat lentasi | Gorizontal, 2000x1200 |

Galereya uchun esa avvalgidek `1.jpg ... 6.jpg`.

**Surat qo'yilmasa sayt buzilmaydi** — o'rniga koshin naqshi ko'rinadi.
Ya'ni avval saytni joylab, suratlarni keyin qo'shsangiz ham bo'ladi.

Muhim: `hero.jpg` ustiga matn tushadi, shuning uchun yuzlar kadrning
markazida yoki pastida bo'lgani yaxshi. Fayl hajmi 1 MB dan oshmasin
(aks holda ochilish sekinlashadi) — tinyjpg.com da siqib oling.

## 3. Musiqa

Ikki rejim bor, avtomatik tanlanadi:

**A) O'zingizning mp3 faylingiz.** `music/` papkasiga tashlang va CONFIG dagi
`music:` nomini mos qiling. Fayl topilsa — o'sha chalinadi.

**B) Jonli musiqa (fayl bo'lmasa).** Taklifnomaning o'zi ohang yaratadi:
royal + arfa + torli asboblar, Fa major, sekin tempda, cheksiz takrorlanadi.
Hech qanday fayl yuklanmaydi (sayt tezroq ochiladi) va mualliflik huquqi
muammosi yo'q — bu ohang faqat shu taklifnomaniki.

Ovoz balandligi: CONFIG dagi `musicVolume` (0 dan 1 gacha).

### Musiqa o'z-o'zidan yoqiladimi?

**Yo'q.** Mehmon taklifnomani ochganda musiqa jim turadi — o'ng past
burchakdagi tugmani bosgandagina yoqiladi. Tugma taklifnoma ochilishi
bilanoq ko'rinadi va sekin jimirlab turadi, shuning uchun sezilmay
qolmaydi. Istalgan payt bosib o'chirish mumkin.

Agar aksincha, ochilishi bilan avtomatik yonishini xohlasangiz —
`app.js` dagi `musicAutoplay: false` ni `true` qiling.

## 4. Ochilish animatsiyasi — koshin mozaikasi

1. Yopiq taklifnoma — markazda oltin **girih muhri** (J & M)
2. Muhr bosilgach u oltin changga aylanadi
3. Ekranga **surat plitkalari** har tomondan uchib keladi — har biri
   aylanib, kichrayib-kattalashib o'z joyiga qo'nadi
4. Plitkalar **markazdan chetga qarab** navbat bilan yig'iladi,
   choklari oltin bo'lib yonib turadi — xuddi koshin panno kabi
5. Surat butun bo'lganda **yorug'lik chaqnaydi**, oltin choklar so'nadi
   va oltin uchqunlar sochiladi
6. Surat sekin kattalashadi (Ken Burns), ustida ismlar va
   **"Baxt bilan"** yozuvi paydo bo'ladi
7. Surat sahifa foniga **yumshoq o'tadi** — parda ochilmaydi, chunki
   bosh sahifaning foni ham aynan shu surat

Plitka o'lchamini `app.js` dagi `aim` qiymatidan (104 px), yig'ilish
tezligini `ASSEMBLE` (2700 ms) dan sozlaysiz.

## 5. Javoblar (RSVP)

Mehmon shaklni to'ldirganda javob brauzerda saqlanadi va **Telegram**
yoki **WhatsApp** tugmasi orqali sizga yuboriladi.
Tilaklar "Tilaklar devori" bo'limida ko'rinadi.

Tilaklar devorida doim ko'rinadigan namuna tilaklarni `app.js` dagi
`CONFIG.seedWishes` ro'yxatidan o'zgartirasiz.

> Eslatma: javoblar har bir mehmonning o'z telefonida saqlanadi —
> ularni yig'ib olish uchun Telegram/WhatsApp orqali kelgan xabarlardan
> foydalaning. Umumiy bazaga yozilishini xohlasangiz, Google Forms yoki
> Telegram bot ulash mumkin (ayting, qo'shib beraman).

## 6. Internetga joylash

Eng oson yo'li — uch faylni (va `images/`, `music/` papkalarini) shu
holicha quyidagilardan biriga tashlash:

- **Netlify Drop** — netlify.com/drop (papkani sudrab tashlang, 10 soniyada tayyor)
- **Vercel** — vercel.com
- **GitHub Pages**

Shundan keyin `sizningnom.netlify.app` ko'rinishidagi havolani
mehmonlarga tarqatasiz.

## 7. Bo'limlar ro'yxati

Bosh sahifa · Qur'on oyati · Surat lentasi · Taklif qiluvchilar ·
Sanoq (countdown) · Marosim dasturi · Manzil va xarita · Suratlar ·
Kiyim uslubi · Surat lentasi · Muhim eslatmalar (savol-javob) · Ishtirokni tasdiqlash ·
Tilaklar devori · Aloqa

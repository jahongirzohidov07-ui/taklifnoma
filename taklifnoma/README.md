# To'y taklifnomasi — qo'llanma

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

## 2. Suratlar

`images/` papkasiga **1.jpg … 6.jpg** nomli suratlarni tashlang.
Surat qo'yilmasa, chiroyli bo'sh ramka ko'rinib turadi — sayt buzilmaydi.
Eng yaxshi format: vertikal (3:4), har biri 1–2 MB dan oshmasin.

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

## 4. Ochilish animatsiyasi qanday ishlaydi

1. Yopiq taklifnoma — markazda oltin **muhr** (J & M monogrammasi)
2. Muhr bosilgach u oltin changga aylanadi
3. Ikki **oltin uzuk** chap va o'ng tomondan bir-biriga qarab uchib keladi,
   orqasidan oltin chang izi qoladi
4. O'rtada **bir-biriga ilashadi** — nur portlaydi, oltin uchqunlar sochiladi
5. Atrofida **girih yulduzi** (koshin naqshi) o'z-o'zidan chizilib chiqadi,
   sakkiz uchida olmoslar ochiladi, uzuklar ichida
   J va M harflari paydo bo'ladi
6. Ismlar va **"Baxt bilan"** yozuvi chiqadi
7. Taklifnoma ikkiga bo'linib ochiladi va asosiy sahifa ko'rinadi

Tezlikni o'zgartirmoqchi bo'lsangiz — `app.js` dagi `openInvitation()`
va `lock()` funksiyalaridagi millisekundlarni sozlang.

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

Bosh sahifa · Qur'on oyati · Taklif qiluvchilar ·
Sanoq (countdown) · Marosim dasturi · Manzil va xarita · Suratlar ·
Kiyim uslubi · Muhim eslatmalar (savol-javob) · Ishtirokni tasdiqlash ·
Tilaklar devori · Aloqa

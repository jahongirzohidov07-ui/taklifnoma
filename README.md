# To'y taklifnomasi — ikki variant

Statik sayt. Build qilish, o'rnatish kerak emas — `index.html` ni ochsangiz ishlaydi.

| Papka | Ochilish animatsiyasi |
|---|---|
| [`toyga-marhamat/`](toyga-marhamat/) | Ikki oltin uzuk uchib kelib bir-biriga ilashadi, girih yulduzi chiziladi |
| [`toyga-marhamat-foto/`](toyga-marhamat-foto/) | Kelin-kuyov surati koshin plitkalaridan yig'iladi, surat sayt foni bo'lib qoladi |

Ikkalasida ham: milliy dizayn (Samarqand koshini — ko'k/feruza/oltin, girih, islimi, ravoq),
uch til (UZ / RU / EN), 12 bo'lim, sanoq, xarita, galereya, RSVP forma, tilaklar devori,
fon musiqasi (fayl bo'lmasa brauzerning o'zi chaladi).

## Yangi taklifnoma yaratish — admin panel

**`admin.html`** ni oching → ismlar, sana, to'yxona, telefonlar, musiqani kiriting →
**«Tayyor»** → tayyor havola chiqadi:

```
https://amnnd331-prog.github.io/taklifnoma/toyga-marhamat/?kuyov=Jasurbek&kelin=Mohinur&sana=...
```

Havolani nusxalash, Telegram/WhatsApp orqali yuborish va bosma taklifnoma uchun
QR kod — o'sha sahifaning o'zida. Har bir to'y uchun alohida fayl yoki kod
o'zgartirish **kerak emas**: barcha ma'lumot havolaning ichida.

Mehmonlarning javoblari kiritilgan Telegram/WhatsApp raqamiga keladi.

## Qo'lda sozlash (ixtiyoriy)

Har bir papkada:

- **`app.js`** — yuqoridagi `CONFIG` bloki: ismlar, sana, to'yxona, telefon, Telegram
- **`i18n.js`** — uchala tildagi barcha matnlar
- **`images/`** — suratlar (`1.jpg … 6.jpg`; foto versiyada qo'shimcha `hero.jpg`, `foto1.jpg`, `foto2.jpg`)
- **`music/`** — ixtiyoriy mp3

Batafsil yo'riqnoma — har bir papkadagi `README.md`.

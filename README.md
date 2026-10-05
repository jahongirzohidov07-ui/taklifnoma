# To'y taklifnomasi — uch variant

Statik sayt. Build qilish, o'rnatish kerak emas — `index.html` ni ochsangiz ishlaydi.

| Papka | Ochilish animatsiyasi |
|---|---|
| [`toyga-marhamat/`](toyga-marhamat/) | Ikki oltin uzuk uchib kelib bir-biriga ilashadi, girih yulduzi chiziladi |
| [`toyga-marhamat-foto/`](toyga-marhamat-foto/) | Kelin-kuyov surati koshin plitkalaridan yig'iladi, surat sayt foni bo'lib qoladi |
| [`toyga-marhamat-klassik/`](toyga-marhamat-klassik/) | Klassik oq-oltin: to'liq ekranli surat, surib ochiladigan qulf, kalendar, mehmonlar kitobi |

Ikkalasida ham: milliy dizayn (Samarqand koshini — ko'k/feruza/oltin, girih, islimi, ravoq),
uch til (UZ / RU / EN), 12 bo'lim, sanoq, xarita, galereya, RSVP forma, tilaklar devori,
fon musiqasi (fayl bo'lmasa brauzerning o'zi chaladi).

## Yangi taklifnoma yaratish — admin panel

**`/admin/`** ni oching → ismlar, sana, to'yxona, telefonlar, suratlar va musiqani kiriting →
**«Tayyor»**. Mijozga boradigan havola faqat juftlik ismidan iborat bo'ladi:

```
https://jahongirzohidov07-ui.github.io/taklifnoma/javohir-sevinch/
```

Telegram/WhatsApp'da bu havola juftlik ismi, sana va surati bilan chiroyli ko'rinadi.
Havolani nusxalash, yuborish va bosma taklifnoma uchun QR kod — o'sha sahifaning o'zida.

### Suratlar va musiqa — telefondan yoki havola bilan

Ikkala usul ham ishlaydi, aralashtirsa ham bo'ladi:

- **📷 / 🎵 telefondan tanlash** — admin panelga bir marta GitHub kaliti qo'yiladi
  (yo'riqnoma panelning o'zida). Rasmlar avtomatik siqiladi (eng uzun tomoni 1600px),
  hammasi `uploads/<juftlik>/` papkasiga bitta commit bilan yoziladi va qisqa havola
  ham o'zi faollashadi.
- **havola** — imgbb.com, Google Drive yoki Dropbox. Har bir havola darhol tekshiriladi,
  ochilmagan surat bilan havola yasalmaydi.

Kalit qo'yilmagan bo'lsa ham panel ishlaydi: qisqa havola uchun GitHub'da bitta
«Commit changes» tugmasini bosish kifoya.

Mehmonlarning javoblari kiritilgan Telegram/WhatsApp raqamiga keladi.

## Qo'lda sozlash (ixtiyoriy)

Har bir papkada:

- **`app.js`** — yuqoridagi `CONFIG` bloki: ismlar, sana, to'yxona, telefon, Telegram
- **`i18n.js`** — uchala tildagi barcha matnlar
- **`images/`** — suratlar (`1.jpg … 6.jpg`; foto versiyada qo'shimcha `hero.jpg`, `foto1.jpg`, `foto2.jpg`)
- **`music/`** — ixtiyoriy mp3

Batafsil yo'riqnoma — har bir papkadagi `README.md`.

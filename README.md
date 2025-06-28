# 🇮🇩 IndoJS - JavaScript dengan Sintaks Indonesia

[![npm version](https://badge.fury.io/js/indojs.svg)](https://badge.fury.io/js/indojs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**IndoJS** adalah package JavaScript yang memungkinkan Anda menulis kode JavaScript menggunakan sintaks bahasa Indonesia. Dibuat khusus untuk membantu programmer Indonesia yang ingin belajar coding dengan bahasa yang lebih familiar dan mudah dipahami.

## 🎯 Tujuan

- 📚 **Mempermudah pembelajaran** programming untuk pemula Indonesia
- 🌍 **Localization** JavaScript ke bahasa Indonesia  
- 🚀 **Meningkatkan aksesibilitas** coding bagi non-English speakers
- 🎓 **Mendukung pendidikan** programming di Indonesia

## 📦 Instalasi

```bash
npm install indojs
```

## 🚀 Penggunaan

```javascript
// Import IndoJS
require("indojs");

// Gunakan sintaks Indonesia!
konsol.log("Halo Dunia!");

if (benar) {
  konsol.log("Ini blok jika benar");
} else {
  konsol.log("Ini blok jika tidak");
}
```

## 📖 Sintaks yang Didukung

### Console & Output
- `konsol` → `console`

### Nilai Dasar
- `benar` → `true`
- `salah` → `false`
- `kosong` → `null`
- `tidak_terdefinisi` → `undefined`

### Array Methods
- `dorong` → `push`
- `keluarkan` → `pop`
- `potong` → `slice`
- `gabung` → `join`

### String Methods
- `huruf_besar` → `toUpperCase`
- `huruf_kecil` → `toLowerCase`
- `ganti` → `replace`
- `pisah` → `split`

### Math
- `matematika` → `Math`
- `bulat` → `round`
- `acak` → `random`
- `maksimum` → `max`
- `minimum` → `min`

### Date & JSON
- `tanggal` → `Date`
- `json` → `JSON`

## 💡 Contoh Lengkap

```javascript
require("indojs");

// Array dengan method Indonesia
let daftarNama = ["Andi", "Budi"];
daftarNama.dorong("Citra");
konsol.log("Daftar:", daftarNama.gabung(", "));

// String Indonesia
let pesan = "Halo Indonesia";
konsol.log("Huruf besar:", pesan.huruf_besar());

// Math Indonesia
konsol.log("Angka bulat:", matematika.bulat(3.7));
konsol.log("Angka acak:", matematika.acak());
```

## 🧪 Demo

```bash
node examples/demo.js
```

## 📜 Lisensi

MIT License

## 👨‍💻 Author

Jiilan Nashrulloh Tanjung - Erazorre Teknologi Bandung

## 🙏 Acknowledgments

- Terinspirasi dari kebutuhan komunitas developer Indonesia
- Dibuat dengan ❤️ untuk kemajuan teknologi Indonesia
- Terima kasih untuk semua kontributor dan pengguna IndoJS!

## 📞 Support & Komunitas

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/Erazorre-Teknologi-Bandung/indojs/issues)
- 💬 **Diskusi**: [GitHub Discussions](https://github.com/Erazorre-Teknologi-Bandung/indojs/discussions)
- 📧 **Email**: support@erazorre.com

---

⭐ **Jangan lupa berikan star jika IndoJS membantu Anda!**

**#JavaScriptIndonesia #CodingIndonesia #IndoJS** 
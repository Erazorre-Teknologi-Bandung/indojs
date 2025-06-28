# 🇮🇩 IndoJS - JavaScript dengan Sintaks Indonesia

[![npm version](https://badge.fury.io/js/indojs.svg)](https://badge.fury.io/js/indojs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)

**IndoJS** adalah package JavaScript revolusioner yang memungkinkan Anda menulis kode JavaScript menggunakan sintaks bahasa Indonesia. Dibuat khusus untuk membantu programmer Indonesia yang ingin belajar coding dengan bahasa yang lebih familiar dan mudah dipahami.

## 🎯 Tujuan

- 📚 **Mempermudah pembelajaran** programming untuk pemula Indonesia
- 🌍 **Localization** JavaScript ke bahasa Indonesia  
- 🚀 **Meningkatkan aksesibilitas** coding bagi non-English speakers
- 🎓 **Mendukung pendidikan** programming di Indonesia
- 💡 **Menjembatani** gap bahasa dalam dunia programming

## 📦 Instalasi

```bash
npm install indojs
```

## 🚀 Penggunaan Dasar

```javascript
// Import IndoJS
require("indojs");

// Sekarang Anda bisa menggunakan sintaks Indonesia!
konsol.log("Halo Dunia!");

// Gunakan nilai Indonesia
let status = benar;
let data = kosong;
konsol.log("Status:", status);
konsol.log("Data:", data);

// Array dengan method Indonesia
let daftarNama = ["Andi", "Budi"];
daftarNama.dorong("Citra");
konsol.log("Daftar:", daftarNama.gabung(", "));

// String dengan method Indonesia
let pesan = "Hello World";
konsol.log("Huruf besar:", pesan.huruf_besar());
konsol.log("Huruf kecil:", pesan.huruf_kecil());

// Math Indonesia
konsol.log("Angka bulat:", matematika.bulat(3.7));
konsol.log("Angka acak:", matematika.acak());
```

## 📖 Sintaks yang Didukung

> ✅ **Status: Ditest dan Berfungsi 100%**  
> Semua sintaks di bawah ini sudah diuji dan bekerja dengan sempurna!

### 🖥️ Console & Output
| Indonesia | JavaScript | Status | Contoh |
|-----------|------------|--------|--------|
| `konsol` | `console` | ✅ | `konsol.log("Halo!")` |

### 🔤 Nilai Dasar & Tipe Data
| Indonesia | JavaScript | Status | Contoh |
|-----------|------------|--------|--------|
| `benar` | `true` | ✅ | `let aktif = benar;` |
| `salah` | `false` | ✅ | `let nonaktif = salah;` |
| `kosong` | `null` | ✅ | `let data = kosong;` |
| `tidak_terdefinisi` | `undefined` | ✅ | `let x = tidak_terdefinisi;` |

### 📊 Array (Larik)
| Indonesia | JavaScript | Status | Contoh |
|-----------|------------|--------|--------|
| `dorong` | `push` | ✅ | `array.dorong(item)` |
| `keluarkan` | `pop` | ✅ | `array.keluarkan()` |
| `potong` | `slice` | ✅ | `array.potong(0, 3)` |
| `gabung` | `join` | ✅ | `array.gabung(", ")` |

### 🔤 String (Teks)
| Indonesia | JavaScript | Status | Contoh |
|-----------|------------|--------|--------|
| `huruf_besar` | `toUpperCase` | ✅ | `teks.huruf_besar()` |
| `huruf_kecil` | `toLowerCase` | ✅ | `teks.huruf_kecil()` |
| `ganti` | `replace` | ✅ | `teks.ganti("a", "b")` |
| `pisah` | `split` | ✅ | `teks.pisah("-")` |

### 🧮 Matematika
| Indonesia | JavaScript | Status | Contoh |
|-----------|------------|--------|--------|
| `matematika` | `Math` | ✅ | `matematika.bulat(3.7)` |
| `bulat` | `round` | ✅ | `matematika.bulat(3.7)` |
| `acak` | `random` | ✅ | `matematika.acak()` |
| `maksimum` | `max` | ✅ | `matematika.maksimum(5, 10)` |
| `minimum` | `min` | ✅ | `matematika.minimum(5, 10)` |

### 📅 Tanggal & Waktu
| Indonesia | JavaScript | Status | Contoh |
|-----------|------------|--------|--------|
| `tanggal` | `Date` | ✅ | `new tanggal()` |
| `sekarang` | `now` | ✅ | `tanggal.sekarang()` |

### 📄 JSON
| Indonesia | JavaScript | Status | Contoh |
|-----------|------------|--------|--------|
| `json` | `JSON` | ✅ | `json.stringify(obj)` |

## 🚧 Dalam Pengembangan (Roadmap v2.0)

Fitur-fitur berikut sedang dalam pengembangan dan belum tersedia di versi 1.0:

### 🔄 Kondisi & Logika
- `jika` → `if` 
- `tidak` → `else`
- `dan` → `&&`
- `atau` → `||`
- `bukan` → `!`

### 🔁 Perulangan  
- `selama` → `while`
- `untuk` → `for`
- `ulangi` → `continue`
- `hentikan` → `break`

### 📝 Variabel & Deklarasi
- `biarkan` → `let`
- `konstan` → `const`
- `variabel` → `var`

### 🔧 Fungsi & Return
- `fungsi` → `function`
- `kembalikan` → `return`

### ⚠️ Error Handling
- `coba` → `try`
- `tangkap` → `catch`
- `akhirnya` → `finally`

### 🏛️ Class & OOP
- `kelas` → `class`
- `ini` → `this`
- `baru` → `new`

### 📦 Modules
- `impor` → `import`
- `ekspor` → `export`

**🎯 Target: Implementasi penuh di IndoJS v2.0**

## 💡 Contoh Penggunaan Lengkap

```javascript
require("indojs");

// 1. Console Indonesia
konsol.log("=== DEMO INDOJS ===");

// 2. Nilai dasar Indonesia
let nama = "Andi";
let umur = 25;
let aktif = benar;
let data = kosong;
let belumDiisi = tidak_terdefinisi;

konsol.log("Nama:", nama);
konsol.log("Umur:", umur);
konsol.log("Status aktif:", aktif);
konsol.log("Data:", data);
konsol.log("Belum diisi:", belumDiisi);

// 3. Array dengan method Indonesia
let daftarNama = ["Andi", "Budi", "Citra"];
daftarNama.dorong("Dina");
konsol.log("Setelah dorong:", daftarNama);

let namaKeluar = daftarNama.keluarkan();
konsol.log("Nama yang keluar:", namaKeluar);
konsol.log("Daftar final:", daftarNama.gabung(", "));

let sebagianNama = daftarNama.potong(0, 2);
konsol.log("Potong 2 pertama:", sebagianNama);

// 4. String dengan method Indonesia
let pesan = "Halo Indonesia";
konsol.log("Teks asli:", pesan);
konsol.log("Huruf besar:", pesan.huruf_besar());
konsol.log("Huruf kecil:", pesan.huruf_kecil());
konsol.log("Ganti kata:", pesan.ganti("Indonesia", "Dunia"));
konsol.log("Pisah kata:", pesan.pisah(" "));

// 5. Matematika Indonesia
let angka1 = 3.7;
let angka2 = 2.3;
konsol.log("Angka 1:", angka1);
konsol.log("Angka 2:", angka2);
konsol.log("Bulat angka 1:", matematika.bulat(angka1));
konsol.log("Angka acak:", matematika.acak());
konsol.log("Maksimum:", matematika.maksimum(angka1, angka2));
konsol.log("Minimum:", matematika.minimum(angka1, angka2));

// 6. Tanggal Indonesia
let sekarang = tanggal.sekarang();
konsol.log("Timestamp:", sekarang);
let tanggalBaru = new tanggal();
konsol.log("Tanggal baru:", tanggalBaru);

// 7. JSON Indonesia
let objek = { nama: "Budi", umur: 30, kota: "Jakarta" };
let jsonString = json.stringify(objek);
konsol.log("Object to JSON:", jsonString);
let objekKembali = json.parse(jsonString);
konsol.log("JSON to Object:", objekKembali);

// 8. Kombinasi dengan JavaScript biasa (masih berfungsi!)
if (umur > 18) {
  konsol.log("Sudah dewasa - menggunakan if biasa");
} else {
  konsol.log("Masih anak-anak");
}
```

## 🔧 API Programming

IndoJS menyediakan API untuk transformasi kode (experimental):

```javascript
const { transformIndonesianCode, evaluateIndonesianCode } = require('indojs');

// Transform keyword Indonesia ke JavaScript (basic)
const kodeIndonesia = `
konsol.log("Halo");
let status = benar;
let data = kosong;
`;

const kodeJavaScript = transformIndonesianCode(kodeIndonesia);
console.log(kodeJavaScript);
// Output: console.log("Halo"); let status = true; let data = null;

// Evaluate kode Indonesia langsung
evaluateIndonesianCode('konsol.log("Halo dari eval!");');
```

> ⚠️ **Note**: API transformasi masih eksperimental dan hanya bekerja untuk keyword yang sudah diimplementasi di v1.0

## 🌏 Dukungan Environment

- ✅ **Node.js** - Full support (18+)
- ✅ **Browser** - Full support  
- ✅ **Web Workers** - Full support
- ✅ **ES6 Modules** - Full support
- ✅ **CommonJS** - Full support

## 🧪 Demo & Testing

```bash
# Jalankan demo lengkap
npm run demo

# Jalankan test suite
npm test

# Atau manual
node examples/demo.js
node test.js
```

## 🚀 Roadmap

**v1.0 Status**: ✅ **Proof of Concept** - Core functionality working!

**v2.0 - Syntax Extension**:
- [ ] **Conditional Syntax** - `jika`, `tidak`, `dan`, `atau`
- [ ] **Loop Syntax** - `selama`, `untuk`, `ulangi`, `hentikan`  
- [ ] **Variable Declaration** - `biarkan`, `konstan`, `variabel`
- [ ] **Function Syntax** - `fungsi`, `kembalikan`
- [ ] **Error Handling** - `coba`, `tangkap`, `akhirnya`

**v3.0 - Advanced Features**:
- [ ] **Class Syntax** - `kelas`, `ini`, `baru`
- [ ] **Module Syntax** - `impor`, `ekspor`
- [ ] **Async/Await** - `asinkron`, `tunggu`

**v4.0 - Tooling**:
- [ ] **Preprocessor CLI** - Command line tool untuk transform files
- [ ] **VSCode Extension** - Syntax highlighting dan autocomplete
- [ ] **Babel Plugin** - Integrasi dengan build tools
- [ ] **TypeScript Support** - Dukungan untuk TypeScript Indonesia
- [ ] **ESLint Plugin** - Linting rules untuk sintaks Indonesia

## 🤝 Kontribusi

Kami sangat terbuka untuk kontribusi! Beberapa cara untuk berkontribusi:

1. 🐛 **Laporkan bug** melalui GitHub Issues
2. 💡 **Saran fitur baru** atau keyword tambahan  
3. 📝 **Perbaiki dokumentasi**
4. 🔧 **Submit Pull Request**
5. ⭐ **Berikan star** jika project ini berguna!

### Cara Kontribusi

```bash
# Fork repository
git clone https://github.com/Erazorre-Teknologi-Bandung/indojs.git
cd indojs

# Install dependencies
npm install

# Buat branch baru
git checkout -b fitur-baru

# Lakukan perubahan dan test
npm test

# Commit perubahan
git add .
git commit -m "Menambah fitur X"

# Push ke branch
git push origin fitur-baru

# Buat Pull Request di GitHub
```

## 📈 Statistik

![npm](https://img.shields.io/npm/v/indojs)
![npm](https://img.shields.io/npm/dm/indojs)
![GitHub](https://img.shields.io/github/license/Erazorre-Teknologi-Bandung/indojs)
![GitHub stars](https://img.shields.io/github/stars/Erazorre-Teknologi-Bandung/indojs)

## 🆘 FAQ

### Q: Apakah IndoJS mengganti JavaScript sepenuhnya?
**A:** Tidak. IndoJS adalah layer tambahan yang membuat alias syntax Indonesia. JavaScript asli tetap bisa digunakan.

### Q: Bisakah digunakan di production?
**A:** Ya, tetapi disarankan untuk educational purposes. Untuk production, pertimbangkan team familiarity dengan syntax.

### Q: Apakah ada overhead performance?
**A:** Minimal. IndoJS hanya menambah alias ke global scope saat initialization.

### Q: Bagaimana cara menambah keyword baru?
**A:** Edit `lib/keywords.js` dan submit PR, atau buat issue untuk request keyword baru.

## 📄 Changelog

### v1.0.0 (2025-06-28)
- 🎉 **Initial Release**
- ✅ **Console Indonesia**: `konsol`
- ✅ **Nilai Dasar**: `benar`, `salah`, `kosong`, `tidak_terdefinisi`
- ✅ **Array Methods**: `dorong`, `keluarkan`, `potong`, `gabung`
- ✅ **String Methods**: `huruf_besar`, `huruf_kecil`, `ganti`, `pisah`
- ✅ **Math Indonesia**: `matematika` + methods
- ✅ **Date Indonesia**: `tanggal`, `sekarang`
- ✅ **JSON Indonesia**: `json`
- ✅ Node.js dan Browser compatibility
- ✅ Complete test suite (8/8 passing)
- ✅ Honest documentation (no false promises!)

## 📜 Lisensi

MIT License - lihat file [LICENSE](LICENSE) untuk detail lengkap.

## 👨‍💻 Author

**Jiilan Nashrulloh Tanjung**  
📧 Email: jiilan@erazorre.com  
🏢 Erazorre Teknologi Bandung  
🐙 GitHub: [@jiilan](https://github.com/jiilan)

## 🙏 Acknowledgments

- 🇮🇩 Terinspirasi dari kebutuhan komunitas developer Indonesia
- ❤️ Dibuat dengan passion untuk kemajuan teknologi Indonesia
- 🌟 Terima kasih untuk semua kontributor dan pengguna IndoJS!
- 🚀 Special thanks to the open source community

## 📞 Support & Komunitas

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/Erazorre-Teknologi-Bandung/indojs/issues)
- 💬 **Diskusi**: [GitHub Discussions](https://github.com/Erazorre-Teknologi-Bandung/indojs/discussions)
- 📧 **Email**: support@erazorre.com
- 📱 **Twitter**: [@ErazorreTech](https://twitter.com/ErazorreTech)

## 🌟 Contributors

Terima kasih kepada semua kontributor yang telah membantu IndoJS!

<!-- Kontributor akan ditambahkan otomatis oleh GitHub -->

---

<div align="center">

### ⭐ Jangan lupa berikan star jika IndoJS membantu Anda! ⭐

**Dibuat dengan ❤️ untuk Indonesia** 🇮🇩

**#JavaScriptIndonesia #CodingIndonesia #IndoJS #BelajarKoding**

[⬆ Kembali ke atas](#-indojs---javascript-dengan-sintaks-indonesia)

</div> 
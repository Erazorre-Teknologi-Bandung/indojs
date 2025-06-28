/**
 * Demo penggunaan IndoJS - JavaScript dengan Sintaks Indonesia
 * Jalankan dengan: node examples/demo.js
 */

// Import package IndoJS
require('../index');

console.log('='.repeat(60));
console.log('🇮🇩 DEMO INDOJS - JAVASCRIPT DENGAN SINTAKS INDONESIA');
console.log('='.repeat(60));

// 1. Console Indonesia
console.log('\n📝 1. CONSOLE INDONESIA:');
konsol.log("Halo Dunia dari konsol Indonesia!");
konsol.log("Ini adalah console.log dalam bahasa Indonesia");

// 2. Variabel dengan nilai Indonesia
console.log('\n📝 2. VARIABEL INDONESIA:');
let kondisi = benar;
let status = salah;
let data = kosong;
let belumDiisi = tidak_terdefinisi;

konsol.log("benar =", kondisi);
konsol.log("salah =", status);
konsol.log("kosong =", data);
konsol.log("tidak_terdefinisi =", belumDiisi);

// 3. Array dengan method Indonesia
console.log('\n📝 3. ARRAY INDONESIA:');
let daftarNama = ["Andi", "Budi", "Citra"];
konsol.log("Array awal:", daftarNama);

daftarNama.dorong("Dina");
konsol.log("Setelah dorong:", daftarNama);

let namaKeluarnya = daftarNama.keluarkan();
konsol.log("Nama yang keluar:", namaKeluarnya);
konsol.log("Array setelah keluarkan:", daftarNama);

let sebagianNama = daftarNama.potong(0, 2);
konsol.log("Potong 2 nama pertama:", sebagianNama);

let namaGabung = daftarNama.gabung(", ");
konsol.log("Gabung dengan koma:", namaGabung);

// 4. String dengan method Indonesia
console.log('\n📝 4. STRING INDONESIA:');
let teks = "Halo Indonesia";
konsol.log("Teks asli:", teks);
konsol.log("Huruf besar:", teks.huruf_besar());
konsol.log("Huruf kecil:", teks.huruf_kecil());
konsol.log("Ganti 'Indonesia' dengan 'Dunia':", teks.ganti('Indonesia', 'Dunia'));

let kalimat = "Belajar-JavaScript-Indonesia";
let kata = kalimat.pisah('-');
konsol.log("Pisah dengan '-':", kata);

// 5. Math Indonesia
console.log('\n📝 5. MATEMATIKA INDONESIA:');
let angka1 = 3.7;
let angka2 = 2.3;

konsol.log("Angka 1:", angka1);
konsol.log("Angka 2:", angka2);
konsol.log("Bulat angka 1:", matematika.bulat(angka1));
konsol.log("Angka acak:", matematika.acak());
konsol.log("Maksimum:", matematika.maksimum(angka1, angka2));
konsol.log("Minimum:", matematika.minimum(angka1, angka2));

// 6. Date Indonesia
console.log('\n📝 6. TANGGAL INDONESIA:');
let waktuSekarang = tanggal.sekarang();
konsol.log("Waktu sekarang (timestamp):", waktuSekarang);

let tanggalSekarang = new tanggal();
konsol.log("Tanggal sekarang:", tanggalSekarang);

// 7. JSON Indonesia
console.log('\n📝 7. JSON INDONESIA:');
let objekData = {
  nama: "Budi",
  umur: 25,
  kota: "Jakarta"
};

let jsonString = json.stringify(objekData);
konsol.log("Object to JSON:", jsonString);

let objekKembali = json.parse(jsonString);
konsol.log("JSON to Object:", objekKembali);

// 8. Conditional dengan helper function
console.log('\n📝 8. KONDISI INDONESIA:');
let nilai = 85;

if (nilai > 80) {
  konsol.log("Nilai bagus!");
} else {
  konsol.log("Nilai perlu ditingkatkan.");
}

// 9. Contoh penggunaan dalam function
console.log('\n📝 9. FUNCTION INDONESIA:');
function sapaNama(nama) {
  if (nama) {
    konsol.log("Halo, " + nama + "!");
  } else {
    konsol.log("Halo, Teman!");
  }
}

sapaNama("Andi");
sapaNama();

// 10. Demonstrasi error handling
console.log('\n📝 10. ERROR HANDLING:');
try {
  let hasil = 10 / 0;
  konsol.log("Hasil pembagian:", hasil);
  
  // Simulasi error
  if (hasil === Infinity) {
    throw new Error("Pembagian dengan nol menghasilkan infinity");
  }
} catch (error) {
  konsol.log("Error tertangkap:", error.message);
}

console.log('\n' + '='.repeat(60));
console.log('🎉 DEMO SELESAI! IndoJS berhasil bekerja dengan baik!');
console.log('='.repeat(60)); 
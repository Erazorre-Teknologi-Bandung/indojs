/**
 * Test file untuk IndoJS package
 * Jalankan dengan: node test.js
 */

// Import IndoJS
require('./index');

console.log('🧪 TESTING INDOJS...\n');

let hasilTest = 0;
let totalTest = 0;

function test(nama, fn) {
    totalTest++;
    try {
        fn();
        console.log(`✅ ${nama}`);
        hasilTest++;
    } catch (error) {
        console.log(`❌ ${nama} - Error: ${error.message}`);
    }
}

// Test console Indonesia
test('Console Indonesia', () => {
    if (typeof konsol === 'undefined') {
        throw new Error('konsol tidak terdefinisi');
    }
    if (konsol !== console) {
        throw new Error('konsol bukan alias dari console');
    }
});

// Test nilai boolean Indonesia
test('Boolean Indonesia', () => {
    if (benar !== true) {
        throw new Error('benar bukan true');
    }
    if (salah !== false) {
        throw new Error('salah bukan false');
    }
});

// Test null dan undefined Indonesia
test('Null dan Undefined Indonesia', () => {
    if (kosong !== null) {
        throw new Error('kosong bukan null');
    }
    if (tidak_terdefinisi !== undefined) {
        throw new Error('tidak_terdefinisi bukan undefined');
    }
});

// Test Math Indonesia
test('Math Indonesia', () => {
    if (matematika !== Math) {
        throw new Error('matematika bukan Math');
    }
    if (typeof matematika.bulat !== 'function') {
        throw new Error('matematika.bulat bukan function');
    }
    if (matematika.bulat(3.7) !== 4) {
        throw new Error('matematika.bulat tidak bekerja');
    }
});

// Test Date Indonesia
test('Date Indonesia', () => {
    if (tanggal !== Date) {
        throw new Error('tanggal bukan Date');
    }
    if (typeof tanggal.sekarang !== 'function') {
        throw new Error('tanggal.sekarang bukan function');
    }
});

// Test JSON Indonesia
test('JSON Indonesia', () => {
    if (json !== JSON) {
        throw new Error('json bukan JSON');
    }
    const obj = { test: 'data' };
    const jsonStr = json.stringify(obj);
    if (typeof jsonStr !== 'string') {
        throw new Error('json.stringify tidak bekerja');
    }
});

// Test String methods Indonesia
test('String Methods Indonesia', () => {
    const teks = "Hello World";
    if (typeof teks.huruf_besar !== 'function') {
        throw new Error('String.prototype.huruf_besar tidak ada');
    }
    if (teks.huruf_besar() !== "HELLO WORLD") {
        throw new Error('huruf_besar tidak bekerja');
    }
    if (teks.huruf_kecil() !== "hello world") {
        throw new Error('huruf_kecil tidak bekerja');
    }
});

// Test Array methods Indonesia
test('Array Methods Indonesia', () => {
    const arr = [1, 2, 3];
    if (typeof arr.dorong !== 'function') {
        throw new Error('Array.prototype.dorong tidak ada');
    }
    
    arr.dorong(4);
    if (arr.length !== 4) {
        throw new Error('dorong tidak bekerja');
    }
    
    const keluar = arr.keluarkan();
    if (keluar !== 4 || arr.length !== 3) {
        throw new Error('keluarkan tidak bekerja');
    }
    
    const gabung = arr.gabung('-');
    if (gabung !== '1-2-3') {
        throw new Error('gabung tidak bekerja');
    }
});

// Hasil test
console.log('\n' + '='.repeat(40));
console.log(`📊 HASIL TEST: ${hasilTest}/${totalTest} berhasil`);
if (hasilTest === totalTest) {
    console.log('🎉 Semua test berhasil! IndoJS siap digunakan!');
} else {
    console.log('❌ Ada test yang gagal. Silakan periksa implementasi.');
}
console.log('='.repeat(40)); 
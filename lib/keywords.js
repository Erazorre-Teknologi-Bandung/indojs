/**
 * Mapping kata kunci bahasa Indonesia ke JavaScript
 */

const KEYWORDS_MAPPING = {
  // Console dan Output
  'konsol': 'console',
  
  // Kondisi dan Logika
  'jika': 'if',
  'tidak': 'else',
  'jika_tidak': 'else if',
  'benar': 'true',
  'salah': 'false',
  'kosong': 'null',
  'tidak_terdefinisi': 'undefined',
  
  // Loop dan Iterasi
  'selama': 'while',
  'untuk': 'for',
  'lakukan': 'do',
  'ulangi': 'continue',
  'hentikan': 'break',
  
  // Fungsi dan Return
  'fungsi': 'function',
  'kembalikan': 'return',
  'panah': '=>',
  
  // Variabel dan Deklarasi
  'biarkan': 'let',
  'konstan': 'const',
  'variabel': 'var',
  
  // Try Catch
  'coba': 'try',
  'tangkap': 'catch',
  'akhirnya': 'finally',
  'lempar': 'throw',
  
  // Objects dan Arrays
  'objek': 'Object',
  'larik': 'Array',
  'panjang': 'length',
  'dorong': 'push',
  'keluarkan': 'pop',
  'potong': 'slice',
  'gabung': 'join',
  
  // String Methods
  'teks': 'String',
  'huruf_besar': 'toUpperCase',
  'huruf_kecil': 'toLowerCase',
  'ganti': 'replace',
  'pisah': 'split',
  
  // Math dan Number
  'matematika': 'Math',
  'angka': 'Number',
  'bulat': 'round',
  'acak': 'random',
  'maksimum': 'max',
  'minimum': 'min',
  
  // Date dan Time
  'tanggal': 'Date',
  'sekarang': 'now',
  
  // Operators (untuk replacement text-based)
  'dan': '&&',
  'atau': '||',
  'bukan': '!',
  'sama_dengan': '===',
  'tidak_sama': '!==',
  'lebih_besar': '>',
  'lebih_kecil': '<',
  'lebih_besar_sama': '>=',
  'lebih_kecil_sama': '<=',
  
  // Async/Await
  'asinkron': 'async',
  'tunggu': 'await',
  
  // Import/Export
  'impor': 'import',
  'ekspor': 'export',
  'dari': 'from',
  'standar': 'default',
  
  // Class dan Inheritance
  'kelas': 'class',
  'meluas': 'extends',
  'super': 'super',
  'konstruktor': 'constructor',
  'ini': 'this',
  'baru': 'new',
  
  // JSON
  'json': 'JSON',
  'parse': 'parse',
  'stringify': 'stringify'
};

/**
 * Load dan return mapping kata kunci
 */
function loadKeywords() {
  return KEYWORDS_MAPPING;
}

/**
 * Get English equivalent dari kata Indonesia
 */
function getEnglishKeyword(indonesianWord) {
  return KEYWORDS_MAPPING[indonesianWord] || indonesianWord;
}

/**
 * Check apakah kata adalah keyword Indonesia
 */
function isIndonesianKeyword(word) {
  return KEYWORDS_MAPPING.hasOwnProperty(word);
}

module.exports = {
  KEYWORDS_MAPPING,
  loadKeywords,
  getEnglishKeyword,
  isIndonesianKeyword
}; 
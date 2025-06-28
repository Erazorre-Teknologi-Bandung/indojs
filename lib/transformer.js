/**
 * Core transformer untuk sintaks bahasa Indonesia
 */

const { getEnglishKeyword, isIndonesianKeyword } = require('./keywords');

/**
 * Setup global objects dengan sintaks Indonesia
 */
function setupIndonesianSyntax(keywords) {
  // Setup Console Indonesia
  setupConsoleIndonesia();
  
  // Setup Global Keywords
  setupGlobalKeywords(keywords);
  
  // Setup Built-in Objects
  setupBuiltinObjects(keywords);
  
  // Setup Global Functions
  setupGlobalFunctions(keywords);
}

/**
 * Setup konsol sebagai alias untuk console
 */
function setupConsoleIndonesia() {
  if (typeof global !== 'undefined') {
    // Node.js environment
    global.konsol = console;
  }
  
  if (typeof window !== 'undefined') {
    // Browser environment
    window.konsol = console;
  }
  
  // Make konsol available in current scope
  global.konsol = console;
}

/**
 * Setup global keywords dan constants
 */
function setupGlobalKeywords(keywords) {
  const globalScope = getGlobalScope();
  
  // Setup boolean dan null values
  globalScope.benar = true;
  globalScope.salah = false;
  globalScope.kosong = null;
  globalScope.tidak_terdefinisi = undefined;
  
  // Setup Math alias
  globalScope.matematika = Math;
  
  // Setup Date alias
  globalScope.tanggal = Date;
  
  // Setup JSON alias
  globalScope.json = JSON;
}

/**
 * Setup built-in objects dengan method Indonesia
 */
function setupBuiltinObjects(keywords) {
  // String methods
  if (typeof String.prototype.huruf_besar === 'undefined') {
    String.prototype.huruf_besar = String.prototype.toUpperCase;
    String.prototype.huruf_kecil = String.prototype.toLowerCase;
    String.prototype.ganti = String.prototype.replace;
    String.prototype.pisah = String.prototype.split;
  }
  
  // Array methods
  if (typeof Array.prototype.dorong === 'undefined') {
    Array.prototype.dorong = Array.prototype.push;
    Array.prototype.keluarkan = Array.prototype.pop;
    Array.prototype.potong = Array.prototype.slice;
    Array.prototype.gabung = Array.prototype.join;
    Array.prototype.panjang = Array.prototype.length;
  }
  
  // Math methods aliases
  if (typeof Math.bulat === 'undefined') {
    Math.bulat = Math.round;
    Math.acak = Math.random;
    Math.maksimum = Math.max;
    Math.minimum = Math.min;
  }
  
  // Date methods
  if (typeof Date.sekarang === 'undefined') {
    Date.sekarang = Date.now;
  }
}

/**
 * Setup global functions untuk sintaks Indonesia
 */
function setupGlobalFunctions(keywords) {
  const globalScope = getGlobalScope();
  
  // Fungsi helper untuk conditional
  globalScope.jika = function(kondisi, blokBenar, blokSalah) {
    if (kondisi) {
      return typeof blokBenar === 'function' ? blokBenar() : blokBenar;
    } else if (blokSalah) {
      return typeof blokSalah === 'function' ? blokSalah() : blokSalah;
    }
  };
  
  // Fungsi helper untuk loop
  globalScope.selama = function(kondisi, blok) {
    while (kondisi()) {
      blok();
    }
  };
  
  // Fungsi helper untuk creating functions
  globalScope.fungsi = function(nama, fn) {
    if (typeof nama === 'string') {
      globalScope[nama] = fn;
      return fn;
    } else {
      return nama; // If nama is actually the function
    }
  };
}

/**
 * Get global scope berdasarkan environment
 */
function getGlobalScope() {
  if (typeof global !== 'undefined') {
    return global; // Node.js
  }
  if (typeof window !== 'undefined') {
    return window; // Browser
  }
  if (typeof self !== 'undefined') {
    return self; // Web Workers
  }
  return {}; // Fallback
}

/**
 * Transform kode Indonesia ke JavaScript (untuk future use)
 */
function transformIndonesianCode(code) {
  let transformedCode = code;
  
  // Simple word replacement for basic keywords
  const keywords = require('./keywords').KEYWORDS_MAPPING;
  
  Object.keys(keywords).forEach(indonesianKeyword => {
    const englishKeyword = keywords[indonesianKeyword];
    
    // Use word boundaries to avoid partial replacements
    const regex = new RegExp(`\\b${indonesianKeyword}\\b`, 'g');
    transformedCode = transformedCode.replace(regex, englishKeyword);
  });
  
  return transformedCode;
}

/**
 * Evaluate Indonesian code
 */
function evaluateIndonesianCode(code) {
  const transformedCode = transformIndonesianCode(code);
  return eval(transformedCode);
}

module.exports = {
  setupIndonesianSyntax,
  setupConsoleIndonesia,
  setupGlobalKeywords,
  setupBuiltinObjects,
  setupGlobalFunctions,
  transformIndonesianCode,
  evaluateIndonesianCode,
  getGlobalScope
}; 
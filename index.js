/**
 * IndoJS - JavaScript dengan Sintaks Bahasa Indonesia
 * Entry point utama untuk package IndoJS
 */

const { setupIndonesianSyntax } = require('./lib/transformer');
const { loadKeywords } = require('./lib/keywords');

(function initializeIndoJS() {
  try {
    const keywords = loadKeywords();
    
    setupIndonesianSyntax(keywords);
    
    console.log('🇮🇩 IndoJS berhasil dimuat! Sekarang Anda bisa menggunakan sintaks Indonesia.'); // eslint-disable-line no-console
  } catch (error) {
    console.error('❌ Error saat memuat IndoJS:', error.message);
  }
})();

module.exports = {
  setupIndonesianSyntax,
  loadKeywords
}; 
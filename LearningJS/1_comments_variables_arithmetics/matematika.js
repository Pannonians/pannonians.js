/**
 * Sabiranje dva broja
 * @param {number} a prvi broj
 * @param {number} b drugi broj
 * @returns {number} broj koji je sabran
 */
function sabiranje(a, b) {
  // sabiramo dva broja i cuvamo vrednost
  // u varijabli
  let c = a + b;

  // ovde vracamo rezultat
  return c;
}

/**
 * Oduzimanje
 * @param {number} a broj od kojeg oduzimamo
 * @param {number} b vrednost koliko oduzimamo od broja a
 * @returns {number} vracamo vrednost a - b
 */
const oduzimanje = (a, b) => {
  // oduzimamo od broja a
  // vrednost broja b
  let d = a - b;

  // ovde vracamo rezultat
  return d;
};

module.exports = {
  sabiranje,
  oduzimanje,
};

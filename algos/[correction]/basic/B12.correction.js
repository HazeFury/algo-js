// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau de nombres
// et retourne un nouveau tableau contenant les carrés des nombres impairs uniquement.
//
// EXEMPLE :
// const nombres = [1, 2, 3, 4, 5];
//
// RESULTAT ATTENDU :
// console.log(carreDesImpairs(nombres));
//
// ==> [1, 9, 25]

/**
 * Fonction qui retourne les carrés des nombres impairs d'un tableau.
 * @param {Array<number>} nombres - Le tableau de nombres.
 * @returns {Array<number>} - Un tableau contenant les carrés des nombres impairs.
 */
//
//
function carreDesImpairs(nombres) {
  // Filtre les nombres impairs, puis calcule leur carré
  return nombres.filter((n) => n % 2 !== 0).map((n) => n ** 2);
}

module.exports = carreDesImpairs;

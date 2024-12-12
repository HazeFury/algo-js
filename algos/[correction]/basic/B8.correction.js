// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau de nombres et retourne
// un tableau contenant uniquement les nombres pairs triés par ordre croissant.
//
// EXEMPLE :
// const nombres = [5, 8, 3, 2, 10, 7, 4];
//
// RESULTAT ATTENDU :
// console.log(trierNombresPairs(nombres));
//
// ==> [2, 4, 8, 10]

/**
 * Fonction qui filtre et trie les nombres pairs d'un tableau.
 * @param {Array<number>} nombres - Le tableau de nombres à traiter.
 * @returns {Array<number>} - Un tableau contenant uniquement les nombres pairs triés par ordre croissant.
 */
//
//
function trierNombresPairs(nombres) {
  // Filtre les nombres pairs en utilisant le modulo (%).
  const nombresPairs = nombres.filter((nombre) => nombre % 2 === 0);

  // Trie les nombres pairs par ordre croissant.
  return nombresPairs.sort((a, b) => a - b);
}

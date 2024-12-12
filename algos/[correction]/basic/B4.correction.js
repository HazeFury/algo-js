// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau de nombres et retourne
// un nouveau tableau contenant uniquement les nombres pairs.

// EXEMPLE :
// const nombres = [1, 2, 3, 4, 5, 6];

// RESULTAT ATTENDU :
// console.log(filtrerNombresPairs(nombres));
//
// ==> [2, 4, 6]

/**
 * Fonction qui filtre les nombres pairs d'un tableau.
 * @param {Array<number>} nombres - Un tableau de nombres.
 * @returns {Array<number>} - Un tableau contenant uniquement les nombres pairs.
 */
//
//
function filtrerNombresPairs(nombres) {
  // Utilise la méthode filter pour garder uniquement les nombres pairs
  return nombres.filter((nombre) => nombre % 2 === 0);
}

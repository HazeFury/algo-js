// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau de nombres
// et retourne un tableau contenant uniquement les nombres premiers.
//
// Plus d'infos sur les nombres premiers :
// => https://fr.wikipedia.org/wiki/Nombre_premier
//
// EXEMPLE :
// const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// RESULTAT ATTENDU :
// console.log(filtrerNombresPremiers(nombres));
//
// ==> [2, 3, 5, 7]

/**
 * Fonction qui filtre les nombres premiers d'un tableau.
 * @param {Array<number>} nombres - Un tableau de nombres.
 * @returns {Array<number>} - Un tableau contenant uniquement les nombres premiers.
 */
//
//
function filtrerNombresPremiers(nombres) {
  return nombres.filter((n) => {
    if (n < 2) {
      return false; // Les nombres inférieurs à 2 ne sont pas premiers.
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false; // Si divisible par un nombre autre que 1 et lui-même.
      }
    }
    return true; // Si aucun diviseur trouvé, le nombre est premier.
  });
}

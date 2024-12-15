// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau de nombres
// et retourne un tableau où chaque nombre est remplacé par la somme de lui-même
// et de tous les nombres qui le précèdent dans le tableau.
//
// EXEMPLE :
// console.log(cumulerSommes([1, 2, 3, 4]));  ==>  [1, 3, 6, 10]
// console.log(cumulerSommes([5, 10, 15]));   ==>  [5, 15, 30]
// console.log(cumulerSommes([0, -1, -2]));   ==>  [0, -1, -3]

/**
 * Fonction qui calcule les sommes cumulées d'un tableau.
 * @param {number[]} tableau - Tableau de nombres.
 * @returns {number[]} - Nouveau tableau avec les sommes cumulées.
 */
//
//
function cumulerSommes(tableau) {
  // Initialise une variable pour stocker la somme cumulée
  let sommeCumulée = 0;

  // Retourne un nouveau tableau avec les sommes cumulées
  return tableau.map((nombre) => {
    sommeCumulée += nombre; // Ajoute le nombre actuel à la somme cumulée
    return sommeCumulée; // Retourne la somme cumulée actuelle
  });
}

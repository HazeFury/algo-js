// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau d'entiers et retourne un tableau
// où chaque entier est remplacé par la somme de tous les autres entiers du tableau.
//
// EXEMPLE :
// console.log(remplacerParSommeDesAutres([1, 2, 3, 4]));
// Résultat attendu : [9, 8, 7, 6]
//
// console.log(remplacerParSommeDesAutres([5, 0, -5]));
// Résultat attendu : [-5, 0, 5]

/**
 * Fonction qui remplace chaque entier dans un tableau par la somme de tous les autres.
 * @param {number[]} tableau - Tableau d'entiers.
 * @returns {number[]} - Nouveau tableau avec les entiers remplacés.
 */
function remplacerParSommeDesAutres(tableau) {
  // Calculer la somme totale des éléments du tableau
  const sommeTotale = tableau.reduce((acc, valeur) => acc + valeur, 0);

  // Remplacer chaque élément par la somme des autres
  return tableau.map((valeur) => sommeTotale - valeur);
}

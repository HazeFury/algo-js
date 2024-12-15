// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau de chaînes de caractères
// et retourne un nouveau tableau où chaque chaîne est inversée.
//
// EXEMPLE :
// console.log(inverserChaines(["bonjour", "algorithme", "javascript"]));
// Résultat attendu : ["ruojnob", "emhtirogla", "tpircsavaj"]
//
// console.log(inverserChaines(["123", "abc", ""]));
// Résultat attendu : ["321", "cba", ""]

/**
 * Fonction qui inverse les chaînes de caractères d'un tableau.
 * @param {string[]} tableau - Tableau de chaînes de caractères.
 * @returns {string[]} - Nouveau tableau avec les chaînes inversées.
 */
//
//
function inverserChaines(tableau) {
  return tableau.map((chaine) => {
    // Divise la chaîne en caractères, les inverse, puis les rejoint
    return chaine.split("").reverse().join("");
  });
}

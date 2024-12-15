// ENNONCE :
// Écrire une fonction qui prend en entrée une chaîne de caractères contenant des parenthèses,
// et retourne true si la chaîne contient une séquence valide de parenthèses, et false sinon.
//
// Une séquence valide respecte les règles suivantes :
// 1. Chaque parenthèse ouvrante '(' a une parenthèse fermante ')' correspondante.
// 2. Les parenthèses fermantes ne peuvent pas précéder une parenthèse ouvrante.
//
// EXEMPLE :
// console.log(verifierParentheses("(())")); // true
// console.log(verifierParentheses("(()"));  // false
// console.log(verifierParentheses(")("));   // false
// console.log(verifierParentheses("()()")); // true

/**
 * Fonction qui vérifie si une chaîne contient une séquence valide de parenthèses.
 * @param {string} chaine - La chaîne de caractères à vérifier.
 * @returns {boolean} - True si la séquence est valide, false sinon.
 */
//
//
function verifierParentheses(chaine) {
  // Initialise un compteur pour suivre les parenthèses ouvertes.
  let compteur = 0;

  // Parcourt chaque caractère de la chaîne.
  for (const char of chaine) {
    if (char === "(") {
      // Incrémente le compteur pour chaque parenthèse ouvrante.
      compteur++;
    } else if (char === ")") {
      // Décrémente le compteur pour chaque parenthèse fermante.
      compteur--;
      // Si le compteur devient négatif, il y a une parenthèse fermante sans correspondance.
      if (compteur < 0) {
        return false;
      }
    }
  }

  // Une séquence est valide si le compteur est à zéro après le parcours.
  return compteur === 0;
}

module.exports = verifierParentheses;

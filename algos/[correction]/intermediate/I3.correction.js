// ENNONCE :
// Écrire une fonction qui détermine si deux chaînes de caractères sont des anagrammes.
// Deux mots sont des anagrammes s'ils contiennent les mêmes lettres avec la même fréquence.
//
// EXEMPLE :
// console.log(sontAnagrammes("listen", "silent")); // true
// console.log(sontAnagrammes("hello", "world")); // false

/**
 * Fonction qui détermine si deux chaînes sont des anagrammes.
 * @param {string} chaine1 - La première chaîne de caractères.
 * @param {string} chaine2 - La seconde chaîne de caractères.
 * @returns {boolean} - True si les chaînes sont des anagrammes, sinon false.
 */
function sontAnagrammes(chaine1, chaine2) {
  // Nettoie les chaînes : supprime les espaces et met en minuscules
  const nettoyer = (chaine) => chaine.toLowerCase().replace(/\s+/g, "");

  const chaine1Nettoyee = nettoyer(chaine1);
  const chaine2Nettoyee = nettoyer(chaine2);

  // Si les longueurs diffèrent, ce ne sont pas des anagrammes
  if (chaine1Nettoyee.length !== chaine2Nettoyee.length) {
    return false;
  }

  // Trie les lettres et compare les chaînes
  const trier = (chaine) => chaine.split("").sort().join("");

  return trier(chaine1Nettoyee) === trier(chaine2Nettoyee);
}

module.exports = sontAnagrammes;

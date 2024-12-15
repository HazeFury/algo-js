// Correction I8
// ENNONCE :
// Écrire une fonction qui prend en entrée une chaîne de caractères représentant une phrase
// et retourne cette même phrase où chaque mot est inversé, tout en conservant l'ordre des mots.
//
// EXEMPLE :
// console.log(inverserMots("Bonjour tout le monde"));
// Résultat attendu : "ruojnoB tuot el ednom"
//
// console.log(inverserMots("JavaScript est génial"));
// Résultat attendu : "tpircSavaJ tse lainég"

/**
 * Fonction qui inverse chaque mot d'une phrase tout en conservant l'ordre des mots.
 * @param {string} phrase - Une chaîne de caractères représentant une phrase.
 * @returns {string} - La phrase transformée avec chaque mot inversé.
 */
//
//
function inverserMots(phrase) {
  // Découpe la phrase en mots en utilisant l'espace comme délimiteur.
  const mots = phrase.split(" ");

  // Inverse chaque mot individuellement.
  const motsInverses = mots.map((mot) => mot.split("").reverse().join(""));

  // Reconstitue la phrase avec les mots inversés.
  return motsInverses.join(" ");
}

// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau de chaînes de caractères
// et retourne le nombre total de voyelles dans toutes les chaînes combinées.
//
// EXEMPLE :
// const mots = ["Bonjour", "monde", "javascript"];
//
// RESULTAT ATTENDU :
// console.log(compterVoyelles(mots));
//
// ==> 11

/**
 * Fonction qui compte le nombre de voyelles dans un tableau de chaînes.
 * @param {Array<string>} mots - Un tableau de chaînes de caractères.
 * @returns {number} - Le nombre total de voyelles.
 */
function compterVoyelles(mots) {
  // Déclare les voyelles
  const voyelles = "aeiouy";

  // Initialise un compteur
  let totalVoyelles = 0;

  // Parcourt chaque mot du tableau
  mots.forEach((mot) => {
    // Parcourt chaque caractère du mot
    for (let char of mot.toLowerCase()) {
      // Vérifie si le caractère est une voyelle
      if (voyelles.includes(char)) {
        totalVoyelles++;
      }
    }
  });

  return totalVoyelles;
}

module.exports = compterVoyelles;

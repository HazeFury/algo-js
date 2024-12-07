// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau de mots et retourne
// un tableau contenant uniquement les mots qui commencent par une lettre majuscule.

// EXEMPLE :
// const mots = ["Bonjour", "soleil", "Lune", "étoile", "Mer"];

// RESULTAT ATTENDU :
// console.log(filtrerMotsMajuscule(mots));
//
// ==> ["Bonjour", "Lune", "Mer"]

/**
 * Fonction qui filtre les mots commençant par une lettre majuscule.
 * @param {Array<string>} mots - Un tableau contenant des mots sous forme de chaînes.
 * @returns {Array<string>} - Un tableau contenant uniquement les mots avec une majuscule au début.
 */
//
//
function filtrerMotsMajuscule(mots) {
  // Utilise la méthode filter pour garder uniquement les mots qui commencent par une majuscule.
  return mots.filter((mot) => /^[A-Z]/.test(mot));
}
//
//
// ------------------- ALTERNATIVE -----------------------
//
//

function filtrerMotsMajuscule2(mots) {
  // Initialise un tableau vide pour stocker les mots avec une majuscule
  const motsMajuscules = [];

  // Parcourt le tableau de mots
  for (let i = 0; i < mots.length; i++) {
    const mot = mots[i];

    // Vérifie si le premier caractère est une majuscule
    if (mot[0] >= "A" && mot[0] <= "Z") {
      // La condition mot[0] >= "A" && mot[0] <= "Z" vérifie si le premier caractère se situe entre A et Z dans la table ASCII.
      motsMajuscules.push(mot); // Ajoute le mot au tableau de résultats
    }
  }

  // Retourne le tableau final contenant uniquement les mots avec majuscule
  return motsMajuscules;
}

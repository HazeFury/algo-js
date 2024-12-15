// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau de nombres
// et retourne un tableau contenant uniquement les nombres uniques (sans doublons).
//
// EXEMPLE :
// const nombres = [1, 2, 2, 3, 4, 4, 5]

// RESULTAT ATTENDU :
// console.log(filtrerNombresUniques(nombres));
//
// ==> [1, 2, 3, 4, 5]

/**
 * Fonction qui filtre les doublons d'un tableau de nombres.
 * @param {number[]} nombres - Tableau de nombres.
 * @returns {number[]} - Nouveau tableau contenant uniquement les nombres uniques.
 */
//
//
function filtrerNombresUniques(nombres) {
  // Utilise un ensemble (Set) pour supprimer automatiquement les doublons
  const ensembleUniques = new Set(nombres);
  // Un objet Set ne stocke que des valeurs uniques, ce qui permet de supprimer les doublons automatiquement.

  // Array.from(ensembleUniques) permet de convertir le Set en tableau pour retourner le format attendu.
  return Array.from(ensembleUniques);
}

//
//
// ------------------- ALTERNATIVE -----------------------
//
//
function filtrerNombresUniques2(nombres) {
  // Initialise un tableau vide pour stocker les nombres uniques
  const uniques = [];

  // Parcourt chaque nombre dans le tableau d'entrée
  for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i];

    // Vérifie si le nombre n'est pas déjà dans le tableau des uniques
    if (!uniques.includes(nombre)) {
      uniques.push(nombre); // Ajoute le nombre si ce n'est pas un doublon
    }
  }

  return uniques; // Retourne le tableau final
}

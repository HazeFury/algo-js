// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau de nombres et retourne
// la moyenne de ces nombres.

// EXEMPLE :
// const nombres = [10, 20, 30, 40];

// RESULTAT ATTENDU :
// console.log(calculerMoyenne(nombres));
//
// ==> 25

/**
 * Fonction qui calcule la moyenne d'un tableau de nombres.
 * @param {Array<number>} nombres - Un tableau contenant des nombres.
 * @returns {number} - La moyenne des nombres. Retourne 0 si le tableau est vide.
 */
//
//
function calculerMoyenne(nombres) {
  // Vérifie si le tableau est vide
  if (nombres.length === 0) {
    return 0;
  }

  // Calcule la somme des éléments du tableau
  const somme = nombres.reduce(
    (accumulateur, nombre) => accumulateur + nombre,
    0
  );

  // Retourne la moyenne (somme divisée par le nombre d'éléments)
  return somme / nombres.length;
}
//
//
// ------------------- ALTERNATIVE -----------------------
//
//
function calculerMoyenne2(nombres) {
  // Vérifie si le tableau est vide
  if (nombres.length === 0) {
    return 0;
  }

  // Initialise une variable pour stocker la somme des nombres
  let somme = 0;

  // Parcourt chaque nombre du tableau et l'ajoute à la somme
  for (let i = 0; i < nombres.length; i++) {
    somme += nombres[i];
  }

  // Calcule et retourne la moyenne
  return somme / nombres.length;
}

// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau de nombres
// et retourne la somme des nombres impairs présents dans ce tableau.

// EXEMPLE :
// const nombres = [1, 2, 3, 4, 5, 6, 7];

// RESULTAT ATTENDU :
// console.log(sommeNombresImpairs(nombres));
//
// ==> 16 (1 + 3 + 5 + 7)

/**
 * Fonction qui calcule la somme des nombres impairs dans un tableau.
 * @param {Array<number>} nombres - Un tableau de nombres.
 * @returns {number} - La somme des nombres impairs.
 */
function sommeNombresImpairs(nombres) {
	// Initialise la somme à 0
	let somme = 0;

	// Parcourt chaque nombre du tableau
	for (let i = 0; i < nombres.length; i++) {
		// Vérifie si le nombre est impair
		if (nombres[i] % 2 !== 0) {
			// Ajoute le nombre impair à la somme
			somme += nombres[i];
		}
	}

	// Retourne la somme totale
	return somme;
}

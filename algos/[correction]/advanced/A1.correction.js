// ENNONCE :
// Écrire une fonction qui prend un tableau d'entiers et retourne le
// sous-tableau contenant la plus longue séquence d'entiers consécutifs.
//
// EXEMPLE :
// const nombres = [100, 4, 200, 1, 3, 2];
//
// RESULTAT ATTENDU :
// console.log(plusLongueSequence(nombres));
//
// ==> [1, 2, 3, 4]

/**
 * Fonction qui trouve la plus longue séquence d'entiers consécutifs.
 * @param {Array<number>} nombres - Le tableau d'entiers.
 * @returns {Array<number>} - Le sous-tableau avec la plus longue séquence.
 */
function plusLongueSequence(nombres) {
	if (nombres.length === 0) return [];

	// Convertir le tableau en ensemble pour des recherches rapides
	const setNombres = new Set(nombres);

	let meilleureSequence = [];

	// Parcourir chaque nombre pour détecter le début d'une séquence
	for (const num of setNombres) {
		// Si le nombre précédent n'existe pas, c'est le début d'une séquence
		if (!setNombres.has(num - 1)) {
			let currentNum = num;
			const currentSequence = [];

			// Construire la séquence consécutive
			while (setNombres.has(currentNum)) {
				currentSequence.push(currentNum);
				currentNum++;
			}

			// Mettre à jour la meilleure séquence trouvée
			if (currentSequence.length > meilleureSequence.length) {
				meilleureSequence = currentSequence;
			}
		}
	}

	return meilleureSequence.sort((a, b) => a - b); // Optionnel : trier pour un ordre croissant
}


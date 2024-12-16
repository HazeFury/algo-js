// ENNONCE :
// Écrire une fonction qui prend en entrée une chaîne de caractères
// et retourne `true` si elle est un palindrome (se lit de la même manière
// dans les deux sens, en ignorant la casse et les espaces), et `false` sinon.
//
// EXEMPLE :
// console.log(estPalindrome("Laval"));                       // true
// console.log(estPalindrome("Hello World"));                 // false
// console.log(estPalindrome("A man a plan a canal Panama")); // true

/**
 * Fonction qui vérifie si une chaîne de caractères est un palindrome.
 * @param {string} chaine - La chaîne à vérifier.
 * @returns {boolean} - `true` si la chaîne est un palindrome, sinon `false`.
 */
//
//
function estPalindrome(chaine) {
	// Convertit la chaîne en minuscules pour ignorer la casse.
	const chaineMinuscule = chaine.toLowerCase();

	// Supprime les espaces manuellement en construisant une nouvelle chaîne.
	let chaineNettoyee = "";
	for (let i = 0; i < chaineMinuscule.length; i++) {
		if (chaineMinuscule[i] !== " ") {
			chaineNettoyee += chaineMinuscule[i];
		}
	}

	// Vérifie si la chaîne nettoyée est égale à son inverse.
	const longueur = chaineNettoyee.length;
	for (let i = 0; i < Math.floor(longueur / 2); i++) {
		if (chaineNettoyee[i] !== chaineNettoyee[longueur - 1 - i]) {
			return false;
		}
	}

	return true;
}

//
//
// ------------------- ALTERNATIVE -----------------------
//
//

function estPalindrome2(chaine) {
	// Supprime les espaces et convertit tout en minuscules pour ignorer la casse à l'aide d'une Regex.
	const chaineNettoyee = chaine.replace(/\s+/g, "").toLowerCase();

	// Inverse la chaîne nettoyée.
	const chaineInversee = chaineNettoyee.split("").reverse().join("");

	// Compare la chaîne nettoyée et la chaîne inversée.
	return chaineNettoyee === chaineInversee;
}

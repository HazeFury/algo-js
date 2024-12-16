// ENNONCE :
// Écrire une fonction qui prend en entrée une chaîne de caractères et retourne
// cette chaîne inversée (les caractères dans l'ordre inverse).

// EXEMPLE :
// const mot = "javascript";

// RESULTAT ATTENDU :
// console.log(inverserChaine(mot));
//
// ==> "tpircsavaj"

/**
 * Fonction qui inverse une chaîne de caractères.
 * @param {string} chaine - La chaîne de caractères à inverser.
 * @returns {string} - La chaîne inversée.
 */
//
//
function inverserChaine(chaine) {
	// Transforme la chaîne en tableau, inverse le tableau, et le retransforme en chaîne.
	return chaine.split("").reverse().join("");
}

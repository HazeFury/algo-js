// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau de chaînes de caractères
// et retourne un tableau contenant uniquement les chaînes de longueur supérieure ou égale à 4 caractères.

// EXEMPLE :
// const mots = ["chat", "chien", "rat", "souris"];

// RESULTAT ATTENDU :
// console.log(filtrerMotsLongs(mots));
//
// ==> ["chat", "chien", "souris"]

/**
 * Fonction qui filtre les chaînes de longueur >= 4 caractères.
 * @param {Array<string>} mots - Un tableau de chaînes de caractères.
 * @returns {Array<string>} - Un tableau contenant uniquement les chaînes assez longues.
 */
//
//
function filtrerMotsLongs(mots) {
	// Utilise la méthode filter pour garder les chaînes avec une longueur >= 4
	return mots.filter((mot) => mot.length >= 4);
}

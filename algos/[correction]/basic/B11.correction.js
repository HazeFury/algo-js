// ENNONCE :
// Écrire une fonction qui prend en entrée une chaîne de caractères
// et retourne la même chaîne mais avec chaque mot commençant par une majuscule.
//
// EXEMPLE :
// const phrase = "bonjour tout le monde";
//
// RESULTAT ATTENDU :
// console.log(capitaliserMots(phrase));
//
// ==> "Bonjour Tout Le Monde"

/**
 * Fonction qui capitalise chaque mot d'une chaîne de caractères.
 * @param {string} phrase - La chaîne de caractères à transformer.
 * @returns {string} - La chaîne avec chaque mot capitalisé.
 */
function capitaliserMots(phrase) {
	// Sépare la chaîne en mots en utilisant les espaces comme séparateurs
	const mots = phrase.split(" ");

	// Transforme chaque mot pour commencer par une majuscule
	const motsCapitalises = mots.map((mot) => {
		if (mot.length === 0) return ""; // Ignore les mots vides
		return mot[0].toUpperCase() + mot.slice(1).toLowerCase();
	});

	// Rejoint les mots transformés en une seule chaîne
	return motsCapitalises.join(" ");
}

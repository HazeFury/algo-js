// ENNONCE :
// Écrire une fonction qui prend en entrée une chaîne de caractères et retourne une nouvelle chaîne
// où chaque mot a été trié par ordre alphabétique de ses lettres, tout en conservant l'ordre des mots dans la phrase.
//
// EXEMPLE :
// console.log(trierLettres("Bonjour tout le monde"));
// Résultat attendu : "Bjnooru ottu el demno"
//
// console.log(trierLettres("JavaScript est génial"));
// Résultat attendu : "JSaaciprt est aégiln"

/**
 * Fonction qui trie les lettres de chaque mot d'une phrase.
 * @param {string} phrase - Une chaîne de caractères représentant une phrase.
 * @returns {string} - La phrase avec chaque mot ayant ses lettres triées.
 */
function trierLettres(phrase) {
	// Découpe la phrase en mots, en utilisant l'espace comme séparateur.
	const mots = phrase.split(" ");

	// Trie les lettres de chaque mot.
	const motsTries = mots.map((mot) => {
		// Convertit le mot en tableau de caractères, trie les lettres, puis reconstitue le mot.
		return mot.split("").sort().join("");
	});

	// Reconstitue la phrase avec les mots triés.
	return motsTries.join(" ");
}

module.exports = trierLettres;

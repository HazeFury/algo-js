// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau d'objets représentant des étudiants,
// avec leur nom et leur note, et retourne un nouveau tableau trié par note décroissante.
//
// EXEMPLE :
// const etudiants = [
//     { nom: "Alice", note: 15 },
//     { nom: "Bob", note: 12 },
//     { nom: "Charlie", note: 18 }
// ];
//
// RESULTAT ATTENDU :
// console.log(trierEtudiantsParNote(etudiants));
//
// ==> [
//     { nom: "Charlie", note: 18 },
//     { nom: "Alice", note: 15 },
//     { nom: "Bob", note: 12 }
// ]

/**
 * Fonction qui trie un tableau d'étudiants par note décroissante.
 * @param {Array<{nom: string, note: number}>} etudiants - Un tableau d'objets représentant les étudiants.
 * @returns {Array<{nom: string, note: number}>} - Un tableau trié par note décroissante.
 */
//
//
function trierEtudiantsParNote(etudiants) {
	// Utilise la méthode sort pour trier par note décroissante
	return etudiants.sort((a, b) => b.note - a.note);
}

// ENNONCE :
// Écrire une fonction qui prend en entrée un tableau d'objets représentant
// des articles (prix hors taxes) et retourne le prix total TTC du panier,
// en appliquant une TVA de 20 %.

// EXEMPLE :
// const panier = [
//     { nom: 'Article 1', prix: 10 },
//     { nom: 'Article 2', prix: 20 },
//     { nom: 'Article 3', prix: 30 }
// ];

// RESULTAT ATTENDU :
// console.log(calculerTotalPanier(panier));
//
// ==> 72.00

/**
 * Fonction qui calcule le prix total TTC d'un panier d'articles.
 * @param {Array} panier - Un tableau d'objets représentant les articles du panier. Chaque objet contient :
 *                         - nom : le nom de l'article (string).
 *                         - prix : le prix hors taxes de l'article (number).
 * @returns {number} - Le prix total TTC du panier, arrondi à deux décimales.
 */
//
//
//
function calculerTotalPanier(panier) {
	// Déclare la constante pour la TVA (20 % sous forme décimale).
	const tva = 0.2;

	// Initialise la variable pour stocker le total TTC.
	let total = 0;

	// Parcourt chaque article du panier.
	panier.forEach((article) => {
		// Ajoute le prix TTC de l'article au total.
		total += article.prix * (1 + tva);
	});

	// Retourne le total arrondi à deux décimales.
	return Number.parseFloat(total.toFixed(2));
}

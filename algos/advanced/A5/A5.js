// ENONCE :
// Vous travaillez sur un logiciel de gestion de stock dans un supermarché.
// Le supermarché souhaite identifier les produits qui se vendent le plus, appelés "best-sellers".
// Un produit est considéré comme un "best-seller" s'il représente au moins 20 % des ventes totales.
//
// Écrire une fonction qui prend en entrée un tableau des quantités vendues pour chaque produit
// et retourne un tableau des indices des produits "best-sellers".
//
// CONTRAINTES :
// 1. Si aucun produit ne répond au critère, retourner un tableau vide.
// 2. Vous ne pouvez pas utiliser de bibliothèques tierces.
//
// EXEMPLE :
// const ventes = [75, 400, 50, 125];
// console.log(findBestSellers(ventes)); // Résultat attendu : [1]
//
// Produit 0 : 75 (~11 % des ventes totales)
// Produit 1 : 400 (~61 % des ventes totales) -> Best-seller
// Produit 2 : 50 (~8 % des ventes totales)
// Produit 3 : 125 (19 % des ventes totales)

/**
 * Fonction pour identifier les indices des produits "best-sellers"
 * @param {number[]} ventes - Tableau des quantités vendues
 * @returns {number[]} - Indices des produits best-sellers
 */
function findBestSellers(ventes) {
  // écris le code ici
  return ventes;
}

module.exports = findBestSellers;

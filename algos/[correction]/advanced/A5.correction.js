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
  const totalVentes = ventes.reduce((acc, val) => acc + val, 0);
  const seuil = totalVentes * 0.2;

  return ventes.reduce((result, vente, index) => {
    if (vente >= seuil) {
      result.push(index);
    }
    return result;
  }, []);
}

module.exports = findBestSellers;

// Explications détaillées :

// ==> étape 1 : calculer les ventes totales
// On utilise Array.prototype.reduce() pour calculer la somme totale des ventes.
// Exemple : [75, 400, 50, 125] donne un total de 650.

// ==> étape 2 : définir le seuil pour un best-seller
// Le seuil est fixé à 20 % du total des ventes. On le calcule avec `totalVentes * 0.2`.
// Exemple : Pour un total de 650, le seuil est de 650 * 0.2 = 130.

// ==> étape 3 : identifier les indices des best-sellers
// On parcourt chaque vente avec reduce() et on vérifie si elle dépasse ou égale le seuil.
// Si oui, on ajoute son indice au tableau de résultat.
// Exemple :
// - Produit 0 : 100 < 130 → pas un best-seller
// - Produit 1 : 300 ≥ 130 → best-seller → résultat = [1]
// - Produit 2 : 50 < 130 → pas un best-seller
// - Produit 3 : 150 ≥ 130 → best-seller

// ==> étape 4 : retourner le résultat
// Une fois tous les indices collectés, on retourne le tableau.

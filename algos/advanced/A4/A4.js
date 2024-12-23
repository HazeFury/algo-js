// ENONCE :
// Une entreprise de livraison dispose de plusieurs véhicules qui doivent transporter des colis.
// Chaque colis a un poids donné, et chaque véhicule a une capacité maximale.
//
// Écrire une fonction qui calcule le nombre minimal de véhicules nécessaires pour transporter tous les colis,
// en optimisant au mieux la répartition des colis entre les véhicules.
//
// CONTRAINTES :
// 1. Chaque colis doit être attribué à un unique véhicule.
// 2. Optimisez pour utiliser le moins de véhicules possible.
// 3. La somme des poids des colis dans un véhicule ne doit jamais dépasser sa capacité maximale.
// 4. Si un colis dépasse la capacité maximale d'un véhicule, renvoyer une erreur. Plus d'info :
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
//
// EXEMPLE :
// const colis = [10, 20, 30, 40, 50];
// const capaciteVehicule = 70;
// console.log(minimiserVehicules(colis, capaciteVehicule)); // Résultat attendu : 3
//
// Véhicule 1 : [50, 20] (total : 70)
// Véhicule 2 : [40, 30] (total : 70)
// Véhicule 3 : [10] (total : 10)

/**
 * Fonction pour minimiser le nombre de véhicules nécessaires
 * @param {number[]} colis - Tableau des poids des colis
 * @param {number} capacite - Capacité maximale de chaque véhicule
 * @returns {number} - Nombre minimal de véhicules nécessaires
 */
function minimiserVehicules(colis, capacite) {
  // écris le code ici
  return [colis, capacite];
}

module.exports = minimiserVehicules;

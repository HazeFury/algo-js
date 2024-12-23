// ENNONCE :
// Une entreprise souhaite optimiser l'utilisation de ses salles de réunion.
// Chaque réunion a un créneau horaire donné (heure de début et heure de fin),
// et il est possible que des réunions se chevauchent.
//
// Écrire une fonction qui prend en entrée une liste de réunions et retourne
// le nombre minimal de salles nécessaires pour que toutes les réunions puissent se tenir.
//
// Chaque réunion est représentée sous forme d'un objet avec deux propriétés :
// - debut : heure de début (en heures, 24h format)
// - fin : heure de fin (en heures, 24h format)
//
// EXEMPLE :
// const reunions = [
//     { debut: 9, fin: 10 },
//     { debut: 9.5, fin: 11 },
//     { debut: 11, fin: 12 },
//     { debut: 10.5, fin: 11.5 }
// ];
//
// console.log(calculerSallesNecessaires(reunions));
//
// ==> 2 (car deux salles sont nécessaires pour gérer les réunions en parallèle)
//
// CONTRAINTES :
// - La fonction doit gérer un nombre important de réunions (jusqu'à 10 000) avec des performances optimisées.
//
// Indices : utilisez des algorithmes de tri et des structures adaptées pour résoudre efficacement le problème.

function calculerSallesNecessaires(reunions) {
  // Écris le code ici
  return reunions;
}

module.exports = calculerSallesNecessaires;

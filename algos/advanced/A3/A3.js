// Planification optimale des tâches
// Une entreprise de logistique reçoit quotidiennement des demandes de livraison. Chaque demande est caractérisée par :

// Une heure de début.
// Une durée nécessaire pour réaliser la livraison.
// Chaque tâche doit être affectée à un seul employé, et un employé ne peut effectuer qu'une tâche à la fois. L'objectif est de minimiser le nombre d'employés nécessaires pour réaliser toutes les tâches.

// Votre mission :
// Écrire une fonction qui, à partir d'une liste de tâches, retourne le nombre minimal d'employés nécessaires.

// ENNONCE :
// Une entreprise reçoit des demandes de livraison, chacune définie par une heure de début et une durée.
// Écrire une fonction qui retourne le nombre minimal d'employés nécessaires pour gérer toutes les tâches.
//
// EXEMPLE :
// const taches = [
//     { debut: 9, duree: 2 },  // Livraison de 9h à 11h
//     { debut: 10, duree: 1 }, // Livraison de 10h à 11h
//     { debut: 11, duree: 2 }, // Livraison de 11h à 13h
//     { debut: 11.5, duree: 1 } // Livraison de 11h30 à 12h30
// ];
//
// console.log(minimiserEmployes(taches));
//
// ==> 2 (deux employés nécessaires).

function minimiserEmployes(taches) {
  // écris le code ici
  return taches;
}

module.exports = minimiserEmployes;

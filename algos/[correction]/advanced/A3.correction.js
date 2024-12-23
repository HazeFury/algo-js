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

/**
 * Fonction qui calcule le nombre minimal d'employés nécessaires
 * pour effectuer toutes les tâches dans une journée.
 * @param {Array} taches - Un tableau d'objets représentant les tâches. Chaque objet contient :
 *                         - debut : heure de début (nombre).
 *                         - duree : durée de la tâche (nombre).
 * @returns {number} - Le nombre minimal d'employés nécessaires.
 */
function minimiserEmployes(taches) {
  if (taches.length === 0) {
    return 0; // Aucun employé nécessaire si aucune tâche
  }

  // Étape 1 : Générer les événements "début" et "fin"
  const evenements = [];
  taches.forEach((tache) => {
    evenements.push({ heure: tache.debut, type: "debut" });
    evenements.push({ heure: tache.debut + tache.duree, type: "fin" });
  });

  // Étape 2 : Trier les événements par heure
  // En cas d'égalité : traiter les "fin" avant les "debut"
  evenements.sort((a, b) => {
    if (a.heure === b.heure) {
      return a.type === "fin" ? -1 : 1;
    }
    return a.heure - b.heure;
  });

  // Étape 3 : Parcourir les événements et calculer le chevauchement maximal
  let employesActuels = 0;
  let employesNecessaires = 0;

  evenements.forEach((event) => {
    if (event.type === "debut") {
      employesActuels++; // Une tâche commence
      employesNecessaires = Math.max(employesNecessaires, employesActuels);
    } else {
      employesActuels--; // Une tâche se termine
    }
  });

  return employesNecessaires;
}

// --------------------------------------------------------

// Explications détaillées
//
// ==> Étape 1 : Générer les événements
// Pour chaque tâche, on ajoute deux événements :

// Un événement de début à tache.debut.
// Un événement de fin à tache.debut + tache.duree.

// on part de ça :

// const taches = [
//     { debut: 9, duree: 2 },
//     { debut: 10, duree: 1 },
//     { debut: 11, duree: 2 },
//     { debut: 11.5, duree: 1 }
//   ];

// pour arriver à ça :

// [
//     { heure: 9, type: "debut" },
//     { heure: 11, type: "fin" },
//     { heure: 10, type: "debut" },
//     { heure: 11, type: "fin" },
//     { heure: 11, type: "debut" },
//     { heure: 13, type: "fin" },
//     { heure: 11.5, type: "debut" },
//     { heure: 12.5, type: "fin" }
//   ];

// ==> Étape 2 : Trier les événements
// Nous devons :

// Trier les événements par leur heure croissante.
// Si deux événements ont la même heure :
// Priorité aux événements de type fin (car une tâche terminée libère un employé).

// [
//     { heure: 9, type: "debut" },
//     { heure: 10, type: "debut" },
//     { heure: 11, type: "fin" },
//     { heure: 11, type: "fin" },
//     { heure: 11, type: "debut" },
//     { heure: 11.5, type: "debut" },
//     { heure: 12.5, type: "fin" },
//     { heure: 13, type: "fin" }
//   ];

// ==> Étape 3 : Calculer le chevauchement maximal
// Nous parcourons les événements en maintenant un compteur employesActuels :

// Lorsqu'une tâche commence (type: "debut"), on incrémente employesActuels.
// Lorsqu'une tâche se termine (type: "fin"), on décrémente employesActuels.
// À chaque pas, on met à jour employesNecessaires pour stocker le maximum atteint.

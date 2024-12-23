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

/**
 * Fonction qui calcule le nombre minimal de salles nécessaires
 * pour accueillir toutes les réunions sans chevauchement.
 * @param {Array} reunions - Liste des réunions avec les propriétés 'debut' et 'fin'.
 * @returns {number} - Nombre minimal de salles nécessaires.
 */
function calculerSallesNecessaires(reunions) {
  // Étape 1 : Extraire tous les événements "début" et "fin" des réunions.
  const evenements = [];
  reunions.forEach((reunion) => {
    evenements.push({ heure: reunion.debut, type: "debut" });
    evenements.push({ heure: reunion.fin, type: "fin" });
  });

  // Étape 2 : Trier les événements.
  // - Trier par heure croissante.
  // - Si deux événements ont la même heure, traiter d'abord les "fin" pour libérer une salle.
  evenements.sort((a, b) => {
    if (a.heure === b.heure) {
      return a.type === "fin" ? -1 : 1;
    }
    return a.heure - b.heure;
  });

  // Étape 3 : Parcourir les événements pour calculer le nombre maximal de salles nécessaires.
  let sallesActives = 0; // Nombre de salles en cours d'utilisation.
  let maxSalles = 0; // Nombre maximal de salles nécessaires.

  evenements.forEach((event) => {
    if (event.type === "debut") {
      // Une réunion commence : on utilise une salle.
      sallesActives++;
      maxSalles = Math.max(maxSalles, sallesActives);
    } else {
      // Une réunion se termine : on libère une salle.
      sallesActives--;
    }
  });

  // Retourner le nombre maximal de salles nécessaires.
  return maxSalles;
}

// EXPLICATION DE L'ALGO

// ==> Extraction des événements :
// On transforme chaque réunion en deux événements distincts : un pour l'heure de début et un pour l'heure de fin. Cela permet de traiter les réunions de manière ordonnée.

// ==> Tri des événements :
// Les événements sont triés par heure croissante. En cas d'égalité, les événements "fin" sont traités avant les événements "début" pour minimiser le nombre de salles utilisées.

// ==> Calcul des salles nécessaires :
// En parcourant la liste triée des événements, on incrémente un compteur lorsque nous rencontrons un événement "début" et on le décrémente pour un événement "fin". À chaque étape, on met à jour le maximum atteint.

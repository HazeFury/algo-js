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
  // Vérifier si un colis dépasse la capacité d'un véhicule
  if (colis.some((poids) => poids > capacite)) {
    throw new Error(
      "Un ou plusieurs colis dépassent la capacité maximale d'un véhicule."
    );
  }

  // Trier les colis par poids décroissant
  colis.sort((a, b) => b - a);

  // Initialiser les véhicules
  const vehicules = [];

  // Répartir les colis dans les véhicules
  colis.forEach((colis) => {
    let placeTrouvee = false;

    for (let i = 0; i < vehicules.length; i++) {
      if (vehicules[i] + colis <= capacite) {
        vehicules[i] += colis;
        placeTrouvee = true;
        break;
      }
    }

    if (!placeTrouvee) {
      vehicules.push(colis);
    }
  });

  // Retourner le nombre de véhicules nécessaires
  return vehicules.length;
}

// Explications détaillées

// ==> étape 1 : gestion des exeptions

// La méthode Array.prototype.some() vérifie si au moins un élément du tableau dépasse la capacité maximale.
// Si c'est le cas, une erreur est levée avec un message clair pour signaler le problème.

// Donc si un colis est trop lourd pour être transporté, la fonction s'arrête immédiatement au lieu d'essayer de continuer avec une solution invalide.

// ==> étape 2 : tri des colis par poids décroissant

// Cette étape place les colis les plus lourds en premier. L'idée est de s'occuper en priorité des colis les plus encombrants, car il est plus difficile de les "caser" dans un véhicule que des colis légers.
// Exemple : Si colis = [10, 20, 30, 40, 50], après tri, on obtient [50, 40, 30, 20, 10].

// ==> étape 3 : création d'une liste pour les véhicules

// Cette liste va contenir les poids totaux des colis assignés à chaque véhicule.
// Par exemple, si vehicules = [70, 70, 10], cela signifie qu'on utilise 3 véhicules, avec leurs charges respectives.

// étape 4 : placement des colis dans les véhicules

// - Initialisation de la variable placeTrouvee :

// Cette variable indique si on a trouvé un véhicule où placer le colis courant.

// - Parcours des véhicules existants :

// Pour chaque colis, on vérifie si son poids peut être ajouté à l'un des véhicules déjà existants sans dépasser la capacité maximale.
// Si oui, on l'ajoute au véhicule, et on sort de la boucle.

// - Créer un nouveau véhicule :

// Si aucun véhicule existant ne peut contenir le colis (placeTrouvee === false), on crée un nouveau véhicule pour ce colis.

// - Exemple :
// Colis triés : [50, 40, 30, 20, 10]

// Capacité : 70

// Colis 50 : Aucun véhicule, on crée le premier véhicule → vehicules = [50]
// Colis 40 : Ne rentre pas dans le véhicule 1, on crée un second véhicule → vehicules = [50, 40]
// Colis 30 : Rentre dans le véhicule 2 → vehicules = [50, 70]
// Colis 20 : Rentre dans le véhicule 1 → vehicules = [70, 70]
// Colis 10 : Ne rentre pas, on crée un troisième véhicule → vehicules = [70, 70, 10]

// ==> étape 5 : Retourner le résultat

// Après avoir placé tous les colis, le nombre de véhicules utilisés est simplement la taille du tableau vehicules.

#!/bin/bash

# Demander le nom de l'exercice
read -p "Nom de l'exercice (ex: B1) : " newExercice

# Créer les dossiers nécessaires
mkdir -p "./algos/basic/$newExercice"

# Créer le fichier de l'exercice
echo "// Exercice $newExercice\n\nfunction $newExercice() {\n  // Implémentez votre solution ici\n}" > "./algos/basic/$newExercice/$newExercice.js"

# Créer le fichier de test Jest
echo "const $newExercice = require('./$newExercice');\n\ndescribe('$newExercice', () => {\n  test('doit fonctionner', () => {\n    expect($newExercice()).toBe(/* valeur attendue */);\n  });\n});" > "./algos/basic/$newExercice/$newExercice.test.js"

# Créer le fichier de correction
echo "// Exercice $newExercice - Correction\n\nfunction $newExercice() {\n  // Implémentation de la solution\n  return /* résultat attendu */;\n}" > "./algos/[correction]/basic/$newExercice.correction.js"

echo "Les fichiers ont été créés avec succès dans ./algos/basic/$newExercice et ./algos/correction/basic."

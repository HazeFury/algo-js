#!/bin/bash

# Demander le niveau de difficulté
echo "==> Choisissez le niveau de difficulté :"
echo "1. basic"
echo "2. intermediate"
echo "3. advanced"
read -p "Entrez le numéro correspondant (1, 2 ou 3) : " niveau

# Associer le choix à une variable
case $niveau in
  1)
    difficulte="basic"
    ;;
  2)
    difficulte="intermediate"
    ;;
  3)
    difficulte="advanced"
    ;;
  *)
    echo "Erreur : choix invalide. Veuillez relancer le script."
    exit 1
    ;;
esac

# Demander le nom de l'exercice
read -p "==> Nom de l'exercice (ex: B1) : " newExercice

# Définir les chemins
dossierExercice="./algos/$difficulte/$newExercice"
fichierExercice="$dossierExercice/$newExercice.js"
fichierTest="$dossierExercice/$newExercice.test.js"
dossierCorrection="./algos/[correction]/$difficulte"
fichierCorrection="$dossierCorrection/$newExercice.correction.js"

# Vérifier si le dossier ou les fichiers existent déjà
if [ -d "$dossierExercice" ] || [ -e "$fichierExercice" ] || [ -e "$fichierTest" ] || [ -e "$fichierCorrection" ]; then
  echo "Erreur : Le dossier ou l'un des fichiers associés à '$newExercice' existe déjà."
  exit 1
fi

# Créer les dossiers nécessaires
mkdir -p "$dossierExercice"

# Créer le fichier de l'exercice
echo "// Exercice $newExercice" > "$fichierExercice"

# Créer le fichier de test Jest
echo "// Tests $newExercice" > "$fichierTest"

# Créer le fichier de correction
echo "// Correction $newExercice" > "$fichierCorrection"

echo "Les fichiers ont été créés avec succès dans $dossierExercice et $dossierCorrection."

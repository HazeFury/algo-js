// NE PAS MODIFIER CE FICHIER

const trierEtudiantsParNote = require("./B7");

describe("trierEtudiantsParNote", () => {
  test("trie correctement les étudiants par note décroissante", () => {
    const etudiants = [
      { nom: "Alice", note: 15 },
      { nom: "Bob", note: 12 },
      { nom: "Charlie", note: 18 },
    ];
    const resultatAttendu = [
      { nom: "Charlie", note: 18 },
      { nom: "Alice", note: 15 },
      { nom: "Bob", note: 12 },
    ];
    expect(trierEtudiantsParNote(etudiants)).toEqual(resultatAttendu);
  });

  test("gère un tableau vide", () => {
    expect(trierEtudiantsParNote([])).toEqual([]);
  });

  test("gère un tableau avec un seul étudiant", () => {
    const etudiants = [{ nom: "Alice", note: 15 }];
    expect(trierEtudiantsParNote(etudiants)).toEqual([
      { nom: "Alice", note: 15 },
    ]);
  });

  test("gère les étudiants avec des notes identiques", () => {
    const etudiants = [
      { nom: "Alice", note: 15 },
      { nom: "Bob", note: 15 },
      { nom: "Charlie", note: 15 },
    ];
    expect(trierEtudiantsParNote(etudiants)).toEqual(etudiants);
  });
});

// NE PAS MODIFIER CE FICHIER

const minimiserEmployes = require("./A3");

describe("minimiserEmployes", () => {
  test("calcule correctement le nombre minimal d'employés", () => {
    const taches = [
      { debut: 9, duree: 2 },
      { debut: 10, duree: 1 },
      { debut: 11, duree: 2 },
      { debut: 11.5, duree: 1 },
    ];
    expect(minimiserEmployes(taches)).toBe(2);
  });

  test("retourne 1 pour des tâches non chevauchantes", () => {
    const taches = [
      { debut: 9, duree: 2 },
      { debut: 11, duree: 1 },
      { debut: 13, duree: 2 },
    ];
    expect(minimiserEmployes(taches)).toBe(1);
  });

  test("retourne 0 pour une liste vide", () => {
    expect(minimiserEmployes([])).toBe(0);
  });

  test("gère les chevauchements complexes", () => {
    const taches = [
      { debut: 8, duree: 4 },
      { debut: 9, duree: 2 },
      { debut: 10, duree: 3 },
      { debut: 11, duree: 2 },
      { debut: 13, duree: 1 },
    ];
    expect(minimiserEmployes(taches)).toBe(3);
  });
});

// NE PAS MODIFIER CE FICHIER

const sommeNombresImpairs = require("./B6");

describe("sommeNombresImpairs", () => {
  test("calcule correctement la somme des nombres impairs", () => {
    const nombres = [1, 2, 3, 4, 5, 6, 7];
    expect(sommeNombresImpairs(nombres)).toBe(16); // 1 + 3 + 5 + 7
  });

  test("retourne 0 si aucun nombre impair n'est présent", () => {
    const nombres = [2, 4, 6, 8];
    expect(sommeNombresImpairs(nombres)).toBe(0);
  });

  test("retourne 0 pour un tableau vide", () => {
    expect(sommeNombresImpairs([])).toBe(0);
  });

  test("gère un tableau avec des nombres négatifs", () => {
    const nombres = [-3, -2, -1, 0, 1, 2];
    expect(sommeNombresImpairs(nombres)).toBe(-3); // -3 + 1 - 1
  });
});

// NE PAS MODIFIER CE FICHIER

const calculerMoyenne = require("./B3");

describe("calculerMoyenne", () => {
  test("calcule correctement la moyenne d'un tableau de nombres", () => {
    const nombres = [10, 20, 30, 40];
    expect(calculerMoyenne(nombres)).toBe(25);
  });

  test("retourne 0 pour un tableau vide", () => {
    expect(calculerMoyenne([])).toBe(0);
  });

  test("calcule correctement une moyenne avec des nombres décimaux", () => {
    const nombres = [1.5, 2.5, 3.5];
    expect(calculerMoyenne(nombres)).toBeCloseTo(2.5, 2);
  });

  test("calcule correctement une moyenne pour un tableau avec un seul élément", () => {
    const nombres = [42];
    expect(calculerMoyenne(nombres)).toBe(42);
  });
});

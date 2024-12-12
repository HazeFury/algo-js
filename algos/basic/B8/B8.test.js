// NE PAS MODIFIER CE FICHIER

const trierNombresPairs = require("./B8");

describe("trierNombresPairs", () => {
  test("renvoie uniquement les nombres pairs triés par ordre croissant", () => {
    const nombres = [5, 8, 3, 2, 10, 7, 4];
    const resultatAttendu = [2, 4, 8, 10];
    expect(trierNombresPairs(nombres)).toEqual(resultatAttendu);
  });

  test("gère un tableau contenant uniquement des nombres impairs", () => {
    const nombres = [1, 3, 5, 7];
    expect(trierNombresPairs(nombres)).toEqual([]);
  });

  test("gère un tableau vide", () => {
    expect(trierNombresPairs([])).toEqual([]);
  });

  test("gère un tableau avec des nombres pairs déjà triés", () => {
    const nombres = [2, 4, 6, 8];
    expect(trierNombresPairs(nombres)).toEqual([2, 4, 6, 8]);
  });

  test("gère un tableau avec des nombres négatifs", () => {
    const nombres = [-10, -3, -2, 4];
    const resultatAttendu = [-10, -2, 4];
    expect(trierNombresPairs(nombres)).toEqual(resultatAttendu);
  });
});

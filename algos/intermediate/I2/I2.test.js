// NE PAS MODIFIER CE FICHIER

const filtrerNombresPremiers = require("./I2");

describe("filtrerNombresPremiers", () => {
  test("filtre les nombres premiers d'un tableau", () => {
    const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultatAttendu = [2, 3, 5, 7];
    expect(filtrerNombresPremiers(nombres)).toEqual(resultatAttendu);
  });

  test("renvoie un tableau vide si aucun nombre premier n'est trouvé", () => {
    const nombres = [0, 1, 4, 6, 8, 10];
    expect(filtrerNombresPremiers(nombres)).toEqual([]);
  });

  test("gère un tableau vide", () => {
    expect(filtrerNombresPremiers([])).toEqual([]);
  });

  test("gère un tableau contenant uniquement des nombres premiers", () => {
    const nombres = [2, 3, 5, 7, 11];
    expect(filtrerNombresPremiers(nombres)).toEqual(nombres);
  });
});

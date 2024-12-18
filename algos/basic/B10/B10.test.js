// NE PAS MODIFIER CE FICHIER

const compterVoyelles = require("./B10");

describe("compterVoyelles", () => {
  test("compte les voyelles dans un tableau de mots", () => {
    const mots = ["Bonjour", "monde", "javascript"];
    expect(compterVoyelles(mots)).toBe(8);
  });

  test("retourne 0 si le tableau est vide", () => {
    expect(compterVoyelles([])).toBe(0);
  });

  test("gère un tableau avec une seule chaîne vide", () => {
    expect(compterVoyelles([""])).toBe(0);
  });

  test("gère les majuscules et minuscules", () => {
    const mots = ["HELLO", "World", "AEIOU"];
    expect(compterVoyelles(mots)).toBe(8);
  });

  test("gère un tableau contenant des chaînes sans voyelles", () => {
    const mots = ["bcdfg", "hjkl", "qwrtt"];
    expect(compterVoyelles(mots)).toBe(0);
  });
});

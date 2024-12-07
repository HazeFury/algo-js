// NE PAS MODIFIER CE FICHIER

const calculerTotalPanier = require("./B1");

describe("calculerTotalPanier", () => {
  test("calcule correctement le total TTC pour un panier donné", () => {
    const panier = [
      { nom: "Article 1", prix: 10 },
      { nom: "Article 2", prix: 20 },
      { nom: "Article 3", prix: 30 },
    ];
    expect(calculerTotalPanier(panier)).toBe(72.0);
  });

  test("retourne 0 pour un panier vide", () => {
    expect(calculerTotalPanier([])).toBe(0);
  });

  test("calcule correctement les prix avec des décimales", () => {
    const panier = [
      { nom: "Article 1", prix: 10.99 },
      { nom: "Article 2", prix: 20.75 },
    ];
    expect(calculerTotalPanier(panier)).toBeCloseTo(38.09, 2);
  });
});

const findBestSellers = require("./A5");

describe("findBestSellers", () => {
  test("Un produit est un best-seller", () => {
    const ventes = [75, 400, 50, 125];
    expect(findBestSellers(ventes)).toEqual([1]);
  });

  test("Plusieurs produits sont des best-sellers", () => {
    const ventes = [200, 200, 100, 50];
    expect(findBestSellers(ventes)).toEqual([0, 1]);
  });

  test("Aucun produit n'est un best-seller", () => {
    const ventes = [10, 5, 5, 10, 15, 20, 10, 5, 10, 15, 10];
    expect(findBestSellers(ventes)).toEqual([]);
  });

  test("Tous les produits sont des best-sellers", () => {
    const ventes = [25, 25, 25, 25];
    expect(findBestSellers(ventes)).toEqual([0, 1, 2, 3]);
  });

  test("Tableau vide", () => {
    const ventes = [];
    expect(findBestSellers(ventes)).toEqual([]);
  });
});

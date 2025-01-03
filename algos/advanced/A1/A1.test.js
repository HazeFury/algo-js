// NE PAS MODIFIER CE FICHIER

const plusLongueSequence = require("./I1");

describe("plusLongueSequence", () => {
  test("trouve la plus longue séquence consécutive dans un tableau mixte", () => {
    const nombres = [100, 4, 200, 1, 3, 2];
    expect(plusLongueSequence(nombres)).toEqual([1, 2, 3, 4]);
  });

  test("retourne un tableau vide si l'entrée est vide", () => {
    expect(plusLongueSequence([])).toEqual([]);
  });

  test("retourne un tableau avec un seul élément si aucun nombre n'est consécutif", () => {
    const nombres = [10, 5, 20];
    expect(plusLongueSequence(nombres)).toEqual([10]);
  });

  test("gère les tableaux où plusieurs séquences sont possibles", () => {
    const nombres = [5, 2, 3, 4, 10, 11, 12];
    expect(plusLongueSequence(nombres)).toEqual([2, 3, 4, 5]);
  });
});

// NE PAS MODIFIER CE FICHIER

const calculerSallesNecessaires = require("./A2");

describe("calculerSallesNecessaires", () => {
  test("calcule correctement le nombre minimal de salles nécessaires", () => {
    const reunions = [
      { debut: 9, fin: 10 },
      { debut: 9.5, fin: 11 },
      { debut: 11, fin: 12 },
      { debut: 10.5, fin: 11.5 },
    ];
    expect(calculerSallesNecessaires(reunions)).toBe(2);
  });

  test("aucune salle nécessaire pour une liste vide", () => {
    expect(calculerSallesNecessaires([])).toBe(0);
  });

  test("une seule salle nécessaire si les réunions ne se chevauchent pas", () => {
    const reunions = [
      { debut: 9, fin: 10 },
      { debut: 10, fin: 11 },
      { debut: 11, fin: 12 },
    ];
    expect(calculerSallesNecessaires(reunions)).toBe(1);
  });

  test("gère correctement un grand nombre de réunions", () => {
    const reunions = Array.from({ length: 10000 }, (_, i) => ({
      debut: i / 10,
      fin: i / 10 + 0.5,
    }));
    expect(calculerSallesNecessaires(reunions)).toBe(1);
  });

  test("gère des réunions avec chevauchements complexes", () => {
    const reunions = [
      { debut: 8, fin: 12 },
      { debut: 9, fin: 10 },
      { debut: 9.5, fin: 11 },
      { debut: 10, fin: 11.5 },
      { debut: 11, fin: 13 },
      { debut: 12, fin: 14 },
    ];
    expect(calculerSallesNecessaires(reunions)).toBe(3);
  });
});

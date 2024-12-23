// NE PAS MODIFIER CE FICHIER

const minimiserVehicules = require("./A4");

describe("minimiserVehicules", () => {
  test("Exemple de base", () => {
    const colis = [10, 20, 30, 40, 50];
    const capaciteVehicule = 70;
    expect(minimiserVehicules(colis, capaciteVehicule)).toBe(3);
  });

  test("Tous les colis tiennent dans un seul véhicule", () => {
    const colis = [10, 15, 20];
    const capaciteVehicule = 50;
    expect(minimiserVehicules(colis, capaciteVehicule)).toBe(1);
  });

  test("Lève une erreur si un colis dépasse la capacité maximale", () => {
    const colis = [100, 200, 300];
    const capaciteVehicule = 50;
    expect(() => minimiserVehicules(colis, capaciteVehicule)).toThrow(
      "Un ou plusieurs colis dépassent la capacité maximale d'un véhicule."
    );
  });

  test("Distribution optimale avec poids variés", () => {
    const colis = [5, 5, 5, 10, 20, 20, 50];
    const capaciteVehicule = 50;
    expect(minimiserVehicules(colis, capaciteVehicule)).toBe(3);
  });

  test("Aucun colis à transporter", () => {
    const colis = [];
    const capaciteVehicule = 50;
    expect(minimiserVehicules(colis, capaciteVehicule)).toBe(0);
  });
});

// NE PAS MODIFIER CE FICHIER

const capitaliserMots = require("./B11");

describe("capitaliserMots", () => {
  test("capitalise chaque mot d'une phrase simple", () => {
    const phrase = "bonjour tout le monde";
    expect(capitaliserMots(phrase)).toBe("Bonjour Tout Le Monde");
  });

  test("gère une chaîne avec un seul mot", () => {
    const phrase = "javascript";
    expect(capitaliserMots(phrase)).toBe("Javascript");
  });

  test("gère une chaîne vide", () => {
    expect(capitaliserMots("")).toBe("");
  });

  test("garde les espaces multiples entre les mots", () => {
    const phrase = "hello   world";
    expect(capitaliserMots(phrase)).toBe("Hello   World");
  });

  test("gère déjà des majuscules", () => {
    const phrase = "Hello world";
    expect(capitaliserMots(phrase)).toBe("Hello World");
  });
});

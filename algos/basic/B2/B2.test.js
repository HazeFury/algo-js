// NE PAS MODIFIER CE FICHIER

const inverserChaine = require("./B2");

describe("inverserChaine", () => {
  test("inverse correctement une chaîne de caractères", () => {
    expect(inverserChaine("javascript")).toBe("tpircsavaj");
  });

  test("retourne une chaîne vide si l'entrée est vide", () => {
    expect(inverserChaine("")).toBe("");
  });

  test("inverse correctement une chaîne avec des espaces", () => {
    expect(inverserChaine("Hello World")).toBe("dlroW olleH");
  });

  test("inverse correctement une chaîne avec des caractères spéciaux", () => {
    expect(inverserChaine("1234!@#")).toBe("#@!4321");
  });
});

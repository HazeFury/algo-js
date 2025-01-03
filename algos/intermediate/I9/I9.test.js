// NE PAS MODIFIER CE FICHIER

const trierLettres = require("./I9");

describe("trierLettres", () => {
  test("trie correctement les lettres de chaque mot", () => {
    expect(trierLettres("Bonjour tout le monde")).toBe("Bjnooru ottu el demno");
  });

  test("fonctionne avec une seule lettre par mot", () => {
    expect(trierLettres("A B C")).toBe("A B C");
  });

  test("fonctionne avec une chaîne vide", () => {
    expect(trierLettres("")).toBe("");
  });

  test("fonctionne avec des mots répétitifs", () => {
    expect(trierLettres("abc cba bac")).toBe("abc abc abc");
  });
});

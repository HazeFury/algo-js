// NE PAS MODIFIER CE FICHIER

const verifierParentheses = require("./I10");

describe("verifierParentheses", () => {
  test("retourne true pour une chaîne vide", () => {
    expect(verifierParentheses("")).toBe(true);
  });

  test("valide les parenthèses correctement équilibrées", () => {
    expect(verifierParentheses("(())")).toBe(true);
    expect(verifierParentheses("()()")).toBe(true);
    expect(verifierParentheses("(()(()))")).toBe(true);
  });

  test("détecte les parenthèses mal équilibrées", () => {
    expect(verifierParentheses("(()")).toBe(false);
    expect(verifierParentheses(")(")).toBe(false);
    expect(verifierParentheses("(()))")).toBe(false);
  });

  test("gère les parenthèses imbriquées de manière incorrecte", () => {
    expect(verifierParentheses("(()(()))(")).toBe(false);
    expect(verifierParentheses("((())(()))(()")).toBe(false);
  });
});

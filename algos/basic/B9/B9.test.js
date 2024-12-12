// NE PAS MODIFIER CE FICHIER

const estPalindrome = require("./B9");

describe("estPalindrome", () => {
  test("reconnaît un palindrome simple", () => {
    expect(estPalindrome("Laval")).toBe(true);
  });

  test("reconnaît un palindrome avec des espaces", () => {
    expect(estPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  test("reconnaît un non-palindrome", () => {
    expect(estPalindrome("Hello World")).toBe(false);
  });

  test("gère une chaîne vide comme un palindrome", () => {
    expect(estPalindrome("")).toBe(true);
  });

  test("gère les palindromes avec une seule lettre", () => {
    expect(estPalindrome("a")).toBe(true);
  });

  test("ignore la casse et les espaces", () => {
    expect(estPalindrome("No lemon no melon")).toBe(true);
  });
});

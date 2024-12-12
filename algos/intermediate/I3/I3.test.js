// NE PAS MODIFIER CE FICHIER

const sontAnagrammes = require("./I3");

describe("sontAnagrammes", () => {
  test("détecte correctement les anagrammes", () => {
    expect(sontAnagrammes("listen", "silent")).toBe(true);
  });

  test("détecte correctement les chaînes qui ne sont pas des anagrammes", () => {
    expect(sontAnagrammes("hello", "world")).toBe(false);
  });

  test("fonctionne avec des chaînes de longueurs différentes", () => {
    expect(sontAnagrammes("abc", "abcd")).toBe(false);
  });

  test("fonctionne avec des chaînes contenant des espaces ou des majuscules", () => {
    expect(sontAnagrammes("Listen", "Silent")).toBe(true);
    expect(sontAnagrammes("Conversation", "Voices rant on")).toBe(true);
  });

  test("fonctionne avec des chaînes vides", () => {
    expect(sontAnagrammes("", "")).toBe(true);
  });
});

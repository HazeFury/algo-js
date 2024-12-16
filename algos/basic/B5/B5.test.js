// NE PAS MODIFIER CE FICHIER

const filtrerMotsLongs = require("./B5");

describe("filtrerMotsLongs", () => {
	test("retourne uniquement les mots de longueur >= 4 caractères", () => {
		const mots = ["chat", "chien", "rat", "souris"];
		expect(filtrerMotsLongs(mots)).toEqual(["chat", "chien", "souris"]);
	});

	test("retourne un tableau vide si aucun mot n'est assez long", () => {
		const mots = ["rat", "b"];
		expect(filtrerMotsLongs(mots)).toEqual([]);
	});

	test("retourne tous les mots si tous ont une longueur >= 4", () => {
		const mots = ["arbre", "souris", "montagne"];
		expect(filtrerMotsLongs(mots)).toEqual(["arbre", "souris", "montagne"]);
	});

	test("gère un tableau vide", () => {
		expect(filtrerMotsLongs([])).toEqual([]);
	});
});

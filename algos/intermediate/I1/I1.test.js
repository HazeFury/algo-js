// NE PAS MODIFIER CE FICHIER

const filtrerMotsMajuscule = require("./I1");

describe("filtrerMotsMajuscule", () => {
	test("retourne uniquement les mots qui commencent par une majuscule", () => {
		const mots = ["Bonjour", "soleil", "Lune", "étoile", "Mer"];
		expect(filtrerMotsMajuscule(mots)).toEqual(["Bonjour", "Lune", "Mer"]);
	});

	test("retourne un tableau vide si aucun mot ne commence par une majuscule", () => {
		const mots = ["soleil", "étoile", "nuage"];
		expect(filtrerMotsMajuscule(mots)).toEqual([]);
	});

	test("retourne tous les mots si tous commencent par une majuscule", () => {
		const mots = ["Bonjour", "Lune", "Mer"];
		expect(filtrerMotsMajuscule(mots)).toEqual(["Bonjour", "Lune", "Mer"]);
	});

	test("gère un tableau vide", () => {
		expect(filtrerMotsMajuscule([])).toEqual([]);
	});
});

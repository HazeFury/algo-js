// NE PAS MODIFIER CE FICHIER

const remplacerParSommeDesAutres = require("./I7");

describe("remplacerParSommeDesAutres", () => {
	test("remplace chaque entier par la somme des autres", () => {
		expect(remplacerParSommeDesAutres([1, 2, 3, 4])).toEqual([9, 8, 7, 6]);
	});

	test("fonctionne avec des entiers négatifs", () => {
		expect(remplacerParSommeDesAutres([5, 0, -5])).toEqual([-5, 0, 5]);
	});

	test("fonctionne avec un tableau contenant un seul élément", () => {
		expect(remplacerParSommeDesAutres([10])).toEqual([0]);
	});

	test("fonctionne avec un tableau vide", () => {
		expect(remplacerParSommeDesAutres([])).toEqual([]);
	});

	test("fonctionne avec des entiers identiques", () => {
		expect(remplacerParSommeDesAutres([3, 3, 3])).toEqual([6, 6, 6]);
	});
});

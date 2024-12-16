// NE PAS MODIFIER CE FICHIER

const cumulerSommes = require("./I5");

describe("cumulerSommes", () => {
	test("calcule les sommes cumulées pour un tableau de nombres positifs", () => {
		expect(cumulerSommes([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
	});

	test("calcule les sommes cumulées pour un tableau avec des négatifs", () => {
		expect(cumulerSommes([5, -2, 4, -1])).toEqual([5, 3, 7, 6]);
	});

	test("fonctionne avec un tableau vide", () => {
		expect(cumulerSommes([])).toEqual([]);
	});

	test("fonctionne avec un tableau contenant un seul élément", () => {
		expect(cumulerSommes([42])).toEqual([42]);
	});

	test("fonctionne avec des zéros", () => {
		expect(cumulerSommes([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
	});
});

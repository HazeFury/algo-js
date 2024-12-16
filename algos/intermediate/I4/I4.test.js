// NE PAS MODIFIER CE FICHIER

const filtrerNombresUniques = require("./I4");

describe("filtrerNombresUniques", () => {
	test("retourne les nombres uniques d'un tableau", () => {
		expect(filtrerNombresUniques([1, 2, 2, 3, 4, 4, 5])).toEqual([
			1, 2, 3, 4, 5,
		]);
	});

	test("fonctionne avec des tableaux contenant un seul nombre", () => {
		expect(filtrerNombresUniques([10])).toEqual([10]);
	});

	test("fonctionne avec des tableaux vides", () => {
		expect(filtrerNombresUniques([])).toEqual([]);
	});

	test("ne modifie pas l'ordre des nombres dans le tableau", () => {
		expect(filtrerNombresUniques([5, 3, 5, 7, 3, 7, 9])).toEqual([5, 3, 7, 9]);
	});

	test("fonctionne avec des nombres négatifs", () => {
		expect(filtrerNombresUniques([-1, -2, -2, -3, -1])).toEqual([-1, -2, -3]);
	});
});

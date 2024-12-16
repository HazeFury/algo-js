// NE PAS MODIFIER CE FICHIER

const filtrerNombresPairs = require("./B4");

describe("filtrerNombresPairs", () => {
	test("retourne uniquement les nombres pairs", () => {
		const nombres = [1, 2, 3, 4, 5, 6];
		expect(filtrerNombresPairs(nombres)).toEqual([2, 4, 6]);
	});

	test("retourne un tableau vide s'il n'y a pas de nombres pairs", () => {
		const nombres = [1, 3, 5, 7];
		expect(filtrerNombresPairs(nombres)).toEqual([]);
	});

	test("retourne tous les nombres si tous sont pairs", () => {
		const nombres = [2, 4, 6, 8];
		expect(filtrerNombresPairs(nombres)).toEqual([2, 4, 6, 8]);
	});

	test("gère un tableau vide", () => {
		expect(filtrerNombresPairs([])).toEqual([]);
	});
});

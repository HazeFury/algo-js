// NE PAS MODIFIER CE FICHIER

const carreDesImpairs = require("./B12");

describe("carreDesImpairs", () => {
	test("retourne les carrés des nombres impairs d'un tableau mixte", () => {
		const nombres = [1, 2, 3, 4, 5];
		expect(carreDesImpairs(nombres)).toEqual([1, 9, 25]);
	});

	test("retourne un tableau vide s'il n'y a pas de nombres impairs", () => {
		const nombres = [2, 4, 6, 8];
		expect(carreDesImpairs(nombres)).toEqual([]);
	});

	test("retourne un tableau vide si le tableau d'entrée est vide", () => {
		expect(carreDesImpairs([])).toEqual([]);
	});

	test("gère un tableau contenant uniquement des nombres impairs", () => {
		const nombres = [1, 3, 5];
		expect(carreDesImpairs(nombres)).toEqual([1, 9, 25]);
	});

	test("ne modifie pas le tableau d'entrée", () => {
		const nombres = [1, 2, 3, 4, 5];
		carreDesImpairs(nombres); // Appelle la fonction
		expect(nombres).toEqual([1, 2, 3, 4, 5]); // Vérifie que le tableau reste inchangé
	});
});

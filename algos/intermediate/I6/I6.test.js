// NE PAS MODIFIER CE FICHIER

const inverserChaines = require("./I6");

describe("inverserChaines", () => {
	test("inverse les chaînes de caractères dans un tableau", () => {
		expect(inverserChaines(["bonjour", "algorithme", "javascript"])).toEqual([
			"ruojnob",
			"emhtirogla",
			"tpircsavaj",
		]);
	});

	test("fonctionne avec des chaînes contenant des nombres", () => {
		expect(inverserChaines(["123", "abc", ""])).toEqual(["321", "cba", ""]);
	});

	test("fonctionne avec un tableau vide", () => {
		expect(inverserChaines([])).toEqual([]);
	});

	test("fonctionne avec un tableau contenant des chaînes vides", () => {
		expect(inverserChaines(["", "", ""])).toEqual(["", "", ""]);
	});

	test("fonctionne avec des chaînes d'un seul caractère", () => {
		expect(inverserChaines(["a", "b", "c"])).toEqual(["a", "b", "c"]);
	});
});

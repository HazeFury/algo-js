// NE PAS MODIFIER CE FICHIER

const inverserMots = require("./I8");

describe("inverserMots", () => {
	test("inverse correctement les mots d'une phrase simple", () => {
		expect(inverserMots("Bonjour tout le monde")).toBe("ruojnoB tuot el ednom");
	});

	test("fonctionne avec une seule lettre par mot", () => {
		expect(inverserMots("A B C D")).toBe("A B C D");
	});

	test("fonctionne avec des mots contenant des caractères spéciaux", () => {
		expect(inverserMots("Salut ! Ça va ?")).toBe("tulaS ! aÇ av ?");
	});

	test("fonctionne avec une chaîne vide", () => {
		expect(inverserMots("")).toBe("");
	});

	test("fonctionne avec une seule lettre", () => {
		expect(inverserMots("Z")).toBe("Z");
	});
});

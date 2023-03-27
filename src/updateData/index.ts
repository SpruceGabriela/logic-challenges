/* eslint-disable no-prototype-builtins */

function updateData(obj1: Record<string, string | number>, obj2: Record<string, string | number>) {
	const result = {};

	for(const property in obj1) {
		if(obj2.hasOwnProperty(property)) {
			result[property] = obj2[property];
		} else {
			result[property] = obj1[property];
		}
	}

	return result;
}

console.log(updateData({ name: "Marcos", country: "Brasil", age: 22 }, { country: "Japão", age: 33 }));
console.log(updateData({ name: "Marcos", country: "Brasil", age: 22 }, { price: 89.9, amount: 15, description:
  "camiseta 100% algodão" }));
console.log(updateData({ name: "Rafael", country: "Chile", age: 42 }, { name: "Camiseta Polo", price: 59.9, amount: 30
}));

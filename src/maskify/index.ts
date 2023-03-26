function maskify(str: string) {
	if (str.length <= 4) {
		return str;
	}
	const lastFourChars = str.slice(-4);
	const maskedChars = str.slice(0, -4).replace(/./g, "#");
	return maskedChars + lastFourChars;
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nanananananananananana Batman!"));
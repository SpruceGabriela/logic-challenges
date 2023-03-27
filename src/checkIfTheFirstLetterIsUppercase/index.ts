function checkIfTheFirstLetterIsUppercase(str: string) {
	if(str && str.length > 0) {
		const firstLetter = str.charCodeAt(0);
		return firstLetter >= 65 && firstLetter <= 90;
	}
	return false;
}

console.log(checkIfTheFirstLetterIsUppercase("Brasil"));
console.log(checkIfTheFirstLetterIsUppercase("mobiauto"));
console.log(checkIfTheFirstLetterIsUppercase("xXx xXx"));
console.log(checkIfTheFirstLetterIsUppercase("xDD"));
console.log(checkIfTheFirstLetterIsUppercase("Deu Certo!"));

import axios from 'axios';

type CharacterProps = {
  name: string,
  gender: string,
  image: string,
  species: string
}

const translateHelper = {
	male: "masculino",
	female: "feminino",
	human: "humano"
}

const parseCharacter = (character: CharacterProps) => {
	return {
		nome: character.name,
		genero: translateHelper[character.gender.toLocaleLowerCase()],
		avatar: character.image,
		especie: translateHelper[character.species.toLocaleLowerCase()],
	}
}

const filterOptions = ['Rick Sanchez', 'Morty Smith', 'Summer Smith', 'Beth Smith', 'Jerry Smith'];
const parsedCharacters = [];

const url = 'https://rickandmortyapi.com/api/character/';

axios.get(url)
	.then((res) => {
		const filteredCharacters = res.data.results.filter((character) => filterOptions.includes(character.name));
		filteredCharacters.forEach((character) => {
			parsedCharacters.push(parseCharacter(character))
		});

		console.log(parsedCharacters);
	})
	.catch((error) => console.log(error));

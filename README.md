# Logic Challenges

## Exercício 1

Geralmente, quando você compra algo, é perguntado se o número do seu cartão de crédito, telefone ou
resposta para sua pergunta secreta ainda está correto. No entanto, como alguém pode olhar por cima do
seu ombro, você não quer que isso apareça em sua tela. Em vez disso, nós o mascaramos. Sua tarefa é
escrever uma função maskify, que altera todos, exceto os últimos quatro caracteres, para "#".

## Exercício 2

Faça uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, um objeto
com dados que vão atualizar o objeto do primeiro parâmetro.
Obs: se no objeto do segundo parâmetro tiver dados que o objeto do primeiro não tem, o valor não deve
persistir no objeto de retorno da função. Somente são atualizados os dados que o objeto do primeiro
parâmetro possuir.

## Exercício 3

Faça uma chamada para a api "rick and morty" e resgate informações dos seguintes personagens: Rick
Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith. Ajuste os dados para que fiquem igual à
saída de exemplo abaixo.

```
[
  {
    nome: 'Rick Sanchez',
    genero: 'Homem',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    especie: 'Humano'
  },
  {
    nome: 'Morty Smith',
    genero: 'Homem',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    especie: 'Humano'
  },
  {
    nome: 'Summer Smith',
    genero: 'Mulher',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    especie: 'Humano'
  },
  {
    nome: 'Beth Smith',
    genero: 'Mulher',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    especie: 'Humano'
  },
  {
    nome: 'Jerry Smith',
    genero: 'Homem',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    especie: 'Humano'
  }
]
```

## Exercício 4

Faça uma função que verifica se a primeira letra de uma string é maiúscula, retornando true ou false.

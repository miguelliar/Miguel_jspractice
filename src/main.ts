"use strict";

const persons = [
  {
    name: "Pedro",
    age: 35,
    country: "ES",
    infected: true,
    pet: "Troski",
  },
  {
    name: "Elisabeth",
    age: 14,
    country: "UK",
    infected: true,
    pet: "Firulais",
  },
  {
    name: "Pablo",
    age: 25,
    country: "ES",
    infected: false,
    pet: "Berritxu",
  },
  {
    name: "Angela",
    age: 18,
    country: "DE",
    infected: false,
    pet: "Noodle",
  },
  {
    name: "Boris",
    age: 50,
    country: "UK",
    infected: true,
    pet: "Leon",
  },
  {
    name: "Donald",
    age: 69,
    country: "US",
    infected: false,
    pet: "Pence",
  },
];

const pets = [
  {
    name: "Troski",
    animal: "perro",
  },
  {
    name: "Firulais",
    animal: "perro",
  },
  {
    name: "Berritxu",
    animal: "loro",
  },
  {
    name: "Noodle",
    animal: "araña",
  },
  {
    name: "Leon",
    animal: "gato",
  },
  {
    name: "Pence",
    animal: "perro",
  },
];

const animals = [
  {
    name: "perro",
    legs: 4,
  },
  {
    name: "araña",
    legs: 8,
  },
  {
    name: "gato",
    legs: 4,
  },
  {
    name: "loro",
    legs: 2,
  },
  {
    name: "gallina",
    legs: 2,
  },
];

// Población en millones
const countries = [
  {
    code: "CN",
    name: "China",
    population: 1439,
    infected: 81999,
  },
  {
    code: "US",
    name: "Estados Unidos",
    population: 331,
    infected: 112468,
  },
  {
    code: "DE",
    name: "Alemania",
    population: 83,
    infected: 56202,
  },
  {
    code: "ES",
    name: "España",
    population: 46,
    infected: 72248,
  },
  {
    code: "UK",
    name: "Reino Unido",
    population: 67,
    infected: 17301,
  },
];

/**
 * EJERCICIOS
 */

// 1. Número total de infectados
console.log(persons.filter((person )=> person.infected).length);
console.log(persons.reduce(((currentlyInfected, person)=> person.infected ? ++currentlyInfected : currentlyInfected), 0));

// 2. Número total de sanos
console.log(persons.filter((person) => !person.infected).length);
console.log(persons.reduce(((currentlyHealthy, person)=> person.infected ? currentlyHealthy : ++currentlyHealthy),0))

// 3. Numero total de infectados en los países (del array de países)
console.log(countries.reduce(((currentlyInfected, country)=> country.infected + currentlyInfected),0))

// 4. País con más infectados (del array de países)
console.log(countries.reduce(((highestInfectedCountry, country) => highestInfectedCountry.infected > country.infected ? highestInfectedCountry : country)))

// 5. Número de total de infectados del array de personas
console.log(persons.reduce(((currentlyInfected, person)=> person.infected ? ++currentlyInfected : currentlyInfected), 0));

// 6. Array con nombre de todas las mascotas
console.log(pets.reduce(((nameOfPets, pet) => [...nameOfPets,pet.name]), []))

// 7. Array con las personas infectadas del array de personas
console.log(persons.reduce(((arrayOfInfected, person) => person.infected ? [...arrayOfInfected, person] : arrayOfInfected), []))

// 8. Array de españoles con perro
persons.filter(person => person.country === "ES").map((pets, person) => {
  person.
})

// Número de personas infectadas del array de personas

// Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota

// A partir de las personas sacar el animal que tienen más personas como mascota

// Número total de patas de las mascotas de las personas

// Array con las personas que tienen animales de 4 patas

// A partir del string 'España' obtener un array de personas no infectadas de ese país

// Array de paises que tienen personas con loros como mascota

// Numero de infectados totales (los del objeto del país) de los paises con mascotas de ocho patas

// A partir de las personas sacar el animal que tienen más personas como mascota
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
// Primera manera que se me ocurrió
console.log(persons.filter(person => person.country === "ES").map((person) => {
    person["petSpecie"] = pets.filter(pet => person.pet === pet.name)[0].animal
    return person
}).filter(person => person["petSpecie"] === "perro"))
// Segunda manera
let españoles = persons.filter(person => person.country ==="ES")
let perrosNombre = pets.filter(pet => pet.animal ==="perro").map(perro => perro.name)
let personasConPerro = persons.filter(person => perrosNombre.indexOf(person.pet) != -1)
let españolesConPerro = españoles.filter(español => personasConPerro.indexOf(español) != -1)
console.log(españolesConPerro)

// 9. Número de personas infectadas del array de personas
console.log(persons.filter((person )=> person.infected).length);

// 10. Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota
let personasConMascota = persons.map(((person)=>{
    person["petObject"] = pets.filter(pet=>pet.name===person.pet)[0];
    return person;
}))
console.log(personasConMascota)

// 11. A partir de las personas sacar el animal que tienen más personas como mascota
let animalPopular = pets.map(pet => pet.animal)
    .reduce((individualPets, pet) => individualPets.indexOf(pet) === -1 ? [...individualPets, pet]: individualPets, [])

// No funcional
let mostRepeatedAnimal = ""
let numOfMostRepeatedAnimal = 0
for(const animal of animalPopular) {
    let animalCount = personasConMascota.filter(person => person["petObject"].animal === animal).length
    if (animalCount > numOfMostRepeatedAnimal) {
        mostRepeatedAnimal = animal
        numOfMostRepeatedAnimal = animalCount
    }
}

console.log(mostRepeatedAnimal)

// 12. Número total de patas de las mascotas de las personas
let totalLegs = 0
personasConMascota.forEach((persona) =>
    totalLegs += animals
        .filter(animal => animal.name === persona["petObject"].animal)
        .map(animal => animal.legs)[0]
);

console.log(totalLegs)

// 13. Array con las personas que tienen animales de 4 patas
let animalesDe4Patas = animals.filter(animal => animal.legs === 4).map(animal => animal.name)
let personasConAnimalesDe4Patas = personasConMascota.reduce(((listaPersonas, persona) =>
        animalesDe4Patas.indexOf(persona["petObject"].animal) !== -1 ? [...listaPersonas, persona] : listaPersonas
), [])
console.log(personasConAnimalesDe4Patas)

// 14. A partir del string 'España' obtener un array de personas no infectadas de ese país
const millon = 1000000
let noInfectadosEnEspaña = countries.filter(country => country.name === "España")
    .map(country => country.population*millon - country.infected)
console.log(noInfectadosEnEspaña)

// 15. Array de paises que tienen personas con loros como mascota
let origenDePersonasConLoros = personasConMascota
    .filter(persona => persona["petObject"].animal === "loro")
    .map(persona => persona.country)
let paísesDePersonasConLoros = countries
    .filter(country => origenDePersonasConLoros.indexOf(country.code) !== -1)
console.log(paísesDePersonasConLoros)

// 16. Numero de infectados totales (los del objeto del país) de los paises con mascotas de ocho patas
let mascotasDeOchoPatas = animals.filter(animal => animal.legs === 8).map(animal => animal.name)
let orígenDePersonasConMascotasDeOchoPatas = personasConMascota
    .filter(persona => persona["petObject"].animal === mascotasDeOchoPatas[0])
    .map(persona => persona.country)
let paísesDePersonasConMascotasDeOchoPatas = countries
    .filter(country => orígenDePersonasConMascotasDeOchoPatas.indexOf(country.code) !== -1)
console.log(paísesDePersonasConMascotasDeOchoPatas)

// 17. A partir de las personas sacar el animal que tienen más personas como mascota
let listaConNumeroDeAnimales = personasConMascota
    .map(persona => persona["petObject"].animal)
    .reduce(((listaConNumeroMascotas, animal) => { listaConNumeroMascotas[animal] === undefined ? listaConNumeroMascotas[animal] = 1 : listaConNumeroMascotas[animal] += 1
        return listaConNumeroMascotas;
    }),[ ])
let animalMasPopu = Object.keys(listaConNumeroDeAnimales).reduce((maxKey, key) => listaConNumeroDeAnimales[key] > listaConNumeroDeAnimales[maxKey] ? key : maxKey)
console.log(animalMasPopu)
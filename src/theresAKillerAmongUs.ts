/*
  Vamos a tener una clase que describe a los sospechosos.
  Cada instancia almacena los datos fisicos de un sospechoso.
  Cada sospechoso tiene un dato de la persona culpable
  Nadie miente
  El tip es privado, para que confiese necesitaremos un método
    ​
  Vamos a tener una clase detective
  El detective va a tener un método para investigar
  El metodo de investigar recibe un array de sospechosos
  Y devuelve al único culpable que hay
  OPCIONAL: Podeis ponerle datos personales si quereis pero no es obligatorio. Podeis implementar
  una clase persona de la que heredan el detective y los sospechosos.
    ​
 */
// Con estos datos vais a tener que montar las instancias
const names = ["Willy", "Ivan", "Ramiro"];
const eyeColor = ["azul", "marron", "azul"];
const height = ["bajo", "alto", "alto"];
const tattooed = [true, false, false];
const tip = [
    {
        height: "alto",
    },
    {
        eyeColor: "marron",
    },
    {
        tattooed: false,
    },
];

// Aqui están los objetos ya montados ​
const suspects = [
    {
        name: "Willy",
        eyeColor: "azul",
        height: "bajo",
        tattooed: true,
        tip: {
            height: "alto",
        },
    },
    {
        name: "Ivan",
        eyeColor: "marron",
        height: "alto",
        tattooed: false,
        tip: {
            eyeColor: "marron",
        },
    },
    {
        name: "Ramiro",
        eyeColor: "azul",
        height: "alto",
        tattooed: false,
        tip: {
            tattooed: false,
        },
    },
];

class Suspicious {
    public name:string
    public eyeColor:string
    public height:string
    public tattooed:boolean
    public tip:{}

    constructor(name:string, eyeColor:string, height:string, tattooed:boolean, tip:{}) {
        this.name = name
        this.eyeColor = eyeColor
        this.height = height
        this.tattooed = tattooed
        this.tip = tip
    }

    matches(guilty: Suspicious) {
        return this.eyeColor === guilty.eyeColor && this.height === guilty.height && this.tattooed === guilty.tattooed;
    }

}


class Detective {
    private profile:Suspicious

    constructor() {
        this.profile = new Suspicious(null, null, null, null, null);
    }
    investigate(listOfSus:Suspicious[]) {
        for(let sus of listOfSus) {
            this.collectData(sus)
        }
        this.findGuilty(listOfSus)
        return this.profile
    }
    collectData(sus: Suspicious) {
        let clues = Object.keys(sus.tip)
        for (let clue of clues) {
            this.profile[clue] = sus.tip[clue]
        }
    }
    findGuilty(listOfSus:Suspicious[]) {
        this.profile = listOfSus.reduce((guilty, suspect)=> {
            if (suspect.matches(this.profile)) {
                return suspect
            } else {
                return guilty
            }
        })
    }
}
export function executeInvestigation() {
    let group = suspects.map((suspect) => new Suspicious(suspect.name, suspect.eyeColor, suspect.height, suspect.tattooed, suspect.tip))
    let detective = new Detective()
    console.log("The author of the crime was... %o !!!!", detective.investigate(group).name)
}

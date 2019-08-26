
class Grupo {
    constructor(nombreGrupo) {
        this.nombreG = nombreGrupo;
        this.integrantes = [];
    }
    cargarGente(arr) {
        arr.map((nombre, i) => this.integrantes.push(
            new Persona(this.nombreG, nombre, emociones[i])
        ))
        // console.log("mis integrantes son:", this.integrantes);
    }
}

class Persona extends Grupo {

    constructor(nombreGrupo, nombresito, moody) {
        super(nombreGrupo)

        this.nombre = nombresito;
        this.mood = moody;
    }
    presentarse() {
        return `${this.nombre}: Hola, me siento muy ${this.mood}`
    }
    estoyhaciendo(personaInput) {
        return `${this.nombre}: Estoy conversando con ${personaInput.nombre}`
    }
    saludar(personaInput) {
        return `${this.nombre}: Hola, ${personaInput.nombre}`
    }
    preguntar(personaInput) {
        return `${this.nombre}: Dime, ${personaInput.nombre}, ¿cómo te sientes?`
    }
    responder() {
        return `${this.nombre}: Me siento muy ${this.mood}, ¿y tú? `
    }
    excusa(personaInput) {
        return `${this.nombre}: Me tengo que ir ${personaInput.nombre} `
    }
    despedirse(personaInput) {
        return `${this.nombre}: Chao ${personaInput.nombre} `

    }
}
const nombres = [
    "Jhonatan",
    "Jhoana",
    "Yazin",
    "Juan",
    "Andrés",
    "Yuli"
]
const emociones = [
    "Excelente",
    "Entusiasmada",
    "Conversador",
    "Triste",
    "Acalorado",
    "Sonriente"
]

const migrupo = new Grupo("El Grupo #1 es el mejor");
migrupo.cargarGente(nombres)
const persona1 = migrupo.integrantes[3];
const persona2 = migrupo.integrantes[1];

console.log(
    "/// \n Una vez se encontraron dos personas\n///\n",
    persona1.saludar(persona2),
    '\n',
    persona2.presentarse(),
    '\n',
    persona1.preguntar(persona2),
    '\n',
    persona2.responder(),
    '\n',
    persona1.presentarse(),
    '\n',
    persona1.estoyhaciendo(persona2),
    '\n',
    persona2.excusa(persona1),
    '\n',
    persona1.despedirse(persona2)
);



// console.log(migrupo.integrantes[2].saludarAmigo(migrupo.integrantes[0]), '\n');

// migrupo.integrantes.map(integrante => console.log(integrante.saludar()))

// const amiguito = migrupo.integrantes[4];

// console.log(amiguito.nombre, amiguito.nombreG);

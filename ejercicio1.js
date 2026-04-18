class Persona {
    constructor(nombre, edad, pais){
        this.nombre = nombre;
        this.edad = edad;
        this. pais = pais
    }

    datos (){

        console.log( `Hola mi nombre es ${this.nombre} tengo ${this.edad} años y soy de ${this.pais}`);

    }
    
}
let persona1 = new Persona( "Jhajis", 24, "Colombia");

let persona2 = new Persona("Felipe", 24, "Chile");

let persona3 = new Persona("Juan", 25, "Venezuela");

persona1.datos()
persona2.datos()
persona3.datos()
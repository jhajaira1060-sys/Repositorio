class Animal {
    constructor (especie, sonido){
        this.especie = especie;
        this.sonido = sonido;
        

    }

    hacerSonido (){
        return `El ${this.especie} hace: ${this.sonido}`;
    }
}

class Perro extends Animal {
    constructor(especie, sonido, color){
        super(especie, sonido);
        this.color = color;
    }


    hacerSonido() {
    return ` El ${this.especie} 
        de color ${this.color} 
        hace: ${this.sonido}`;
    }
}

//instancias
let animal1 = new Animal("Gato", "Miau ");
let animal2 = new Animal("Vaca", "Muuu ");

let perro1  = new Perro("Perro", "Guau Guau ", "Café");
let perro2  = new Perro("Perro", "Woof Woof ", "Blanco");
let perro3  = new Perro("Perro", "Guau! ",     "Negro");

// ─── RESULTADOS ───────────────────────────────────────
console.log(" Animales");
console.log(animal1.hacerSonido());
console.log(animal2.hacerSonido());

console.log("Perros ");
console.log(perro1.hacerSonido());
console.log(perro2.hacerSonido());
console.log(perro3.hacerSonido());

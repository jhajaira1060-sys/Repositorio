class Vehiculo {
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    info (){
            console.log(`La marca del vehiculo es ${this.marca} , un ${this.modelo} del año ${this.año}.`);
    }

}
class Coche extends Vehiculo{
    constructor(marca, modelo, año, puertas){
        super(marca, modelo, año)
        this.puertas = puertas;
    }

    info(){
        super.info();
        console.log(`El numero de  puertas es: ${this.puertas}`)
    }
}

let vehiculo = new Vehiculo ("Ford", "F-15", 2022);
let cochecito = new Coche("Ferrari", "F-1", 2022, 4);

cochecito.info();
vehiculo.info();

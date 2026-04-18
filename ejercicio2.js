class Rectangulo {
    constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
    }
    calcularArea (){
        return this.ancho * this.alto;
    }

    calcularPerimetro(){
        return 2 * (this.ancho + this.alto);
    }
}

//instancia
let rectangulo = new Rectangulo(3,6);
let area = rectangulo.calcularArea();
let perimetro = rectangulo.calcularPerimetro();

console.log(`Area: ${area} 
perimetro: ${perimetro}`);



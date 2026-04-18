class Shape {
    calcularArea(){
        return "No tiene area definida";
    }
}
class Circulo extends Shape {
    constructor(radio){
        super();
        this.radio = radio;
    }

    calcularArea(){
        return Math.PI * this.radio **2;
    }
}
class Triangulo extends Shape{
    constructor (base, altura){
        super();
        this.base = base;
        this.altura = altura

    }

    calcularArea(){
        return(this.base * this.altura) /2;
    }
}
//instancias 
let circulo = new Circulo(6);
let triangulo = new Triangulo(6,8);

console.log("CIRCULO");
console.log(`El radio del circulo es ${circulo.radio}`);
console.log(`El area del circulo es : ${circulo.calcularArea().toFixed(2)}`);


console.log("TRIANGULO");
console.log(`la base del triangulo es: ${triangulo.base} y su altura es: ${triangulo.altura}`);
console.log(`Área: ${triangulo.calcularArea()}`);
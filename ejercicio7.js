class Libro {
    constructor (titulo,autor,añoPublicacion){
        this.titulo = titulo;
        this.autor = autor;
        this.añoPublicacion = añoPublicacion;

    }

    detallesLibro (){
        return ` Libro
        Título: ${this.titulo}
        Autor:  ${this.autor}
        Año:    ${this.añoPublicacion}`;
}

}
class Ebook extends Libro {
    constructor(titulo, autor, añoPublicacion, precio){
        super(titulo, autor, añoPublicacion);
        this.precio = precio;

    }
    mostrarDatos(){
        return `Ebook
        Título:  ${this.titulo}
        Autor:   ${this.autor}
        Año:     ${this.añoPublicacion}
        Precio:  $${this.precio}`;
        
    }
}

//instancias
let libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
let ebook1 = new Ebook("El Principito", "Antoine de Saint-Exupéry", 1943, 9.99);
let ebook2 = new Ebook("Harry Potter", "J.K. Rowling", 1997, 14.99);


console.log("Libro ");
console.log(libro1.detallesLibro());

console.log("Ebook 1 ");
console.log(ebook1.mostrarDatos());

console.log(" Ebook 2 ");
console.log(ebook2.mostrarDatos())
// ─── CLASE PADRE ──────────────────────────────────────
class Product {
    constructor(idProducto, nombre, precio) {
        this.idProducto = idProducto;
        this.nombre     = nombre;
        this.precio     = precio;
    }

    calcularPrecioTotal(cantidad) {
        return this.precio * cantidad;
    }

    mostrarInfo() {
        return `Producto
        ID:     ${this.idProducto}
        Nombre: ${this.nombre}
        Precio: $${this.precio}`;
    }
}


class PersonalCareProduct extends Product {
    constructor(idProducto, nombre, precio, garantia) {
        super(idProducto, nombre, precio);
        this.garantia = garantia;
    }

    
    calcularPrecioTotal(cantidad) {
        const subtotal       = this.precio * cantidad;
        const costoGarantia  = this.garantia * 5; 
        const total          = subtotal + costoGarantia;
        return `
        Cantidad:        ${cantidad}
        Subtotal:        $${subtotal}
        Costo garantia:  $${costoGarantia} (${this.garantia} meses x $5)
        Total:           $${total}`;
    }

    mostrarInfo() {
        return `Producto de Cuidado Personal
        ID:       ${this.idProducto}
        Nombre:   ${this.nombre}
        Precio:   $${this.precio}
        Garantia: ${this.garantia} meses`;
    }
}

//instancias
const producto1 = new Product(101, "Shampoo", 8);
const producto2 = new PersonalCareProduct(201, "Afeitadora Electrica", 50, 12);
const producto3 = new PersonalCareProduct(202, "Cepillo Dental Electrico", 35, 6);


console.log("Producto Normal ");
console.log(producto1.mostrarInfo());
console.log("Precio total x3:", producto1.calcularPrecioTotal(3));


console.log("Producto Cuidado Personal 1 ");
console.log(producto2.mostrarInfo());
console.log("Precio total x2:", producto2.calcularPrecioTotal(2));

console.log("Producto Cuidado Personal 2 ");
console.log(producto3.mostrarInfo());
console.log("Precio total x4:", producto3.calcularPrecioTotal(4));
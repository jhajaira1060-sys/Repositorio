class Banco {
    constructor(nombreBancos) {
        this.nombreBancos = nombreBancos;
        this.sucursales   = [];
    }

    agregarSucursal(sucursal) {
        if (this.sucursales.includes(sucursal)) {
            return `La sucursal "${sucursal}" ya existe.`;
        }
        this.sucursales.push(sucursal);
        return `Sucursal "${sucursal}" agregada correctamente.`;
    }

    eliminarSucursal(sucursal) {
        const index = this.sucursales.indexOf(sucursal);
        if (index === -1) {
            return `La sucursal "${sucursal}" no existe.`;
        }
        this.sucursales.splice(index, 1);
        return `Sucursal "${sucursal}" eliminada correctamente.`;
    }

    mostrarSucursales() {
        if (this.sucursales.length === 0) {
            return `El banco "${this.nombreBancos}" no tiene sucursales registradas.`;
        }
        return `Sucursales de ${this.nombreBancos}:\n` +
            this.sucursales.map((s, i) => `   ${i + 1}. ${s}`).join("\n");
    }
}

// instancia
let banco = new Banco("Banco Nacional");

console.log(" Agregando Sucursales");
console.log(banco.agregarSucursal("Bogota Centro"));
console.log(banco.agregarSucursal("Medellin Norte"));
console.log(banco.agregarSucursal("Cali Sur"));
console.log(banco.agregarSucursal("Barranquilla"));
console.log(banco.agregarSucursal("Bogota Centro"));

console.log("Lista de Sucursales");
console.log(banco.mostrarSucursales());

console.log("Eliminando Sucursales ");
console.log(banco.eliminarSucursal("Cali Sur"));
console.log(banco.eliminarSucursal("Cartagena"));

console.log(" Lista Actualizada ");
console.log(banco.mostrarSucursales());



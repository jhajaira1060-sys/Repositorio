class Universidad {
    constructor(nombre) {
        this.nombre        = nombre;
        this.departamentos = [];
    }

    agregarDepartamento(departamento) {
        if (this.departamentos.includes(departamento)) {
            return `El departamento "${departamento}" ya existe.`;
        }
        this.departamentos.push(departamento);
        return `Departamento "${departamento}" agregado correctamente.`;
    }

    eliminarDepartamento(departamento) {
        const index = this.departamentos.indexOf(departamento);
        if (index === -1) {
            return `El departamento "${departamento}" no existe.`;
        }
        this.departamentos.splice(index, 1);
        return `Departamento "${departamento}" eliminado correctamente.`;
    }

    mostrarDepartamentos() {
        if (this.departamentos.length === 0) {
            return `La universidad "${this.nombre}" no tiene departamentos registrados.`;
        }
        return `Departamentos de ${this.nombre}:\n` +
            this.departamentos.map((d, i) => `   ${i + 1}. ${d}`).join("\n");
    }
}

const universidad = new Universidad("Universidad Nacional");

console.log(" Agregando Departamentos ");
console.log(universidad.agregarDepartamento("Ingenieria de Sistemas"));
console.log(universidad.agregarDepartamento("Medicina"));
console.log(universidad.agregarDepartamento("Derecho"));
console.log(universidad.agregarDepartamento("Arquitectura"));
console.log(universidad.agregarDepartamento("Medicina"));

console.log(" Lista de Departamentos ");
console.log(universidad.mostrarDepartamentos());

console.log(" Eliminando Departamentos ");
console.log(universidad.eliminarDepartamento("Derecho"));
console.log(universidad.eliminarDepartamento("Economia"));

console.log("Lista Actualizada ");
console.log(universidad.mostrarDepartamentos());
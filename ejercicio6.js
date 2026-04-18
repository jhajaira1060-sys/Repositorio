class Empleado {
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }
    calcularSalarioAnual(){
        return this.salario * 12;
    }
    datos(){
        return `Empleado: ${this.nombre}
        salario mensual: $${this.salario}
        salario anual: $${this.calcularSalarioAnual()}`;
    }
}

class Manager extends Empleado{
    constructor(nombre, salario, departamento, bonificacion){
        super(nombre, salario);
        this.departamento = departamento;
        this.bonificacion = bonificacion;

    }

    calcularSalarioAnual(){
    return(this.salario * 12) + this.bonificacion;
    }

    mostrarInfo() {
        return `Manager:  ${this.nombre}
        Departamento:   ${this.departamento}
        Salario mensual: $${this.salario}
        Bonificación:    $${this.bonificacion}
        Salario anual:   $${this.calcularSalarioAnual()}`;
    }
}

//instancias

let manager1 = new Manager("Ana García",  5000, "Tecnología", 10000);
let manager2 = new Manager("Luis Pérez",  7000, "Finanzas",   15000);

// ─── RESULTADOS ───────────────────────────────────────
console.log("Manager 1 ");
console.log(manager1.mostrarInfo());

console.log("Manager 2 ");
console.log(manager2.mostrarInfo());
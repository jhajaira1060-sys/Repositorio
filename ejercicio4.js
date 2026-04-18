class BankAccount {
    constructor(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    depositar(monto) {
        if (monto <= 0) {
            return " El monto debe ser mayor a 0";
        }
        this.saldo += monto;
        return `3 Depósito de $${monto} exitoso. Saldo actual: $${this.saldo}`;
    }

    retirar(monto) {
        if (monto <= 0) {
            return "El monto debe ser mayor a 0";
        }
        if (monto > this.saldo) {
            return `Saldo insuficiente. Saldo actual: $${this.saldo}`;
        }
        this.saldo -= monto;
        return ` Retiro de $${monto} exitoso. Saldo actual: $${this.saldo}`;
    }

    mostrarSaldo() {
        return ` Cuenta: ${this.numeroCuenta} | Saldo: $${this.saldo}`;
    }
}

//  Instancias 

const cuenta1 = new BankAccount("001-2024", 500);
const cuenta2 = new BankAccount("002-2024", 1000);
const cuenta3 = new BankAccount("003-2024", 250);


console.log("=== Cuenta 1 ===");
console.log(cuenta1.mostrarSaldo());        
console.log(cuenta1.depositar(300));        
console.log(cuenta1.retirar(200));          
console.log(cuenta1.retirar(1000));         


console.log("\n=== Cuenta 2 ===");
console.log(cuenta2.mostrarSaldo());      
console.log(cuenta2.depositar(500));        
console.log(cuenta2.retirar(750));          


console.log("\n=== Cuenta 3 ===");
console.log(cuenta3.mostrarSaldo());        
console.log(cuenta3.depositar(-100));    
console.log(cuenta3.depositar(150));       
console.log(cuenta3.retirar(400));        
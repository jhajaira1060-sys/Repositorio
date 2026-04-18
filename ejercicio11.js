class BankAccount {
    constructor(numeroCuenta, titular, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.titular      = titular;
        this.saldo        = saldo;
    }

    
    depositar(monto) {
        if (monto <= 0) {
            return `El monto debe ser mayor a 0.`;
        }
        this.saldo += monto;
        return `Deposito de $${monto} exitoso. Saldo actual: $${this.saldo}`;
    }

    
    retirar(monto) {
        if (monto <= 0) {
            return `El monto debe ser mayor a 0.`;
        }
        if (monto > this.saldo) {
            return `Saldo insuficiente. Saldo actual: $${this.saldo}`;
        }
        this.saldo -= monto;
        return `Retiro de $${monto} exitoso. Saldo actual: $${this.saldo}`;
    }


    transferir(monto, cuentaDestino) {
        if (monto <= 0) {
            return `El monto debe ser mayor a 0.`;
        }
        if (monto > this.saldo) {
            return `Saldo insuficiente para transferir. Saldo actual: $${this.saldo}`;
        }
        this.saldo              -= monto;
        cuentaDestino.saldo     += monto;
        return `Transferencia de $${monto} exitosa.
        Origen:  ${this.titular}    → Saldo: $${this.saldo}
        Destino: ${cuentaDestino.titular} → Saldo: $${cuentaDestino.saldo}`;
    }

    
    mostrarInfo() {
        return `Cuenta: ${this.numeroCuenta} | Titular: ${this.titular} | Saldo: $${this.saldo}`;
    }
}

// instancias
const cuenta1 = new BankAccount("001-2024", "Ana Garcia",  1000);
const cuenta2 = new BankAccount("002-2024", "Luis Perez",  500);
const cuenta3 = new BankAccount("003-2024", "Maria Lopez", 750);


console.log("===== Estado Inicial =====");
console.log(cuenta1.mostrarInfo());
console.log(cuenta2.mostrarInfo());
console.log(cuenta3.mostrarInfo());


console.log("\n===== Depositos =====");
console.log(cuenta1.depositar(500));
console.log(cuenta2.depositar(300));
console.log(cuenta3.depositar(-100)); 

console.log("\n===== Retiros =====");
console.log(cuenta1.retirar(200));
console.log(cuenta2.retirar(1000));
console.log(cuenta3.retirar(400));


console.log("\n===== Transferencias =====");
console.log(cuenta1.transferir(300, cuenta2)); 
console.log(cuenta3.transferir(500, cuenta1)); 
console.log(cuenta2.transferir(100, cuenta3)); 


console.log("\n===== Estado Final =====");
console.log(cuenta1.mostrarInfo());
console.log(cuenta2.mostrarInfo());
console.log(cuenta3.mostrarInfo());
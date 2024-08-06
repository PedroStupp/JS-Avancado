class Conta {
    constructor(nomeCliente, saldoConta, tipoConta, limiteCreditoConta) {
        this.nome = nomeCliente;
        this.saldo = saldoConta;
        this.tipo = tipoConta;
        this.limiteCreditoConta = limiteCreditoConta;
        this.extrado = []; 
    }


    depositar(valor) {
        let saldoAnterior = this.saldo;
        this.saldo += valor;
        this.extrado.push(`Depositado o valor de ${valor} com sucesso, saldo anterior: ${saldoAnterior}!`);
    }
    mostrarExtrato(){
        console.log(`Cliente: ${this.nome}\nConta: ${this.tipo}\nSaldo: ${this.saldo}\nExtrato:`);
        if (this.extrado.length === 0){
            console.log("Nenhuma movimentação");
            return;
        }
        for (let index = 0; index < this.extrado.length; index++) {
            const registro = this.extrado[index];
            console.log(`\t${registro}`);
        }
    }
}

let conta1 = new Conta("Victor", 0, "Conta salario", 0);
conta1.depositar(600.99);
conta1.depositar(1);
conta1.depositar(10000);    
conta1.mostrarExtrato();

let conta2 = new Conta ("Victor com H", -501, "Conta Negativo", 50000);
conta2.mostrarExtrato();




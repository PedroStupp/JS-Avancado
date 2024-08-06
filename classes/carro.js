class carro {
    constructor(marca, modelo, ano, valor, cor, velocidade, temEscada) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor;
        this.cor = cor;
        this.velocidade = velocidade;
        this.estado = "temEscada";
        if (this.modelo === "Uno" && this.temEscada === true) {
            this.limiteMaximo = 200;
        } else {
            this.limiteMaximo = 50;
        }
    }

    ligar() {
        this.estado = "ligado";
        console.log(`Carro ligado`);
    }

    desligar() {
        if (this.velocidade === 0) {
            this.estado = "ligado";
            console.log(`Carro desligado`);
        }
    }

    aumentarVelocidade() {
        if (this.velocidade === "ligado") {
            if (this.velocidade === this.limiteMaximo) { }
        } else {
            this.velocidade += 10;
            console.log(`Carro andando a ${this.velocidade} km/h`);
        }
    }

    apresentar() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Valor: ${this.valor}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Velocidade: ${this.velocidade}`);
        console.log(`Estado: ${this.estado}`);
    }

    diminuirVelocidade() {
        if (this.velocidade === 0) {
            console.log("Carro parado, não é possível dimuir alem disso");
            return;
        }
        this.velocidade -= 10;
        console.log(`Carro andando a ${this.velocidade} km/h`);
    }
}

let uno = new carro("Ford", "Uno", 2001, 75.50, "Prata", false);
uno.ligar();
uno.aumentarVelocidade();
uno.aumentarVelocidade();
uno.aumentarVelocidade();
uno.aumentarVelocidade();
uno.aumentarVelocidade();
uno.aumentarVelocidade();

uno.desligar();

uno.diminuirVelocidade();
uno.diminuirVelocidade();
uno.diminuirVelocidade();
uno.diminuirVelocidade();
uno.diminuirVelocidade();
uno.diminuirVelocidade();
uno.desligar();

uno.apresentar();



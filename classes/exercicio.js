// Ex 1:
class Pessoa {
    constructor(nome, sobrenome, idade, altura, peso) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    mostrarDados(){
        console.log(`Dados:\n${this.nome} ${this.sobrenome}\t${this.idade}\t${this.altura}\t${this.peso}kg`);
    }
}
let Pessoa1 = new Pessoa("Pedro", "Henrique", 20, 1.60, 57);
Pessoa1.mostrarDados();

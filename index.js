
class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo

        let ataque = 'genérico';
        if(this.tipo === 'mago') {
            this.ataque = 'magia'
        } else if(this.tipo === 'guerreiro') {
            this.ataque = 'espada'
        } else if(this.tipo === 'monge') {
            this.ataque = 'artes marciais'            
        } else if(this.tipo === 'ninja') {
            this.ataque = 'shuriken'
        }
    }

    atacar() {
        console.log(`o ${this.tipo} atacou usando ${this.ataque} `)
    }
}

let heroi1 = new Hero('Bruce Lee', 30, 'monge')
let heroi2 = new Hero('Merlin', 130, 'mago')
let heroi3 = new Hero('Frank Dux', 20, 'ninja')
let heroi4 = new Hero('Aragorn', 33, 'guerreiro')
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
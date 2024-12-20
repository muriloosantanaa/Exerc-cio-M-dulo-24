// Classe abstrata base
class InstrumentoMusical {
    constructor(marca, modelo, preco) {
        if (this.constructor === InstrumentoMusical) {
            throw new Error("Classes abstratas não podem ser instanciadas.");
        }
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
        this.afinado = false;
    }

    // Método abstrato
    tocar() {
        throw new Error("O método tocar() deve ser implementado nas classes filhas.");
    }

    afinar() {
        console.log(`Afinando o ${this.constructor.name}`);
        this.afinado = true;
    }

    toString() {
        return `${this.constructor.name}: ${this.marca} ${this.modelo} - R$${this.preco.toFixed(2)}`;
    }
}

// Classe filha Violão
class Violao extends InstrumentoMusical {
    constructor(marca, modelo, preco, tipo) {
        super(marca, modelo, preco);
        this.tipo = tipo; // Aço ou Nylon
        this.cordas = 6;
    }

    tocar() {
        if (this.afinado) {
            console.log(`Tocando acordes no violão ${this.tipo}`);
        } else {
            console.log("O violão precisa ser afinado primeiro!");
        }
    }

    trocarCordas() {
        console.log("Trocando as cordas do violão");
    }
}

// Classe filha Piano
class Piano extends InstrumentoMusical {
    constructor(marca, modelo, preco, tipoPiano) {
        super(marca, modelo, preco);
        this.tipoPiano = tipoPiano; // Digital ou Acústico
        this.teclas = 88;
    }

    tocar() {
        if (this.afinado) {
            console.log(`Tocando melodia no piano ${this.tipoPiano}`);
        } else {
            console.log("O piano precisa ser afinado primeiro!");
        }
    }

    regularPedais() {
        console.log("Regulando os pedais do piano");
    }
}

// Criando instâncias
const violao1 = new Violao("Yamaha", "C40", 800.00, "Nylon");
const violao2 = new Violao("Takamine", "GD51", 2500.00, "Aço");
const piano1 = new Piano("Casio", "CDP-S100", 3200.00, "Digital");

// Demonstrando o uso
console.log("\nInformações dos instrumentos:");
console.log(violao1.toString());
console.log(violao2.toString());
console.log(piano1.toString());

console.log("\nTestando os instrumentos:");
violao1.tocar(); // Não vai tocar pois não está afinado
violao1.afinar();
violao1.tocar(); // Agora vai tocar

piano1.afinar();
piano1.tocar();
piano1.regularPedais();

violao2.trocarCordas();
violao2.afinar();
violao2.tocar();

// Tentando criar uma instância da classe abstrata (vai gerar erro)
try {
    const instrumento = new InstrumentoMusical("Marca", "Modelo", 1000);
} catch (error) {
    console.log("\nErro ao tentar instanciar classe abstrata:", error.message);
}
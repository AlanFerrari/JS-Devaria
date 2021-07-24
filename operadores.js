const readline = require("readline");

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const primeiroPergunta = "Digite o primeiro número: \n";
const segundaPergunta = "Digite o segundo número: \n";
const terceiraPergunta = "Digite a operação: \n";

const realizarCalculo = (num1, num2, operacao) => {//função/método
    const primeiroNumero = parseInt(num1);
    const segundoNumero = parseInt(num2)

    switch(operacao) {
        case "+":
            return primeiroNumero + segundoNumero;
        case "-":
            return primeiroNumero - segundoNumero;
        case "*":
            return primeiroNumero * segundoNumero;
        case "/":
            return primeiroNumero / segundoNumero;
        default:
            return 0;
    }
}
leitor.question(primeiroPergunta, (primeiroNumero) => {//função/método

    leitor.question(segundaPergunta, (segundoNumero) => {//função/método

        leitor.question(terceiraPergunta, (operacao) => {//função/método
            const resultado = realizarCalculo(
                primeiroNumero, segundoNumero, operacao
            );
            console.log({resultado});
            leitor.close();
        });
    });
});
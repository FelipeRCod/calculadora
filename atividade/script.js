const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultadoDiv = document.getElementById('resultado');

const botoesOperacao = document.querySelectorAll('button[data-operacao]');

function calcular(operador) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let resultado;


    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado =  num1 / num2;
            break;
        default:
            resultado = 'Operação inválida';
    }

    resultadoDiv.innerText = 'Resultado: ' + resultado;
}

botoesOperacao.forEach(botao => {
    botao.addEventListener('click', () => {
        const operador = botao.getAttribute('data-operacao');
        calcular(operador);
    });
});

function somaTermosParesFibonacci(limite) {
    let a = 0
    let b = 1
    let soma = 0;

    while (b <= limite) {
        if (b % 2 === 0) {
            soma += b;
        }
        let proximo = a + b;
        a = b;
        b = proximo;
    }

    return soma;
}

document.addEventListener('DOMContentLoaded', () => {
    const limite = 50000;
    const resultado = somaTermosParesFibonacci(limite);
    document.getElementById('result').textContent = `A soma dos termos pares da sequência de Fibonacci que não excedem ${limite} é ${resultado}.`;
});

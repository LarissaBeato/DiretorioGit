const button = document.getElementById("calcular");
const resultElement = document.getElementById("result");

button.addEventListener("click", function() {
    const limit = 1000;
    let num = 0;


    for (let i = 1; i < limit; i++) {

        if (i % 3 === 0 || i % 5 === 0) {
            num += i;
        }
    }

    document.write("A soma de todos os múltiplos de 3 ou 5 abaixo de 1000 é: " + parseInt(num));
});

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {

    event.preventDefault()

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    const media = (num1 + num2 + num3) / 3;

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `A média é: ${media.toFixed(2)}`;
});

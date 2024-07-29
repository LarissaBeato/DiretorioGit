document.getElementById("button5").addEventListener("click",imc);
function imc(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    document.getElementById("eee").innerHTML = "Resultado é:";
    document.getElementById("respostImc").innerHTML = peso/(altura*altura);

}
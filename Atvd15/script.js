 const base = 2;
 const expoenteMaximo = 8;

 const resultadoDiv = document.getElementById('resultado');

 for (let expoente = 0; expoente <= expoenteMaximo; expoente++) {
     let potencia = 1;

     for (let i = 0; i < expoente; i++) {
         potencia *= base;
     }

     let resultadoHTML = `${base}<sup>${expoente}</sup> = ${potencia}<br>`;

     resultadoDiv.innerHTML += resultadoHTML;
 }
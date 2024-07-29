function identificarMaiorNumero() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    
    var maiorNumero = num1;
    
    if (num2 > maiorNumero) {
      maiorNumero = num2;
    }
    
    if (num3 > maiorNumero) {
      maiorNumero = num3;
    }
    
    alert("o maior numero informado e: " + maiorNumero);
  }
  
function inverterTexto() {
    var nome = document.getElementById("nome").value;
    var nomeInvertido = '';

    for (var i = nome.length - 1; i >= 0; i--) {
        nomeInvertido += nome[i];
    }
    
    document.getElementById("resultado").textContent = `Texto invertido: ${nomeInvertido}`;
}

document.getElementById('deltaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    
    let delta = (b * b) - (4 * a * c);
    
    let calcular = `
        Delta = b² - 4ac<br>
        Delta = ${b}² - 4 × ${a} × ${c}<br>
        Delta = ${b * b} - ${4 * a * c}<br>
        Delta = ${delta}
    `;
    
    document.getElementById('calcular').innerHTML = calcular;
});

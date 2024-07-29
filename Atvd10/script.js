tabelaHTML = "<table><tr><th colspan='50'>Números Primos entre 0 e 200<tr><td>1";
var primosEncontrados = 0;
for (dividendo = 2; dividendo <= 200; dividendo++) {
    var primo = true;
    for (divisor = 2; divisor < dividendo ; divisor++) {
        if (dividendo % divisor == 0) {
            primo = false;
            tabelaHTML += "<td>" + dividendo;
            break;
        };
    };
    if (Boolean(primo)) { 
        tabelaHTML += "<td bgcolor='#A020F0'>" + dividendo;
        primosEncontrados++;
    }
    dividendo % 20 == 0 ? tabelaHTML += "<tr>" : false;
};
tabelaHTML += "</table>";
document.write(tabelaHTML)


function iniciarConexion() {
    let cantidadInput = document.getElementById("cantidadTerminos").value;
    let cantidad = parseInt(cantidadInput);
    let panelResultado = document.getElementById("resultado");
    panelResultado.innerHTML = "";
    
    if (isNaN(cantidad) || cantidad < 1) {
        panelResultado.innerHTML = "<p style='color: red; text-align:center;'>Por favor, ingresa un número válido mayor a 0.</p>";
        return;
    }

    let textoHTML = "<div class='digital-grid'>";
    
    let a = 0;
    let b = 1;
    let c;

    for (let i = 1; i <= cantidad; i++) {
        let numeroActual;

        if (i === 1) {
            numeroActual = a;
        } else if (i === 2) {
            numeroActual = b;
        } else {
            c = a + b;
            a = b;
            b = c;
            numeroActual = c;
        }

        let esPrimo = true;
        
        if (numeroActual <= 1) {
            esPrimo = false;
        } else {
            for (let divisor = 2; divisor * divisor <= numeroActual; divisor++) {
                if (numeroActual % divisor === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }

        if (esPrimo) {
            textoHTML += `
                <div class='token activated'>
                    <span class='label'>Número ${i}</span>
                    <strong>${numeroActual}</strong>
                    <span class='status-text'>✨ ¡Es Primo!</span>
                </div>`;
        } else {
            textoHTML += `
                <div class='token'>
                    <span class='label'>Número ${i}</span>
                    <strong>${numeroActual}</strong>
                    <span class='status-text'>Solo Fibonacci</span>
                </div>`;
        }
    }

    textoHTML += "</div>"; 

    panelResultado.innerHTML = textoHTML;
}

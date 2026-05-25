/**
 * Función principal que inicia la conexión y cálculo neural
 */
function iniciarConexion() {
    // RESTRICCIÓN: Agarramos los datos usando getElementById con los IDs del HTML
    let cantidadInput = document.getElementById("cantidadTerminos").value;
    let cantidad = parseInt(cantidadInput);
    
    // Agarramos el lugar de la página donde vamos a pintar la respuesta
    let panelResultado = document.getElementById("resultado");

    // Limpiamos el panel de cualquier cálculo previo
    panelResultado.innerHTML = "";

    // Validación por seguridad si el número está vacío o es inválido
    if (isNaN(cantidad) || cantidad < 1) {
        panelResultado.innerHTML = "<p style='color: red; text-align:center;'>Por favor, ingresa un número válido mayor a 0.</p>";
        return;
    }

    // Variable para ir armando el contenido HTML con un diseño de cuadrícula grid
    let textoHTML = "<div class='digital-grid'>";
    
    // --- ALGORITMO A: FIBONACCI SIN VECTORES ---
    let a = 0;
    let b = 1;
    let c;

    for (let i = 1; i <= cantidad; i++) {
        let numeroActual;

        // Lógica posicional para calcular el número actual sumando los anteriores
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

        // --- ALGORITMO B: VERIFICAR SI ES PRIMO (MÉTODO ULTRA-RÁPIDO BLINDADO) ---
        let esPrimo = true;
        
        if (numeroActual <= 1) {
            esPrimo = false; // El 0 y el 1 no son primos
        } else {
            // Solo probamos divisores hasta la raíz del número actual para ahorrar memoria
            for (let divisor = 2; divisor * divisor <= numeroActual; divisor++) {
                if (numeroActual % divisor === 0) {
                    esPrimo = false; // Encontró otro divisor, no es primo
                    break; // Cortamos el ciclo de inmediato
                }
            }
        }

        // --- MAQUETACIÓN VISUAL: NÚMERO ARRIBA Y TEXTO ABAJITO ---
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

    // RESTRICCIÓN: Pintamos el resultado final en la página web usando innerHTML
    panelResultado.innerHTML = textoHTML;
}

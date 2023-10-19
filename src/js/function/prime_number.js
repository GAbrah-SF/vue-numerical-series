// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }

    return true;
}

function encontrarPrimo(n) {
    // if (n <= 0) return "Ingresa un número positivo";

    let contador = 0;
    let numeroActual = 2;

    while (contador < n) {
        if (esPrimo(numeroActual)) {
            contador++;
        }
        if (contador < n) {
            numeroActual++;
        }
    }

    return numeroActual;
}

export {encontrarPrimo}

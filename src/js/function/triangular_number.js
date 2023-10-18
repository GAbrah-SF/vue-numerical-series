// Función para calcular el número triangular
function triangular(numero) {
    if (numero <= 0) {
        return 0;
    }

    return (numero * (numero + 1)) / 2;
}

export {triangular}

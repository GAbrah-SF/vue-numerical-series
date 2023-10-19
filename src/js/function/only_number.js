function onlyNumber(e) {
    let inputValue = e.target.value

    // Eliminar todos los caracteres que no son números
    inputValue = inputValue.replace(/\D/g, '')

    // Evitar que el primer carácter sea "0, 1 y 2"
    if (inputValue.length > 0 && ['0'].includes(inputValue.charAt(0))) {
        inputValue = inputValue.substr(1);
    }

    e.target.value = inputValue
}

export {onlyNumber}

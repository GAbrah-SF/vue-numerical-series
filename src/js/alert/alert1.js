let swalAlert = {
    title: 'Campo Numérico vacío',
    icon: 'warning',
    text: 'Por favor, ingresa un número',
    confirmButtonColor: '#279b01',
    // confirmButtonText: "OK",
    background: "#000",
    showConfirmButton: false,
    footer: "Gabu's WebSite " + 'analizando el detalle'.toLocaleUpperCase(),
    timer: 2000,
};

function showAlert() {
    this.$swal(swalAlert);
}

export {showAlert}

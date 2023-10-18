let swalAlert = {
    title: 'n <= 3',
    icon: 'warning',
    text: '"n" tiene que ser mayor o igual a 3',
    confirmButtonColor: '#279b01',
    // confirmButtonText: "OK",
    background: "#000",
    showConfirmButton: false,
    footer: "Gabu's WebSite " + 'analizando el detalle'.toLocaleUpperCase(),
    timer: 2000,
};

function showAlert2() {
    this.$swal(swalAlert);
}

export {showAlert2}

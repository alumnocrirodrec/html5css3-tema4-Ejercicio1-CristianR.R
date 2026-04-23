window.onload = function() {
    const form = document.getElementById("registro");
    const pass1 = document.getElementById("password1");
    const pass2 = document.getElementById("password2");
    const fechaInicioInput = document.getElementById("fechaInicio");
    const btnEnviar = document.getElementById("btnEnviar");

    function validarPasswords() {
        if (pass1.value !== pass2.value) {
            pass2.setCustomValidity("Las passwords deben coincidir");
        } else {
            pass2.setCustomValidity("");
        }
    }

    pass1.onkeyup = validarPasswords;
    pass2.onkeyup = validarPasswords;

    btnEnviar.onclick = function() {
        const fechaActual = new Date();
        const fechaIni = new Date(fechaInicioInput.value);

        fechaActual.setHours(0,0,0,0);

        if (fechaIni < fechaActual) {
            alert("La fecha de inicio debe ser mayor o igual que la actual.");
        } else {
            if (form.checkValidity()) {
                form.submit();
            } else {
                form.reportValidity();
            }
        }
    };
};
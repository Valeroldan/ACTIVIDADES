function obtenerDatosFormulario() {
    return {
        nombre: document.getElementById("txtnombre").value,
        apellido: document.getElementById("txtapellido").value,
        email: document.getElementById("email").value,
        contrasena: document.getElementById("contraseña").value,
        telefono: document.getElementById("telefono").value,
        genero: document.querySelector('input[name="genero"]:checked').value,
        pais: document.getElementById("disabledSelect").value,
        fecha: document.getElementById("fecha").value,
        suscribirse: document.getElementById("suscribirse").checked,
        comentario: document.getElementById("comentario").value
    };
}

function enviarFormulario() {
    
    let formData = obtenerDatosFormulario();
    console.log("Datos del formulario:", formData);
    limpiarFormulario();
}

function limpiarFormulario() {
    console.log("reset");
    document.getElementById("registroForm").reset();
}

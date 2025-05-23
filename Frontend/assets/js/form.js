document.querySelector("form").addEventListener("submit", function (e) { //Selecciona el formulario y "escucha" el evento de enviar
    e.preventDefault(); // Previene la recarga de la pagina

    const email = document.querySelector('input[name="email"]').value.trim(); // Obtiene los datos sin espacios del correo 
    const password = document.querySelector('input[name="password"]').value.trim(); // // Obtiene los datos sin espacios de la contraseña

    // Valida el caso de ejemplo
    if (email === "lala@gmail.com" && password === "123") {
        Swal.fire({
            icon: "success",
            title: "¡Bienvenido!",
            text: "Has iniciado sesión correctamente.",
            confirmButtonColor: "#47BFC0",
        }).then(() => {
            window.location.href = "/Frontend/home.html"; // Redirige a Home
        });
        // Caso contrario "Mensaje de Error"
    } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Correo o contraseña incorrectos.",
            confirmButtonColor: "#d33",
        });
    }
});

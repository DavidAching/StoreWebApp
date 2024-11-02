document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    // Evento de envío del formulario de inicio de sesión
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Llamar a la función para iniciar sesión
        iniciarSesion(email, password);
    });
});

function iniciarSesion(email, password) {
    // Obtener los usuarios almacenados en localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscar si el correo y contraseña coinciden con algún usuario
    const usuarioValido = usuarios.find(usuario => usuario.email === email && usuario.password === password);

    if (usuarioValido) {
        // Si el usuario es válido, almacenar el estado de sesión en sessionStorage
        sessionStorage.setItem("isOnline", "true");
        alert("Inicio de sesión exitoso.");
        
        // Redireccionar a la página principal o a otra página que desees
        window.location.href = "index.html";
    } else {
        alert("Correo o contraseña incorrectos. Intenta de nuevo.");
    }
}

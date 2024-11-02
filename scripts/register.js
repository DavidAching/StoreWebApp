document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");

    // Evento de envío del formulario de registro
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Llamar a la función de registro de usuario
        registrarUsuario(email, password);
    });
});

function registrarUsuario(email, password) {
    // Obtener los usuarios almacenados en localStorage o inicializar un array vacío
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el correo ya está registrado
    const usuarioExistente = usuarios.find(usuario => usuario.email === email);
    if (usuarioExistente) {
        alert("Este correo electrónico ya está registrado. Usa otro correo o inicia sesión.");
        return; // Detener el proceso de registro
    }

    // Crear un nuevo objeto de usuario
    const nuevoUsuario = {
        email: email,
        password: password
    };

    // Agregar el nuevo usuario al array de usuarios y guardar en localStorage
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    // Redireccionar a la página de inicio de sesión si es necesario
    window.location.href = "login.html";
}

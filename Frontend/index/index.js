import axios from 'axios';


// Espera que el DOM se cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    // Obtener el formulario de login
    const form = document.getElementById('login-form');

    // Agregar el evento de submit al formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevenir el comportamiento por defecto del formulario

        // Obtener los valores de los campos del formulario
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validación básica (opcional)
        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        // Enviar una solicitud POST al backend para validar las credenciales
        axios.post('http://localhost:8080/usuarios', { email, password })
            .then(response => {
                if (response.data.success) {
                    window.location.href = '/Frontend/Citas/citas.html';  // Redirigir si el login es exitoso
                } else {
                    alert('Incorrect credentials');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an authentication error.');
            });
    });
});

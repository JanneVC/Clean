const button = document.getElementById('button');

function loguear() {
    const usuarioValue = document.getElementById("usuario").value;
    const passwordValue = document.getElementById("password").value;

    if (usuarioValue === "Clean" && passwordValue === "123456") {
        window.location.href = "./Pages/Servicios.html"; 
    } else {
        alert("Ha ingresado el usuario/clave incorrectos");
    }
}

button.addEventListener('click', loguear);
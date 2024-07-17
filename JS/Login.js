const usuario=document.getElementById('usuario')
const password=document.getElementById('password')
const button=document.getElementById('button')

function loguear(){
    let usuario=document.getElementById("usuario").value;
    let password=document.getElementById("password").value;
    if (usuario==="Clean" && password==="123456")
        {
            window.location.href="../"
        }
        else
        {alert("Ha ingreso los usuario/clave incorrectos");
        }
}

loguear();
const formulario = document.getElementById("formulario");
const usuario = document.getElementById("emailUsuario");
const alertaUsuario = document.getElementById("emailHelp");
const contra = document.getElementById("contraseñaUsuario");
const alertaContra = document.getElementById("passHelp");
const rememberMe = document.getElementById("recuerdameCheck");

//Obtener datos válidos del LocalStorage:
let validUser = JSON.parse(localStorage.getItem("usuario"));


//Captura el Submit que realiza el "formulario". Es una función anónima, con 1 parámetro llamado "evento"(puede ser cualquier nombre, pero les gusta usar la "e").
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    let okUser = false;
    let okPass = false;
    //Validar el mail del Usuario:
    if (usuario.value !== validUser.email) {
        console.log("Usuario mal escrito.");
        alert("Mal ingreso del usuario");
        alertaUsuario.classList.add("text-danger"); //Cambios en Etiqueta Small: usuario incorrecto. Texto Rojo
        alertaUsuario.classList.add("font-weight-bold"); //Cambios en Etiqueta Small: usuario incorrecto. Texto Negrita
        alertaUsuario.innerHTML = "Error de usuario, compruebe que esté bien esrcrito."; //Cambios en Etiqueta Small: usuario incorrecto. Cambio de texto.
        usuario.classList.add("is-invalid");
    } else {
        usuario.classList.add("is-valid");
        okUser = true;
    }

    //Validar la contraseña del usuario:
    if (contra.value !== validUser.contraseña) {
        console.log("No se escribió contraseña.");
        alert("No ingresaste contraseña.");
        alertaContra.classList.add("text-danger");
        alertaContra.classList.add("font-weight-bold");
        alertaContra.innerHTML = "¡No puedes dejar éste campo vacío!";
        contra.classList.add("is-invalid");
    } else {
        contra.classList.add("is-valid");
        okPass = true;
    }
    
    if (okUser == true && okPass == true) {
        swal("Bienvenido! :D", "", "success")
            .then((value) => {
                window.location.href = "../index.html";
            }
        );
    }
    
})
function iniciarSesion(){
    swal("Write something here:", {
        content: "input",
      })
      .then((value) => {
        swal("Bienvenid@", value, "success");
        console.log(value);
        document.getElementById('usuario').innerHTML = value
        localStorage.setItem("nombreUsuario", value)
        document.getElementById("cerrarSesion").style.display = "block"
        document.getElementById("usuario").style.display = "block"
        document.getElementById("iniciarSesion").style.display = "none"
      })
}


var usuario = localStorage.getItem('nombreUsuario')



if (usuario != null){
    document.getElementById("usuario").innerHTML = usuario
    document.getElementById("cerrarSesion").style.display = "block"
    document.getElementById("iniciarSesion").style.display = "none"
}else{
    console.log("No has iniciado sesión")
}



function cerrarSesion(){
    localStorage.removeItem('nombreUsuario')
    document.getElementById("cerrarSesion").style.display = "none"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("iniciarSesion").style.display = "block"
    swal("Esperamos tu regreso!!")
}
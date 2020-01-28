function cambiarTituloPelicula(id, contenido){
    document.getElementById(id).innerHTML=contenido 
    var elemento = document.getElementById(id)

    elemento.style.color = "red"
    elemento.style.backgroundColor = 'black'
}

function iniciarSesion(){
    swal("Write something here:", {
        content: "input",
      })
      .then((value) => {
        swal("Bienvenid@", value, "success");
        document.getElementById('usuario').innerHTML = value
        localStorage.setItem("nombreUsuario", value)
        document.getElementById("cerrarSesion").style.display = "block"
        document.getElementById("usuario").style.display = "block"
      })
}


var usuario = localStorage.getItem('nombreUsuario')



if (usuario != null){
    document.getElementById("usuario").innerHTML = usuario
    document.getElementById("cerrarSesion").style.display = "block"
}else{
    console.log("No has iniciado sesión")
}


function cerrarSesion(){
    localStorage.removeItem('nombreUsuario')
    document.getElementById("cerrarSesion").style.display = "none"
    document.getElementById("usuario").style.display = "none"

    swal("Esperamos tu regreso!!")
}
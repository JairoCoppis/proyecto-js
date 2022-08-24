
let contenedorAlertas = document.getElementById("noticias")

let botonAlert = document.getElementById("botonAlert")
boton.addEventListener("click", mostrarAlerta)

let input = document.getElementById("input")
boton.addEventListener("click", elemento)

function mostrarAlerta () {

  Swal.fire({
    title: 'Ultimas noticias!!',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}

function elemento() {

fetch('./data.json')
.then((respuesta) => respuesta.json())
.then((data) => { console.log(data.noticias)
  for (const noticia of data.noticias) {
    let tarjetaNoticia = document.createElement("div")
    tarjetaNoticia.className = "noticia"
    tarjetaNoticia.innerHTML = `
  
      <section class="container mt-4" id="Alertas">
      <div class="row">
      <div class="d-flex justify-content-center flex-wrap">
      <div class="col-sm-12 col-lg-4 col-md-12 tarjeta-item tarjetalogo">
      <img src=${noticia.imgURL} class="img-fluid" mt-2>
      <p>${noticia.informacion}</p>
  
    `
    contenedorAlertas.append(tarjetaNoticia);
  }
  }


)
}





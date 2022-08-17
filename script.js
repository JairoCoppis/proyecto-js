
let noticias = 

[{imgURL: "images/energia.svg" , informacion: " CELDA informa un CORTE PROGRAMADO DE ENERGÍA ELÉCTRICA en el Sector Quintas al oeste de la localidad, específicamente usuarios desde calle Vieytes hacia el Aerogenerador y hasta el cementerio local, sin afectar al Parque Industrial. El mismo será mañana miércoles 12 del corriente, de 9:00 a 13:00hs aprox. motivo es por trabajos sobre líneas del sector."},

{imgURL: "images/internet.svg", informacion: "CELDA informa un CORTE PROGRAMADO DE INTERNET en el Sector Quintas al oeste de la localidad, específicamente usuarios desde calle Vieytes hacia el Aerogenerador y hasta el cementerio local, sin afectar al Parque Industrial. El mismo será mañana miércoles 12 del corriente, de 9:00 a 13:00hs aprox. motivo es por trabajos sobre líneas del sector."},

{imgURL: "images/agua.svg", informacion: "CELDA informa un CORTE PROGRAMADO DE AGUA en el Sector Quintas al oeste de la localidad, específicamente usuarios desde calle Vieytes hacia el Aerogenerador y hasta el cementerio local, sin afectar al Parque Industrial. El mismo será mañana miércoles 12 del corriente, de 9:00 a 13:00hs aprox. motivo es por trabajos sobre líneas del sector." }
]


let noticiasJSON = JSON.stringify(noticias)
localStorage.setItem("noticias", noticiasJSON)


let noticiasJS = JSON.parse(localStorage.getItem("noticias"))
console.log(noticiasJS)

//-----------------------------------------------------------------------------

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
  
for (const noticia of noticiasJS) {
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

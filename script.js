
let input = document.getElementById("input");
boton.addEventListener("click", elemento);

let botonAlert = document.getElementById("botonAlert");
boton.addEventListener("click", mostrarAlerta);  

function mostrarAlerta() {
  Swal.fire({
    title: "Ultimas noticias!!",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}

function elemento () {
  fetch (`./data.json`)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    console.log(data)
    let contenedorAlertas = document.getElementById("noticias")
      for (const noticia of data.noticiasDataJs) {
        let tarjetaNoticia = document.createElement("div");
        tarjetaNoticia.className = "noticia";
        tarjetaNoticia.innerHTML = `
    
          <section class="container mt-4" id="Alertas">
          <div class="row">
          <div class="d-flex justify-content-center flex-wrap">
          <div class="col-sm-12 col-lg-4 col-md-12 tarjeta-item tarjetalogo">
          <img src=${noticia.imgURL} class="img-fluid" mt-2>
          <p>${noticia.informacion}</p>
    
        `;
        contenedorAlertas.append(tarjetaNoticia);
    }
  })
}

const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn1");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
 

const pedirListaU = () => {
  return new Promise ( (resolve, reject) => {
  setTimeout (() => {
    resolve(cargarUsuarios)
  }, 2000) 
})
} 

let arrListaVacia = []

const tabla = document.querySelector(`#lista-usuarios tbody`);
function cargarUsuarios() {
  fetch(`./usuarios.json`)
  .then(respuesta => respuesta.json())
    .then(usuarios => {
      usuarios.forEach(usuario => {
        const row = document.createElement(`tr`);
          row.innerHTML += `
          <td>${usuario.id}</td>
          <td>${usuario.nombre}</td>
          <td>${usuario.fecha}</td>
          <td>${usuario.numero}</td>`;

          tabla.appendChild(row);
      })
    })
    .catch(error => console.log(`Hubo un error: `+ error.mensaje))
}

pedirListaU()
.then((res) => {
  arrListaVacia = res
  cargarUsuarios(arrListaVacia)
})
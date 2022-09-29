/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombrePersona = prompt("Ingresa tu nombre");
  let anoNacimiento = Number(prompt("Ingresa el año en que naciste"));
  let ciudadActual = prompt("Ingresa la ciudad donde vives");
  let interes = confirm("Te interesa JavaScript?");
  if (isNaN(anoNacimiento)){
    datosPersona.edad = null;
  }else{
    datosPersona.edad = 2022 - anoNacimiento;
  }
  datosPersona.nombre = nombrePersona;
  datosPersona.ciudad = ciudadActual;
  if (interes == true) {
    datosPersona.interesPorJs = "Si";
  } else {
    datosPersona.interesPorJs = "No";
  }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").innerText = datosPersona.nombre;
  document.getElementById("edad").innerText = datosPersona.edad;
  document.getElementById("ciudad").innerText = datosPersona.ciudad;
  document.getElementById("javascript").innerText = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  if(document.getElementsByClassName("caja").length==0){
    listado.forEach((tarjetas) => {
      const materias = document.getElementById("fila");
      materias.innerHTML += `
      <li class="caja">
        <img src="${tarjetas.imgUrl}" alt="${tarjetas.lenguajes}">
        <p>${tarjetas.lenguajes}</p>
        <p>${tarjetas.bimestre}</p>
      </li>
    `;
    });
  }
}


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.getElementById("sitio").classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.onkeydown = function(event){
  if(event.key == "f"|| event.key == "F"){
    document.getElementById("sobre-mi").classList.remove("oculto");
  }
}
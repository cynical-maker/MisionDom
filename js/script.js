/* ===========================================================
   MISIÓN DOM — archivo de trabajo
   Aprendiz: Nombre Completo
   Ficha 3230489 · ADSO

   Este archivo empieza vacío. Cada misión de la parte 3 se
   escribe en el bloque que le corresponde, nunca donde quepa.
   =========================================================== */


/* ---------- 1. ELEMENTOS ---------- */
/* Las constantes que guardan las partes de la página.
   Una por cada elemento que vaya a manipular.            */

const lista = document.getElementById("lista");
const contador = document.getElementById("contador");
const campoProyecto = document.getElementById("campoProyecto");
const btnAgregar = document.getElementById("btnAgregar");
const btnQuitar = document.getElementById("btnQuitar");
const btnVaciar = document.getElementById("btnVaciar");
const btnDestacar = document.getElementById("btnDestacar");
const btnOcultar = document.getElementById("btnOcultar");
const btnColor = document.getElementById("btnColor");
const btnTema = document.getElementById("btnTema");
const caja = document.getElementById("caja");
const filas = document.querySelectorAll("#tabla tbody tr");
const filasTabla = document.querySelectorAll("#tabla tbody tr");
const anio = document.getElementById("anio");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const enlaceExterno = document.getElementById("enlaceExterno");
const campoMensaje = document.getElementById("campoMensaje");
const contadorLetras = document.getElementById("contadorLetras");


/* ---------- 2. ESTADO ---------- */
/* Los datos que la página recuerda entre un clic y otro.  */

const colores = ["#7c3aed", "#f59e0b", "#16a34a", "#dc2626", "#1a1330"];
let indiceColor = 0;

/* ---------- 3. FUNCIONES ---------- */
// Lo que la página sabe hacer.  

// Misión 4: 

function actualizarContador() {
  const cantidad = lista.querySelectorAll("li").length;

  if (cantidad === 0) {
    contador.textContent = "No hay proyectos registrados";
  } else if (cantidad === 1) {
    contador.textContent = "1 proyecto registrado";
  } else {
    contador.textContent = cantidad + " proyectos registrados";
  }
}

// Misión 9.
function agregarProyecto() {
  const texto = campoProyecto.value.trim();

  if (texto === "") {
    return; // este campo está vacío
  }

  const item = document.createElement("li"); 
  item.textContent = texto;                  
  lista.append(item);                       

  campoProyecto.value = "";
  campoProyecto.focus();
  actualizarContador();
}


// Misión 10.
function quitarUltimo() {
  const ultimo = lista.lastElementChild;

  if (ultimo === null) {
    return; // lista vacía: no hace nada
  }

  ultimo.remove();
  actualizarContador();
}

// Misión 11.
function vaciarLista() {
  lista.textContent = ""; // borra todo lo que hay dentro del <ul>
  actualizarContador();
}

// Misión 12:


filas.forEach(function (fila) {
  fila.addEventListener("click", function () {
    filas.forEach(function (otraFila) {
      otraFila.classList.remove("fila-marcada");
    });

    fila.classList.add("fila-marcada");
  });
});


/* ---------- 4. EVENTOS ---------- */
/* Cuándo lo hace. 
                                        */
//Mision 9.
btnAgregar.addEventListener("click", agregarProyecto);

campoProyecto.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    agregarProyecto();
  }
});
//Modo oscuro
btnTema.addEventListener('click', () => {
  document.body.classList.toggle('noche'); });


// Misión 5 — destacar la caja con un botón
btnDestacar.addEventListener("click", () => {
  caja.classList.toggle("destacada");
});



// Misión 6 — ocultar y mostrar la caja con un botón
btnOcultar.addEventListener("click", () => {
  caja.classList.toggle("oculto");
  btnOcultar.textContent = caja.classList.contains("oculto") ? "Mostrar" : "Ocultar";
});


// Misión 7 — cambiar de color en secuencia
btnColor.addEventListener("click", () => {
  const colorActual = colores[indiceColor];
  caja.style.backgroundColor = colorActual;

  indiceColor++;

  if (indiceColor >= colores.length) {
    indiceColor = 0;
  }
});






// Misión 10
btnQuitar.addEventListener("click", quitarUltimo);

// Misión 11
btnVaciar.addEventListener("click", vaciarLista);

// Misión 12
filas.forEach(function (fila) {
  fila.addEventListener("click", function () {
    marcarFila(fila);
  });
});

/* ---------- 5. ARRANQUE ---------- */
/* Lo que pasa apenas carga la página. */   
actualizarContador(); 

filasTabla.forEach((fila, indice) => {
  if (indice % 2 !== 0) {
    fila.style.backgroundColor = "#f3e8ff";
  }
});

// Misión 1.
const hoy = new Date();
const anioActual = hoy.getFullYear(); 
anio.textContent = anioActual;

// Misión 2.
titulo.textContent = "CyberLobby";   
subtitulo.textContent = "Tu tienda de videojuegos digitales - " + anioActual;

// Misión 3.
enlaceExterno.setAttribute("href", "https://store.steampowered.com/app/4232620/BUNNY_GARDEN_2__Rins_Karaoke_Song_So_naive_lol/");
enlaceExterno.setAttribute("target", "_blank");
enlaceExterno.setAttribute("rel", "noopener");
enlaceExterno.textContent = "visita nuestra página";

// Contador de letras del mensaje
const actualizarContadorLetras = () => {
  const longitud = campoMensaje.value.length;
  contadorLetras.textContent = longitud + " caracteres";
};

campoMensaje.addEventListener("input", actualizarContadorLetras);
actualizarContadorLetras();
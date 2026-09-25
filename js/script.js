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
const filas = document.querySelectorAll("#tabla tbody tr");
const anio = document.getElementById("anio");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const enlaceExterno = document.getElementById("enlaceExterno");

/* ---------- 2. ESTADO ---------- */
/* Los datos que la página recuerda entre un clic y otro.  */




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
function marcarFila(filaClicada) {
  filas.forEach(function (fila) {
    fila.classList.remove("fila-marcada"); // 1. limpia todas
  });
  filaClicada.classList.add("fila-marcada"); // 2. marca solo la elegida
}


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
/* ============================================================
   LÓGICA DE LA APP
   ============================================================ */

const LS = {
  ajustes: "tarot_ajustes_v1",
  srs: "tarot_srs_v1",
  stats: "tarot_stats_v1",
};

/* ---------- Utilidades ---------- */
function mezclar(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function tomar(arr, n) { return mezclar(arr).slice(0, n); }
function $(id) { return document.getElementById(id); }

/* ---------- Estado persistente ---------- */
function cargarAjustes() {
  const base = {
    elementoPorPalo: {}, // override: paloId -> elementoId
    incluirMayores: true, // Arcanos Mayores en la práctica
    incluirMenores: true, // Arcanos Menores en la práctica
    incluirCorte: true,
    incluirNumeros: true,
    quizDificil: false,  // modo difícil de Adivina: pista = solo la lectura
    sonido: true,        // efectos de sonido
  };
  try {
    const g = JSON.parse(localStorage.getItem(LS.ajustes));
    if (g) Object.assign(base, g);
  } catch (e) {}
  return base;
}
function guardarAjustes(a) {
  try { localStorage.setItem(LS.ajustes, JSON.stringify(a)); } catch (e) {}
}
let ajustes = cargarAjustes();

/* Aplica los overrides de elemento del usuario sobre PALOS */
function aplicarAjustesAPalos() {
  for (const paloId of Object.keys(PALOS)) {
    const ov = ajustes.elementoPorPalo[paloId];
    if (ov && ELEMENTOS[ov]) PALOS[paloId].elemento = ov;
  }
}

/* Baraja activa según el alcance elegido (mayores + menores) */
function barajaActiva() {
  return construirBaraja().filter((c) => {
    if (c.tipo === "mayor") return ajustes.incluirMayores;
    if (!ajustes.incluirMenores) return false;
    if (c.tipo === "corte") return ajustes.incluirCorte;
    if (c.tipo === "numero") return ajustes.incluirNumeros;
    return true;
  });
}

/* Baraja solo de menores (Construir enseña la fórmula número × elemento) */
function barajaConstruir() {
  return barajaActiva().filter((c) => c.tipo !== "mayor");
}

/* ---------- Navegación entre vistas ---------- */
document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((b) => b.classList.remove("activo"));
    document.querySelectorAll(".vista").forEach((v) => v.classList.remove("activa"));
    btn.classList.add("activo");
    $("vista-" + btn.dataset.vista).classList.add("activa");
    if (btn.dataset.vista === "referencia") renderReferencia();
    if (btn.dataset.vista === "ajustes") renderAjustes();
    if (btn.dataset.vista === "quiz" && !quizActual) nuevaQuiz();
    if (btn.dataset.vista === "estadisticas") renderEstadisticas();
  });
});

/* ============================================================
   MODO CONSTRUIR
   ============================================================ */
let cartaActual = null;
let orientacionInv = false; // ¿la carta mostrada está invertida?

function opcionesGrado(carta, inv) {
  const correcta = gradoClave(carta, inv);
  const pool = carta.tipo === "numero"
    ? Object.values(NUMEROS).map((n) => (inv ? n.claveInv : n.clave))
    : Object.values(CORTE).map((c) => (inv ? c.claveInv : c.clave));
  const distractores = tomar(pool.filter((t) => t !== correcta), 2);
  return mezclar([{ t: correcta, ok: true }, ...distractores.map((t) => ({ t, ok: false }))]);
}

function opcionesElemento(carta, inv) {
  const elemCorrecto = PALOS[carta.palo].elemento;
  const correcta = elementoOpcion(elemCorrecto, inv);
  const otros = tomar(
    ["fuego", "agua", "aire", "tierra"].filter((e) => e !== elemCorrecto), 2
  ).map((e) => elementoOpcion(e, inv));
  return mezclar([{ t: correcta, ok: true }, ...otros.map((t) => ({ t, ok: false }))]);
}

function pintarOpciones(contenedor, opciones, onAnswer) {
  contenedor.innerHTML = "";
  opciones.forEach((op) => {
    const b = document.createElement("button");
    b.className = "opcion";
    b.textContent = op.t;
    b.addEventListener("click", () => {
      if (contenedor.dataset.resuelto) return;
      contenedor.dataset.resuelto = "1";
      [...contenedor.children].forEach((c) => {
        if (c.textContent === op.t) c.classList.add(op.ok ? "correcta" : "incorrecta");
      });
      // marca siempre la correcta
      [...contenedor.children].forEach((c, i) => {
        if (opciones[i].ok) c.classList.add("correcta");
      });
      (op.ok ? Sonido.acierto : Sonido.error)();
      if (onAnswer) onAnswer(!!op.ok);
    });
    contenedor.appendChild(b);
  });
}

/* Rellena los dos selectores (palo + número/rango) */
function poblarSelectores() {
  const sp = $("sel-palo");
  sp.innerHTML = "";
  for (const id of Object.keys(PALOS)) {
    const o = document.createElement("option");
    o.value = id; o.textContent = `${PALOS[id].emoji} ${PALOS[id].nombre}`;
    sp.appendChild(o);
  }
  const sr = $("sel-rango");
  sr.innerHTML = "";
  const add = (v, t) => { const o = document.createElement("option"); o.value = v; o.textContent = t; sr.appendChild(o); };
  add("1", "As");
  for (let n = 2; n <= 10; n++) add(String(n), String(n));
  add("paje", "Paje"); add("caballero", "Caballero"); add("reina", "Reina"); add("rey", "Rey");
}

function cartaDesdeSelector() {
  const palo = $("sel-palo").value;
  const r = $("sel-rango").value;
  if (RANGOS_CORTE.includes(r)) return { id: `${palo}-${r}`, palo, tipo: "corte", rango: r };
  return { id: `${palo}-${r}`, palo, tipo: "numero", num: parseInt(r, 10) };
}

function montarPreguntas(carta, inv) {
  const gc = $("c-op-grado"), ec = $("c-op-elem");
  delete gc.dataset.resuelto; delete ec.dataset.resuelto;
  pintarOpciones(gc, opcionesGrado(carta, inv),
    (ok) => registrar("construir", { tipo: carta.tipo, grado: gradoKey(carta) }, ok));
  pintarOpciones(ec, opcionesElemento(carta, inv),
    (ok) => registrar("construir", { palo: carta.palo }, ok));
  $("c-instruccion").innerHTML = inv
    ? "⟳ Carta <strong>invertida</strong>: elige su significado <strong>invertido</strong>. Luego revela la síntesis."
    : "Elige el significado del <strong>grado</strong> y del <strong>elemento</strong>. Luego revela la síntesis.";
  $("c-revelacion").classList.add("oculto");
}

function actualizarBadge() {
  $("c-badge").textContent = orientacionInv ? "⟳ Invertida" : "Derecha";
  $("c-badge").classList.toggle("inv", orientacionInv);
}

/* --- Enlaces externos "Más información" por carta --- */
const PALABRA_RANGO = { 1: "ace", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", paje: "page", caballero: "knight", reina: "queen", rey: "king" };
const PALO_WORD = { bastos: "wands", copas: "cups", espadas: "swords", oros: "pentacles" };

function enlacesCarta(carta) {
  if (carta.tipo === "mayor") {
    const s = MAYOR_SLUG[carta.n];
    return {
      biddy: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/${s}/`,
      labyrinthos: `https://labyrinthos.co/blogs/tarot-card-meanings-list/${s}-meaning-major-arcana-tarot-card-meanings`,
    };
  }
  const suit = PALO_WORD[carta.palo];
  const rango = carta.tipo === "numero" ? PALABRA_RANGO[carta.num] : PALABRA_RANGO[carta.rango];
  return {
    biddy: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-${suit}/${rango}-of-${suit}/`,
    labyrinthos: `https://labyrinthos.co/blogs/tarot-card-meanings-list/tagged/${suit}`,
  };
}

/* Ficha (Fase 1) de un Arcano Mayor. */
function renderDetalleMayor(carta, inv, cont) {
  const m = MAYORES[carta.n];
  const red = reducirNum(carta.n);
  const numInfo = red >= 1 && red <= 10 ? NUMEROS[red] : null;
  const titulo = m.claves.map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(" · ");
  cont.innerHTML = `
    <p class="det-general">${titulo}</p>
    <h4>🔮 Lectura ${inv ? "(invertida)" : "(al derecho)"}</h4>
    <p>${inv ? m.invertido : m.derecho}</p>
    <h4>🧭 Correspondencias</h4>
    <ul class="det-corr">
      <li><b>Arcano:</b> ${romanoMayor(carta.n)} (${carta.n})</li>
      <li><b>Correspondencia:</b> ${m.corr}</li>
      <li><b>El viaje:</b> ${LINEA_NOMBRE[lineaMayor(carta.n)]}</li>
      ${carta.n === 0 ? "" : `<li><b>Numerología:</b> ${carta.n} → ${red}${numInfo ? " (" + numInfo.nombre + ")" : ""}</li>`}
    </ul>
    <p class="mini">Ficha narrada completa: próximamente (Fase 2).</p>`;
}

let detalleAbierto = false;

function renderDetalle(carta, inv, idCont, idLinks) {
  idCont = idCont || "c-det-contenido";
  idLinks = idLinks || "c-det-links";
  const cont = $(idCont);
  if (carta.tipo === "mayor") {
    renderDetalleMayor(carta, inv, cont);
    const em = enlacesCarta(carta);
    $(idLinks).innerHTML =
      `<a href="${em.labyrinthos}" target="_blank" rel="noopener">Más información · Labyrinthos ↗</a>` +
      `<a href="${em.biddy}" target="_blank" rel="noopener">Más información · Biddy Tarot ↗</a>`;
    return;
  }
  const d = DETALLE[carta.id];
  if (d) {
    const palo = PALOS[carta.palo], elem = ELEMENTOS[palo.elemento];
    const sig = inv ? d.esoterico.invertido : d.esoterico.derecho;
    const rango = carta.tipo === "numero"
      ? (carta.num === 1 ? "As (1)" : carta.num)
      : CORTE[carta.rango].nombre.split(" / ")[0];
    cont.innerHTML = `
      <p class="det-general">${d.general}</p>
      <h4>🎴 La escena</h4><p>${d.simbolismo}</p>
      <h4>🔮 Lectura ${inv ? "(invertida)" : "(al derecho)"}</h4><p>${sig}</p>
      <h4>🧭 Correspondencias</h4>
      <ul class="det-corr">
        <li><b>Elemento:</b> ${elem.nombre} ${elem.emoji}</li>
        <li><b>Número / Rango:</b> ${rango}</li>
        <li><b>Planeta:</b> ${d.correspondencias.planeta}</li>
        <li><b>Signo:</b> ${d.correspondencias.signo}</li>
        ${d.correspondencias.decanato ? `<li><b>Matiz:</b> ${d.correspondencias.decanato}</li>` : ""}
      </ul>
      <h4>✨ Lo que la hace única</h4><p>${d.particularidad}</p>`;
  } else {
    cont.innerHTML = `<p class="mini">La ficha detallada de esta carta llegará pronto. Por ahora, el palo de <strong>Copas</strong> está completo como muestra; los demás se irán añadiendo con el mismo estilo.</p>`;
  }
  const e = enlacesCarta(carta);
  $(idLinks).innerHTML =
    `<a href="${e.labyrinthos}" target="_blank" rel="noopener">Más información · Labyrinthos ↗</a>` +
    `<a href="${e.biddy}" target="_blank" rel="noopener">Más información · Biddy Tarot ↗</a>`;
}

/* Lleva un elemento a la vista si no está (bien) visible en pantalla */
function asegurarVisible(el) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  if (r.top < 70 || r.bottom > vh - 20) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

/* Animación genérica del mazo: barajar -> sacar -> voltear -> onReveal.
   ids: { mazo, carta3d, img, nombre }  estado: { animando } */
function animarMazo(ids, carta, inv, estado, onReveal) {
  if (estado.animando) return;
  estado.animando = true;
  const c3d = $(ids.carta3d), mazo = $(ids.mazo);

  // asegura que se vea el barajado aunque estés leyendo la ficha más abajo
  asegurarVisible(ids.zona ? $(ids.zona) : mazo);

  c3d.classList.add("oculto");
  c3d.classList.remove("volteada");
  if (ids.nombre) $(ids.nombre).textContent = "Barajando…";

  mazo.classList.remove("barajando");
  void mazo.offsetWidth;
  mazo.classList.add("barajando");
  Sonido.barajar();

  setTimeout(() => {
    const img = $(ids.img);
    img.src = imagenCarta(carta);
    img.alt = nombreCarta(carta);
    img.classList.toggle("invertida", !!inv);
    c3d.classList.remove("oculto");
    c3d.style.animation = "none"; void c3d.offsetWidth; c3d.style.animation = "";
    if (ids.nombre) $(ids.nombre).textContent = "…";
    setTimeout(() => {
      c3d.classList.add("volteada");
      Sonido.voltear();
      setTimeout(() => {
        estado.animando = false;
        if (onReveal) onReveal();
      }, 620);
    }, 720);
  }, 820);
}

/* --- Construir: sacar carta con animación --- */
const estadoC = { animando: false };
function animarYSacar(carta, inv) {
  if (estadoC.animando) return;
  cartaActual = carta;
  orientacionInv = !!inv;
  $("c-preguntas").classList.add("oculto");
  $("c-revelacion").classList.add("oculto");
  $("c-orientacion").classList.add("oculto");
  // sincroniza el selector con la carta mostrada
  $("sel-palo").value = carta.palo;
  $("sel-rango").value = carta.tipo === "numero" ? String(carta.num) : carta.rango;

  animarMazo({ mazo: "mazo", carta3d: "carta3d", img: "c-img", nombre: "c-nombre", zona: "mazo-zona" },
    carta, orientacionInv, estadoC, () => {
      $("c-nombre").textContent = nombreCarta(carta);
      actualizarBadge();
      $("c-orientacion").classList.remove("oculto");
      renderDetalle(carta, orientacionInv, "c-det-contenido", "c-det-links");
      $("c-detalle").classList.remove("oculto");
      montarPreguntas(carta, orientacionInv);
      $("c-preguntas").classList.remove("oculto");
    });
}

function cartaAzar() {
  const baraja = barajaConstruir(); // Construir: solo menores (la fórmula)
  if (!baraja.length) {
    $("c-nombre").textContent = "Activa los Arcanos Menores en ⚙️ Ajustes para usar Construir.";
    return;
  }
  const carta = baraja[Math.floor(Math.random() * baraja.length)];
  animarYSacar(carta, Math.random() < 0.5); // al azar puede salir invertida
}

function revelarConstruir() {
  const s = sintesisCarta(cartaActual, orientacionInv);
  $("c-formula").textContent = s.formula;
  $("c-r-grado").textContent = s.grado;
  $("c-r-elem").textContent = s.elemento;
  $("c-r-puente").textContent = s.puente;
  $("c-revelacion").classList.remove("oculto");
}

$("c-revelar").addEventListener("click", revelarConstruir);
$("c-siguiente").addEventListener("click", cartaAzar);
$("sel-practicar").addEventListener("click", () => animarYSacar(cartaDesdeSelector(), false));

// El botón "Barajar" no saca la carta: resalta el mazo para invitar a tocarlo
$("sel-azar").addEventListener("click", () => {
  if (estadoC.animando) return;
  const mazo = $("mazo");
  mazo.scrollIntoView({ behavior: "smooth", block: "center" });
  mazo.classList.remove("senalar");
  void mazo.offsetWidth;
  mazo.classList.add("senalar");
  setTimeout(() => mazo.classList.remove("senalar"), 1400);
});

// Botón para invertir/enderezar la carta manualmente
$("c-invertir").addEventListener("click", () => {
  if (!cartaActual) return;
  orientacionInv = !orientacionInv;
  $("c-img").classList.toggle("invertida", orientacionInv);
  actualizarBadge();
  const sintesisVisible = !$("c-revelacion").classList.contains("oculto");
  // recalcula las opciones de práctica con los significados de la nueva orientación
  montarPreguntas(cartaActual, orientacionInv);
  // si la síntesis ya estaba revelada, mantenla visible y actualizada
  if (sintesisVisible) revelarConstruir();
  // actualiza la ficha detallada a la nueva orientación
  renderDetalle(cartaActual, orientacionInv, "c-det-contenido", "c-det-links");
});

// Tocar el mazo para barajar y sacar una carta al azar
$("mazo").addEventListener("click", () => { if (!estadoC.animando) cartaAzar(); });

// Abrir la carta a pantalla completa (al tocar la carta revelada)
$("carta3d").addEventListener("click", (e) => {
  e.stopPropagation();
  if (cartaActual && $("carta3d").classList.contains("volteada")) {
    abrirLightbox(imagenCarta(cartaActual), nombreCarta(cartaActual), orientacionInv);
  }
});

// Desplegar / plegar la ficha detallada
$("c-detalle-toggle").addEventListener("click", () => {
  detalleAbierto = !detalleAbierto;
  $("c-detalle-cuerpo").classList.toggle("oculto", !detalleAbierto);
  $("c-detalle-toggle").setAttribute("aria-expanded", detalleAbierto ? "true" : "false");
});

/* ============================================================
   FLASHCARDS con repetición espaciada (SM-2 simplificado)
   ============================================================ */
function cargarSRS() {
  try { return JSON.parse(localStorage.getItem(LS.srs)) || {}; } catch (e) { return {}; }
}
function guardarSRS(s) {
  try { localStorage.setItem(LS.srs, JSON.stringify(s)); } catch (e) {}
}
let srs = cargarSRS();
let fcActual = null;
let fcInv = false; // ¿la flashcard salió invertida?

/* Elige la carta "más vencida": menor dueAt; las nuevas tienen prioridad */
function elegirFlashcard() {
  const baraja = barajaActiva();
  const ahora = Date.now();
  let mejor = null, mejorScore = Infinity;
  for (const c of baraja) {
    const e = srs[c.id];
    const due = e ? e.dueAt : 0; // nuevas => 0 => máxima prioridad
    if (due <= ahora || !mejor) {
      if (due < mejorScore) { mejorScore = due; mejor = c; }
    }
  }
  return mejor || baraja[0];
}

const estadoF = { animando: false };

function actualizarProgresoFC() {
  const baraja = barajaActiva();
  const estudiadas = Object.keys(srs).filter((id) => baraja.some((c) => c.id === id)).length;
  $("fc-progreso").textContent = `Vistas: ${estudiadas} / ${baraja.length} cartas`;
}

/* Saca la siguiente flashcard con la animación del mazo (muestra la cara). */
function pintarFlashcard() {
  fcActual = elegirFlashcard();
  fcInv = Math.random() < 0.35; // ~35 % salen invertidas
  actualizarProgresoFC();
  // oculta todo lo del reverso mientras baraja
  $("fc-reverso").classList.add("oculto");
  $("fc-acciones-frente").classList.add("oculto");
  $("fc-acciones-reverso").classList.add("oculto");
  $("fc-detalle").classList.add("oculto");

  animarMazo({ mazo: "fc-mazo", carta3d: "fc-carta3d", img: "fc-img", nombre: "fc-nombre", zona: "fc-mazo-zona" },
    fcActual, fcInv, estadoF, () => {
      $("fc-nombre").textContent = nombreCarta(fcActual) + (fcInv ? " ⟳ invertida" : "");
      // de momento solo el botón "Ver significado"; el significado se revela al voltear
      $("fc-acciones-frente").classList.remove("oculto");
    });
}

function voltearFlashcard() {
  Sonido.voltear();
  const s = sintesisCarta(fcActual, fcInv);
  const det = DETALLE[fcActual.id];
  $("fc-narracion").textContent = det ? det.general : "";
  $("fc-formula").textContent = s.formula;
  $("fc-grado").textContent = (s.etGrado || "Grado") + ": " + s.grado;
  $("fc-elem").textContent = s.elemento;
  $("fc-puente").textContent = s.puente;
  $("fc-reverso").classList.remove("oculto");
  $("fc-acciones-frente").classList.add("oculto");
  $("fc-acciones-reverso").classList.remove("oculto");
  // revela también la ficha detallada (colapsada), según la orientación
  renderDetalle(fcActual, fcInv, "fc-det-contenido", "fc-det-links");
  $("fc-detalle").classList.remove("oculto");
}

/* calidad: 0 otra vez, 1 difícil, 2 bien, 3 fácil */
function evaluarFlashcard(calidad) {
  // Para estadísticas: "Bien"/"Fácil" (2-3) cuentan como dominada.
  registrar("flashcards", bucketsCarta(fcActual), calidad >= 2);
  const e = srs[fcActual.id] || { ef: 2.5, intervalo: 0, reps: 0 };
  if (calidad === 0) {
    e.reps = 0; e.intervalo = 0; // vuelve pronto
  } else {
    e.reps += 1;
    if (e.reps === 1) e.intervalo = 1;
    else if (e.reps === 2) e.intervalo = 3;
    else e.intervalo = Math.round(e.intervalo * e.ef);
    e.ef = Math.max(1.3, e.ef + (0.1 - (3 - calidad) * (0.08 + (3 - calidad) * 0.02)));
  }
  const dias = e.intervalo;
  e.dueAt = Date.now() + (calidad === 0 ? 30 * 1000 : dias * 24 * 3600 * 1000);
  srs[fcActual.id] = e;
  guardarSRS(srs);
  pintarFlashcard();
}

$("fc-voltear").addEventListener("click", voltearFlashcard);
document.querySelectorAll(".btn-eval").forEach((b) =>
  b.addEventListener("click", () => evaluarFlashcard(parseInt(b.dataset.q, 10)))
);
$("fc-reset").addEventListener("click", () => {
  if (confirm("¿Borrar todo el progreso de flashcards?")) {
    srs = {}; guardarSRS(srs); actualizarProgresoFC();
  }
});

// Tocar el mazo saca la siguiente flashcard
$("fc-mazo").addEventListener("click", () => { if (!estadoF.animando) pintarFlashcard(); });

// Tocar la carta la amplía a pantalla completa
$("fc-carta3d").addEventListener("click", (e) => {
  e.stopPropagation();
  if (fcActual && $("fc-carta3d").classList.contains("volteada")) {
    abrirLightbox(imagenCarta(fcActual), nombreCarta(fcActual), fcInv);
  }
});

// Desplegar / plegar la ficha detallada en flashcards
let fcDetalleAbierto = false;
$("fc-detalle-toggle").addEventListener("click", () => {
  fcDetalleAbierto = !fcDetalleAbierto;
  $("fc-detalle-cuerpo").classList.toggle("oculto", !fcDetalleAbierto);
  $("fc-detalle-toggle").setAttribute("aria-expanded", fcDetalleAbierto ? "true" : "false");
});

/* ============================================================
   MODO QUIZ INVERSO — se da el significado, se adivina la carta
   ============================================================ */
let quizActual = null;      // carta objetivo de la pregunta en curso
let quizInv = false;        // ¿la carta objetivo está invertida? (orientación a adivinar)
let quizVerInv = false;     // orientación mostrada en la revelación/ficha (editable con Invertir)
let quizResuelto = false;
let quizFase = "carta";     // "carta" (elegir carta) → "orientacion" (elegir orientación) → "resuelto"
let quizCartaOk = false;    // ¿se acertó la carta en el paso 1?

/* Construye el texto-pista SIN nombrar la carta, el palo, el elemento
   ni el número: solo la energía del elemento y el aporte del grado.
   Así hay que *deducir* la carta a partir de su significado. */
function pistaQuiz(carta, inv) {
  const palo = PALOS[carta.palo];
  const elem = ELEMENTOS[palo.elemento];
  const grado = carta.tipo === "numero"
    ? (inv ? NUMEROS[carta.num].claveInv : NUMEROS[carta.num].clave)
    : (inv ? CORTE[carta.rango].claveInv : CORTE[carta.rango].clave);
  const energiaFrase = inv
    ? `${elem.frase}, pero en bloqueo, exceso o vuelta hacia dentro`
    : elem.frase;
  return { grado, energiaFrase, palabras: elem.palabras.join(", ") };
}

/* HTML de la pista, según el tipo de carta y el nivel de dificultad. */
function pistaHTML(carta, inv, dificil) {
  if (carta.tipo === "mayor") {
    const m = MAYORES[carta.n];
    const lectura = inv ? m.invertido : m.derecho;
    if (dificil) {
      return `<p><span class="quiz-et">Su lectura</span>${lectura}</p>` +
        `<p class="quiz-dif-nota">Modo difícil: dedúcela solo por su significado.</p>`;
    }
    const red = reducirNum(carta.n);
    const numInfo = red >= 1 && red <= 10 ? NUMEROS[red] : null;
    const numTxt = carta.n === 0
      ? "número 0: potencial puro, el que inicia el viaje"
      : `número ${carta.n} → ${red}${numInfo ? ": " + numInfo.clave.split(/[,.]/)[0].toLowerCase() : ""}`;
    return `<p><span class="quiz-et">El viaje · numerología</span>${LINEA_NOMBRE[lineaMayor(carta.n)]} · ${numTxt}</p>` +
      `<p><span class="quiz-et">Su lectura</span>${lectura}</p>`;
  }
  // Menores
  if (dificil) {
    const d = DETALLE[carta.id];
    const lectura = d ? limpiarPista(inv ? d.esoterico.invertido : d.esoterico.derecho) : "";
    return `<p><span class="quiz-et">Su lectura</span>${lectura}</p>` +
      `<p class="quiz-dif-nota">Modo difícil: sin pistas de elemento ni grado. Dedúcela solo por su significado.</p>`;
  }
  const p = pistaQuiz(carta, inv);
  return `<p><span class="quiz-et">Elemento · energía</span>${p.energiaFrase} ` +
    `<span class="quiz-palabras">(${p.palabras})</span></p>` +
    `<p><span class="quiz-et">Grado · número o rango</span>${p.grado}</p>`;
}

/* Neutraliza menciones de palo/elemento para el modo difícil
   (la lectura casi nunca los nombra; esto cubre los casos sueltos). */
function limpiarPista(t) {
  return (t || "")
    .replace(/\bcopas\b/gi, "cartas").replace(/\bcopa\b/gi, "carta")
    .replace(/\bbastos\b/gi, "cartas").replace(/\bbasto\b/gi, "carta")
    .replace(/\bespadas\b/gi, "cartas").replace(/\bespada\b/gi, "carta")
    .replace(/\boros\b/gi, "monedas").replace(/\boro\b/gi, "moneda")
    .replace(/\b(wands?|cups?|swords?|pentacles?)\b/gi, "cartas")
    .replace(/\b(fuego|agua|aire|tierra)\b/gi, "energía");
}

/* Elige 3 distractores "cercanos" del MISMO tipo (mayor o menor).
   Menores: mismo palo / mismo rango. Mayores: misma línea / mismo número reducido. */
function distractoresQuiz(correcta, baraja) {
  const esMayor = correcta.tipo === "mayor";
  const otras = baraja.filter((c) => c.id !== correcta.id && (c.tipo === "mayor") === esMayor);
  let cercanosA, cercanosB;
  if (esMayor) {
    cercanosA = mezclar(otras.filter((c) => lineaMayor(c.n) === lineaMayor(correcta.n)));
    cercanosB = mezclar(otras.filter((c) => reducirNum(c.n) === reducirNum(correcta.n)));
  } else {
    cercanosA = mezclar(otras.filter((c) => c.palo === correcta.palo));
    cercanosB = mezclar(otras.filter((c) =>
      (correcta.tipo === "numero" && c.tipo === "numero" && c.num === correcta.num) ||
      (correcta.tipo === "corte" && c.tipo === "corte" && c.rango === correcta.rango)));
  }
  const elegidas = [];
  const push = (c) => { if (c && !elegidas.some((x) => x.id === c.id)) elegidas.push(c); };
  push(cercanosA[0]);
  push(cercanosB[0]);
  for (const c of mezclar(otras)) { if (elegidas.length >= 3) break; push(c); }
  return elegidas.slice(0, 3);
}

/* Pulsación larga en una opción → verla a pantalla completa (al derecho:
   la orientación se decide aparte, en el 2º paso).
   El toque corto sirve para elegir esa carta. */
function pulsacionLargaOpcion(btn, op) {
  let timer = null, largo = false, x0 = 0, y0 = 0;
  const abrir = () => { largo = true; abrirLightbox(imagenCarta(op.carta), nombreCarta(op.carta), false); };
  const cancelar = () => { clearTimeout(timer); };
  btn.addEventListener("pointerdown", (e) => {
    largo = false; x0 = e.clientX; y0 = e.clientY;
    timer = setTimeout(abrir, 450);
  });
  btn.addEventListener("pointermove", (e) => {
    if (Math.abs(e.clientX - x0) > 12 || Math.abs(e.clientY - y0) > 12) cancelar();
  });
  btn.addEventListener("pointerup", cancelar);
  btn.addEventListener("pointerleave", cancelar);
  btn.addEventListener("pointercancel", cancelar);
  btn.addEventListener("click", (e) => {
    if (largo) { largo = false; e.preventDefault(); return; } // fue pulsación larga: no seleccionar
    elegirCartaQuiz(op, btn);
  });
}

function pintarOpcionesQuiz(opciones) {
  const cont = $("quiz-opciones");
  cont.innerHTML = "";
  opciones.forEach((op) => {
    const b = document.createElement("button");
    b.className = "quiz-opcion";
    b.innerHTML =
      `<img src="${imagenCarta(op.carta)}" alt="${nombreCarta(op.carta)}" />` +
      `<span>${nombreCarta(op.carta)}</span>`;
    pulsacionLargaOpcion(b, op);
    cont.appendChild(b);
  });
}

/* Pinta la revelación (carta + síntesis + ficha) en la orientación quizVerInv. */
function pintarRevelacionQuiz() {
  const inv = quizVerInv;
  const s = sintesisCarta(quizActual, inv);
  const img = $("quiz-mini-img");
  img.src = imagenCarta(quizActual);
  img.alt = nombreCarta(quizActual);
  img.classList.toggle("invertida", inv);
  $("quiz-formula").textContent = s.formula;
  $("quiz-lbl-grado").textContent = (s.etGrado || "Grado") + ":";
  $("quiz-lbl-elem").textContent = (s.etElem || "Elemento") + ":";
  $("quiz-r-grado").textContent = s.grado;
  $("quiz-r-elem").textContent = s.elemento;
  $("quiz-r-puente").textContent = s.puente;
  renderDetalle(quizActual, inv, "quiz-det-contenido", "quiz-det-links");
  $("quiz-det-badge").textContent = inv ? "⟳ Invertida" : "Derecha";
  $("quiz-det-badge").classList.toggle("inv", inv);
  $("quiz-det-invertir").textContent = inv ? "⟳ Ver al derecho" : "⟳ Ver invertida";
}

/* Paso 1: elegir la CARTA (por identidad; la orientación se pregunta después). */
function elegirCartaQuiz(op, boton) {
  if (quizFase !== "carta") return;
  const cont = $("quiz-opciones");
  boton.classList.add(op.ok ? "correcta" : "incorrecta");
  [...cont.children].forEach((b) => {
    if (b.querySelector("span").textContent === nombreCarta(quizActual)) b.classList.add("correcta");
    b.classList.add("bloqueada");
  });
  quizCartaOk = op.ok;
  if (!op.ok) {
    // carta incorrecta → se acabó, cuenta como fallo (no se pregunta orientación)
    Sonido.error();
    finalizarQuiz(false, false);
  } else {
    // carta correcta → paso 2: ¿cómo cae?
    quizFase = "orientacion";
    $("quiz-orient-carta").textContent = nombreCarta(quizActual);
    $("quiz-orient-q").classList.remove("oculto");
    asegurarVisible($("quiz-orient-q"));
  }
}

/* Paso 2: elegir la ORIENTACIÓN (derecha / invertida). */
function elegirOrientacionQuiz(ori) {
  if (quizFase !== "orientacion") return;
  const elegidaInv = ori === "inv";
  const ok = elegidaInv === quizInv; // la carta ya era correcta
  const correctaOri = quizInv ? "inv" : "der";
  document.querySelectorAll(".quiz-orient-op").forEach((b) => {
    b.classList.add("bloqueada");
    if (b.dataset.ori === correctaOri) b.classList.add("correcta");
    else if (b.dataset.ori === ori) b.classList.add("incorrecta");
  });
  (ok ? Sonido.acierto : Sonido.error)();
  finalizarQuiz(ok, true);
}

/* Cierra la pregunta: registra, revela y muestra el marcador. */
function finalizarQuiz(ok, cartaFueCorrecta) {
  quizFase = "resuelto";
  quizResuelto = true;
  registrar("quiz", bucketsCarta(quizActual), ok);
  quizVerInv = quizInv;
  pintarRevelacionQuiz();
  $("quiz-revelacion").classList.remove("oculto");
  let msg, clase;
  if (ok) {
    msg = "✔ ¡Correcto! " + nombreCarta(quizActual) + (quizInv ? ", invertida." : ", al derecho.");
    clase = "ok";
  } else if (cartaFueCorrecta) {
    msg = "◑ Casi: acertaste la carta, pero caía " + (quizInv ? "invertida" : "al derecho") + ".";
    clase = "casi";
  } else {
    msg = "✘ Era " + nombreCarta(quizActual) + (quizInv ? " (invertida)" : "") + ".";
    clase = "mal";
  }
  $("quiz-marcador").textContent = msg;
  $("quiz-marcador").className = "quiz-marcador " + clase;
  $("quiz-detalle").classList.remove("oculto");
  asegurarVisible($("quiz-revelacion"));
}

function nuevaQuiz() {
  // refleja el modo guardado en los botones
  document.querySelectorAll(".quiz-dif-btn").forEach((x) =>
    x.classList.toggle("activo", (x.dataset.dif === "dificil") === !!ajustes.quizDificil));
  const baraja = barajaActiva();
  quizActual = baraja[Math.floor(Math.random() * baraja.length)];
  // Difícil: 50 % invertidas; Normal: ~40 %.
  quizInv = Math.random() < (ajustes.quizDificil ? 0.5 : 0.4);
  quizResuelto = false;
  quizFase = "carta";
  quizCartaOk = false;

  // Sin leyenda: la inversión se comunica por la descripción y la orientación elegida.
  $("quiz-pista").innerHTML = pistaHTML(quizActual, quizInv, ajustes.quizDificil);

  // 4 cartas distintas al derecho (la orientación se decide en el paso 2).
  const opciones = [
    { carta: quizActual, ok: true },
    ...distractoresQuiz(quizActual, baraja).map((c) => ({ carta: c, ok: false })),
  ];
  pintarOpcionesQuiz(mezclar(opciones));

  // reinicia la pregunta de orientación (paso 2)
  $("quiz-orient-q").classList.add("oculto");
  document.querySelectorAll(".quiz-orient-op").forEach((b) =>
    b.classList.remove("correcta", "incorrecta", "bloqueada"));

  $("quiz-revelacion").classList.add("oculto");
  $("quiz-marcador").textContent = "";
  $("quiz-marcador").className = "quiz-marcador";
  // reinicia la ficha detallada (oculta y colapsada)
  $("quiz-detalle").classList.add("oculto");
  quizDetalleAbierto = false;
  $("quiz-detalle-cuerpo").classList.add("oculto");
  $("quiz-detalle-toggle").setAttribute("aria-expanded", "false");
}

$("quiz-siguiente").addEventListener("click", nuevaQuiz);

// Paso 2: botones de orientación (¿cómo cae?)
document.querySelectorAll(".quiz-orient-op").forEach((b) =>
  b.addEventListener("click", () => elegirOrientacionQuiz(b.dataset.ori)));

// Conmutador de dificultad (persistente en Ajustes)
document.querySelectorAll(".quiz-dif-btn").forEach((b) =>
  b.addEventListener("click", () => {
    ajustes.quizDificil = b.dataset.dif === "dificil";
    guardarAjustes(ajustes);
    document.querySelectorAll(".quiz-dif-btn").forEach((x) =>
      x.classList.toggle("activo", x.dataset.dif === b.dataset.dif));
    nuevaQuiz(); // regenera la pregunta con el nuevo modo
  }));

// Desplegar / plegar la ficha detallada en Adivina
let quizDetalleAbierto = false;
$("quiz-detalle-toggle").addEventListener("click", () => {
  quizDetalleAbierto = !quizDetalleAbierto;
  $("quiz-detalle-cuerpo").classList.toggle("oculto", !quizDetalleAbierto);
  $("quiz-detalle-toggle").setAttribute("aria-expanded", quizDetalleAbierto ? "true" : "false");
});

// Invertir / revertir desde la ficha: estudia los dos significados de la carta
$("quiz-det-invertir").addEventListener("click", () => {
  if (!quizResuelto) return;
  quizVerInv = !quizVerInv;
  pintarRevelacionQuiz();
});

// Tocar la carta revelada la amplía a pantalla completa (en su orientación actual)
$("quiz-mini").addEventListener("click", () => {
  if (quizResuelto && quizActual) {
    abrirLightbox(imagenCarta(quizActual), nombreCarta(quizActual), quizVerInv);
  }
});

/* ============================================================
   ESTADÍSTICAS DE PROGRESO (📊 Progreso)
   Registra aciertos de los 3 modos, por modo/palo/grado/tipo,
   en dos ámbitos: la "tanda" actual y el histórico "total".
   ============================================================ */
function nuevoAcc() {
  return { intentos: 0, aciertos: 0, porModo: {}, porPalo: {}, porTipo: {}, porGrado: {} };
}
function estadoStatsInicial() {
  return { tanda: nuevoAcc(), total: nuevoAcc(), historial: [], tandaNum: 1 };
}
function cargarStats() {
  const base = estadoStatsInicial();
  try {
    const g = JSON.parse(localStorage.getItem(LS.stats));
    if (g) Object.assign(base, g);
  } catch (e) {}
  return base;
}
function guardarStats(s) {
  try { localStorage.setItem(LS.stats, JSON.stringify(s)); } catch (e) {}
}
let estadisticas = cargarStats();
let statScope = "total"; // "total" | "tanda"

/* Clave del grado de una carta (para agrupar) */
function gradoKey(carta) {
  return carta.tipo === "numero" ? String(carta.num) : carta.rango;
}

/* Buckets de estadísticas para una carta. Los mayores (sin palo ni grado
   de la fórmula) cuentan en general/modo/tipo; el desglose por palo/grado
   queda para los menores. */
function bucketsCarta(carta) {
  if (carta.tipo === "mayor") return { tipo: "mayor" };
  return { palo: carta.palo, tipo: carta.tipo, grado: gradoKey(carta) };
}

function bump(obj, key, ok) {
  if (key == null) return;
  const b = obj[key] || (obj[key] = { i: 0, a: 0 });
  b.i++; if (ok) b.a++;
}

/* Registra un intento. buckets = { palo?, tipo?, grado? } */
function registrar(modo, buckets, ok) {
  for (const sc of [estadisticas.tanda, estadisticas.total]) {
    sc.intentos++; if (ok) sc.aciertos++;
    bump(sc.porModo, modo, ok);
    bump(sc.porPalo, buckets.palo, ok);
    bump(sc.porTipo, buckets.tipo, ok);
    bump(sc.porGrado, buckets.grado, ok);
  }
  guardarStats(estadisticas);
}

function archivarTanda() {
  const t = estadisticas.tanda;
  if (t.intentos > 0) {
    estadisticas.historial.unshift({
      n: estadisticas.tandaNum,
      fecha: Date.now(),
      intentos: t.intentos,
      aciertos: t.aciertos,
    });
    estadisticas.tandaNum++;
  }
  estadisticas.tanda = nuevoAcc();
  guardarStats(estadisticas);
}

function reiniciarStats() {
  estadisticas = estadoStatsInicial();
  guardarStats(estadisticas);
}

/* --- Helpers de presentación --- */
function pct(a, i) { return i ? Math.round((a / i) * 100) : 0; }
function nivelClase(p, i) { return !i ? "n-vacio" : p >= 70 ? "n-ok" : p >= 40 ? "n-media" : "n-baja"; }
function fechaCorta(ts) {
  try {
    return new Date(ts).toLocaleString("es", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  } catch (e) { return ""; }
}
const MODO_LABEL = { construir: "🧩 Construir", quiz: "🔮 Adivina", flashcards: "🎴 Flashcards" };
function modoLabel(k) { return MODO_LABEL[k] || k; }
function paloLabel(k) {
  const p = PALOS[k]; if (!p) return k;
  return `${p.emoji} ${p.nombre} · ${ELEMENTOS[p.elemento].nombre}`;
}
const TIPO_LABEL = { numero: "Numerales (As–10)", corte: "Corte (Paje–Rey)", mayor: "Arcanos Mayores" };
function tipoLabel(k) { return TIPO_LABEL[k] || k; }
function gradoLabel(k) {
  if (CORTE[k]) return CORTE[k].nombre.split(" / ")[0];
  return k === "1" ? "As" : k;
}

function tileStat(titulo, acc) {
  const p = pct(acc.aciertos, acc.intentos);
  return `<div class="stat-tile">
    <div class="stat-tile-tit">${titulo}</div>
    <div class="stat-tile-pct ${nivelClase(p, acc.intentos)}">${acc.intentos ? p + "%" : "—"}</div>
    <div class="stat-tile-sub">${acc.aciertos}/${acc.intentos} aciertos</div>
  </div>`;
}
function filaStat(label, b) {
  const p = pct(b.a, b.i);
  return `<div class="stat-fila">
    <div class="stat-fila-top"><span>${label}</span><span class="stat-num">${p}% · ${b.a}/${b.i}</span></div>
    <div class="stat-bar"><div class="stat-bar-fill ${nivelClase(p, b.i)}" style="width:${p}%"></div></div>
  </div>`;
}
function grupoStat(titulo, mapa, labelFn) {
  const keys = Object.keys(mapa).filter((k) => mapa[k].i > 0)
    .sort((a, b) => pct(mapa[b].a, mapa[b].i) - pct(mapa[a].a, mapa[a].i));
  if (!keys.length) return "";
  return `<h3 class="stat-grupo">${titulo}</h3>` + keys.map((k) => filaStat(labelFn(k), mapa[k])).join("");
}
function mejorPeor(scope) {
  const combos = [];
  for (const p of Object.keys(scope.porPalo)) combos.push({ label: paloLabel(p), ...scope.porPalo[p] });
  for (const g of Object.keys(scope.porGrado)) combos.push({ label: gradoLabel(g), ...scope.porGrado[g] });
  const fiables = combos.filter((c) => c.i >= 3);
  const pool = fiables.length ? fiables : combos.filter((c) => c.i > 0);
  if (pool.length < 1) return null;
  pool.sort((a, b) => pct(b.a, b.i) - pct(a.a, a.i));
  return { mejor: pool[0], peor: pool[pool.length - 1], soloUno: pool.length === 1 };
}

function renderEstadisticas() {
  $("stat-tiles").innerHTML =
    tileStat(`Esta tanda (nº ${estadisticas.tandaNum})`, estadisticas.tanda) +
    tileStat("Histórico total", estadisticas.total);

  const scope = statScope === "tanda" ? estadisticas.tanda : estadisticas.total;

  const mp = mejorPeor(scope);
  $("stat-destacado").innerHTML = mp
    ? `<div class="stat-dest ok"><span class="stat-dest-et">Dominas mejor</span>
         <b>${mp.mejor.label}</b><span class="stat-dest-pct">${pct(mp.mejor.a, mp.mejor.i)}%</span></div>` +
      (mp.soloUno ? "" :
      `<div class="stat-dest baja"><span class="stat-dest-et">A reforzar</span>
         <b>${mp.peor.label}</b><span class="stat-dest-pct">${pct(mp.peor.a, mp.peor.i)}%</span></div>`)
    : "";

  document.querySelectorAll(".stat-scope-btn").forEach((b) =>
    b.classList.toggle("activo", b.dataset.scope === statScope));

  let html = "";
  html += grupoStat("Por modo", scope.porModo, modoLabel);
  html += grupoStat("Por palo", scope.porPalo, paloLabel);
  html += grupoStat("Por grado (número / rango)", scope.porGrado, gradoLabel);
  html += grupoStat("Por tipo de carta", scope.porTipo, tipoLabel);
  $("stat-contenido").innerHTML = html ||
    `<p class="mini">Aún no hay datos ${statScope === "tanda" ? "en esta tanda" : "registrados"}.
     Practica en Construir, Flashcards o Adivina y vuelve aquí.</p>`;

  $("stat-historial").innerHTML = estadisticas.historial.length
    ? `<h3 class="stat-grupo">Tandas anteriores</h3>` + estadisticas.historial.map((h) =>
        `<div class="stat-tanda-row"><span>Tanda ${h.n} · ${fechaCorta(h.fecha)}</span>
         <span class="stat-num">${pct(h.aciertos, h.intentos)}% · ${h.aciertos}/${h.intentos}</span></div>`).join("")
    : "";
}

document.querySelectorAll(".stat-scope-btn").forEach((b) =>
  b.addEventListener("click", () => { statScope = b.dataset.scope; renderEstadisticas(); }));

$("stat-nueva-tanda").addEventListener("click", () => {
  if (estadisticas.tanda.intentos === 0) { statScope = "tanda"; renderEstadisticas(); return; }
  archivarTanda();
  statScope = "tanda";
  renderEstadisticas();
});

$("stat-reset").addEventListener("click", () => {
  if (confirm("¿Borrar TODAS las estadísticas y el historial de tandas? No se puede deshacer.")) {
    reiniciarStats();
    statScope = "total";
    renderEstadisticas();
  }
});

/* ============================================================
   REFERENCIA
   ============================================================ */
function renderReferencia() {
  // Arcanos Mayores, agrupados por línea del viaje
  const may = $("ref-mayores");
  if (may) {
    let html = "";
    for (const linea of [0, 1, 2, 3]) {
      const grupo = [];
      for (let n = 0; n < MAYORES.length; n++) if (lineaMayor(n) === linea) grupo.push(n);
      if (!grupo.length) continue;
      html += `<h3 class="ref-linea">${LINEA_NOMBRE[linea]}</h3><div class="grid-ref">`;
      for (const n of grupo) {
        const m = MAYORES[n];
        const red = reducirNum(n);
        html += `<div class="tarjeta-ref">
          <b>${romanoMayor(n)} · ${m.nombre}</b> — ${m.claves.join(", ")}<br>
          <span class="mini">${m.corr}${n === 0 ? "" : ` · número ${n}→${red}`}</span>
        </div>`;
      }
      html += `</div>`;
    }
    may.innerHTML = html;
  }

  const palos = $("ref-palos");
  palos.innerHTML = "";
  for (const id of Object.keys(PALOS)) {
    const p = PALOS[id], el = ELEMENTOS[p.elemento];
    const d = document.createElement("div");
    d.className = "tarjeta-ref";
    d.innerHTML = `<div class="palo-chip">${p.emoji} ${p.nombre}</div>
      <b>${el.nombre}</b><br><span class="mini">${p.areas}</span>`;
    palos.appendChild(d);
  }

  const nums = $("ref-numeros");
  nums.innerHTML = "";
  for (let n = 1; n <= 10; n++) {
    const o = NUMEROS[n];
    const d = document.createElement("div");
    d.className = "tarjeta-ref";
    d.innerHTML = `<b>${o.nombre}</b> — ${o.clave}<br><span class="mini">Puente: ${o.mayor}</span>`;
    nums.appendChild(d);
  }

  const corte = $("ref-corte");
  corte.innerHTML = "";
  for (const r of RANGOS_CORTE) {
    const c = CORTE[r];
    const d = document.createElement("div");
    d.className = "tarjeta-ref";
    d.innerHTML = `<b>${c.nombre}</b> — ${c.clave}`;
    corte.appendChild(d);
  }
}

/* ============================================================
   AJUSTES
   ============================================================ */
function renderAjustes() {
  const cont = $("aj-palos");
  cont.innerHTML = "";
  for (const id of Object.keys(PALOS)) {
    const p = PALOS[id];
    const d = document.createElement("div");
    d.className = "tarjeta-ref";
    const sel = document.createElement("select");
    sel.className = "sel-elem";
    for (const eid of ["fuego", "agua", "aire", "tierra"]) {
      const op = document.createElement("option");
      op.value = eid; op.textContent = `${ELEMENTOS[eid].emoji} ${ELEMENTOS[eid].nombre}`;
      if (p.elemento === eid) op.selected = true;
      sel.appendChild(op);
    }
    sel.addEventListener("change", () => {
      ajustes.elementoPorPalo[id] = sel.value;
      guardarAjustes(ajustes);
      aplicarAjustesAPalos();
    });
    d.innerHTML = `<div class="palo-chip">${p.emoji} ${p.nombre}</div>`;
    d.appendChild(sel);
    cont.appendChild(d);
  }

  $("aj-incluir-mayores").checked = ajustes.incluirMayores;
  $("aj-incluir-menores").checked = ajustes.incluirMenores;
  $("aj-incluir-corte").checked = ajustes.incluirCorte;
  $("aj-incluir-numeros").checked = ajustes.incluirNumeros;
  $("aj-sonido").checked = ajustes.sonido;
  actualizarSubMenores();
  actualizarNotaAlcance();
}

/* Las sub-opciones (corte/numerales) solo aplican si los menores están activos */
function actualizarSubMenores() {
  const on = ajustes.incluirMenores;
  $("aj-incluir-corte").disabled = !on;
  $("aj-incluir-numeros").disabled = !on;
  const sub = document.querySelector(".aj-sub");
  if (sub) sub.style.opacity = on ? "1" : "0.45";
}

function actualizarNotaAlcance() {
  const n = barajaActiva().length;
  $("aj-nota").textContent = n === 0
    ? "⚠️ Debes dejar al menos un grupo de cartas activo."
    : `Practicando con ${n} cartas` +
      (ajustes.incluirMayores && ajustes.incluirMenores ? " (mayores + menores)." : ".");
}

/* Cambia un interruptor de alcance; si dejaría la baraja vacía, lo revierte. */
function aplicarAlcance(key, checked, el) {
  const prev = ajustes[key];
  ajustes[key] = checked;
  if (barajaActiva().length === 0) {
    ajustes[key] = prev;
    el.checked = prev;
    $("aj-nota").textContent = "⚠️ Debes dejar al menos un grupo de cartas activo.";
    return;
  }
  guardarAjustes(ajustes);
  actualizarSubMenores();
  actualizarNotaAlcance();
  actualizarProgresoFC();
}

$("aj-incluir-mayores").addEventListener("change", (e) => aplicarAlcance("incluirMayores", e.target.checked, e.target));
$("aj-incluir-menores").addEventListener("change", (e) => aplicarAlcance("incluirMenores", e.target.checked, e.target));
$("aj-incluir-corte").addEventListener("change", (e) => aplicarAlcance("incluirCorte", e.target.checked, e.target));
$("aj-incluir-numeros").addEventListener("change", (e) => aplicarAlcance("incluirNumeros", e.target.checked, e.target));
$("aj-sonido").addEventListener("change", (e) => {
  ajustes.sonido = e.target.checked; guardarAjustes(ajustes);
  Sonido.set(ajustes.sonido);
  if (ajustes.sonido) Sonido.voltear(); // pequeña confirmación audible al activar
});

/* ============================================================
   VISOR A PANTALLA COMPLETA (lightbox)
   ============================================================ */
function abrirLightbox(src, nombre, inv) {
  $("lb-img").src = src;
  $("lb-img").classList.toggle("invertida", !!inv);
  $("lb-nombre").textContent = nombre + (inv ? " ⟳ invertida" : "");
  $("lightbox").classList.remove("oculto");
}
function cerrarLightbox() { $("lightbox").classList.add("oculto"); }

$("lightbox").addEventListener("click", cerrarLightbox);
$("lb-cerrar").addEventListener("click", (e) => { e.stopPropagation(); cerrarLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarLightbox(); });

/* ============================================================
   ARRANQUE
   ============================================================ */
aplicarAjustesAPalos();
poblarSelectores();
actualizarProgresoFC();
Sonido.init(ajustes.sonido);
// Desbloquea el audio con el primer gesto del usuario (política de autoplay).
document.addEventListener("pointerdown", () => Sonido.desbloquear(), { once: true });

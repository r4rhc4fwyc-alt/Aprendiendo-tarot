/* ============================================================
   LÓGICA DE LA APP
   ============================================================ */

const LS = {
  ajustes: "tarot_ajustes_v1",
  srs: "tarot_srs_v1",
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
    incluirCorte: true,
    incluirNumeros: true,
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

/* Baraja activa según el alcance elegido */
function barajaActiva() {
  return construirBaraja().filter((c) => {
    if (c.tipo === "corte") return ajustes.incluirCorte;
    if (c.tipo === "numero") return ajustes.incluirNumeros;
    return true;
  });
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

function pintarOpciones(contenedor, opciones) {
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
  pintarOpciones(gc, opcionesGrado(carta, inv));
  pintarOpciones(ec, opcionesElemento(carta, inv));
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
  const suit = PALO_WORD[carta.palo];
  const rango = carta.tipo === "numero" ? PALABRA_RANGO[carta.num] : PALABRA_RANGO[carta.rango];
  return {
    biddy: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-${suit}/${rango}-of-${suit}/`,
    labyrinthos: `https://labyrinthos.co/blogs/tarot-card-meanings-list/tagged/${suit}`,
  };
}

let detalleAbierto = false;

function renderDetalle(carta, inv, idCont, idLinks) {
  idCont = idCont || "c-det-contenido";
  idLinks = idLinks || "c-det-links";
  const cont = $(idCont);
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

/* Animación genérica del mazo: barajar -> sacar -> voltear -> onReveal.
   ids: { mazo, carta3d, img, nombre }  estado: { animando } */
function animarMazo(ids, carta, inv, estado, onReveal) {
  if (estado.animando) return;
  estado.animando = true;
  const c3d = $(ids.carta3d), mazo = $(ids.mazo);

  c3d.classList.add("oculto");
  c3d.classList.remove("volteada");
  if (ids.nombre) $(ids.nombre).textContent = "Barajando…";

  mazo.classList.remove("barajando");
  void mazo.offsetWidth;
  mazo.classList.add("barajando");

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

  animarMazo({ mazo: "mazo", carta3d: "carta3d", img: "c-img", nombre: "c-nombre" },
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
  const baraja = barajaActiva();
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
  actualizarProgresoFC();
  // oculta todo lo del reverso mientras baraja
  $("fc-reverso").classList.add("oculto");
  $("fc-acciones-frente").classList.add("oculto");
  $("fc-acciones-reverso").classList.add("oculto");
  $("fc-detalle").classList.add("oculto");

  animarMazo({ mazo: "fc-mazo", carta3d: "fc-carta3d", img: "fc-img", nombre: "fc-nombre" },
    fcActual, false, estadoF, () => {
      $("fc-nombre").textContent = nombreCarta(fcActual);
      // de momento solo el botón "Ver significado"; el significado se revela al voltear
      $("fc-acciones-frente").classList.remove("oculto");
    });
}

function voltearFlashcard() {
  const s = sintesisCarta(fcActual);
  const det = DETALLE[fcActual.id];
  $("fc-narracion").textContent = det ? det.general : "";
  $("fc-formula").textContent = s.formula;
  $("fc-grado").textContent = "Grado: " + s.grado;
  $("fc-elem").textContent = s.elemento;
  $("fc-puente").textContent = s.puente;
  $("fc-reverso").classList.remove("oculto");
  $("fc-acciones-frente").classList.add("oculto");
  $("fc-acciones-reverso").classList.remove("oculto");
  // revela también la ficha detallada (colapsada)
  renderDetalle(fcActual, false, "fc-det-contenido", "fc-det-links");
  $("fc-detalle").classList.remove("oculto");
}

/* calidad: 0 otra vez, 1 difícil, 2 bien, 3 fácil */
function evaluarFlashcard(calidad) {
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
    abrirLightbox(imagenCarta(fcActual), nombreCarta(fcActual), false);
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
   REFERENCIA
   ============================================================ */
function renderReferencia() {
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

  $("aj-incluir-corte").checked = ajustes.incluirCorte;
  $("aj-incluir-numeros").checked = ajustes.incluirNumeros;
  actualizarNotaAlcance();
}

function actualizarNotaAlcance() {
  if (!ajustes.incluirCorte && !ajustes.incluirNumeros) {
    $("aj-nota").textContent = "⚠️ Debes incluir al menos un tipo de carta.";
  } else {
    $("aj-nota").textContent = `Practicando con ${barajaActiva().length} cartas.`;
  }
}

$("aj-incluir-corte").addEventListener("change", (e) => {
  if (!e.target.checked && !ajustes.incluirNumeros) { e.target.checked = true; return; }
  ajustes.incluirCorte = e.target.checked; guardarAjustes(ajustes);
  actualizarNotaAlcance(); actualizarProgresoFC();
});
$("aj-incluir-numeros").addEventListener("change", (e) => {
  if (!e.target.checked && !ajustes.incluirCorte) { e.target.checked = true; return; }
  ajustes.incluirNumeros = e.target.checked; guardarAjustes(ajustes);
  actualizarNotaAlcance(); actualizarProgresoFC();
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

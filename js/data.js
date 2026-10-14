/* ============================================================
   DATOS DEL TAROT — Arcanos Menores
   Todo el "conocimiento" vive aquí para que puedas editarlo
   fácilmente y, más adelante, cargar TU propio sistema.
   ============================================================ */

/* --- PALOS y su ELEMENTO (correspondencia tradicional Golden Dawn) ---
   OJO: no hay acuerdo universal. Algunas escuelas intercambian
   Bastos <-> Espadas. Puedes cambiarlo en Ajustes. */
const PALOS = {
  bastos: {
    nombre: "Bastos",
    elemento: "fuego",
    emoji: "🔥",
    color: "#e8603c",
    areas: "Energía, acción, pasión, voluntad, proyectos, creatividad, espíritu.",
  },
  copas: {
    nombre: "Copas",
    elemento: "agua",
    emoji: "💧",
    color: "#3c7fe8",
    areas: "Emociones, relaciones, amor, intuición, vínculos, lo espiritual-afectivo.",
  },
  espadas: {
    nombre: "Espadas",
    elemento: "aire",
    emoji: "🌬️",
    color: "#8a8f99",
    areas: "Mente, pensamiento, comunicación, conflicto, verdad, decisiones.",
  },
  oros: {
    nombre: "Oros",
    elemento: "tierra",
    emoji: "🪙",
    color: "#3ca05a",
    areas: "Materia, cuerpo, dinero, trabajo, salud, lo concreto y cotidiano.",
  },
};

/* --- ELEMENTOS (incluye ÉTER como capa conceptual, no como palo) --- */
const ELEMENTOS = {
  fuego: {
    nombre: "Fuego",
    emoji: "🔥",
    palabras: ["impulso", "acción", "pasión", "voluntad", "creatividad"],
    frase: "lo que te mueve e inicia",
  },
  agua: {
    nombre: "Agua",
    emoji: "💧",
    palabras: ["emoción", "vínculo", "intuición", "amor", "fluir"],
    frase: "lo que sientes y te conecta",
  },
  aire: {
    nombre: "Aire",
    emoji: "🌬️",
    palabras: ["mente", "idea", "palabra", "conflicto", "verdad"],
    frase: "lo que piensas y comunicas",
  },
  tierra: {
    nombre: "Tierra",
    emoji: "🪙",
    palabras: ["cuerpo", "dinero", "trabajo", "salud", "concreto"],
    frase: "lo que tocas y construyes",
  },
  eter: {
    nombre: "Éter / Quinto elemento",
    emoji: "✨",
    palabras: ["espíritu", "esencia", "lo que trasciende los 4 palos"],
    frase: "la chispa que une y supera a los otros cuatro (vive sobre todo en los Arcanos Mayores y en los Ases)",
  },
};

/* --- NÚMEROS 1–10 (numerología aplicada al tarot) ---
   'mayor' = el Arcano Mayor de ese grado, tu puente mnemotécnico. */
const NUMEROS = {
  1:  { nombre: "As (1)", clave: "Semilla, potencial puro, el don del elemento en estado bruto, un nuevo comienzo.", claveInv: "Potencial bloqueado o pospuesto, oportunidad desaprovechada, falso comienzo.", mayor: "El Mago (I)" },
  2:  { nombre: "2", clave: "Dualidad, equilibrio, elección, el encuentro de dos fuerzas, relación.", claveInv: "Desequilibrio, indecisión, ruptura o tensión entre las dos fuerzas.", mayor: "La Sacerdotisa (II)" },
  3:  { nombre: "3", clave: "Crecimiento, creación, primer fruto, expansión, síntesis.", claveInv: "Crecimiento estancado, colaboración rota, planes que no cuajan.", mayor: "La Emperatriz (III)" },
  4:  { nombre: "4", clave: "Estructura, estabilidad, cimientos, orden, una pausa consolidada.", claveInv: "Rigidez o inestabilidad, aferrarse en exceso o perder los cimientos.", mayor: "El Emperador (IV)" },
  5:  { nombre: "5", clave: "Conflicto, crisis, cambio, pérdida de equilibrio, desafío.", claveInv: "Fin del conflicto o resistencia a soltarlo, crisis que se supera o se enquista.", mayor: "El Sumo Sacerdote (V)" },
  6:  { nombre: "6", clave: "Armonía recuperada, reciprocidad, equilibrio tras la crisis, dar y recibir.", claveInv: "Desequilibrio en el dar y recibir, nostalgia, deudas, armonía que no llega.", mayor: "Los Enamorados (VI)" },
  7:  { nombre: "7", clave: "Evaluación, reflexión, perseverancia, tentación o ilusión, mantener el rumbo.", claveInv: "Dudas, dispersión, rendirse o insistir en lo equivocado, la ilusión se disipa.", mayor: "El Carro (VII)" },
  8:  { nombre: "8", clave: "Movimiento, poder, dominio, acción decidida, resultados que avanzan.", claveInv: "Poder mal usado, estancamiento, prisa o parálisis, el control se escapa.", mayor: "La Justicia (VIII)*" },
  9:  { nombre: "9", clave: "Plenitud casi total, intensidad máxima, logro o soledad antes del cierre.", claveInv: "Intensidad vuelta hacia dentro, agotamiento, miedo o logro incompleto.", mayor: "El Ermitaño (IX)" },
  10: { nombre: "10", clave: "Culminación, fin de ciclo, exceso o plenitud total, transición a algo nuevo.", claveInv: "Ciclo que se resiste a cerrar, exceso que colapsa, recomenzar antes de tiempo.", mayor: "La Rueda de la Fortuna (X)" },
};

/* --- CARTAS DE LA CORTE ---
   Cada rango es una "manera" de vivir el elemento del palo:
   personas, actitudes o etapas. */
const CORTE = {
  paje:      { nombre: "Paje / Sota", clave: "Aprendizaje, curiosidad, mensajes, el elemento recién nacido. La etapa de estudiante y las noticias.", claveInv: "Inmadurez, noticias retrasadas, bloqueo al aprender, distracción o falta de compromiso.", energia: "aprender" },
  caballero: { nombre: "Caballero",   clave: "Acción, búsqueda, movimiento, el elemento llevado al extremo. Lanzarse, perseguir, a veces en exceso.", claveInv: "Acción descontrolada o detenida, impulsividad o parálisis, llevar el elemento a un extremo dañino.", energia: "actuar" },
  reina:     { nombre: "Reina",       clave: "Maestría interior, encarnar y nutrir el elemento desde dentro. Madurez receptiva.", claveInv: "Maestría interior desbordada o reprimida: exceso o negación de lo que el elemento nutre.", energia: "encarnar" },
  rey:       { nombre: "Rey",         clave: "Maestría exterior, autoridad, dirigir y gobernar el elemento hacia afuera. Madurez activa.", claveInv: "Autoridad mal ejercida: control rígido o ausente, dirigir el elemento de forma dañina.", energia: "dirigir" },
};

const RANGOS_CORTE = ["paje", "caballero", "reina", "rey"];

/* --- Mapeo a las imágenes del mazo Rider-Waite-Smith (dominio público) ---
   Archivos en img/cards/ con nombres tipo Cups01.png ... Wands14.png
   (11 = Paje, 12 = Caballero, 13 = Reina, 14 = Rey). */
const PALO_IMG = { bastos: "Wands", copas: "Cups", espadas: "Swords", oros: "Pentacles" };
const CORTE_NUM = { paje: 11, caballero: 12, reina: 13, rey: 14 };

function imagenCarta(carta) {
  const prefijo = PALO_IMG[carta.palo];
  const n = carta.tipo === "numero" ? carta.num : CORTE_NUM[carta.rango];
  return `img/cards/${prefijo}${String(n).padStart(2, "0")}.png`;
}

/* --- GENERADOR: construye las 56 cartas --- */
function construirBaraja() {
  const baraja = [];
  for (const paloId of Object.keys(PALOS)) {
    // Números 1–10
    for (let n = 1; n <= 10; n++) {
      baraja.push({ id: `${paloId}-${n}`, palo: paloId, tipo: "numero", num: n });
    }
    // Corte
    for (const rango of RANGOS_CORTE) {
      baraja.push({ id: `${paloId}-${rango}`, palo: paloId, tipo: "corte", rango });
    }
  }
  return baraja; // 4 palos * (10 + 4) = 56
}

/* --- Nombre legible de una carta --- */
function nombreCarta(carta) {
  const palo = PALOS[carta.palo];
  if (carta.tipo === "numero") {
    const etiqueta = carta.num === 1 ? "As" : carta.num;
    return `${etiqueta} de ${palo.nombre}`;
  }
  return `${CORTE[carta.rango].nombre.split(" / ")[0]} de ${palo.nombre}`;
}

/* --- Texto del GRADO según orientación (misma fuente que usan las opciones) --- */
function gradoClave(carta, invertida = false) {
  if (carta.tipo === "numero") return invertida ? NUMEROS[carta.num].claveInv : NUMEROS[carta.num].clave;
  return invertida ? CORTE[carta.rango].claveInv : CORTE[carta.rango].clave;
}

/* --- Etiqueta corta de un ELEMENTO según orientación (para las opciones) --- */
function elementoOpcion(elemId, invertida = false) {
  const e = ELEMENTOS[elemId];
  return invertida
    ? `${e.nombre} — ${e.frase}, pero bloqueado o en exceso`
    : `${e.nombre} — ${e.frase}`;
}

/* --- Síntesis: la "fórmula" de significado de una carta ---
   invertida = true devuelve la lectura en posición invertida. */
function sintesisCarta(carta, invertida = false) {
  const palo = PALOS[carta.palo];
  const elem = ELEMENTOS[palo.elemento];
  const elemTxt = `${elem.nombre} ${elem.emoji} — ${elem.frase} (${elem.palabras.join(", ")}).`;
  const elemInv = `${elem.nombre} ${elem.emoji} — energía ${elem.frase.replace(/^lo que/, "bloqueada, en exceso o vuelta hacia dentro: lo que")}.`;

  if (carta.tipo === "numero") {
    const numo = NUMEROS[carta.num];
    return {
      invertida,
      grado: invertida ? numo.claveInv : numo.clave,
      elemento: invertida ? elemInv : elemTxt,
      puente: invertida
        ? `Puente con mayores: la sombra de ${numo.mayor} teñida por ${elem.nombre}.`
        : `Puente con mayores: piensa en ${numo.mayor} teñido por ${elem.nombre}.`,
      formula: `${numo.nombre} × ${elem.nombre}${invertida ? " ⟳ invertida" : ""}`,
    };
  }
  const c = CORTE[carta.rango];
  return {
    invertida,
    grado: invertida ? c.claveInv : c.clave,
    elemento: invertida ? elemInv : elemTxt,
    puente: invertida
      ? `Una persona o actitud que ${c.energia} el elemento ${elem.nombre} de forma desequilibrada.`
      : `Una persona o actitud que ${c.energia} el elemento ${elem.nombre}.`,
    formula: `${c.nombre.split(" / ")[0]} × ${elem.nombre}${invertida ? " ⟳ invertida" : ""}`,
  };
}

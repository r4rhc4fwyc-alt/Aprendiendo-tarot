/* ============================================================
   ARCANOS MAYORES (22) — Fase 1
   Los mayores NO se aprenden por fórmula (número × elemento) como
   los menores, sino por arquetipo + viaje del Loco + numerología.
   Aquí: nombre, correspondencia (Golden Dawn), palabras clave y
   lectura corta (derecho / invertido) redactada para esta app desde
   fuentes libres (Waite, dominio público). Las imágenes RWS están en
   img/cards/Major00.png … Major21.png (mismo paquete MIT que los menores).

   Estructura de las 3 "líneas de siete" (Rachel Pollack):
   - El Loco (0) viaja: queda FUERA de las líneas.
   - Línea 1 (I–VII):  consciente   — el yo y la sociedad.
   - Línea 2 (VIII–XIV): subconsciente — la búsqueda interior.
   - Línea 3 (XV–XXI): superconsciente — lo arquetípico y espiritual.
   Nota: en Rider-Waite VIII = La Fuerza y XI = La Justicia (al revés
   que Marsella).
   ============================================================ */

const MAYORES = [
  { nombre: "El Loco", corr: "Aire · Urano", claves: ["inicio", "salto de fe", "inocencia", "libertad"],
    derecho: "Un salto al vacío con el corazón abierto: comienzo, espontaneidad y confianza en el camino.",
    invertido: "Imprudencia o miedo a saltar: caos, ingenuidad peligrosa o quedarse paralizado al borde." },
  { nombre: "El Mago", corr: "Mercurio", claves: ["voluntad", "poder", "manifestar", "recursos"],
    derecho: "Tienes todas las herramientas: voluntad enfocada que convierte la idea en acción, poder creador.",
    invertido: "Talento mal usado o disperso: manipulación, engaño o potencial que no se concreta." },
  { nombre: "La Sacerdotisa", corr: "La Luna", claves: ["intuición", "misterio", "saber oculto", "quietud"],
    derecho: "El saber que no se razona: intuición, misterio y una verdad que todavía está velada.",
    invertido: "Desconexión de la voz interior: secretos que pesan, intuición ignorada o superficialidad." },
  { nombre: "La Emperatriz", corr: "Venus", claves: ["abundancia", "creación", "naturaleza", "cuidado"],
    derecho: "Fertilidad y abundancia que nutren: creación, sensualidad y cuidado maternal.",
    invertido: "Bloqueo creativo o exceso: dependencia, descuido de uno mismo o abundancia que se estanca." },
  { nombre: "El Emperador", corr: "Aries", claves: ["autoridad", "estructura", "orden", "protección"],
    derecho: "Autoridad que ordena y protege: estructura, disciplina y liderazgo estable.",
    invertido: "Autoridad rígida o ausente: control tiránico, terquedad o falta de límites." },
  { nombre: "El Sumo Sacerdote", corr: "Tauro", claves: ["tradición", "enseñanza", "instituciones", "fe"],
    derecho: "La enseñanza y la tradición: guía espiritual, pertenencia y valores compartidos.",
    invertido: "Dogma que ahoga o rebeldía: convención vacía, hipocresía o romper con lo establecido." },
  { nombre: "Los Enamorados", corr: "Géminis", claves: ["amor", "elección", "unión", "valores"],
    derecho: "Una unión y una elección del corazón: amor, armonía y decidir desde los propios valores.",
    invertido: "Desarmonía o mala elección: tentación, conflicto de valores o vínculos que se rompen." },
  { nombre: "El Carro", corr: "Cáncer", claves: ["voluntad", "triunfo", "dirección", "autodominio"],
    derecho: "Avanzar con voluntad férrea: triunfo por determinación y dominio de fuerzas opuestas.",
    invertido: "Rumbo perdido o fuerzas sin control: derrota, agresividad o avanzar sin dirección." },
  { nombre: "La Fuerza", corr: "Leo", claves: ["coraje sereno", "dominio interior", "paciencia", "compasión"],
    derecho: "La fuerza que doma con dulzura: coraje sereno, paciencia y dominio de los instintos.",
    invertido: "Fuerza interior vacilante: duda, impulsos desbocados o dureza con uno mismo." },
  { nombre: "El Ermitaño", corr: "Virgo", claves: ["introspección", "búsqueda", "soledad", "guía"],
    derecho: "Retirarse para buscar la luz interior: introspección, sabiduría y guía silenciosa.",
    invertido: "Aislamiento o rechazo del consejo: soledad que pesa, perderse o huir hacia dentro." },
  { nombre: "La Rueda de la Fortuna", corr: "Júpiter", claves: ["ciclos", "destino", "cambio", "suerte"],
    derecho: "La rueda gira a tu favor: ciclos, giros del destino y un cambio de suerte.",
    invertido: "Ciclo adverso o resistencia al cambio: mala racha, perder el control del destino." },
  { nombre: "La Justicia", corr: "Libra", claves: ["equilibrio", "verdad", "causa-efecto", "decisión"],
    derecho: "Equilibrio y verdad: cada causa trae su efecto; decisión justa y responsabilidad.",
    invertido: "Injusticia o evasión: deshonestidad, desequilibrio o no asumir las consecuencias." },
  { nombre: "El Colgado", corr: "Agua · Neptuno", claves: ["pausa", "entrega", "otra mirada", "sacrificio"],
    derecho: "Soltar para ver distinto: pausa voluntaria, entrega y una nueva perspectiva.",
    invertido: "Estancamiento o sacrificio inútil: resistirse a soltar o una pausa que se eterniza." },
  { nombre: "La Muerte", corr: "Escorpio", claves: ["fin", "transformación", "renacer", "soltar"],
    derecho: "Un final que transforma: cerrar un ciclo para que nazca algo nuevo.",
    invertido: "Resistirse al cambio: aferrarse a lo que ya murió, una transición que se bloquea." },
  { nombre: "La Templanza", corr: "Sagitario", claves: ["equilibrio", "mezcla", "paciencia", "moderación"],
    derecho: "El arte de combinar con mesura: equilibrio, paciencia y sanación serena.",
    invertido: "Desequilibrio o exceso: impaciencia, mezclas que no cuajan o falta de moderación." },
  { nombre: "El Diablo", corr: "Capricornio", claves: ["apego", "sombra", "deseo", "ataduras"],
    derecho: "Las cadenas que uno mismo acepta: apego, deseo material y la sombra que esclaviza.",
    invertido: "Romper las cadenas: liberarse de una atadura y afrontar la sombra, o recaer en ella." },
  { nombre: "La Torre", corr: "Marte", claves: ["ruptura", "revelación", "derrumbe", "liberación"],
    derecho: "El derrumbe súbito de lo falso: una revelación que destruye para liberar.",
    invertido: "Derrumbe que se posterga o se teme: evitar el cambio inevitable, crisis contenida." },
  { nombre: "La Estrella", corr: "Acuario", claves: ["esperanza", "fe", "inspiración", "calma"],
    derecho: "Luz tras la tormenta: esperanza, fe renovada e inspiración que guía.",
    invertido: "Esperanza apagada: desánimo, desconexión de la fe o inspiración perdida." },
  { nombre: "La Luna", corr: "Piscis", claves: ["ilusión", "miedo", "inconsciente", "sueños"],
    derecho: "El reino de lo que no se ve claro: intuición, sueños, miedos e ilusión.",
    invertido: "La niebla se disipa o engaña más: confusión que se aclara, o autoengaño y ansiedad." },
  { nombre: "El Sol", corr: "El Sol", claves: ["alegría", "éxito", "vitalidad", "claridad"],
    derecho: "Luz plena: alegría, éxito, vitalidad y una verdad que se revela.",
    invertido: "Luz velada: optimismo forzado, éxito que se demora o alegría apagada." },
  { nombre: "El Juicio", corr: "Fuego · Plutón", claves: ["despertar", "llamada", "renacer", "balance"],
    derecho: "Una llamada que despierta: renacer, perdonar y responder a un propósito mayor.",
    invertido: "Ignorar la llamada: autojuicio severo, dudas o no atreverse a renacer." },
  { nombre: "El Mundo", corr: "Saturno", claves: ["plenitud", "cierre", "integración", "logro"],
    derecho: "El ciclo se completa: plenitud, integración y un logro que celebra el camino.",
    invertido: "Cierre incompleto: un ciclo que no termina, metas a medias o falta de integración." },
];

/* Slug en inglés (para los enlaces "Más información"). */
const MAYOR_SLUG = ["the-fool", "the-magician", "the-high-priestess", "the-empress",
  "the-emperor", "the-hierophant", "the-lovers", "the-chariot", "strength", "the-hermit",
  "wheel-of-fortune", "justice", "the-hanged-man", "death", "temperance", "the-devil",
  "the-tower", "the-star", "the-moon", "the-sun", "judgement", "the-world"];

/* Número romano del arcano mayor (0 … XXI). */
const ROMANOS = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
  "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"];
function romanoMayor(n) { return ROMANOS[n] || String(n); }

/* Línea del viaje: 0 = el Loco (fuera); 1/2/3 = las tres septenas. */
function lineaMayor(n) { return n === 0 ? 0 : Math.ceil(n / 7); }
const LINEA_NOMBRE = {
  0: "El viajero (fuera de las líneas)",
  1: "Línea 1 · Consciente (el yo y el mundo)",
  2: "Línea 2 · Subconsciente (la búsqueda interior)",
  3: "Línea 3 · Superconsciente (lo arquetípico)",
};

/* Reducción numerológica a un dígito (0 se queda en 0). */
function reducirNum(n) {
  let r = n;
  while (r > 9) r = String(r).split("").reduce((a, d) => a + (+d), 0);
  return r;
}

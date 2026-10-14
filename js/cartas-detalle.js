/* ============================================================
   FICHAS DETALLADAS DE LAS CARTAS
   Descripción narrada: significado general, simbolismo (la escena
   e historia de la carta), lectura esotérica (derecho/invertido),
   correspondencias y la particularidad que hace única a cada carta.

   Fuentes (todas libres):
   - A. E. Waite, "The Pictorial Key to the Tarot" (1911, dominio público)
   - Dataset "cometpisces/tarot-kit" (MIT) — narrativa de la escena
   - Dataset "tarotoo-tarot" (MIT) — correspondencias astrológicas
   Texto redactado y traducido al español para esta app.

   Clave de cada ficha = id de la carta (p. ej. "copas-1", "copas-reina").
   Por ahora está completo el palo de COPAS (muestra). El resto se
   completará igual; mientras tanto la interfaz muestra un aviso.
   ============================================================ */

const DETALLE = {
  /* ---------------- AS DE COPAS ---------------- */
  "copas-1": {
    general: "El don del Agua en estado puro: el nacimiento del amor, la emoción y la apertura espiritual.",
    simbolismo: "Una mano divina surge de las nubes ofreciendo una copa rebosante de la que brota agua en cinco chorros. Una paloma desciende con una hostia, y abajo se extiende un estanque de lotos. Es el corazón que se abre y recibe la bendición: la fuente de todo sentir.",
    esoterico: {
      derecho: "Amor y dicha que se desbordan. Un nuevo afecto, una conexión tierna, inspiración creativa o un despertar espiritual que nutre el alma.",
      invertido: "La fuente se tapona: agotamiento emocional, afecto reprimido, vacío o la dificultad de dejar fluir y expresar lo que se siente.",
    },
    correspondencias: { planeta: "—", signo: "Raíz del Agua (Cáncer, Escorpio, Piscis)", decanato: "As: la semilla pura del elemento" },
    particularidad: "A diferencia de los demás Ases, aquí el agua no se contiene: se derrama. Es la única copa del palo que se nos ofrece directamente desde lo divino, antes de cualquier relación humana.",
  },

  /* ---------------- 2 DE COPAS ---------------- */
  "copas-2": {
    general: "El encuentro de dos corazones: unión, pacto y reciprocidad emocional.",
    simbolismo: "Un hombre y una mujer intercambian sus copas mirándose de frente. Sobre ellos, el caduceo de Hermes y una cabeza de león alada coronan el vínculo: el deseo elevado a comunión. Es el amor que se vuelve acuerdo entre iguales.",
    esoterico: {
      derecho: "Dos sentimientos que se armonizan y se eligen mutuamente. Amor correspondido, amistad, sociedad o reconciliación en pie de igualdad.",
      invertido: "El equilibrio se pierde: desencuentro, malentendido, distancia o una relación que ya no se mira a los ojos.",
    },
    correspondencias: { planeta: "Venus", signo: "Cáncer", decanato: "Venus en Cáncer — el amor que protege" },
    particularidad: "Es el 'Arcano Menor de los Enamorados': lleva a lo íntimo y personal lo que La Sacerdotisa (grado 2) guarda en secreto. El único 2 del tarot que muestra un ritual de pareja.",
  },

  /* ---------------- 3 DE COPAS ---------------- */
  "copas-3": {
    general: "La alegría compartida: celebración, comunidad y fruto emocional.",
    simbolismo: "Tres mujeres alzan sus copas en un brindis, rodeadas de frutos y flores de una cosecha generosa. Es el gozo que se multiplica cuando se comparte: el afecto hecho fiesta y pertenencia.",
    esoterico: {
      derecho: "Éxito que se festeja con otros, amistad, apoyo mutuo, reuniones felices y bendiciones compartidas.",
      invertido: "Placer sin medida, excesos, chismes o 'camarillas'; una alegría externa que esconde un vacío interno.",
    },
    correspondencias: { planeta: "Mercurio", signo: "Cáncer", decanato: "Mercurio en Cáncer — la palabra que celebra" },
    particularidad: "Tras la unión del 2, el 3 abre el círculo íntimo a la comunidad: es el único Copas donde la emoción se vuelve colectiva y danzante.",
  },

  /* ---------------- 4 DE COPAS ---------------- */
  "copas-4": {
    general: "El estancamiento emocional: apatía, hastío y la oportunidad que no se ve.",
    simbolismo: "Un joven sentado bajo un árbol, de brazos cruzados, ignora la copa que una mano misteriosa le ofrece desde una nube; ante él ya hay tres copas que no le conmueven. Es el corazón saciado que deja de mirar.",
    esoterico: {
      derecho: "Desgano, aburrimiento, retraimiento. Se tiene, pero nada satisface; la mirada se vuelve hacia dentro y se pierde lo que se ofrece.",
      invertido: "Se despierta del letargo: vuelve el interés, se acepta la copa antes rechazada y se abre una nueva disposición.",
    },
    correspondencias: { planeta: "Luna", signo: "Cáncer", decanato: "Luna en Cáncer — la emoción replegada" },
    particularidad: "Es el 4 de la 'estabilidad' vuelto quietud melancólica: la estructura del agua es aquí estancamiento. La única copa que se rechaza en todo el palo.",
  },

  /* ---------------- 5 DE COPAS ---------------- */
  "copas-5": {
    general: "El duelo: pérdida, pena y lo que todavía queda en pie.",
    simbolismo: "Una figura envuelta en un manto negro contempla tres copas derramadas; detrás, aún permanecen dos copas de pie que no ha visto. Al fondo, un puente lleva a un hogar. Es el dolor que ciega ante lo que se conserva.",
    esoterico: {
      derecho: "Tristeza por una pérdida, decepción, arrepentimiento. El corazón se fija en lo volcado y no ve lo que sigue intacto.",
      invertido: "Se levanta la cabeza: se acepta la pérdida, se vislumbra la esperanza y empieza la sanación.",
    },
    correspondencias: { planeta: "Marte", signo: "Escorpio", decanato: "Marte en Escorpio — la herida del sentir" },
    particularidad: "El 5 de la crisis aplicado al agua es el luto. Única carta del tarot que muestra copas caídas y copas en pie a la vez: la lección está en girar la mirada.",
  },

  /* ---------------- 6 DE COPAS ---------------- */
  "copas-6": {
    general: "La memoria dulce: nostalgia, inocencia y ternura del pasado.",
    simbolismo: "En un patio apacible, un niño ofrece a otra niña una copa llena de flores. Reina un aire de infancia protegida y recuerdos amables. Es el afecto sencillo que viene de antes.",
    esoterico: {
      derecho: "Calor de los recuerdos, reencuentros, gestos bondadosos, regreso a lo familiar y a la inocencia.",
      invertido: "Quedar atrapado en el pasado: idealizar lo que fue, inmadurez, evasión o apegos que estorban el presente.",
    },
    correspondencias: { planeta: "Sol", signo: "Escorpio", decanato: "Sol en Escorpio — la luz de lo profundo" },
    particularidad: "Tras el duelo del 5, el 6 trae consuelo mirando atrás. Es el único Copas donde el afecto es inocente, sin deseo adulto: el amor de la memoria.",
  },

  /* ---------------- 7 DE COPAS ---------------- */
  "copas-7": {
    general: "La fantasía: muchos deseos, ilusiones y elecciones aún irreales.",
    simbolismo: "Entre nubes flotan siete copas, cada una con una visión distinta: un rostro, un castillo, joyas, una corona, un dragón, un velo luminoso. Una figura las mira desconcertada. Es la imaginación que ofrece todo y nada a la vez.",
    esoterico: {
      derecho: "Sueños y posibilidades que se multiplican, tentación y confusión; muchas opciones, pero ninguna todavía aterrizada en lo real.",
      invertido: "Se despeja la niebla: se distingue lo viable de lo ilusorio y se toma por fin una decisión.",
    },
    correspondencias: { planeta: "Venus", signo: "Escorpio", decanato: "Venus en Escorpio — el deseo que seduce" },
    particularidad: "El 7 de la evaluación llevado al agua se vuelve ensueño. Única carta del palo cuyas copas no están en el suelo: todo ocurre en la mente, no en la realidad.",
  },

  /* ---------------- 8 DE COPAS ---------------- */
  "copas-8": {
    general: "La partida: dejar atrás lo que ya no llena para buscar sentido.",
    simbolismo: "Bajo una luna que se eclipsa, una figura da la espalda a ocho copas bien ordenadas y se aleja hacia las montañas. Nada está roto, pero el corazón busca algo más hondo. Es la renuncia voluntaria.",
    esoterico: {
      derecho: "Abandonar una situación o vínculo que ya no satisface, aunque parezca completo; retirada y búsqueda espiritual.",
      invertido: "No poder irse: quedarse por miedo o apego, posponer la decisión aun sabiendo que algo ya terminó.",
    },
    correspondencias: { planeta: "Saturno", signo: "Piscis", decanato: "Saturno en Piscis — el límite de lo emocional" },
    particularidad: "A diferencia del 5 (pérdida sufrida), aquí la partida se elige. Es la única carta donde el protagonista abandona copas intactas por propia voluntad.",
  },

  /* ---------------- 9 DE COPAS ---------------- */
  "copas-9": {
    general: "La satisfacción: el deseo cumplido y el bienestar personal.",
    simbolismo: "Un hombre satisfecho se sienta con los brazos cruzados ante nueve copas alineadas en un arco sobre una mesa curva. Su postura es de contento y confianza. Es la 'carta del deseo' concedido.",
    esoterico: {
      derecho: "Un anhelo se realiza: gozo, confort, logro personal y la plenitud de disfrutar lo conseguido.",
      invertido: "Autocomplacencia que pierde el gozo verdadero: vanidad, codicia o un placer solo para uno mismo que deja hueco por dentro.",
    },
    correspondencias: { planeta: "Júpiter", signo: "Piscis", decanato: "Júpiter en Piscis — la abundancia del sentir" },
    particularidad: "Conocida como la 'carta de los deseos'. El 9 de plenitud aplicado al agua es el bienestar material y emocional, aún antes de la plenitud compartida del 10.",
  },

  /* ---------------- 10 DE COPAS ---------------- */
  "copas-10": {
    general: "La dicha plena: felicidad emocional completa y compartida.",
    simbolismo: "Una pareja alza los brazos y dos niños juegan bajo un arcoíris de diez copas, frente a un hogar y un río. Es la culminación del palo: el amor que se vuelve familia y paz duradera.",
    esoterico: {
      derecho: "Plenitud afectiva, armonía familiar, paz y una vida colmada de bendiciones compartidas.",
      invertido: "Desarmonía bajo la apariencia feliz: tensiones de familia, distancias emocionales o expectativas rotas.",
    },
    correspondencias: { planeta: "Marte", signo: "Piscis", decanato: "Marte en Piscis — la emoción que se consuma" },
    particularidad: "Cierra el ciclo del agua: donde el 9 era gozo individual, el 10 es felicidad compartida. El arcoíris —único en los Menores— marca la promesa cumplida.",
  },

  /* ---------------- PAJE DE COPAS ---------------- */
  "copas-paje": {
    general: "El aprendiz del sentir: mensajes del corazón, imaginación e inocencia emocional.",
    simbolismo: "Un joven vestido de flores sostiene una copa de la que, sorprendentemente, asoma un pez. Detrás, un mar ondulado. El pez —lo inesperado que surge del inconsciente— es la intuición naciente que aún juega.",
    esoterico: {
      derecho: "Recibir con el corazón abierto: una noticia afectiva, una confesión, inspiración creativa, sensibilidad tierna.",
      invertido: "Emociones inmaduras y volubles: capricho, evasión, fantasías que no cuajan o expresión afectiva inestable.",
    },
    correspondencias: { planeta: "—", signo: "Signos de agua (Cáncer, Escorpio, Piscis)", decanato: "Parte 'de tierra' del Agua — la emoción que arraiga" },
    particularidad: "El pez saliendo de la copa es un detalle único en todo el tarot: lo intuitivo irrumpe donde menos se espera. Es el agua en su forma más joven y curiosa.",
  },

  /* ---------------- CABALLERO DE COPAS ---------------- */
  "copas-caballero": {
    general: "El romántico en marcha: ideales, propuestas y acción guiada por el corazón.",
    simbolismo: "Un caballero avanza con calma sobre un caballo blanco, ofreciendo una copa como quien lleva una invitación. Su yelmo y botas tienen alas: la emoción elevada que se pone en movimiento sin prisa.",
    esoterico: {
      derecho: "Avanzar con ideales y ternura: una propuesta, una invitación, un cortejo, inspiración creativa que se atreve a actuar.",
      invertido: "Soñar sin hacer: indecisión, promesas incumplidas, seducción vacía o fantasía que no se concreta.",
    },
    correspondencias: { planeta: "Júpiter", signo: "Piscis", decanato: "Parte 'de aire' del Agua — el sentir que se mueve" },
    particularidad: "Es el único personaje de la corte que avanza en gesto de ofrecimiento: no conquista con fuerza, sino con encanto. El caballero del agua va al paso, nunca al galope.",
  },

  /* ---------------- REINA DE COPAS ---------------- */
  "copas-reina": {
    general: "La maestra del sentir: empatía profunda, intuición y amor que contiene.",
    simbolismo: "La Reina contempla absorta una copa cerrada y ornamentada —la única con tapa del tarot—, sentada en un trono a la orilla del mar. Mira el contenido de su propio corazón: la emoción vuelta sabiduría.",
    esoterico: {
      derecho: "Acoger desde la compasión y la intuición: sanación, empatía, ternura, comprensión honda de los demás.",
      invertido: "Desbordarse en lo emocional: hipersensibilidad, dependencia, límites que se disuelven o evasión de la realidad.",
    },
    correspondencias: { planeta: "Luna", signo: "Cáncer", decanato: "Parte 'de agua' del Agua — el sentir en su pureza" },
    particularidad: "Su copa tapada es un símbolo único: la Reina es la que mejor conoce su interior, pero no lo expone. Representa el agua más profunda y quieta del palo.",
  },

  /* ---------------- REY DE COPAS ---------------- */
  "copas-rey": {
    general: "El dominio del sentir: madurez emocional que guía con calma en medio del oleaje.",
    simbolismo: "El Rey se sienta en un trono que flota sobre un mar agitado, con la copa en una mano y el cetro en la otra. Aunque las olas lo rodean, permanece sereno: ha aprendido a gobernar la emoción sin reprimirla.",
    esoterico: {
      derecho: "Liderar desde la compasión con dominio de sí: amor maduro, tolerancia, consejo sereno, equilibrio ante lo intenso.",
      invertido: "Reprimir o manipular el sentir: calma de fachada con tormenta dentro, frialdad o usar la emoción para controlar.",
    },
    correspondencias: { planeta: "Marte", signo: "Escorpio", decanato: "Parte 'de fuego' del Agua — la emoción que dirige" },
    particularidad: "Su trono flota sobre el mar sin hundirse: símbolo único de dominio emocional. Es el agua gobernada por la voluntad, la madurez afectiva llevada al mando.",
  },
};

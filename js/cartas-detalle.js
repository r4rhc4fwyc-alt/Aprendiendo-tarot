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

  /* ======================= BASTOS (FUEGO) ======================= */

  "bastos-1": {
    general: "El don del Fuego en estado puro: energía vital, chispa de pasión y el impulso de emprender.",
    simbolismo: "Una mano divina surge de las nubes empuñando una vara viva de la que brotan hojas; al fondo, un castillo sobre una colina marca la meta a conquistar. Es la fuerza creadora recién encendida, antes de cualquier obra.",
    esoterico: {
      derecho: "Un nuevo reto que enciende la voluntad: inspiración, deseo, iniciativa, la energía que se eleva para crecer.",
      invertido: "La chispa se apaga o se descontrola: pasión que decae, proyecto que se frena o fuerza que se desborda sin rumbo.",
    },
    correspondencias: { planeta: "—", signo: "Raíz del Fuego (Aries, Leo, Sagitario)", decanato: "As: la semilla pura del elemento" },
    particularidad: "La vara echa hojas: el fuego aquí es vida que quiere brotar. Es el único Basto que se ofrece desde lo divino, pura potencia sin aplicar todavía.",
  },
  "bastos-2": {
    general: "La visión del que ya logró algo y mira más lejos: poder personal y ambición.",
    simbolismo: "Una figura de pie sobre la muralla de su castillo sostiene un pequeño globo terráqueo y mira el horizonte. Ya posee, pero no se conforma: el mundo le cabe en la mano y aun así desea más.",
    esoterico: {
      derecho: "Reconocer lo logrado y usarlo como base para planear y aspirar más alto. Decisión y dominio del propio terreno.",
      invertido: "Perder lo ganado o la posición; miedo a arriesgar, planes que se diluyen o impaciencia que paraliza.",
    },
    correspondencias: { planeta: "Marte", signo: "Aries", decanato: "Marte en Aries — la voluntad que domina" },
    particularidad: "Sostener el mundo en la mano es un gesto único: el 2 de la elección aplicado al fuego es la encrucijada entre quedarse con lo logrado o lanzarse a más.",
  },
  "bastos-3": {
    general: "La espera activa: la empresa ya en marcha y la mirada puesta en lo que viene.",
    simbolismo: "Un hombre en lo alto de un risco observa el mar donde zarpan (o regresan) sus naves. Ha invertido su energía y ahora aguarda el resultado: la expansión que se contempla desde la altura.",
    esoterico: {
      derecho: "La oportunidad de expandirse toma forma; la decisión está tomada y solo falta el último empuje. El momento de actuar se acerca.",
      invertido: "La espera se vuelve demora: dudas, planes que no despegan o la señal esperada que no llega.",
    },
    correspondencias: { planeta: "Sol", signo: "Aries", decanato: "Sol en Aries — la fuerza que se proyecta" },
    particularidad: "Es el único Basto donde el protagonista mira hacia afuera, al horizonte: el fuego del 3 no celebra aún, planifica su expansión.",
  },
  "bastos-4": {
    general: "La celebración estable: alegría, logro compartido y cimientos festivos.",
    simbolismo: "Cuatro varas floridas forman un arco o palio del que cuelgan guirnaldas; al fondo, gente que agita ramos junto a un castillo. Es la fiesta del trabajo cumplido: la energía que se asienta en gozo.",
    esoterico: {
      derecho: "Dicha genuina por lo que de veras se buscaba: libertad de obstáculos, estabilidad, paz y bienvenida a casa.",
      invertido: "Conformarse con lo que hay: alegría más modesta o aceptación pasiva, aunque la base sigue siendo firme.",
    },
    correspondencias: { planeta: "Venus", signo: "Aries", decanato: "Venus en Aries — la energía que florece" },
    particularidad: "El 4 de la estructura aplicado al fuego es el único umbral festivo del tarot: las varas no luchan ni cargan, sostienen una celebración.",
  },
  "bastos-5": {
    general: "La competencia sin malicia: choque de fuerzas, prueba y afán de superarse.",
    simbolismo: "Cinco jóvenes blanden sus varas en lo que parece una riña, pero los colores vivos y el cielo azul revelan un juego más que una guerra. Es la energía que se mide con otras para crecer.",
    esoterico: {
      derecho: "Esforzarse en la contienda y pulirse: rivalidad sana, competencia, retos que templan sin rencor.",
      invertido: "La rivalidad se agria: pelear para herir o imponerse, conflicto que busca que el otro ceda.",
    },
    correspondencias: { planeta: "Saturno", signo: "Leo", decanato: "Saturno en Leo — la fuerza puesta a prueba" },
    particularidad: "El 5 de la crisis aplicado al fuego es un combate luminoso: la única carta de conflicto donde la pelea parece deporte, no drama.",
  },
  "bastos-6": {
    general: "El triunfo reconocido: victoria, liderazgo y aplauso merecido.",
    simbolismo: "Un jinete coronado de laurel avanza con su vara adornada mientras otros lo acompañan a pie. Es el regreso del vencedor: la energía que ha triunfado y recibe el reconocimiento público.",
    esoterico: {
      derecho: "Orgullo por el logro y el aplauso de los demás; reconocimiento, buenas noticias y liderazgo celebrado.",
      invertido: "Reconocimiento que no llega o se siente injusto; vanidad, descontento oculto o victoria que no satisface.",
    },
    correspondencias: { planeta: "Júpiter", signo: "Leo", decanato: "Júpiter en Leo — la gloria que se expande" },
    particularidad: "Tras la lucha del 5, el 6 da el premio: es el único Basto montado a caballo en son de triunfo, no de partida.",
  },
  "bastos-7": {
    general: "La defensa de la posición: resistir, sostener el terreno frente a muchos.",
    simbolismo: "Un hombre en lo alto de una loma se defiende con su vara de otras seis que suben desde abajo. Tiene la ventaja de la altura: la energía que planta cara y no cede.",
    esoterico: {
      derecho: "Ganar desde una posición favorable: mantener lo conseguido, afirmar la propia postura, valentía ante la presión.",
      invertido: "Pelear en desventaja: sentirse superado, agotado o abrumado, confusión bajo el asedio.",
    },
    correspondencias: { planeta: "Marte", signo: "Leo", decanato: "Marte en Leo — la voluntad que resiste" },
    particularidad: "A diferencia del 5 (juego entre pares), aquí es uno contra muchos: el 7 de la perseverancia aplicado al fuego es coraje para sostener lo propio.",
  },
  "bastos-8": {
    general: "El impulso veloz: movimiento rápido, noticias y acontecimientos que se precipitan.",
    simbolismo: "Ocho varas vuelan en paralelo por el aire, como flechas lanzadas hacia su destino sobre un paisaje abierto. No hay figuras humanas: es la energía pura en pleno vuelo, voluntad y acción alineadas.",
    esoterico: {
      derecho: "Avanzar a velocidad vertiginosa: las cosas se mueven de golpe, llegan noticias, un deseo se cumple pronto.",
      invertido: "Freno inesperado: lo que iba fluido se detiene, demoras, impaciencia por un cierre que no llega.",
    },
    correspondencias: { planeta: "Mercurio", signo: "Sagitario", decanato: "Mercurio en Sagitario — el mensaje que vuela" },
    particularidad: "Es la única carta del tarot sin personas ni suelo: solo varas en el aire. El fuego del 8 es movimiento puro, flechas de energía en marcha.",
  },
  "bastos-9": {
    general: "La guardia del veterano: resistencia, vigilancia y último esfuerzo.",
    simbolismo: "Un hombre vendado y herido se apoya en su vara, alerta ante las otras ocho clavadas tras él. Cansado pero firme, no se rinde: la energía que se defiende tras muchas batallas.",
    esoterico: {
      derecho: "Preparado para lo que venga: haber hecho los deberes, estar en guardia, tenacidad aunque duela.",
      invertido: "Golpe por exceso de confianza o agotamiento: bajar la guardia, no poder con un imprevisto, falta de reservas.",
    },
    correspondencias: { planeta: "Luna", signo: "Sagitario", decanato: "Luna en Sagitario — la fuerza que persiste" },
    particularidad: "El 9 de la plenitud aplicado al fuego es resistencia herida: la única carta donde el protagonista está marcado por las batallas y aun así vigila.",
  },
  "bastos-10": {
    general: "La carga excesiva: el peso del propio éxito, responsabilidad que agobia.",
    simbolismo: "Un hombre carga a duras penas diez varas que le tapan la vista, camino de una casa cercana. Lleva todo abrazado, sin querer soltar nada: la energía convertida en fardo.",
    esoterico: {
      derecho: "Agotarse bajo el peso de lo asumido: sobrecarga, obligaciones que solo tú puedes llevar, exceso de responsabilidad.",
      invertido: "Soltar lo que agobia: llegar al límite y liberarse, delegar, o bien eludir la responsabilidad.",
    },
    correspondencias: { planeta: "Saturno", signo: "Sagitario", decanato: "Saturno en Sagitario — la fuerza que pesa" },
    particularidad: "Cierra el palo con una paradoja: tanto fuego acumulado se vuelve carga. Es la única carta donde las varas no se usan, solo se cargan.",
  },
  "bastos-paje": {
    general: "El mensajero del Fuego: entusiasmo joven, noticias y hambre de aventura.",
    simbolismo: "Un muchacho contempla con admiración una vara más alta que él, en un paisaje de desiertos y pirámides. Viste salamandras —símbolo del fuego— en su túnica: es la pasión que empieza a despertar con ojos limpios.",
    esoterico: {
      derecho: "Arder de entusiasmo creyendo en el futuro: una noticia que inspira, un comienzo ilusionante, ganas sinceras de lanzarse.",
      invertido: "Fanfarronería o capricho: hablar mucho y hacer poco, rebeldía sin causa, entusiasmo que no madura.",
    },
    correspondencias: { planeta: "—", signo: "Signos de fuego (Aries, Leo, Sagitario)", decanato: "Parte 'de tierra' del Fuego — la pasión que arraiga" },
    particularidad: "Mira su vara hacia arriba, no al frente: el fuego más joven admira la fuerza antes de empuñarla. Es promesa, no todavía acción.",
  },
  "bastos-caballero": {
    general: "El aventurero impetuoso: acción, viaje y pasión difícil de contener.",
    simbolismo: "Un joven de armadura monta un caballo encabritado, con la vara en alto y el ímpetu de quien no se deja frenar. Las salamandras de su túnica arden: es el fuego lanzado hacia adelante.",
    esoterico: {
      derecho: "Partir hacia nuevos horizontes: entusiasmo por el reto, acción inmediata, aventura y coraje.",
      invertido: "Impulso descontrolado o frenado: precipitación, cambios que desconciertan, agresividad defensiva.",
    },
    correspondencias: { planeta: "Júpiter", signo: "Sagitario", decanato: "Parte 'de aire' del Fuego — la pasión que se lanza" },
    particularidad: "Su caballo se alza en dos patas: el único jinete de la corte a punto de salir disparado. Es el fuego en su forma más impaciente.",
  },
  "bastos-reina": {
    general: "El carisma del Fuego: fuerza magnética, calidez y poder sereno de atracción.",
    simbolismo: "Una reina sostiene una vara florecida y un girasol, sentada con postura abierta y segura. A sus pies, un gato negro insinúa su lado mágico e intuitivo: es el fuego dueño de sí, que irradia sin quemarse.",
    esoterico: {
      derecho: "Atraer de forma natural: ser el centro cálido, actuar con generosidad y seguridad, magnetismo y confianza.",
      invertido: "Obstinación que genera malentendidos: lo que crees bueno se tuerce, o te vuelves blanco de celos y envidias.",
    },
    correspondencias: { planeta: "Sol", signo: "Leo", decanato: "Parte 'de agua' del Fuego — la pasión que acoge" },
    particularidad: "El girasol y el gato negro la hacen única: fuerza solar por fuera, misterio por dentro. Es el fuego hecho carisma estable.",
  },
  "bastos-rey": {
    general: "El líder visionario: fuego que manda, decide y mueve a los demás.",
    simbolismo: "Un rey sostiene su vara siempre listo para levantarse, en postura de acción. La salamandra a sus pies —que renace del fuego— simboliza su pasión y poder: la energía puesta al servicio del mando.",
    esoterico: {
      derecho: "Lograr por convicción: liderazgo que inspira, hacer aliados, obtener resultados pese a las dificultades.",
      invertido: "Querer controlarlo todo a la fuerza: autoritarismo, pasión excesiva que nubla el juicio, impaciencia dañina.",
    },
    correspondencias: { planeta: "Marte", signo: "Aries", decanato: "Parte 'de fuego' del Fuego — la pasión que dirige" },
    particularidad: "Es el fuego en su máxima pureza: fuego del fuego. Siempre a punto de incorporarse, encarna el impulso de liderar llevado al trono.",
  },

  /* ======================= ESPADAS (AIRE) ======================= */

  "espadas-1": {
    general: "El don del Aire en estado puro: claridad mental, verdad y la fuerza de un pensamiento decisivo.",
    simbolismo: "Una mano divina surge de las nubes empuñando una espada erguida, coronada por un laurel de victoria; al fondo, montañas escarpadas anuncian un camino difícil. Es la mente que corta la confusión de un solo tajo.",
    esoterico: {
      derecho: "Abrir camino con la razón: una idea clara, una verdad que se impone, decisión y triunfo intelectual.",
      invertido: "La claridad se vuelve filo cruel: pensar solo en el propio interés, ideas destructivas, verdad usada para herir.",
    },
    correspondencias: { planeta: "—", signo: "Raíz del Aire (Géminis, Libra, Acuario)", decanato: "As: la semilla pura del elemento" },
    particularidad: "La espada atraviesa la corona: la mente conquista. Es el único As cuyo don es un arma, el pensamiento como poder cortante.",
  },
  "espadas-2": {
    general: "El impasse: decisión suspendida, tregua tensa entre dos opciones.",
    simbolismo: "Una mujer con los ojos vendados sostiene dos espadas cruzadas sobre el pecho, de espaldas a un mar en calma bajo la luna. No quiere —o no puede— mirar: la mente que se bloquea para no elegir.",
    esoterico: {
      derecho: "Mantener el equilibrio con calma: no precipitar la decisión, dar una tregua, buscar paz interior antes de actuar.",
      invertido: "Parche que lleva a un callejón sin salida: evitar el fondo del problema, y que lo no resuelto vuelva a aparecer.",
    },
    correspondencias: { planeta: "Luna", signo: "Libra", decanato: "Luna en Libra — la mente en balanza" },
    particularidad: "La venda sobre los ojos la hace única: el 2 de la elección aplicado al aire es ceguera voluntaria para no decidir todavía.",
  },
  "espadas-3": {
    general: "El corazón herido: dolor, desengaño y la verdad que lastima.",
    simbolismo: "Tres espadas atraviesan un corazón rojo bajo un cielo de lluvia y nubes. La imagen es directa y descarnada: la pena causada por una verdad que no se quería oír.",
    esoterico: {
      derecho: "Aceptar el núcleo doloroso de la realidad: pena, ruptura, desengaño que, aun así, empuja a seguir.",
      invertido: "Rechazar la verdad y prolongar el sufrimiento: aferrarse al dolor o negar lo evidente.",
    },
    correspondencias: { planeta: "Saturno", signo: "Libra", decanato: "Saturno en Libra — el juicio que duele" },
    particularidad: "Es la única carta cuyo centro es un corazón, no una figura: el 3 del crecimiento aplicado al aire es el crecimiento que nace de la herida.",
  },
  "espadas-4": {
    general: "El reposo necesario: pausa, recuperación y silencio para sanar la mente.",
    simbolismo: "La efigie de un caballero yace sobre una tumba, con las manos juntas como en oración; tres espadas cuelgan de la pared y una descansa bajo él. No es muerte, sino retiro: la mente que se detiene a descansar.",
    esoterico: {
      derecho: "Descanso y repliegue: bajar el ritmo, recuperarse, tomar tiempo para reflexionar en silencio.",
      invertido: "Fin del reposo: despertar, recuperación completa, volver a la actividad tras la pausa.",
    },
    correspondencias: { planeta: "Júpiter", signo: "Libra", decanato: "Júpiter en Libra — la mente que reposa" },
    particularidad: "Es la única espada en paz: tras el dolor del 3, el 4 ofrece quietud. La estructura del aire es aquí reposo reparador, no actividad.",
  },
  "espadas-5": {
    general: "La victoria vacía: ganar a cualquier precio, conflicto que deja mal sabor.",
    simbolismo: "Un hombre recoge las espadas de dos figuras que se alejan derrotadas, con una sonrisa ambigua bajo un cielo de nubes rotas. Ha vencido, pero la victoria sabe a derrota.",
    esoterico: {
      derecho: "Imponerse por cualquier medio: astucia, estrategia fría, triunfo que humilla o que no llena.",
      invertido: "Perder algo importante por trampas o descuido: derrota, pérdida, consecuencias de la propia imprudencia.",
    },
    correspondencias: { planeta: "Venus", signo: "Acuario", decanato: "Venus en Acuario — la mente que contiende" },
    particularidad: "El 5 de la crisis aplicado al aire es el conflicto mental: la única victoria del tarot que se siente como pérdida.",
  },
  "espadas-6": {
    general: "La travesía: alejarse de lo difícil hacia aguas más calmas.",
    simbolismo: "Un barquero lleva a una mujer y un niño cabizbajos a través del agua hacia una orilla lejana; el lado por el que avanzan está en calma. Es el tránsito mental de un estado a otro mejor.",
    esoterico: {
      derecho: "Escapar de la dificultad: dejar atrás lo duro, transición, viaje o mudanza hacia algo más sereno.",
      invertido: "Recaer en lo viejo: no poder alejarse del problema o volver a un entorno que creías superado.",
    },
    correspondencias: { planeta: "Mercurio", signo: "Acuario", decanato: "Mercurio en Acuario — la mente en tránsito" },
    particularidad: "Las aguas revueltas quedan a un lado y las calmas al otro: el único Espadas que muestra el paso físico de un estado mental a otro.",
  },
  "espadas-7": {
    general: "La astucia furtiva: estrategia a escondidas, cálculo y engaño.",
    simbolismo: "Un hombre se aleja de puntillas cargando cinco espadas y mirando atrás, mientras deja dos clavadas; a lo lejos, un campamento que no lo ha visto. Es la mente que actúa a hurtadillas.",
    esoterico: {
      derecho: "Planear en la sombra: astucia, tácticas, actuar por cuenta propia o evadir la responsabilidad.",
      invertido: "Oler el peligro y prepararse: detectar la mala intención ajena, extremar la cautela, a veces ayudar a otros.",
    },
    correspondencias: { planeta: "Luna", signo: "Acuario", decanato: "Luna en Acuario — la mente que calcula" },
    particularidad: "El 7 de la evaluación aplicado al aire se vuelve sigilo: la única carta donde alguien roba y escapa de puntillas.",
  },
  "espadas-8": {
    general: "La prisión mental: sentirse atrapado por los propios pensamientos.",
    simbolismo: "Una mujer vendada y atada está rodeada de ocho espadas clavadas. Pero mirando bien, no hay guardias y sus pies pueden moverse: lo que la encierra es su mente, no las espadas.",
    esoterico: {
      derecho: "Sentirse impotente y aislado: creer que no hay salida, esperar que otros rescaten, parálisis por miedo.",
      invertido: "Luchar sin apoyo o empezar a liberarse: ver que las ataduras eran mentales, o resistirse culpando a los demás.",
    },
    correspondencias: { planeta: "Júpiter", signo: "Géminis", decanato: "Júpiter en Géminis — la mente que se encierra" },
    particularidad: "Las ataduras son flojas y nadie vigila: símbolo único de que la cárcel es interior. El aire del 8 es pensamiento que se aprisiona solo.",
  },
  "espadas-9": {
    general: "La angustia nocturna: insomnio, culpa y pensamientos que atormentan.",
    simbolismo: "Una figura sentada en la cama se cubre el rostro, desesperada, tras una pesadilla; nueve espadas cuelgan en la oscuridad del muro. Es la mente que se tortura a solas, de noche.",
    esoterico: {
      derecho: "Desesperanza que da vueltas: remordimiento, ansiedad, 'si hubiera hecho otra cosa', culpa que ciega.",
      invertido: "No querer enfrentar lo malo: dar la espalda a la realidad, culpar a otros o revolcarse en la autocompasión.",
    },
    correspondencias: { planeta: "Marte", signo: "Géminis", decanato: "Marte en Géminis — la mente que se hiere" },
    particularidad: "Las espadas no tocan a la figura: el tormento está en la cabeza, no en el cuerpo. El 9 del aire es sufrimiento mental puro.",
  },
  "espadas-10": {
    general: "El fondo tocado: fin doloroso que, aceptado, abre un amanecer.",
    simbolismo: "Un hombre yace con diez espadas clavadas en la espalda; la escena parece fatal, pero al horizonte el cielo negro empieza a aclarar. Es el final absoluto que contiene ya el nuevo día.",
    esoterico: {
      derecho: "Avanzar tras aceptarlo todo: tocar fondo, rendirse a lo inevitable y, con ello, pasar a la etapa siguiente.",
      invertido: "Mirar solo lo que conviene: no estar listo para aceptar lo adverso y quedar atrapado en la ilusión.",
    },
    correspondencias: { planeta: "Sol", signo: "Géminis", decanato: "Sol en Géminis — la mente que culmina" },
    particularidad: "El amanecer al fondo es clave: el 10 del aire es el peor final y, a la vez, la promesa de que lo peor ya pasó.",
  },
  "espadas-paje": {
    general: "El vigilante del Aire: curiosidad mental, agudeza y cautela alerta.",
    simbolismo: "Un joven empuña una espada y mira hacia atrás con gesto vigilante, sobre un terreno ventoso donde vuelan pájaros. Es la mente joven, despierta y a la defensiva, lista para analizar.",
    esoterico: {
      derecho: "Ver la situación con claridad y cautela: observar, analizar, a veces actuar con discreción; alta conciencia del riesgo.",
      invertido: "Cautela floja: defensa descuidada, hablar de más, soltar información o perder algo por imprudencia.",
    },
    correspondencias: { planeta: "—", signo: "Signos de aire (Géminis, Libra, Acuario)", decanato: "Parte 'de tierra' del Aire — la mente que observa" },
    particularidad: "Mira hacia atrás, no al frente: el aire más joven desconfía y vigila. Es la agudeza que aún no sabe hacia dónde apuntar.",
  },
  "espadas-caballero": {
    general: "El embate racional: carga directa, lógica veloz y decisión sin titubeos.",
    simbolismo: "Un caballero galopa a toda velocidad con la espada en alto y la mirada al frente, mientras el viento agita todo a su paso. Es el pensamiento lanzado en línea recta hacia su objetivo.",
    esoterico: {
      derecho: "Decidir con firmeza y avanzar por lógica: ir al grano por la ruta más corta, juicio racional sin dejarse llevar por la emoción.",
      invertido: "Provocar disputas inútiles: agresividad verbal, precipitación, querer el mérito a cualquier precio.",
    },
    correspondencias: { planeta: "Mercurio", signo: "Géminis", decanato: "Parte 'de aire' del Aire — la mente que se lanza" },
    particularidad: "Es el jinete más veloz del tarot: aire del aire en movimiento. La mente que carga sin frenos, para bien o para mal.",
  },
  "espadas-reina": {
    general: "La maestra de la verdad: inteligencia clara, honestidad y justicia con compasión.",
    simbolismo: "La Reina mira al frente sin pestañear; alza la espada hacia el cielo mientras su otra mano parece acoger. Entre nubes y un cielo despejado, encarna la mente lúcida que ha conocido el dolor y lo ha vuelto sabiduría.",
    esoterico: {
      derecho: "Ganarse el respeto por la rectitud: decir y hacer lo correcto con tacto, pensar con independencia, verdad con empatía.",
      invertido: "Usar el filo solo para defenderse: frialdad, dureza sin piedad, cortar sin considerar los sentimientos.",
    },
    correspondencias: { planeta: "Venus", signo: "Libra", decanato: "Parte 'de agua' del Aire — la mente que comprende" },
    particularidad: "Su mano libre se abre mientras la otra sostiene la espada: rigor y compasión a la vez. Es el aire más lúcido, templado por la experiencia.",
  },
  "espadas-rey": {
    general: "El juez del Aire: autoridad intelectual, análisis objetivo y ética firme.",
    simbolismo: "El Rey mira al frente con expresión severa, la espada recta en la mano. Tras muchas batallas se sabe justo: encarna la razón que juzga sin dejarse ablandar ni comprar.",
    esoterico: {
      derecho: "Juzgar con análisis objetivo: ver claro en cualquier situación, ser justo y exigente consigo mismo, autoridad ética.",
      invertido: "Blindar la dignidad con autoritarismo: usar la inteligencia solo para sí, dureza, no reconocer los propios errores.",
    },
    correspondencias: { planeta: "Saturno", signo: "Acuario", decanato: "Parte 'de fuego' del Aire — la mente que dirige" },
    particularidad: "Su espada se alza recta, sin inclinarse: símbolo de juicio imparcial. Es el aire gobernado por la ley y la razón.",
  },

  /* ======================= OROS (TIERRA) ======================= */

  "oros-1": {
    general: "El don de la Tierra en estado puro: prosperidad, salud y la semilla de lo material.",
    simbolismo: "Una mano divina surge de las nubes sosteniendo un gran pentáculo dorado; abajo se abre un jardín florido con un arco hacia montañas lejanas. Es la abundancia ofrecida, la oportunidad concreta que pide ser cultivada.",
    esoterico: {
      derecho: "Manifestar abundancia con esfuerzo: una oportunidad tangible, dinero, salud, un proyecto que puede echar raíces.",
      invertido: "Fijarse en la ganancia sin actuar: codicia, oportunidad desaprovechada o bases materiales que se resquebrajan.",
    },
    correspondencias: { planeta: "—", signo: "Raíz de la Tierra (Tauro, Virgo, Capricornio)", decanato: "As: la semilla pura del elemento" },
    particularidad: "El jardín y el arco lo hacen único entre los Ases: la abundancia ya tiene un camino trazado hacia la meta. Pura potencia material lista para cultivarse.",
  },
  "oros-2": {
    general: "El malabar: flexibilidad para sostener varias cosas a la vez.",
    simbolismo: "Un joven baila haciendo malabares con dos pentáculos unidos por un lazo en forma de infinito; al fondo, un mar con barcos que suben y bajan entre las olas. Es la destreza de adaptarse al vaivén.",
    esoterico: {
      derecho: "Evaluar y responder con soltura: manejar lo que toca con flexibilidad, buen ritmo, equilibrio entre prioridades.",
      invertido: "No poder con todo: agobio ante los cambios, desorganización, perder el equilibrio entre tareas.",
    },
    correspondencias: { planeta: "Júpiter", signo: "Capricornio", decanato: "Júpiter en Capricornio — lo material en equilibrio" },
    particularidad: "El lazo del infinito sobre los pentáculos es único: el 2 de la elección aplicado a la tierra es el arte de mantener dos cosas en movimiento sin que caigan.",
  },
  "oros-3": {
    general: "El oficio reconocido: colaboración, destreza y trabajo bien hecho.",
    simbolismo: "Un artesano trabaja sobre un andamio en una catedral mientras dos figuras consultan los planos a su lado. Es la pericia que se reconoce: el esfuerzo que da fruto gracias al trabajo en equipo.",
    esoterico: {
      derecho: "Que tu habilidad sea reconocida: los demás valoran tu esfuerzo, colaboración, talentos que empiezan a lucir.",
      invertido: "Esfuerzo sin reconocimiento: no ser valorado, falta de coordinación, o habilidades que aún deben pulirse.",
    },
    correspondencias: { planeta: "Marte", signo: "Capricornio", decanato: "Marte en Capricornio — lo material que construye" },
    particularidad: "Es el único Oros que ocurre dentro de un templo en obra: el 3 del crecimiento aplicado a la tierra es el oficio que se levanta con otros.",
  },
  "oros-4": {
    general: "El apego posesivo: aferrarse a lo material por seguridad.",
    simbolismo: "Un hombre sentado abraza un pentáculo contra el pecho, sujeta otro con la cabeza y pisa dos más; detrás, la ciudad que teme perder. Es la tierra agarrada con fuerza, el miedo a soltar.",
    esoterico: {
      derecho: "Priorizar la seguridad estable: cautela para no perder, control; pero también apego y rigidez.",
      invertido: "Soltar o perder el control de lo material: o relajar el puño y compartir, o derroche y descontrol.",
    },
    correspondencias: { planeta: "Sol", signo: "Capricornio", decanato: "Sol en Capricornio — lo material que se retiene" },
    particularidad: "Sujeta cuatro pentáculos con brazos, cabeza y pies: nadie en el tarot se aferra tanto. El 4 de la estructura aplicado a la tierra es seguridad vuelta avaricia.",
  },
  "oros-5": {
    general: "La carencia: pobreza, exclusión y la ayuda que no se pide.",
    simbolismo: "Dos mendigos ateridos pasan bajo la nieve frente a un vitral iluminado de una iglesia, sin entrar a pedir cobijo. Es la penuria material y espiritual, el frío de sentirse fuera.",
    esoterico: {
      derecho: "Vacío por la adversidad: dificultad económica o de salud, aislamiento, sensación de desamparo.",
      invertido: "Recuperar la esperanza con apoyo: las penurias mejoran, alguien tiende la mano, se levanta el ánimo.",
    },
    correspondencias: { planeta: "Mercurio", signo: "Tauro", decanato: "Mercurio en Tauro — lo material en crisis" },
    particularidad: "El refugio (el vitral) está justo al lado y no lo ven: el 5 de la crisis aplicado a la tierra es carencia con ayuda a un paso.",
  },
  "oros-6": {
    general: "El dar y recibir: generosidad, equilibrio y reparto justo.",
    simbolismo: "Un hombre acomodado sostiene una balanza mientras reparte monedas a dos mendigos arrodillados. Es la relación entre quien da y quien recibe, sostenida por la buena voluntad.",
    esoterico: {
      derecho: "Vínculo entre el que da y el que recibe: generosidad, ayuda, intercambio justo y bien medido.",
      invertido: "Vínculo entre quien controla y quien depende: dar con condiciones, deudas, caridad que somete.",
    },
    correspondencias: { planeta: "Luna", signo: "Tauro", decanato: "Luna en Tauro — lo material que fluye" },
    particularidad: "La balanza en la mano es su símbolo clave: el 6 de la armonía aplicado a la tierra pregunta siempre quién tiene el poder en el reparto.",
  },
  "oros-7": {
    general: "La pausa del labrador: evaluar el fruto antes de seguir.",
    simbolismo: "Un hombre apoyado en su azada contempla, algo preocupado, los pentáculos crecidos en un arbusto. Ha trabajado mucho y evalúa si el resultado vale la pena: es la cosecha en suspenso.",
    esoterico: {
      derecho: "Detenerse a reevaluar: revisar el plan o el método para mejorar y seguir creciendo; paciencia con el proceso.",
      invertido: "Avanzar con desgana o descuido: autoevaluación inflada, esfuerzo flojo o impaciencia por el resultado.",
    },
    correspondencias: { planeta: "Saturno", signo: "Tauro", decanato: "Saturno en Tauro — lo material que madura" },
    particularidad: "Es el único Oros de la duda reflexiva: el 7 de la evaluación aplicado a la tierra es el labrador que mide su cosecha antes de decidir.",
  },
  "oros-8": {
    general: "El aprendizaje aplicado: oficio, constancia y mejora por repetición.",
    simbolismo: "Un artesano cincela pentáculos uno tras otro, concentrado, colgándolos ya terminados; a lo lejos, el pueblo donde se reconocerá su labor. Es la dedicación paciente que forja la maestría.",
    esoterico: {
      derecho: "Concentrarse en el trabajo: foco, disciplina, perfeccionar el oficio paso a paso hacia el éxito.",
      invertido: "No sostener el foco: distracciones, aparentar trabajo, descuido en la calidad.",
    },
    correspondencias: { planeta: "Sol", signo: "Virgo", decanato: "Sol en Virgo — lo material que se perfecciona" },
    particularidad: "Fabrica pentáculos en serie: el único Oros que muestra el aprendizaje como repetición. Es la tierra convertida en oficio y disciplina.",
  },
  "oros-9": {
    general: "El logro refinado: independencia, disfrute merecido y abundancia cultivada.",
    simbolismo: "Una mujer elegante pasea por un viñedo con un halcón amaestrado posado en su mano; a su alrededor, jardín, uvas y una mansión. Es el éxito disfrutado con autonomía y buen gusto.",
    esoterico: {
      derecho: "Éxito reconocido y disfrutado: independencia, bienestar logrado por mérito, placer refinado de lo conseguido.",
      invertido: "Éxito por atajos o apariencia: ganancias dudosas, lujo vacío o aislamiento tras el logro.",
    },
    correspondencias: { planeta: "Venus", signo: "Virgo", decanato: "Venus en Virgo — lo material que se disfruta" },
    particularidad: "El halcón amaestrado es único: simboliza el deseo domesticado por la disciplina. El 9 de plenitud aplicado a la tierra es abundancia con autodominio.",
  },
  "oros-10": {
    general: "La riqueza duradera: herencia, familia y prosperidad que perdura.",
    simbolismo: "Bajo un arco, tres generaciones de una familia conviven entre perros, con diez pentáculos dispuestos como el Árbol de la Vida. Es la abundancia consolidada que se transmite y echa raíces.",
    esoterico: {
      derecho: "Estabilidad próspera y legado: patrimonio, tradición, seguridad que se hereda y crece.",
      invertido: "El legado que pesa: herencias que no rinden, disputas familiares o apego al pasado que estorba.",
    },
    correspondencias: { planeta: "Mercurio", signo: "Virgo", decanato: "Mercurio en Virgo — lo material que perdura" },
    particularidad: "Los diez pentáculos dibujan el Árbol de la Vida cabalístico: único en el palo. El 10 de la tierra es la abundancia hecha linaje.",
  },
  "oros-paje": {
    general: "El estudiante de la Tierra: aplicación, estudio y promesa de oficio.",
    simbolismo: "Un joven contempla absorto el pentáculo que sostiene con ambas manos, de pie en un campo fértil. No hay prisa: es la disposición seria a aprender y construir un futuro sólido.",
    esoterico: {
      derecho: "Construir con dedicación: un proyecto, un estudio o una oportunidad práctica que, trabajada ahora, dará fruto.",
      invertido: "Malgastar el tiempo: desperdiciar la oportunidad, falta de ritmo o métodos que hay que mejorar.",
    },
    correspondencias: { planeta: "—", signo: "Signos de tierra (Tauro, Virgo, Capricornio)", decanato: "Parte 'de tierra' de la Tierra — lo material que arraiga" },
    particularidad: "Sostiene el pentáculo como un tesoro de estudio: la tierra más joven es aplicación y promesa. El aprendiz que mira su meta con seriedad.",
  },
  "oros-caballero": {
    general: "El trabajador constante: método, responsabilidad y perseverancia hasta el final.",
    simbolismo: "El Caballero monta un caballo negro y robusto, quieto, sosteniendo su pentáculo mientras contempla un campo arado. A diferencia de los otros jinetes, no se mueve: encarna la constancia paciente.",
    esoterico: {
      derecho: "Perseverar hasta terminar: fiabilidad, método, responsabilidad, llevar a cabo lo empezado sin rendirse.",
      invertido: "Estancarse por rutina: exceso de cautela, resistencia al cambio, trabajo que se vuelve mera costumbre.",
    },
    correspondencias: { planeta: "Saturno", signo: "Capricornio", decanato: "Parte 'de aire' de la Tierra — lo material que persevera" },
    particularidad: "Es el único jinete de la corte que permanece inmóvil: la tierra no corre, avanza con paso firme. Encarna la fiabilidad por encima de la prisa.",
  },
  "oros-reina": {
    general: "La madre de la Tierra: nutrir, cuidar y hacer prosperar lo cotidiano.",
    simbolismo: "La Reina contempla con ternura el pentáculo en su regazo, sentada en un trono rodeado de vegetación exuberante; un conejo —símbolo de fecundidad— salta a sus pies. Es la abundancia que acoge y cuida.",
    esoterico: {
      derecho: "Crecer cuidando de otros: generosidad práctica, hogar, salud, cuidar los recursos y a las personas.",
      invertido: "Cuidar hasta el exceso: sobreprotección que vuelve dependiente, o descuidar el propio sustento por los demás.",
    },
    correspondencias: { planeta: "Mercurio", signo: "Virgo", decanato: "Parte 'de agua' de la Tierra — lo material que nutre" },
    particularidad: "El jardín frondoso y el conejo la hacen única: fertilidad y cuidado. Es la tierra más maternal, que hace florecer todo a su alrededor.",
  },
  "oros-rey": {
    general: "El patriarca próspero: dominio de lo material puesto al servicio de otros.",
    simbolismo: "El Rey se sienta sereno en un trono cubierto de uvas y vides, con el pentáculo en la mano y un castillo detrás. Rodeado de su riqueza, su pregunta es cómo usarla para el bien común.",
    esoterico: {
      derecho: "Poner tus recursos a rendir: aprovechar tus capacidades, generar prosperidad y ayudar a otros con lo que tienes.",
      invertido: "No aprovechar tus recursos: rigidez con el dinero o el talento, no estar a la altura de lo esperado.",
    },
    correspondencias: { planeta: "Venus", signo: "Tauro", decanato: "Parte 'de fuego' de la Tierra — lo material que dirige" },
    particularidad: "Su trono está cubierto de vides y frutos: la riqueza hecha paisaje. Es la tierra en su plenitud, el dominio material llevado al trono.",
  },
};

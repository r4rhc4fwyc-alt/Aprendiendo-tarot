/* ============================================================
   ARCANOS MAYORES (22) — Fase 2
   Los mayores NO se aprenden por fórmula (número × elemento) como
   los menores, sino por arquetipo + viaje del Loco + numerología.
   Cada ficha trae: nombre, correspondencia (Golden Dawn), palabras
   clave, lectura corta (derecho / invertido) para la pista de Adivina,
   y además ESENCIA del arquetipo (general, más desarrollada que en los
   menores), LA ESCENA (simbolismo de la carta RWS) y la PARTICULARIDAD.
   Redactado para esta app desde fuentes libres (Waite "Pictorial Key to
   the Tarot", dominio público). Imágenes RWS en img/cards/Major00–21.png.

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
    invertido: "Imprudencia o miedo a saltar: caos, ingenuidad peligrosa o quedarse paralizado al borde.",
    general: "El arquetipo del alma antes de empezar: pura potencialidad, confianza e inocencia. Es el impulso vital que se arroja a lo desconocido sin garantías, movido por la fe y no por el cálculo. Psicológicamente es el yo todavía sin formar, abierto a todo porque aún no ha sido marcado por la experiencia; por eso puede ser tanto el sabio que confía en la vida como el ingenuo que ignora el abismo. Es el cero que lo contiene todo sin ser aún nada: el viajero que recorrerá los 21 arcanos siguientes y volverá transformado. Su don es la libertad; su sombra, la temeridad.",
    simbolismo: "Un joven avanza alegre al borde de un precipicio, la mirada en el cielo y una rosa blanca —la inocencia— en la mano. Un perrito salta a su lado, el instinto que a la vez acompaña y advierte, mientras lleva al hombro un hatillo con todo lo que necesita. El sol brilla a su espalda: parte sin miedo, confiando en que el camino aparecerá al andar.",
    particularidad: "Es el único arcano sin número fijo (0): no pertenece a ninguna de las tres líneas porque es quien las recorre. Puede situarse al principio o al final del viaje según la escuela." },

  { nombre: "El Mago", corr: "Mercurio", claves: ["voluntad", "poder", "manifestar", "recursos"],
    derecho: "Tienes todas las herramientas: voluntad enfocada que convierte la idea en acción, poder creador.",
    invertido: "Talento mal usado o disperso: manipulación, engaño o potencial que no se concreta.",
    general: "El arquetipo de la voluntad consciente y el poder de manifestar. El Mago es la chispa que convierte la idea en realidad: reúne lo de arriba y lo de abajo, espíritu y materia, para dirigir la energía hacia un fin. Encarna el instante en que el potencial informe del Loco encuentra foco y herramientas. Psicológicamente es el yo que descubre que puede actuar sobre el mundo, con la confianza —y la tentación— que eso conlleva. Su don es la maestría enfocada; su sombra, la manipulación de quien usa el talento solo para su ventaja.",
    simbolismo: "De pie ante una mesa con los cuatro palos —copa, espada, basto y oro, los cuatro elementos—, el Mago levanta una vara hacia el cielo y señala la tierra con la otra mano: «como es arriba, es abajo». Sobre su cabeza flota el lemniscato del infinito y una serpiente se muerde la cola en su cintura. Rosas y lirios florecen a sus pies: el deseo y la pureza al servicio de la obra.",
    particularidad: "Primer arcano numerado: abre la línea consciente. Es el 1, la unidad y el comienzo activo, regido por Mercurio, el mensajero que une los mundos." },

  { nombre: "La Sacerdotisa", corr: "La Luna", claves: ["intuición", "misterio", "saber oculto", "quietud"],
    derecho: "El saber que no se razona: intuición, misterio y una verdad que todavía está velada.",
    invertido: "Desconexión de la voz interior: secretos que pesan, intuición ignorada o superficialidad.",
    general: "El arquetipo del saber interior y el misterio. Si el Mago actúa hacia fuera, la Sacerdotisa recoge hacia dentro: es la intuición, la memoria profunda y lo que se conoce sin razonar. Custodia el umbral entre lo consciente y lo inconsciente, y guarda una verdad que aún no puede decirse con palabras. Psicológicamente representa el contacto con la psique profunda, los sueños y lo femenino receptivo. Su don es la sabiduría silenciosa; su sombra, la desconexión de esa voz interior o el secreto que aísla.",
    simbolismo: "Sentada entre dos columnas, una blanca y una negra, vela un velo bordado de granadas que oculta el santuario. Lleva la luna creciente a sus pies y un rollo —la ley secreta— medio escondido en el regazo. Está quieta, y en su quietud lo sabe todo.",
    particularidad: "Es el 2, la dualidad y la polaridad; frente a la acción del Mago, encarna la receptividad. Regida por la Luna, preside los ciclos y lo oculto." },

  { nombre: "La Emperatriz", corr: "Venus", claves: ["abundancia", "creación", "naturaleza", "cuidado"],
    derecho: "Fertilidad y abundancia que nutren: creación, sensualidad y cuidado maternal.",
    invertido: "Bloqueo creativo o exceso: dependencia, descuido de uno mismo o abundancia que se estanca.",
    general: "El arquetipo de la madre creadora y la abundancia. La Emperatriz es la vida que se desborda: fertilidad, sensualidad, naturaleza y cuidado. Donde la Sacerdotisa concibe en secreto, ella da a luz y nutre en el mundo visible. Psicológicamente es el principio materno —el que acoge, alimenta y hace crecer— y el goce pleno de los sentidos. Su don es la creación generosa; su sombra, el exceso, la posesividad o el olvido de sí por cuidar a los demás.",
    simbolismo: "Una mujer coronada de estrellas reposa entre cojines en un campo de trigo maduro, junto a un río y un bosque frondoso. Sostiene un cetro y a su lado un escudo con el símbolo de Venus: el amor hecho reino. Todo a su alrededor está vivo y en sazón.",
    particularidad: "Es el 3, el fruto que nace del encuentro de dos; forma con el Emperador la pareja arquetípica. Regida por Venus, el amor y la belleza." },

  { nombre: "El Emperador", corr: "Aries", claves: ["autoridad", "estructura", "orden", "protección"],
    derecho: "Autoridad que ordena y protege: estructura, disciplina y liderazgo estable.",
    invertido: "Autoridad rígida o ausente: control tiránico, terquedad o falta de límites.",
    general: "El arquetipo del padre, la autoridad y la estructura. El Emperador es el orden que da forma al mundo: ley, disciplina, límites y protección. Si la Emperatriz crea nutriendo, él sostiene gobernando. Psicológicamente es el principio paterno —el que marca reglas, defiende el territorio y ofrece seguridad— y la capacidad de construir estructuras duraderas. Su don es el liderazgo estable; su sombra, la rigidez, el autoritarismo o el control que ahoga.",
    simbolismo: "Sentado en un trono de piedra tallado con cabezas de carnero —Aries—, un hombre de barba blanca sostiene el cetro y el orbe del poder. Viste armadura bajo el manto: la autoridad siempre lista para defender. Detrás, montañas áridas: la voluntad que domina incluso lo estéril.",
    particularidad: "Es el 4, la estabilidad y los cimientos. Regido por Aries, el fuego iniciático de quien funda y manda." },

  { nombre: "El Sumo Sacerdote", corr: "Tauro", claves: ["tradición", "enseñanza", "instituciones", "fe"],
    derecho: "La enseñanza y la tradición: guía espiritual, pertenencia y valores compartidos.",
    invertido: "Dogma que ahoga o rebeldía: convención vacía, hipocresía o romper con lo establecido.",
    general: "El arquetipo del maestro, la tradición y el puente con lo sagrado. El Hierofante transmite el conocimiento heredado: instituciones, ritos, valores compartidos y pertenencia. Donde la Sacerdotisa guarda el misterio en silencio, él lo enseña y lo organiza para la comunidad. Psicológicamente es la voz de la norma interiorizada —lo que «se debe»— y la necesidad humana de sentido y guía. Su don es la sabiduría transmitida; su sombra, el dogma que ahoga o la hipocresía de la forma sin fondo.",
    simbolismo: "Entre dos columnas, un pontífice con triple tiara bendice a dos acólitos arrodillados. Alza la mano en signo de enseñanza y sostiene una cruz; a sus pies, dos llaves cruzadas abren lo visible y lo oculto. Todo es jerarquía, rito y transmisión.",
    particularidad: "Es el 5, que tras la estabilidad del 4 introduce la búsqueda de sentido. Regido por Tauro, lo arraigado y lo duradero." },

  { nombre: "Los Enamorados", corr: "Géminis", claves: ["amor", "elección", "unión", "valores"],
    derecho: "Una unión y una elección del corazón: amor, armonía y decidir desde los propios valores.",
    invertido: "Desarmonía o mala elección: tentación, conflicto de valores o vínculos que se rompen.",
    general: "El arquetipo del amor, la unión y la elección. Los Enamorados hablan del encuentro con el otro y, sobre todo, de la decisión que define quiénes somos: elegir desde los valores y no solo desde el deseo. Marca el paso de obedecer a la tradición (el Hierofante) a la responsabilidad de escoger por uno mismo. Psicológicamente es la integración de los opuestos y el compromiso consciente. Su don es la armonía y el vínculo auténtico; su sombra, la tentación, la indecisión o elegir en contra de uno mismo.",
    simbolismo: "Un hombre y una mujer se alzan desnudos como Adán y Eva; sobre ellos, un ángel con alas de fuego los bendice desde el sol. Tras ella, el árbol de la serpiente; tras él, el árbol de las llamas: el deseo y la voluntad. La unión es, también, una encrucijada.",
    particularidad: "Es el 6, la armonía y la reciprocidad. Regido por Géminis, los dos que se buscan y la mente que elige." },

  { nombre: "El Carro", corr: "Cáncer", claves: ["voluntad", "triunfo", "dirección", "autodominio"],
    derecho: "Avanzar con voluntad férrea: triunfo por determinación y dominio de fuerzas opuestas.",
    invertido: "Rumbo perdido o fuerzas sin control: derrota, agresividad o avanzar sin dirección.",
    general: "El arquetipo del triunfo por la voluntad. El Carro es el yo que, tras elegir, se lanza a conquistar: avanza con determinación, disciplina y foco, dominando fuerzas opuestas sin dejarse arrastrar por ellas. Cierra la primera línea como la victoria del ego ya formado sobre el mundo exterior. Psicológicamente es la capacidad de dirigir los propios impulsos hacia una meta. Su don es el autodominio que vence; su sombra, la fuerza sin rumbo, la agresividad o el control impuesto a cualquier precio.",
    simbolismo: "Un guerrero coronado avanza de pie en un carro tirado por dos esfinges, una blanca y otra negra, que apuntan en direcciones opuestas: las conduce con la sola fuerza de su voluntad, sin riendas. Un dosel de estrellas lo cubre y deja atrás la ciudad amurallada: parte, ya maduro, a la conquista.",
    particularidad: "Es el 7, el reto que exige perseverar. Regido por Cáncer, la coraza que protege un interior sensible. Cierra la línea consciente." },

  { nombre: "La Fuerza", corr: "Leo", claves: ["coraje sereno", "dominio interior", "paciencia", "compasión"],
    derecho: "La fuerza que doma con dulzura: coraje sereno, paciencia y dominio de los instintos.",
    invertido: "Fuerza interior vacilante: duda, impulsos desbocados o dureza con uno mismo.",
    general: "El arquetipo del coraje sereno y el dominio interior. La Fuerza no vence al instinto por combate, sino por amor: doma a la bestia acariciándola. Abre la segunda línea, la del trabajo interior, enseñando que el verdadero poder es suave, paciente y compasivo. Psicológicamente es la integración de la sombra animal —el deseo, la ira, el miedo— sin reprimirla ni dejarse gobernar por ella. Su don es la entereza apacible; su sombra, la duda, la dureza con uno mismo o los impulsos desbocados.",
    simbolismo: "Una mujer vestida de blanco, coronada con el lemniscato del infinito, cierra con dulzura las fauces de un león que se deja hacer. No hay violencia: hay confianza. Las flores de su cintura muestran que la fuerza y la belleza no se oponen.",
    particularidad: "Es el 8 del poder interior. En Rider-Waite ocupa el lugar VIII (intercambiado con la Justicia respecto a Marsella). Regida por Leo, el corazón que gobierna con nobleza." },

  { nombre: "El Ermitaño", corr: "Virgo", claves: ["introspección", "búsqueda", "soledad", "guía"],
    derecho: "Retirarse para buscar la luz interior: introspección, sabiduría y guía silenciosa.",
    invertido: "Aislamiento o rechazo del consejo: soledad que pesa, perderse o huir hacia dentro.",
    general: "El arquetipo del buscador solitario y la sabiduría interior. El Ermitaño se retira del mundo para encontrar su propia luz: introspección, silencio y verdad hallada lejos del ruido. Es el peregrino que, tras probar la fuerza, comprende que algunas respuestas solo llegan a solas. Psicológicamente representa el encuentro con el sí-mismo y la figura del guía o mentor interior. Su don es la lucidez que nace del recogimiento; su sombra, el aislamiento que se vuelve huida o el rechazo de toda ayuda.",
    simbolismo: "Un anciano encapuchado se yergue en la cima de una montaña nevada, de noche. Alza un farol en cuyo interior brilla una estrella de seis puntas —la luz de la verdad— y se apoya en un bastón. Ha subido solo, y alumbra el camino para quien venga detrás.",
    particularidad: "Es el 9, la culminación introspectiva antes del cierre de ciclo. Regido por Virgo, el análisis paciente y la búsqueda de lo esencial." },

  { nombre: "La Rueda de la Fortuna", corr: "Júpiter", claves: ["ciclos", "destino", "cambio", "suerte"],
    derecho: "La rueda gira a tu favor: ciclos, giros del destino y un cambio de suerte.",
    invertido: "Ciclo adverso o resistencia al cambio: mala racha, perder el control del destino.",
    general: "El arquetipo del cambio, los ciclos y el destino. La Rueda recuerda que todo gira: lo que sube baja y lo que cae vuelve a subir, más allá del control del yo. Marca el punto medio del viaje, donde el buscador comprende que participa de un orden mayor que él. Psicológicamente es la aceptación de lo que no depende de nosotros y la confianza en el movimiento de la vida. Su don es fluir con el giro y aprovechar la marea; su sombra, resistirse al cambio o sentirse mera víctima de la suerte.",
    simbolismo: "Una gran rueda gira en el cielo rodeada de criaturas: una esfinge arriba, una figura que desciende por un costado y una serpiente que cae por el otro. En las cuatro esquinas, seres alados leen libros —los elementos— mientras letras y símbolos marcan el centro. El universo rueda, y nosotros con él.",
    particularidad: "Es el 10, el cierre de un ciclo que ya contiene el siguiente (1+0=1). Regida por Júpiter, la expansión y la fortuna." },

  { nombre: "La Justicia", corr: "Libra", claves: ["equilibrio", "verdad", "causa-efecto", "decisión"],
    derecho: "Equilibrio y verdad: cada causa trae su efecto; decisión justa y responsabilidad.",
    invertido: "Injusticia o evasión: deshonestidad, desequilibrio o no asumir las consecuencias.",
    general: "El arquetipo del equilibrio, la verdad y la ley moral. La Justicia pesa cada acto y devuelve su consecuencia exacta: causa y efecto, responsabilidad, decisión lúcida. Tras el giro imprevisible de la Rueda, restablece que el universo tiene una balanza. Psicológicamente es la honestidad con uno mismo y la capacidad de juzgar sin autoengaño, asumiendo las propias cuentas. Su don es la claridad justa; su sombra, la deshonestidad, el desequilibrio o la evasión de la responsabilidad.",
    simbolismo: "Una figura coronada se sienta entre dos columnas; en una mano sostiene la espada erguida de la razón y en la otra la balanza del equilibrio. Mira de frente, sin parpadear: ve las cosas como son. El manto rojo y el velo tras ella unen pasión y verdad.",
    particularidad: "Es el 11 (que reduce a 2: la balanza de polos). En Rider-Waite ocupa el lugar XI (intercambiada con la Fuerza). Regida por Libra, el fiel de la balanza." },

  { nombre: "El Colgado", corr: "Agua · Neptuno", claves: ["pausa", "entrega", "otra mirada", "sacrificio"],
    derecho: "Soltar para ver distinto: pausa voluntaria, entrega y una nueva perspectiva.",
    invertido: "Estancamiento o sacrificio inútil: resistirse a soltar o una pausa que se eterniza.",
    general: "El arquetipo de la entrega y la mirada invertida. El Colgado se detiene por voluntad propia: suspende la acción para ver el mundo al revés y comprender lo que de pie no se entiende. Es la pausa fértil, el sacrificio que abre sabiduría, la rendición que no es derrota. Psicológicamente representa soltar el control y cambiar de perspectiva, aun a costa de la incomodidad. Su don es la iluminación que trae el soltar; su sombra, el estancamiento, el papel de mártir o la pausa que se eterniza sin fruto.",
    simbolismo: "Un hombre cuelga sereno de un árbol en forma de T, atado por un pie, con la otra pierna cruzada formando un cuatro. No sufre: su rostro irradia calma y un halo dorado rodea su cabeza. Ve el mundo invertido, y por eso lo ve nuevo.",
    particularidad: "Es el 12, el centro simbólico del viaje: el punto de inflexión entre lo que fue y lo que será. Asociado al Agua y a Neptuno, la disolución del ego." },

  { nombre: "La Muerte", corr: "Escorpio", claves: ["fin", "transformación", "renacer", "soltar"],
    derecho: "Un final que transforma: cerrar un ciclo para que nazca algo nuevo.",
    invertido: "Resistirse al cambio: aferrarse a lo que ya murió, una transición que se bloquea.",
    general: "El arquetipo de la transformación. La Muerte rara vez es literal: es el final necesario que limpia el terreno para que nazca lo nuevo. Siega sin excepción —nadie se le resiste— y en eso reside a la vez su justicia y su liberación. Psicológicamente es el duelo, la metamorfosis profunda y el desapego de identidades que ya no sirven. Su don es el renacer que sigue a todo cierre; su sombra, aferrarse a lo que ya murió y bloquear la transición.",
    simbolismo: "Un esqueleto con armadura cabalga un caballo blanco sobre un campo donde caen reyes, obispos y niños por igual; porta un estandarte con la rosa blanca de la vida. Al fondo, entre dos torres, el sol se alza de nuevo. El fin y el amanecer comparten horizonte.",
    particularidad: "Es el 13, temido pero regenerador. Regida por Escorpio, el signo de la muerte y el renacimiento. En muchos mazos es la carta «sin nombre»." },

  { nombre: "La Templanza", corr: "Sagitario", claves: ["equilibrio", "mezcla", "paciencia", "moderación"],
    derecho: "El arte de combinar con mesura: equilibrio, paciencia y sanación serena.",
    invertido: "Desequilibrio o exceso: impaciencia, mezclas que no cuajan o falta de moderación.",
    general: "El arquetipo del equilibrio alquímico y la sanación. La Templanza mezcla con paciencia lo que parecía incompatible —agua y fuego, consciente e inconsciente— hasta lograr la justa medida. Tras la muerte del arcano anterior, es la convalecencia y la síntesis que repara. Psicológicamente representa la moderación, la integración de los opuestos y el temple que no se precipita. Su don es la armonía templada y el fluir sereno; su sombra, el desequilibrio, la impaciencia o las mezclas que no cuajan.",
    simbolismo: "Un ángel con un pie en la tierra y otro en el agua trasvasa un líquido entre dos copas en un flujo imposible que no se derrama. En el pecho lleva un triángulo dentro de un cuadrado —espíritu y materia— y al fondo un sendero conduce a un sol entre montañas. Todo fluye en su punto justo.",
    particularidad: "Es el 14 (reduce a 5: la búsqueda de sentido, ya templada). Regida por Sagitario, el arquero que apunta alto con equilibrio." },

  { nombre: "El Diablo", corr: "Capricornio", claves: ["apego", "sombra", "deseo", "ataduras"],
    derecho: "Las cadenas que uno mismo acepta: apego, deseo material y la sombra que esclaviza.",
    invertido: "Romper las cadenas: liberarse de una atadura y afrontar la sombra, o recaer en ella.",
    general: "El arquetipo de la sombra, el apego y la esclavitud voluntaria. El Diablo muestra las cadenas que uno mismo acepta: deseo, materialismo, miedo o adicción, todo lo que ata cuando se confunde el goce con la posesión. No es un mal externo, sino la parte reprimida que gobierna desde la oscuridad. Psicológicamente es el encuentro con la sombra: lo que negamos termina por dominarnos. Su don es reconocer y reintegrar esa fuerza vital; su sombra, la atadura que esclaviza. Ver la cadena es el primer paso para soltarla.",
    simbolismo: "Una figura cornuda y alada se alza sobre un pedestal; a sus pies, un hombre y una mujer encadenados por el cuello. Pero las cadenas están flojas: podrían quitárselas si quisieran. Les han crecido cuernos y cola —se han vuelto un poco bestia— y una antorcha invertida apunta hacia abajo.",
    particularidad: "Es el 15 y abre la tercera línea, la de lo arquetípico. Es el reverso oscuro de los Enamorados (VI): la misma pareja, ahora atada. Regido por Capricornio." },

  { nombre: "La Torre", corr: "Marte", claves: ["ruptura", "revelación", "derrumbe", "liberación"],
    derecho: "El derrumbe súbito de lo falso: una revelación que destruye para liberar.",
    invertido: "Derrumbe que se posterga o se teme: evitar el cambio inevitable, crisis contenida.",
    general: "El arquetipo de la ruptura liberadora. La Torre es la caída súbita de todo lo que se construyó sobre cimientos falsos: creencias, estructuras o seguridades que ya no sostienen la verdad. Duele porque llega sin avisar y sin permiso, pero derriba la cárcel, no el hogar. Psicológicamente es la crisis que hace estallar el ego rígido o la ilusión, dejando al descubierto lo real. Su don es la liberación que solo el derrumbe permite; su sombra, aferrarse a lo que ya se cae o temer el cambio inevitable.",
    simbolismo: "Un rayo golpea una torre en lo alto de un risco y le arranca la corona; entre llamas, dos figuras caen de cabeza al vacío, enmarcadas por la noche. El fuego devora la construcción humana que pretendía tocar el cielo. No es un castigo: es la conmoción que libera lo que estaba atrapado dentro.",
    particularidad: "Numerológicamente 16→7: la crisis del 7 en su forma más abrupta. Regida por Marte, la más disruptiva del mazo; prepara la renovación de la Estrella." },

  { nombre: "La Estrella", corr: "Acuario", claves: ["esperanza", "fe", "inspiración", "calma"],
    derecho: "Luz tras la tormenta: esperanza, fe renovada e inspiración que guía.",
    invertido: "Esperanza apagada: desánimo, desconexión de la fe o inspiración perdida.",
    general: "El arquetipo de la esperanza y la fe renovada. Tras la conmoción de la Torre, la Estrella es la calma que sana: serenidad, inspiración y la certeza silenciosa de que hay un sentido. Es el alma desnuda, sin defensas, reconciliada con el cielo. Psicológicamente representa la curación tras la crisis, la apertura a lo trascendente y la confianza recuperada en la vida. Su don es la guía luminosa y la paz; su sombra, el desánimo, la desconexión de la fe o la inspiración que se apaga.",
    simbolismo: "Una mujer desnuda se arrodilla junto a un estanque y vierte agua de dos cántaros: uno sobre la tierra, otro sobre el agua, renovando el ciclo. Sobre ella brillan una gran estrella y siete menores; un pájaro se posa en un árbol al fondo. Está vulnerable y en paz: no tiene nada que esconder.",
    particularidad: "Es el 17 (reduce a 8: el poder, ahora espiritualizado). Regida por Acuario, la visión de futuro y lo colectivo. Es el bálsamo tras la Torre." },

  { nombre: "La Luna", corr: "Piscis", claves: ["ilusión", "miedo", "inconsciente", "sueños"],
    derecho: "El reino de lo que no se ve claro: intuición, sueños, miedos e ilusión.",
    invertido: "La niebla se disipa o engaña más: confusión que se aclara, o autoengaño y ansiedad.",
    general: "El arquetipo del inconsciente, la ilusión y el miedo. La Luna alumbra un paisaje incierto donde no todo es lo que parece: sueños, intuiciones, fantasmas y verdades a medias. Es el tramo del viaje en que se atraviesan las propias sombras y confusiones antes del amanecer. Psicológicamente representa lo reprimido que emerge en imágenes, el miedo ancestral y la necesidad de distinguir la intuición del autoengaño. Su don es el acceso a lo profundo y lo onírico; su sombra, la confusión, la ansiedad o el engaño en que uno se pierde.",
    simbolismo: "Bajo una luna que gotea rocío, un perro y un lobo aúllan —lo domesticado y lo salvaje— mientras un cangrejo emerge del agua hacia un sendero que se pierde entre dos torres. Todo es penumbra y reflejo. Hay que cruzar sin ver del todo, fiándose del instinto.",
    particularidad: "Es el 18 (reduce a 9: la culminación, aquí en lo inconsciente). Regida por Piscis, las aguas del alma. Es la prueba nocturna antes del Sol." },

  { nombre: "El Sol", corr: "El Sol", claves: ["alegría", "éxito", "vitalidad", "claridad"],
    derecho: "Luz plena: alegría, éxito, vitalidad y una verdad que se revela.",
    invertido: "Luz velada: optimismo forzado, éxito que se demora o alegría apagada.",
    general: "El arquetipo de la alegría, la claridad y la vida plena. Tras la noche de la Luna, el Sol lo ilumina todo: verdad, vitalidad, éxito y la dicha sencilla de existir sin máscaras. Es el regreso a una inocencia ya consciente, la del niño que ha atravesado la sombra y vuelve a confiar. Psicológicamente representa la integración lograda, la autenticidad y la energía que irradia sin esfuerzo. Su don es la felicidad lúcida y el logro que se celebra; su sombra, el optimismo forzado o la luz que, velada, tarda en llegar.",
    simbolismo: "Un niño desnudo, coronado de flores, cabalga alegre un caballo blanco bajo un sol enorme de rayos rectos y ondulados. Tras un muro florecen girasoles vueltos hacia la luz. No hay nada que ocultar: todo está claro y vivo.",
    particularidad: "Es el 19 (reduce a 1: un nuevo comienzo, ya pleno). Regido por el Sol, la carta más luminosa del mazo. Culmina la tríada Estrella–Luna–Sol." },

  { nombre: "El Juicio", corr: "Fuego · Plutón", claves: ["despertar", "llamada", "renacer", "balance"],
    derecho: "Una llamada que despierta: renacer, perdonar y responder a un propósito mayor.",
    invertido: "Ignorar la llamada: autojuicio severo, dudas o no atreverse a renacer.",
    general: "El arquetipo del despertar y el renacimiento. El Juicio es la llamada que convoca a una vida nueva: el momento de responder a un propósito mayor, perdonar, soltar el pasado y renacer. No es condena, sino resurrección; el balance de todo el viaje que permite levantarse transformado. Psicológicamente representa la vocación profunda, la reconciliación con lo vivido y la integración final de la psique. Su don es el renacer y la claridad de propósito; su sombra, el autojuicio severo, la duda o no atreverse a responder a la llamada.",
    simbolismo: "Un ángel toca una trompeta desde el cielo y, abajo, hombres, mujeres y niños se alzan de sus tumbas con los brazos abiertos. Una bandera con cruz ondea sobre ellos; el agua y las montañas enmarcan la escena. Es el llamado que resucita lo que estaba dormido.",
    particularidad: "Es el 20 (reduce a 2: una nueva dualidad, lo humano y lo divino). Asociado al Fuego y a Plutón, la muerte-renacimiento total. Antesala del Mundo." },

  { nombre: "El Mundo", corr: "Saturno", claves: ["plenitud", "cierre", "integración", "logro"],
    derecho: "El ciclo se completa: plenitud, integración y un logro que celebra el camino.",
    invertido: "Cierre incompleto: un ciclo que no termina, metas a medias o falta de integración.",
    general: "El arquetipo de la plenitud y la integración. El Mundo cierra el viaje del Loco: la meta alcanzada, la totalidad lograda, la danza de quien se ha unido a la vida entera. Reúne los cuatro elementos y los opuestos en un movimiento armónico; es el «sí» final tras recorrer y comprender el camino. Psicológicamente representa la individuación completada: el sí-mismo realizado, en paz consigo y con el cosmos. Su don es la culminación celebrada y la sensación de pertenecer al todo; su sombra, el ciclo que no termina de cerrarse o la plenitud a medias. Y, al acabar, el Loco vuelve a partir.",
    simbolismo: "Una figura danza desnuda dentro de una corona ovalada de laurel, con una vara en cada mano. En las cuatro esquinas, los seres alados —toro, león, águila y hombre— custodian los puntos cardinales y los elementos. Todo está completo y en movimiento.",
    particularidad: "Es el 21, el último arcano (reduce a 3: la creación realizada). Regido por Saturno, el tiempo y la estructura. Su final enlaza con el 0: el viaje recomienza." },
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

# Estado del proyecto — Arcanos Menores

Documento de **traspaso** para retomar el trabajo en una sesión nueva.
Última actualización: 2026-10-15. Rama: `claude/kind-cannon-isjfbw`.

## Qué es

App web estática para aprender los Arcanos Menores del tarot por la fórmula
**Número/Rango × Elemento**, con imágenes Rider-Waite (dominio público) y fichas
narradas. En español, mobile-first, publicable en GitHub Pages. Ver `CLAUDE.md`
para arquitectura y convenciones.

## Hecho hasta ahora (hitos)

1. **Base**: 4 modos (Construir, Flashcards, Referencia, Ajustes). Fórmula
   número×elemento y puente con los Arcanos Mayores.
2. **56 imágenes Rider-Waite** en `img/cards/` (del paquete MIT `@cometpisces/tarot-kit-images`).
3. **Construir**: selector de carta, **mazo táctil** (tocar para barajar y sacar),
   animación de **barajado (riffle)** + **volteo 3D**, ejercicio de grado/elemento.
4. **Cartas invertidas**: significado invertido; botón **Invertir**; al azar sale
   invertida ~50 %. **Las opciones de práctica respetan la orientación** (correcta
   = significado invertido cuando corresponde).
5. **Fichas "Conoce esta carta"** para las **56 cartas** (`js/cartas-detalle.js`):
   general, escena/simbolismo, lectura derecho/invertido, correspondencias
   (planeta, signo, decanato, sub-elemento de corte), particularidad, y 2 enlaces
   (Labyrinthos por palo, Biddy por carta). Fuentes libres: Waite "Pictorial Key"
   (dominio público) + datasets MIT; texto redactado en español.
6. **Flashcards** al nivel de Construir: mismo mazo y animación, "Ver significado",
   narración breve, ficha desplegable, repetición espaciada (SM-2 simplificado).
7. **Rediseño visual**: paleta índigo + oro, tipografías **Cinzel** + **EB Garamond**,
   **cielo estrellado animado** (canvas propio, con arreglo para iPad/iOS), paneles
   tipo vidrio, brillo dorado en cartas.
8. **Dorso del mazo**: ilustración propia del usuario (`img/dorso-mazo.jpg`, gato
   cósmico y luna).
9. **Pantalla completa (lightbox)** al tocar la carta (Construir y Flashcards).
10. **UX del mazo**: el botón "Barajar" no saca carta (resalta el mazo); al sacar una
    carta, **la vista se desplaza al mazo** para ver la animación aunque estés leyendo
    la ficha más abajo.
11. **PROMPT-PARA-CHATGPT.md**: especificación para regenerar la app con otra IA.
12. **Modo quiz inverso (🔮 Adivina)**: 5ª pestaña. Se muestra el **significado**
    (energía del elemento + aporte del grado, **sin** nombrar carta/palo/elemento/número)
    y se adivina la carta entre 4 opciones con miniatura. Distractores "cercanos"
    (prioriza una del mismo palo y una del mismo número/rango) para ejercitar la
    fórmula. Incluye cartas invertidas (~40 %), respeta el alcance de Ajustes,
    revela la síntesis completa al responder y amplía la carta en el lightbox.

## Decisiones tomadas (el "porqué")

- **Estático puro, sin dependencias en runtime**: para que sea un simple enlace,
  offline y sin que se rompa nada. Las estrellas son canvas propio (no librería).
- **Éter = capa conceptual**, no un quinto palo (en el tarot clásico hay 4 palos).
- **Correspondencia palo↔elemento editable** porque el usuario lee con su propio
  sistema; por defecto Golden Dawn.
- **Contenido con fuentes libres** (Waite dominio público + datasets MIT), redactado
  en español, guardado en el repo (no APIs).
- En **Flashcards**, la ficha "Conoce esta carta" aparece **al revelar el significado**
  (no antes) para no "hacer trampa" en la autoevaluación.
- El botón "Barajar" se dejó como **señuelo** que resalta el mazo (el usuario quería
  que el gesto natural fuera tocar el mazo).

## Backlog / ideas pendientes (de dónde seguir)

- **Cargar el sistema propio de lectura del usuario**: sus palabras clave por
  número/palo (sustituir o complementar los textos genéricos).
- **Flashcards invertidas**: opción de que salgan invertidas y mostrar el significado
  invertido (ahora siempre salen al derecho).
- **Zoom con dos dedos** (pinch) en el visor de pantalla completa.
- **Estadísticas de progreso**: qué palos/números se dominan.
- **Quiz inverso — mejoras**: llevar cuenta de aciertos/racha, o integrar el
  resultado con el SRS de flashcards.
- **Afinar animaciones**: velocidad del barajado, entrada con brillo, etc.
- **Anexo de datos**: `.md` con las 56 fichas completas para pegar en otra IA (pendiente,
  el usuario lo mencionó como opcional).
- **Posible limpieza**: quedan reglas CSS sin uso de la estructura antigua de
  flashcards (`.flashcard`, `.fc-cara`) — inofensivas, se pueden depurar.

## Cómo retomar en una sesión nueva

1. Abre una nueva sesión de Claude Code sobre el repo `r4rhc4fwyc-alt/Aprendiendo-tarot`,
   rama `claude/kind-cannon-isjfbw`.
2. Primer mensaje sugerido:
   *"Lee CLAUDE.md y ESTADO-DEL-PROYECTO.md y seguimos desde el backlog."*
3. Para ver la app en vivo: GitHub Pages (Settings → Pages → rama `claude/kind-cannon-isjfbw`,
   carpeta `/ (root)`), o abrir `index.html` localmente.

# Prompt para construir la app "Arcanos Menores" (aprender tarot)

> Copia **todo** este documento y pégalo en ChatGPT. Es la especificación completa
> de una app web que ya existe; quiero que la reconstruyas **con tu propio estilo**,
> respetando el concepto, el contenido y las funciones. Puedes elegir tú la
> estructura del código, los nombres y los detalles visuales.

---

## 1. Rol y objetivo

Eres un desarrollador front-end. Crea una **app web completa, de una sola página,
100 % estática** (sin backend, sin build, sin frameworks obligatorios) para
**aprender a leer los Arcanos Menores del tarot**. Debe poder subirse tal cual a
**GitHub Pages** y abrirse desde un simple enlace, también en móvil.

Entrégame los archivos listos para usar (como mínimo `index.html`, y el CSS/JS que
necesites). Usa HTML + CSS + JavaScript "vanilla"; si usas alguna librería, cárgala
desde un CDN (no asumas instalación local). Todo el texto de la interfaz va en
**español**.

El público ya conoce los **Arcanos Mayores** y quiere dominar los **Menores**. La
idea central es enseñar por **fórmula**, no de memoria:

> **Significado de una carta = (Número o Rango) × (Elemento del palo)**

---

## 2. Concepto pedagógico (muy importante)

Los 56 Arcanos Menores se componen de 4 palos; cada palo tiene 10 cartas numeradas
(As a 10) + 4 cartas de la corte (Paje, Caballero, Reina, Rey) = 14 por palo.

Cada palo corresponde a un **elemento**, y cada número/rango aporta un **significado
numerológico**. El aprendizaje consiste en **cruzar** ambos:

- Ejemplo: **5 de Espadas** = número 5 (conflicto/crisis) × Espadas (Aire = mente)
  → "conflicto mental, victoria vacía".
- En la corte: **Reina de Copas** = Reina (maestría interior) × Copas (Agua = emoción)
  → "empatía profunda, intuición".

Además, cada carta tiene **particularidades propias** (la escena concreta del mazo
Rider-Waite) que van más allá del cruce, y un **"puente" con el Arcano Mayor** del
mismo grado (p. ej. el 2 de cualquier palo rima con La Sacerdotisa, que es el II).

También se enseñan las **cartas invertidas** (reversed), que tienen un significado
distinto (bloqueo, exceso o sombra del significado al derecho).

---

## 3. Datos del tarot (contenido exacto a usar)

### 3.1 Palos y elementos (correspondencia Golden Dawn por defecto)

| Palo      | Elemento | Áreas de la vida |
|-----------|----------|------------------|
| Bastos    | Fuego 🔥 | energía, acción, pasión, voluntad, proyectos, creatividad |
| Copas     | Agua 💧  | emociones, relaciones, amor, intuición, vínculos |
| Espadas   | Aire 🌬️ | mente, pensamiento, comunicación, conflicto, verdad |
| Oros/Pentáculos | Tierra 🪙 | materia, cuerpo, dinero, trabajo, salud |

> Nota: la correspondencia palo↔elemento **no es universal**; algunas escuelas
> intercambian Bastos y Espadas. La app debe permitir al usuario cambiarla (ver Ajustes).

El **Éter / quinto elemento** se trata como capa conceptual (el "espíritu" que vive
en los Arcanos Mayores y en los Ases), **no** como un quinto palo.

### 3.2 Números 1–10 (numerología) con su puente al Mayor

| Nº | Derecho (clave) | Invertido (clave) | Mayor (puente) |
|----|-----------------|-------------------|----------------|
| As (1) | semilla, potencial puro, don del elemento, nuevo comienzo | potencial bloqueado, oportunidad perdida, falso comienzo | El Mago (I) |
| 2 | dualidad, equilibrio, elección, relación | desequilibrio, indecisión, ruptura | La Sacerdotisa (II) |
| 3 | crecimiento, creación, primer fruto, expansión | crecimiento estancado, colaboración rota | La Emperatriz (III) |
| 4 | estructura, estabilidad, cimientos, pausa | rigidez o inestabilidad, aferrarse | El Emperador (IV) |
| 5 | conflicto, crisis, cambio, desafío | fin del conflicto o resistencia a soltar | El Sumo Sacerdote (V) |
| 6 | armonía recuperada, reciprocidad, dar y recibir | desequilibrio en el dar y recibir, nostalgia | Los Enamorados (VI) |
| 7 | evaluación, reflexión, perseverancia, ilusión | dudas, dispersión, rendirse o insistir mal | El Carro (VII) |
| 8 | movimiento, poder, dominio, acción | poder mal usado, estancamiento, prisa/parálisis | La Justicia (VIII) |
| 9 | plenitud casi total, intensidad, logro/soledad | intensidad vuelta adentro, agotamiento | El Ermitaño (IX) |
| 10 | culminación, fin de ciclo, plenitud/exceso | ciclo que no cierra, exceso que colapsa | La Rueda de la Fortuna (X) |

### 3.3 La corte (cada rango es una "manera" de vivir el elemento)

| Rango | Derecho | Invertido | Energía |
|-------|---------|-----------|---------|
| Paje / Sota | aprendizaje, curiosidad, mensajes, elemento recién nacido | inmadurez, noticias retrasadas, bloqueo al aprender | aprender |
| Caballero | acción, búsqueda, elemento al extremo | acción descontrolada o detenida, exceso | actuar |
| Reina | maestría interior, nutrir el elemento desde dentro | desbordada o reprimida | encarnar |
| Rey | maestría exterior, autoridad, dirigir el elemento | autoridad mal ejercida, control rígido o ausente | dirigir |

### 3.4 Correspondencias astrológicas (decanatos Golden Dawn)

Para enriquecer cada carta numeral (2–10) con planeta + signo. Los Ases son la
"raíz" del elemento (los 3 signos de ese elemento). Para la corte usa el
sub-elemento (Paje = parte "de tierra", Caballero = "de aire", Reina = "de agua",
Rey = "de fuego", aplicado al elemento del palo).

- **Bastos (Fuego):** 2 Marte/Aries · 3 Sol/Aries · 4 Venus/Aries · 5 Saturno/Leo ·
  6 Júpiter/Leo · 7 Marte/Leo · 8 Mercurio/Sagitario · 9 Luna/Sagitario · 10 Saturno/Sagitario.
- **Copas (Agua):** 2 Venus/Cáncer · 3 Mercurio/Cáncer · 4 Luna/Cáncer · 5 Marte/Escorpio ·
  6 Sol/Escorpio · 7 Venus/Escorpio · 8 Saturno/Piscis · 9 Júpiter/Piscis · 10 Marte/Piscis.
- **Espadas (Aire):** 2 Luna/Libra · 3 Saturno/Libra · 4 Júpiter/Libra · 5 Venus/Acuario ·
  6 Mercurio/Acuario · 7 Luna/Acuario · 8 Júpiter/Géminis · 9 Marte/Géminis · 10 Sol/Géminis.
- **Oros (Tierra):** 2 Júpiter/Capricornio · 3 Marte/Capricornio · 4 Sol/Capricornio ·
  5 Mercurio/Tauro · 6 Luna/Tauro · 7 Saturno/Tauro · 8 Sol/Virgo · 9 Venus/Virgo · 10 Mercurio/Virgo.

### 3.5 Ficha narrada por carta (las 56)

Para **cada una de las 56 cartas**, genera en español una ficha con estos campos:

- **general**: una frase con la esencia de la carta.
- **simbolismo / la escena**: 2–3 frases que describen qué se ve en la ilustración
  Rider-Waite y qué significa (la "historia" de la carta).
- **lectura (derecho)** y **lectura (invertido)**: significado esotérico en cada posición.
- **correspondencias**: elemento, número/rango, planeta, signo, matiz del decanato.
- **particularidad**: qué hace **única** a esta carta frente al resto (un detalle propio).

**Fuentes recomendadas (libres):** basa la narración en *"The Pictorial Key to the
Tarot"* de A. E. Waite (1911, dominio público, por el propio creador del mazo) más
los significados estándar modernos. Es contenido público; redáctalo con tus
palabras en español.

### 3.6 Imágenes del mazo (Rider-Waite-Smith, dominio público)

Usa las 78 (o al menos las 56 menores) ilustraciones del mazo **Rider-Waite-Smith**
(1909), de dominio público. Nómbralas de forma predecible por palo+número, por
ejemplo `Cups01.png … Cups14.png`, `Wands01…14`, `Swords01…14`, `Pentacles01…14`
(11=Paje, 12=Caballero, 13=Reina, 14=Rey). Si no puedes incluir binarios, deja la
estructura de carpetas y los nombres listos, e indícame de dónde descargarlas
(Wikimedia Commons, o un paquete npm como `@cometpisces/tarot-kit-images`).

### 3.7 Enlaces "Más información" por carta

Dos enlaces externos por carta:
- **Biddy Tarot** (por carta): `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-<palo>/<rango>-of-<palo>/`
  donde `<palo>` ∈ {cups, wands, swords, pentacles} y `<rango>` ∈ {ace, two, …, ten, page, knight, queen, king}.
- **Labyrinthos** (por palo): `https://labyrinthos.co/blogs/tarot-card-meanings-list/tagged/<palo>`.

---

## 4. Modos / pestañas de la app

La app tiene una barra de pestañas: **🧩 Construir · 🎴 Flashcards · 📖 Referencia · ⚙️ Ajustes**.

### 4.1 🧩 Construir (modo principal de práctica)

- **Selector de carta**: dos menús (palo + número/rango) y un botón "Practicar esta"
  para estudiar una carta concreta; además un botón "Barajar" (ver abajo su comportamiento).
- **Mazo de cartas** visible, con el **reverso** (dorso) ilustrado. El usuario
  **toca el mazo** para barajar y sacar una carta **al azar** (gesto principal e
  intuitivo). Al azar, la carta puede salir **invertida ~50 %** de las veces.
- El botón "Barajar y sacar al azar" **no saca la carta**: al tocarlo, **resalta/hace
  brillar el mazo** para invitar a tocarlo (así el usuario aprende el gesto). El gesto
  real es tocar el mazo.
- **Animación**: al sacar, el mazo se **baraja** (efecto riffle en cascada), una carta
  **sale y se voltea (flip 3D)** y muestra la ilustración.
- **Orientación**: muestra una etiqueta "Derecha" / "⟳ Invertida" y un botón **"Invertir"**
  que gira la carta 180° y cambia su significado (y las opciones de práctica) en el acto.
- **Ejercicio de práctica** (tras sacar la carta):
  1. "¿Qué aporta el grado (número/rango)?" → 3 opciones (1 correcta + 2 distractores).
  2. "¿Qué elemento es y qué aporta?" → 3 opciones.
  3. Botón **"Revelar síntesis"** que muestra la fórmula (`Nº × Elemento`), el
     significado del grado, del elemento y el **puente con el Mayor**.
  - **Clave**: si la carta está **invertida**, las opciones y la respuesta correcta
    deben usar los **significados invertidos**, no los del derecho. Al pulsar
    "Invertir" se recalculan.
- **Ficha "📖 Conoce esta carta"**: panel desplegable con general, la escena,
  lectura (según orientación), correspondencias, particularidad y los 2 enlaces.
- **Pantalla completa**: al tocar la carta revelada, se abre un visor a pantalla
  completa con la imagen grande (respeta la orientación); se cierra con ✕, tocando
  el fondo o con Escape.

### 4.2 🎴 Flashcards (repetición espaciada)

- Mismo mazo y misma animación que Construir.
- Algoritmo de **repetición espaciada tipo SM-2 simplificado**: las cartas que fallas
  vuelven antes; el progreso se guarda en `localStorage`.
- Flujo: tocar el mazo → sale la carta (ves la ilustración + nombre) → piensas el
  significado → botón **"Ver significado"** → aparece una **narración breve** + la
  fórmula/grado/elemento/puente, **y** el desplegable "Conoce esta carta" → calificas
  con **Otra vez / Difícil / Bien / Fácil** → sale la siguiente.
- Contador de progreso (p. ej. "Vistas: X / 56 cartas") y un botón para reiniciar el progreso.
- La carta también se puede abrir a **pantalla completa**.

### 4.3 📖 Referencia

Tablas/listas de consulta: palos con su elemento, números 1–10 (con su puente al
Mayor) y las 4 cartas de la corte.

### 4.4 ⚙️ Ajustes (persistentes en localStorage)

- **Tu sistema**: elegir qué elemento asignas a cada palo (por si el usuario usa su
  propia correspondencia; por defecto la tradicional). Afecta a toda la app.
- **Alcance de práctica**: casillas para incluir/excluir las cartas de la corte y/o
  los numerales (As–10). No permitir dejar ambas desmarcadas.

---

## 5. Diseño visual (estética)

Busca un aire **místico, elegante y nocturno**:

- **Paleta**: fondo índigo/violeta muy oscuro con acentos **dorados**. Modo oscuro.
- **Tipografía** (Google Fonts): **Cinzel** para títulos (aire ceremonial) y
  **EB Garamond** para los textos. Déjala elegante y legible en móvil.
- **Fondo de cielo estrellado animado** (p. ej. en `<canvas>`): estrellas que titilan
  y se desplazan muy lento, con **estrellas fugaces** ocasionales. Debe **cubrir toda
  la pantalla también en iPad/iOS** (ojo: Safari de iOS no soporta bien
  `background-attachment: fixed`; pinta el degradado en un elemento fijo o en el propio
  canvas, y mide el canvas por su tamaño real en pantalla).
- **Paneles tipo "vidrio"** (semitransparentes con desenfoque) y **filo dorado**.
- **Botones y pestaña activa** en dorado; **cartas reveladas con un brillo dorado** suave.
- **Reverso del mazo**: una ilustración vertical (proporción ~2:3). Si no tienes una,
  genera un diseño propio (p. ej. luna + gato negro + noche estrellada) en SVG/CSS.
- **Respeta `prefers-reduced-motion`**: si está activo, reduce o desactiva las animaciones.
- **Responsive, mobile-first**: se usa sobre todo en el celular.

---

## 6. Animaciones

- **Barajado (riffle)**: las cartas del mazo se abren en abanico con movimiento
  escalonado (no un simple vaivén).
- **Sacar + voltear**: la carta sale del mazo y hace un **flip 3D** para revelar la cara.
- **Estrellas**: titileo suave + alguna fugaz ocasional.
- Añade una **guarda** para no sacar dos cartas a la vez si se toca rápido.

---

## 7. Requisitos técnicos y de calidad

- **Sin backend ni base de datos.** Todo el "conocimiento" (datos de cartas) vive en
  el propio código (p. ej. un archivo JS/JSON), para que funcione **offline** y como
  **enlace estático**.
- **Persistencia** en `localStorage`: progreso de flashcards y ajustes del usuario,
  con `try/catch` por si está bloqueado.
- **Accesibilidad**: contraste suficiente, `alt` en imágenes, foco visible, cerrar el
  visor con Escape.
- **Rendimiento**: imágenes razonables (no gigantes), limitar la densidad de estrellas
  en pantallas pequeñas.
- **Código ordenado y comentado.** Separa datos / lógica / estilos como prefieras.
- Entrégame además una breve **guía de publicación en GitHub Pages**.

---

## 8. Entregable

1. Los archivos de la app listos para subir a GitHub Pages.
2. La estructura de carpetas (incluida la de imágenes) y los nombres de archivo.
3. Las 56 fichas narradas en español (sección 3.5).
4. Instrucciones de dónde obtener las imágenes Rider-Waite si no las incluyes.
5. Una guía corta para publicarla en GitHub Pages.

Hazlo **con tu propio estilo** de diseño y de código; lo anterior es el **qué** y el
**porqué**, no una imposición del **cómo**. Prioriza que sea **bonita, intuitiva en
móvil y pedagógicamente correcta** (sobre todo el cruce número×elemento y las cartas
invertidas).

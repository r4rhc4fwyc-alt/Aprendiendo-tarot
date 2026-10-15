# CLAUDE.md — Contexto del proyecto

App web **estática** para **aprender los Arcanos Menores del tarot** por la fórmula
**(Número/Rango) × (Elemento del palo)**, con el mazo **Rider-Waite-Smith** (dominio
público). Pensada para quien ya conoce los Arcanos Mayores. UI en **español**.

Se publica en **GitHub Pages** y debe funcionar como simple enlace, también en móvil.
Rama de trabajo: `claude/kind-cannon-isjfbw`.

## Principios

- **Sin backend, sin build, sin frameworks.** HTML + CSS + JavaScript "vanilla".
- Todo el "conocimiento" vive en archivos JS (funciona **offline**).
- Librerías externas: solo por CDN (ahora mismo **ninguna**; las estrellas son canvas propio).
- Las **imágenes** del mazo están dentro del repo (`img/cards/`), nunca se hotlinkean.
- Responsive **mobile-first**; respetar `prefers-reduced-motion`.
- Persistencia en `localStorage` con `try/catch` (progreso de flashcards, ajustes
  y estadísticas de progreso).

## Estructura

```
index.html              Interfaz y las 6 vistas (pestañas)
css/styles.css          Estilos (base + capa de rediseño visual al final)
js/data.js              Datos base: palos, elementos, números, corte, imágenes, síntesis
js/cartas-detalle.js    Fichas narradas de las 56 cartas (DETALLE)
js/app.js               Lógica: navegación, Construir, Flashcards (SRS), Referencia, Ajustes, lightbox
js/estrellas.js         Cielo estrellado animado (canvas, sin dependencias)
img/cards/*.png         56 imágenes Rider-Waite (Cups/Wands/Swords/Pentacles 01–14; 11=Paje…14=Rey)
img/dorso-mazo.jpg      Reverso del mazo (ilustración del usuario)
PROMPT-PARA-CHATGPT.md  Especificación para reconstruir la app con otra IA
ESTADO-DEL-PROYECTO.md  Estado, decisiones y backlog (leer para retomar)
```

## Modos (pestañas)

- **🧩 Construir**: tocar el mazo → baraja + voltea → ejercicio (grado y elemento,
  sensible a orientación) → "Revelar síntesis"; botón **Invertir**; ficha
  **"Conoce esta carta"**; pantalla completa. El botón "Barajar" **no saca** carta:
  solo resalta el mazo (el gesto real es tocar el mazo).
- **🎴 Flashcards**: mismo mazo y animación; repetición espaciada (SM-2 simplificado,
  en `localStorage`); ~35 % salen **invertidas** (muestran el significado invertido);
  "Ver significado" revela texto + la ficha; calificación.
- **🔮 Adivina** (quiz inverso): se da el significado y se adivina entre 4 opciones
  con miniatura; distractores "cercanos" (mismo palo / mismo rango), ~40 % invertidas,
  revela la síntesis y la ficha **"Conoce esta carta"** al responder. Dos niveles:
  **Normal** (pista = energía del elemento + aporte del grado) y **Difícil** (pista =
  solo la lectura narrativa, sin nombrar elemento ni grado; se guarda en Ajustes).
- **📊 Progreso**: estadísticas de aciertos de los 3 modos (Construir, Flashcards,
  Adivina) por modo/palo/grado/tipo; % general e "por tanda"; "dominas mejor / a
  reforzar"; práctica en **tandas** con historial; reinicio. En `localStorage`
  (`tarot_stats_v1`).
- **📖 Referencia**: palos, números 1–10 y corte.
- **⚙️ Ajustes**: correspondencia palo↔elemento editable; incluir/excluir corte y numerales.

## Convenciones de datos

- id de carta = `"<palo>-<rango>"`, p. ej. `"copas-7"`, `"copas-reina"`.
  Palos: `bastos, copas, espadas, oros`. Rango: `1..10` o `paje/caballero/reina/rey`.
- `imagenCarta(carta)` mapea a `img/cards/<Prefijo><NN>.png`
  (Bastos→Wands, Copas→Cups, Espadas→Swords, Oros→Pentacles; corte 11–14).
- `DETALLE["<id>"]` = `{ general, simbolismo, esoterico:{derecho,invertido}, correspondencias:{planeta,signo,decanato}, particularidad }`.
- Correspondencia palo↔elemento por defecto (Golden Dawn): Bastos=Fuego, Copas=Agua,
  Espadas=Aire, Oros=Tierra (editable en Ajustes; el usuario puede usar su propio sistema).

## Probar los cambios

- Sintaxis JS: `node --check js/app.js` (y los demás `.js`).
- Render/captura con el Chromium preinstalado y Playwright
  (`/opt/node-tools/node_modules/playwright`, `executablePath: '/opt/pw-browsers/chromium'`),
  cargando `file:///.../index.html`. Verificar que no haya errores de consola.
- No hay tests automatizados ni linter configurados.

## Git / despliegue

- Desarrollar y pushear a la rama `claude/kind-cannon-isjfbw` (`git push -u origin ...`).
- Commits en español, claros. **No** abrir PR salvo que el usuario lo pida.
- Publicación: GitHub Pages → Settings → Pages → Deploy from a branch → rama + `/ (root)`.

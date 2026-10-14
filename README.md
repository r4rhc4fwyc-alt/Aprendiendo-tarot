# 🌙 Aprendiendo los Arcanos Menores

App web para aprender a leer los **arcanos menores** del tarot por **fórmula**,
no de memoria: cada carta = **Número/Rango × Elemento**.

Pensada para quien ya conoce los arcanos mayores y quiere construir su lectura
de los menores usando numerología y los cuatro elementos.

## Modos

- **🧩 Construir** — Se te muestra una carta; eliges qué aporta su *grado*
  (número o rango de la corte) y qué aporta su *elemento*, y la app revela la
  síntesis, con un puente hacia el Arcano Mayor del mismo grado.
- **🎴 Flashcards** — Repetición espaciada (SM-2 simplificado): las cartas que
  fallas vuelven antes. El progreso se guarda en tu navegador.
- **📖 Referencia** — Palos y elementos, números 1–10 y las cartas de la corte.
- **⚙️ Ajustes** — Define *tu* correspondencia palo↔elemento (la tradicional
  viene por defecto) y elige si practicar con numerales, corte, o ambos.

Incluye las **56 cartas**: As–10 y las cuatro figuras de la corte
(Paje, Caballero, Reina, Rey) de los cuatro palos.

## Uso

Es una app estática. Ábrela directamente o publícala con GitHub Pages
(rama `main`, carpeta raíz). No necesita servidor ni dependencias.

## Estructura

```
index.html      # interfaz y vistas
css/styles.css  # estilos
js/data.js      # TODO el conocimiento del tarot (edítalo para tu sistema)
js/app.js       # lógica: construir, flashcards, referencia, ajustes
```

## Personalizar

Todo el contenido de significados vive en `js/data.js`. Puedes cambiar las
palabras clave de números, elementos y corte para reflejar tu propio sistema
de lectura.

> Nota: la correspondencia palo↔elemento no es universal entre escuelas.
> Por defecto se usa Bastos→Fuego, Copas→Agua, Espadas→Aire, Oros→Tierra,
> y puedes intercambiarla desde Ajustes.

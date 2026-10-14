/* ============================================================
   CIELO ESTRELLADO ANIMADO (canvas, sin dependencias)
   - Estrellas que titilan y se desplazan muy lento.
   - Estrellas fugaces ocasionales.
   - Respeta prefers-reduced-motion (dibuja un cielo fijo).
   ============================================================ */
(function () {
  const canvas = document.getElementById("estrellas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let ancho = 0, alto = 0, dpr = 1;
  let estrellas = [];
  let fugaz = null;
  let proximaFugaz = 0;

  function dimensionar() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    ancho = window.innerWidth;
    alto = window.innerHeight;
    canvas.width = ancho * dpr;
    canvas.height = alto * dpr;
    canvas.style.width = ancho + "px";
    canvas.style.height = alto + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // densidad proporcional al área (tope para móviles)
    const n = Math.min(160, Math.round((ancho * alto) / 9000));
    estrellas = [];
    for (let i = 0; i < n; i++) {
      estrellas.push({
        x: Math.random() * ancho,
        y: Math.random() * alto,
        r: Math.random() * 1.3 + 0.3,
        base: Math.random() * 0.5 + 0.3,
        amp: Math.random() * 0.5,
        fase: Math.random() * Math.PI * 2,
        vel: Math.random() * 0.4 + 0.15,     // titileo
        deriva: Math.random() * 0.03 + 0.01, // caída muy lenta
        dorada: Math.random() < 0.22,
      });
    }
  }

  function estrella(e, brillo) {
    const col = e.dorada ? "244,210,90" : "253,244,200";
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${col},${brillo})`;
    ctx.fill();
    if (e.r > 1.1) { // halo suave en las más grandes
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r * 2.4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col},${brillo * 0.12})`;
      ctx.fill();
    }
  }

  function dibujarFijo() {
    ctx.clearRect(0, 0, ancho, alto);
    for (const e of estrellas) estrella(e, e.base + e.amp * 0.5);
  }

  function lanzarFugaz() {
    const desdeIzq = Math.random() < 0.5;
    const y0 = Math.random() * alto * 0.5;
    fugaz = {
      x: desdeIzq ? -40 : ancho + 40,
      y: y0,
      vx: (desdeIzq ? 1 : -1) * (6 + Math.random() * 3),
      vy: 2.2 + Math.random() * 1.5,
      vida: 1,
    };
  }

  let t = 0;
  function animar() {
    ctx.clearRect(0, 0, ancho, alto);
    t += 0.016;
    for (const e of estrellas) {
      const brillo = Math.max(0, e.base + e.amp * Math.sin(e.fase + t * e.vel * 4));
      estrella(e, brillo);
      e.y += e.deriva;
      if (e.y > alto + 2) { e.y = -2; e.x = Math.random() * ancho; }
    }
    // estrella fugaz
    const ahora = performance.now();
    if (!fugaz && ahora > proximaFugaz) {
      lanzarFugaz();
      proximaFugaz = ahora + 7000 + Math.random() * 9000;
    }
    if (fugaz) {
      const f = fugaz;
      const lx = f.x - f.vx * 6, ly = f.y - f.vy * 6;
      const g = ctx.createLinearGradient(lx, ly, f.x, f.y);
      g.addColorStop(0, "rgba(253,244,200,0)");
      g.addColorStop(1, `rgba(253,244,200,${0.8 * f.vida})`);
      ctx.strokeStyle = g;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(lx, ly);
      ctx.lineTo(f.x, f.y);
      ctx.stroke();
      f.x += f.vx; f.y += f.vy; f.vida -= 0.012;
      if (f.vida <= 0 || f.x < -60 || f.x > ancho + 60 || f.y > alto + 60) fugaz = null;
    }
    requestAnimationFrame(animar);
  }

  let redim;
  window.addEventListener("resize", () => {
    clearTimeout(redim);
    redim = setTimeout(() => { dimensionar(); if (reduce) dibujarFijo(); }, 150);
  });

  dimensionar();
  if (reduce) dibujarFijo();
  else requestAnimationFrame(animar);
})();

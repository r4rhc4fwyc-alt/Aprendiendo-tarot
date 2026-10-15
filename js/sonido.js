/* ============================================================
   SONIDO — efectos sintetizados con la Web Audio API.
   Sin archivos ni dependencias: todo se genera en el navegador,
   así la app sigue siendo estática y funciona offline.
   Volumen discreto; se puede silenciar en Ajustes.
   ============================================================ */
const Sonido = (() => {
  let ctx = null;
  let habilitado = true; // se fija desde Ajustes en el arranque

  function asegurarCtx() {
    try {
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
      }
      if (ctx.state === "suspended") ctx.resume();
    } catch (e) { ctx = null; }
    return ctx;
  }

  /* Envolvente simple (ataque rápido + caída exponencial). */
  function envol(t0, dur, pico) {
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(pico, t0 + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    return g;
  }

  function tono(freq, t0, dur, pico, tipo) {
    const o = ctx.createOscillator();
    o.type = tipo || "sine";
    o.frequency.setValueAtTime(freq, t0);
    const g = envol(t0, dur, pico);
    o.connect(g).connect(ctx.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.03);
  }

  /* Ráfaga de ruido filtrada: la base del "barajado". */
  function ruido(t0, dur, pico, filtro) {
    const n = Math.max(1, Math.floor(ctx.sampleRate * dur));
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < n; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = filtro;
    bp.Q.value = 0.9;
    const g = ctx.createGain();
    g.gain.value = pico;
    src.connect(bp).connect(g).connect(ctx.destination);
    src.start(t0);
  }

  return {
    get habilitado() { return habilitado; },
    init(valor) { habilitado = !!valor; },
    set(valor) { habilitado = !!valor; if (habilitado) asegurarCtx(); },
    desbloquear() { if (habilitado) asegurarCtx(); },

    /* Barajado tipo riffle: tres ráfagas escalonadas. */
    barajar() {
      if (!habilitado) return; const c = asegurarCtx(); if (!c) return;
      const t = c.currentTime;
      ruido(t, 0.15, 0.16, 2600);
      ruido(t + 0.09, 0.12, 0.13, 3200);
      ruido(t + 0.17, 0.10, 0.11, 2100);
    },

    /* Voltear/revelar carta: swish breve + toque. */
    voltear() {
      if (!habilitado) return; const c = asegurarCtx(); if (!c) return;
      const t = c.currentTime;
      ruido(t, 0.08, 0.09, 1800);
      tono(392, t + 0.03, 0.14, 0.07, "triangle");
    },

    /* Acierto: arpegio mayor ascendente (Do–Mi–Sol). */
    acierto() {
      if (!habilitado) return; const c = asegurarCtx(); if (!c) return;
      const t = c.currentTime;
      tono(523.25, t,        0.18, 0.15, "triangle");
      tono(659.25, t + 0.09, 0.18, 0.15, "triangle");
      tono(783.99, t + 0.18, 0.28, 0.17, "triangle");
    },

    /* Error: dos tonos graves suaves descendentes (nada estridente). */
    error() {
      if (!habilitado) return; const c = asegurarCtx(); if (!c) return;
      const t = c.currentTime;
      tono(233.08, t,        0.16, 0.11, "sine");
      tono(174.61, t + 0.13, 0.24, 0.11, "sine");
    },
  };
})();

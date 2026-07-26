export const ULTRA_VISUAL = {

  /* -----------------------------------------
     HEATMAP
  ----------------------------------------- */
  heatmap(ctx, modules) {
    modules.forEach(m => {
      ctx.fillStyle = m.heat > 0.7 ? "#f00" :
                      m.heat > 0.4 ? "#ff0" :
                      m.heat > 0.2 ? "#0f0" : "#333";
      ctx.fillRect(m.x - 40, m.y - 40, 80, 80);
    });
  },

  /* -----------------------------------------
     ROUTING MATRIX
  ----------------------------------------- */
  routingMatrix(ctx, routes) {
    ctx.strokeStyle = "#6cf";
    ctx.lineWidth = 2;

    routes.forEach(r => {
      ctx.beginPath();
      ctx.moveTo(r.from.x, r.from.y);
      ctx.lineTo(r.to.x, r.to.y);
      ctx.stroke();
    });
  },

  /* -----------------------------------------
     TIMELINE
  ----------------------------------------- */
  timeline(ctx, events) {
    ctx.strokeStyle = "#0f0";
    ctx.lineWidth = 3;

    events.forEach((e, i) => {
      ctx.beginPath();
      ctx.moveTo(100 + i * 120, 100);
      ctx.lineTo(100 + i * 120, 200);
      ctx.stroke();

      ctx.fillStyle = "#fff";
      ctx.fillText(e.label, 80 + i * 120, 230);
    });
  },

  /* -----------------------------------------
     GATE GRAPH
  ----------------------------------------- */
  gateGraph(ctx, gates) {
    gates.forEach(g => {
      ctx.fillStyle = "#ff0";
      ctx.beginPath();
      ctx.arc(g.x, g.y, 30, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#000";
      ctx.fillText(g.name, g.x - 20, g.y + 5);
    });
  },

  /* -----------------------------------------
     WLOCH KURVE
  ----------------------------------------- */
  wlochCurve(ctx, stability) {
    ctx.strokeStyle = "#09f";
    ctx.lineWidth = 2;

    ctx.beginPath();
    stability.forEach((s, i) => {
      const x = 50 + i * 20;
      const y = 400 - s * 200;
      ctx.lineTo(x, y);
    });
    ctx.stroke();
  },

  /* -----------------------------------------
     EXPORT FLOW
  ----------------------------------------- */
  exportFlow(ctx, flow) {
    ctx.strokeStyle = "#f60";
    ctx.lineWidth = 4;

    flow.forEach((f, i) => {
      ctx.beginPath();
      ctx.moveTo(100, 500 + i * 40);
      ctx.lineTo(800, 500 + i * 40);
      ctx.stroke();

      ctx.fillStyle = "#fff";
      ctx.fillText(f.label, 820, 505 + i * 40);
    });
  },

  /* -----------------------------------------
     AVATAR BRAIN MAP
  ----------------------------------------- */
  brainMap(ctx, nodes) {
    nodes.forEach(n => {
      ctx.fillStyle = n.active ? "#f0f" : "#333";
      ctx.beginPath();
      ctx.arc(n.x, n.y, 25, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#fff";
      ctx.fillText(n.name, n.x - 20, n.y + 5);
    });
  },

  /* -----------------------------------------
     PULSE SEQUENCER
  ----------------------------------------- */
  pulseSequencer(ctx, t) {
    ctx.strokeStyle = "#0f0";
    ctx.lineWidth = 2;

    ctx.beginPath();
    for (let x = 0; x < ctx.canvas.width; x++) {
      const y = ctx.canvas.height / 2 + Math.sin((x + t) / 20) * 80;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
};

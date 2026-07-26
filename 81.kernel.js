export const TMP_KERNEL = {
  id: "81.tmp",
  version: "1.0.0",
  store: {},
  pulse: null,

  async load(path) {
    try {
      const data = await fetch(path).then(r => r.json());
      this.store[path] = data;
      return { path, status: "OK", data };
    } catch (e) {
      return { path, status: "ERROR", error: e.toString() };
    }
  },

  async loadAll() {
    const files = [
      "use/use.json",
      "MOVE/move.json",
      "RDY/rdy.json",
      "SEND/send.json",
      "VECTOR/vector.json",
      "ALL/all.json"
    ];

    const out = {};
    for (const f of files) out[f] = await this.load(f);
    return out;
  },

  connectPulse(pulse) {
    this.pulse = pulse;
    return { status: "PULSE-CONNECTED", pulse };
  },

  export() {
    return {
      id: this.id,
      timestamp: Date.now(),
      store: this.store,
      pulse: this.pulse,
      status: "READY"
    };
  }
};

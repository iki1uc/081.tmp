export const TMP_GLOBAL = {
  id: "81.tmp",
  version: "2.0.0",
  root: "D:/81/tmp",
  cache: {},
  pulse: null,

  async scan() {
    const response = await fetch("./");
    const text = await response.text();
    const files = [...text.matchAll(/href="([^"]+tmp[^"]+)"/g)].map(m => m[1]);
    this.cache.files = files;
    return files;
  },

  async load(file) {
    try {
      const data = await fetch(file).then(r => r.text());
      this.cache[file] = data;
      return { file, status: "OK" };
    } catch (e) {
      return { file, status: "ERROR", error: e.toString() };
    }
  },

  async loadAll() {
    const files = await this.scan();
    const results = [];
    for (const f of files) results.push(await this.load(f));
    return results;
  },

  connectPulse(pulse) {
    this.pulse = pulse;
    return { status: "PULSE-CONNECTED", pulse };
  },

  export() {
    return {
      id: this.id,
      timestamp: Date.now(),
      files: Object.keys(this.cache),
      pulse: this.pulse,
      status: "CACHE-READY"
    };
  }
};

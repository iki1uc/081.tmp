import { TMP_GLOBAL } from "../81.tmp/tmp.global.js";

export const OWNER_AVATAR = {
  id: "OWNER-AVATAR",
  version: "2.0.0",
  async init() {
    await TMP_GLOBAL.loadAll();
    this.cache = TMP_GLOBAL.export();
    console.log("Owner-Avatar Cache aktiv:", this.cache.status);
  }
};

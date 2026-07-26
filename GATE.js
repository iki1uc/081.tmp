import { TMP_GLOBAL } from "../81.tmp/tmp.global.js";

export function GATE_AXIS() {
  const axis = Object.keys(TMP_GLOBAL.cache)
    .filter(f => f.includes(".room"))
    .map(f => TMP_GLOBAL.cache[f]);
  return { axis, count: axis.length };
}

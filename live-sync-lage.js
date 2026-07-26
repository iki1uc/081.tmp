import { TMP_GLOBAL } from "../81.tmp/tmp.global.js";

export function LIVE_BRIDGE_CONNECT() {
  const pulse = { source: "LIVE-BRIDGE", time: Date.now() };
  TMP_GLOBAL.connectPulse(pulse);
  console.log("LIVE-BRIDGE → 81.tmp verbunden");
}

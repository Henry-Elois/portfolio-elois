import PocketBase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-types";

// Utiliser l'URL de production par défaut, sauf si on est explicitement en dev local
const isDev =
  import.meta.env.DEV ||
  (typeof window !== "undefined" && window.location.hostname === "localhost");
const path = isDev
  ? "http://localhost:8090"
  : "https://portfolio.eloishenry.fr:443";

const pb = new PocketBase(path) as TypedPocketBase;
export const POCKETBASE_URL = path;
export default pb;

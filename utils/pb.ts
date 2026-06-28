import PocketBase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-types";

export const POCKETBASE_URL =
  import.meta.env.PUBLIC_POCKETBASE_URL || "https://portfolio.eloishenry.fr";

const pb = new PocketBase(POCKETBASE_URL) as TypedPocketBase;
export default pb;

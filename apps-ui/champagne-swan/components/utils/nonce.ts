import crypto from "crypto";
import { v4 } from "uuid";

export const getNonce = () => {
 const hash = crypto.createHash("sha256");
  hash.update(v4());
  const nonce = hash.digest("base64");
  return nonce; 
}
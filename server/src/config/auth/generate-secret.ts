import crypto from "crypto";

const generateRandomSecretKey = (factor: number) => {
  return crypto.randomBytes(factor).toString("hex");
};
const generateRandomHash = (string: string) => {
  return crypto.createHash("sha256").update(string).digest("hex");
};

export { generateRandomSecretKey, generateRandomHash };

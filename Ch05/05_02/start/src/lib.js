import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const save = (skiTerms) => {
  fs.writeFile(
    path.join(__dirname, "..", "data", "skiTerms.json"),
    JSON.stringify(skiTerms, null, 2),
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
};

export const logger = (req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  if (Object.keys(req.body).length) {
    console.log(req.body);
  }
  next();
};

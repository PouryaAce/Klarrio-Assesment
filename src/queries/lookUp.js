import fs from "fs";
import parse from "csv-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Reading lookUpKeyDB1 file through lookUp function

export const lookUp = async () => {
  const lookUpKeyDB1 = [];

  const readFile = new Promise(function (resolve) {
    fs.createReadStream(__dirname + "/../files/lookupKeyDB1.csv")
      .pipe(parse({ separator: "\t" }))
      .on("data", (data) => {
        lookUpKeyDB1.push([
          data.lookup_key.replace(/\s/g, ""),
          data.database_song_code.replace(/^0/g, ""),
          data.database_abb05v_writers.replace(/\s/g, ""),
          data.usage_count,
        ]);
      })
      .on("end", () => {
        resolve();
      });
  });

  await readFile;

  return lookUpKeyDB1;
};

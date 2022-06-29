import fs from "fs";
import parse from "csv-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Reading songCodeDB2 file through songCode function

export const songCode = async () => {
  const songCodeDB2 = [];

  const readFile = new Promise(function (resolve) {
    fs.createReadStream(__dirname + "/../files/songCodeDB2.csv")
      .pipe(parse({ separator: "\t" }))
      .on("data", (data) => {
        songCodeDB2.push([
          data.database_song_code.replace(/^0/g, ""),
          data.database_song_title,
          data.database_song_writers,
        ]);
      })
      .on("end", () => {
        resolve();
      });
  });

  await readFile;

  return songCodeDB2;
};

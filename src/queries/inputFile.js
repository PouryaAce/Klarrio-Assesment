import fs from "fs";
import parse from "csv-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Reading input_file.csv through input function
export const input = async () => {
  const inputFile = [];

  const readFile = new Promise(function (resolve) {
    fs.createReadStream(__dirname + "/../files/input_file.csv")
      .pipe(parse({ separator: "\t" }))
      .on("data", (data) => {
        inputFile.push([
          data.unique_input_record_identifier,
          data.input_title,
          data.input_writers,
          data.input_performers,
        ]);
      })
      .on("end", () => {
        resolve();
      });
  });
  await readFile;

  return inputFile;
};

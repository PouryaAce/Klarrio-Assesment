import { decipher } from "./lookUpDecipher.js";

// Finding Best matches in Files using recordsMatcher function

export const recordsMatcher = (inputFiles, lookUpKeys, songCodes) => {
  // Making a lookupKey based on input_title and attaching to the input_file array
  const inputsWithKeys = inputFiles.map((inputRow) => {
    const key = decipher(inputRow[1]);
    return [...inputRow, key];
  });

  // Finding the lookupKey matches in DBsongs
  const keysAndMatches = inputsWithKeys.map((inputRow) => {
    // Finding Each matched lookupKey in lookUpKeyDB1
    const matches = lookUpKeys.filter((keyRow) => keyRow[0] === inputRow[4]);

    // Looping in DBSongs and finding the matched song codes
    const matchesWithDBSongs = [];
    matches.forEach((row) => {
      for (let i = 0; i < songCodes.length; i++) {
        if (row[1] === songCodes[i][0]) {
          matchesWithDBSongs.push([...row, songCodes[i]]);
          break;
        }
      }
    });
    return [...inputRow, matchesWithDBSongs];
  });

  // Filtering matched songs and finding the best match
  const finalResult = [];
  keysAndMatches.forEach((row) => {
    const rowObject = {};
    rowObject.unique_input_record_identifier = row[0];
    rowObject.input_title = row[1];
    rowObject.lookup_key = row[4];
    rowObject.input_writers = row[2];
    rowObject.input_performers = row[3];

    const match = [];
    let range = 4;
    // Comparing input_writer and DB_song_writer to find the best match
    while (match.length === 0 && range !== 0) {
      for (let i = 0; i < row[5].length; i++) {
        const dbSong = row[5][i][4][2]
          .replace(/[^a-zA-Z0-9& ]/g, "")
          .replace(/\s/g, "")
          .toUpperCase()
          .substring(0, range);

        const input = row[2]
          .replace(/[^a-zA-Z0-9& ]/g, "")
          .replace(/\s/g, "")
          .toUpperCase();

        if (input.match(dbSong) !== null) {
          match.push(row[5][i]);
          break;
        }
      }
      range -= 1;
    }

    if (match.length === 0) {
      rowObject.database_song_code = "NO MATCH";
      rowObject.database_song_title = "NO MATCH";
      rowObject.database_song_writers = "NO MATCH";
    } else {
      rowObject.database_song_code = match[0][4][0];
      rowObject.database_song_title = match[0][4][1];
      rowObject.database_song_writers = match[0][4][2];
    }

    finalResult.push(rowObject);
  });

  return finalResult;
};

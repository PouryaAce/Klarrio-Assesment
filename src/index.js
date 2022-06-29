import { input } from "./queries/inputFile.js";
import { lookUp } from "./queries/lookUp.js";
import { songCode } from "./queries/songCode.js";
import { recordsMatcher } from "./utils/recordsMatcher.js";
import ObjectsToCsv from "objects-to-csv";

// Reading and storing csv files into variables
const inputFiles = await input();
const lookUpKeys = await lookUp();
const songCodes = await songCode();

const finalResults = recordsMatcher(inputFiles, lookUpKeys, songCodes);

// Importing final Results into a new csv file
const csv = new ObjectsToCsv(finalResults);

await csv.toDisk("./results.csv");
console.log("ok");

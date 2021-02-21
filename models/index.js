import MKY021 from "./mky021.js";
import MKY08 from "./mky08.js";
import MKY021RAW from "./mky021raw.js";
import MKY08RAW from "./mky08raw.js";

// Defining MKY0811 Model

const db = {};

db.MKY021 = MKY021;
db.MKY021RAW = MKY021RAW;
db.MKY08 = MKY08;
db.MKY08RAW = MKY08RAW;

export default db;
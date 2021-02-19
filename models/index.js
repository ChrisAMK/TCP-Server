import MKY021 from "./mky021.js";
import MKY08 from "./mky08.js";
import MKY021RAW from "./mky021raw.js";
import MKY08RAW from "./mky08raw.js";
import Sequelize from "sequelize";
import config from './config.json';
// Defining MKY0811 Model

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "mysql",
  logging: false
});

const db = {};

db.MKY021 = MKY021;
db.MKY021RAW = MKY021RAW;
db.MKY08 = MKY08;
db.MKY08RAW = MKY08RAW;
db.sequelize = sequelize;

export default db;
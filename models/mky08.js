import Sequelize from "sequelize";
import config from './config.json';
// Defining MKY0811 Model

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "mysql",
  // logging: false
});

const DataTypes = Sequelize.DataTypes;
const literal = Sequelize.literal;

const MKY08 = sequelize.define("MKY08", {

  time: {
    type: DataTypes.BIGINT,
    allowNull: true
  },

  engineRPM: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  oilPressure: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  engineHours: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  coolantTemp: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  headPosition: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  holeDepth: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  rotationRpm: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  penetrationRate: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  bitWeight: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  outsideTemp: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  mastAngle: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  deckRoll: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  deckPitch: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  rodLoaderPosition: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  headRefPosition: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  rotationReversePressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  rotationForwardPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  holdBackPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  pulldownPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  waterPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  mainPumpPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  driller: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  compressorSumpPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  compressorDischargeTemperature: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  compressorLinePressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  compressorInterstagePressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  DownholeAirPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  engineOilTemp: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  createdAt: {
    type: 'TIMESTAMP',
    defaultValue: literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },

  year: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  month: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  date: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  hour: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  minute: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  second: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

},
  {
    timestamps: false
  }
);

export default MKY08;
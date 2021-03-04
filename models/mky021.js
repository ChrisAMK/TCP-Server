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

const MKY021 = sequelize.define("MKY021", {

  time: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  engineRpm: {
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

  headRackBackProxyStatus: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  footClampPressureSwitch: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  coolantLevelSensor: {
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

  winchDownPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  winchUpPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  bitWeight: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  driller: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  engineTorque: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  intercoolerTemp: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  totalFuelUsed: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  intakeManifoldTemp: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  turboRpm: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  electricalPotential: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

 engineOilLevel: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  createdAt: {
    type: 'TIMESTAMP',
    defaultValue: literal('CURRENT_TIMESTAMP'),
    allowNull: false
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

export default MKY021;
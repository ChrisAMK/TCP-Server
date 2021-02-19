import Sequelize from "sequelize";
import config from './config.json';
// Defining MKY0811 Model

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "mysql",
  logging: false
});


const MKY08RAW = sequelize.define("MKY08RAW", {

  time: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
  },

  engineRPM: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true
  },

  oilPressure: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true
  },

  engineHours: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  coolantTemp: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  headPosition: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  holeDepth: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  rotationRpm: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  penetrationRate: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  mastAngle: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  deckRoll: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  deckPitch: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  headRackBackProxyStatus: {
    type: Sequelize.DataTypes.BOOLEAN,
    allowNull: true,
  },

  footClampPressureSwitch: {
    type: Sequelize.DataTypes.BOOLEAN,
    allowNull: true,
  },

  coolantLevelSensor: {
    type: Sequelize.DataTypes.BOOLEAN,
    allowNull: true,
  },

  rotationReversePressure: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  rotationForwardPressure: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  holdBackPressure: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  pulldownPressure: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  waterPressure: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  mainPumpPressure: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  winchDownPressure: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  winchUpPressure: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
  },

  createdAt: {
    type: 'TIMESTAMP',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }

},
{
  timestamps: false
}
);

export default MKY08RAW;
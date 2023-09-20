const { Model, DataTypes, Sequelize } = require('sequelize');

const ACADEMIAS_TABLE = 'academias';

const AcademiasSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: null,
  },
  deletedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'deleted_at',
    defaultValue: null,
  },
};

class Academias extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: ACADEMIAS_TABLE,
      modelName: 'Academias',
      timestamps: false,
    };
  }
}

module.exports = { ACADEMIAS_TABLE, AcademiasSchema, Academias};

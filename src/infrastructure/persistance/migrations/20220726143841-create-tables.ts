import { QueryInterface, DataTypes, QueryTypes } from 'sequelize';
import IMigration from '../IMigration';

const migration: IMigration = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('Albums', {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
      },
      name: DataTypes.STRING,

      // Sequelize model fields.
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    });

    await queryInterface.createTable('Tracks', {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
      },
      albumId: {
        type: DataTypes.STRING(36),
        references: { model: 'Albums', key: 'id' },
      },
      artist: DataTypes.STRING,
      name: DataTypes.STRING,
      genre: DataTypes.STRING,

      // Sequelize model fields.
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Albums');
    await queryInterface.dropTable('Tracks');
  },
};

export default migration;

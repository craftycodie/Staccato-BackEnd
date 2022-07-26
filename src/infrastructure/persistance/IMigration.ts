import { QueryInterface } from 'sequelize/types';

export default interface IMigration {
  up(queryInterface: QueryInterface);
  down(queryInterface: QueryInterface);
}

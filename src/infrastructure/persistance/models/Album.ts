import {
  Column,
  Model,
  Table,
  DataType,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';
import Track from './Track';

@Table
export default class Album extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  id: string;

  @Column
  name: string;

  @HasMany(() => Track)
  tracks: Track[];
}

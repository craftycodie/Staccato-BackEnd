import {
  Column,
  Model,
  Table,
  DataType,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';
import TrackModel from './TrackModel';

@Table
export default class Album extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  id: string;

  @Column
  name: string;

  @HasMany(() => TrackModel)
  tracks: TrackModel[];
}

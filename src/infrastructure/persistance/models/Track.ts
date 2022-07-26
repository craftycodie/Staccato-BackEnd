import {
  Column,
  Model,
  Table,
  DataType,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import Album from './Album';

@Table
export default class Track extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  id: string;

  @ForeignKey(() => Album)
  @Column(DataType.STRING)
  albumId: string;

  @Column
  name: string;
  @Column
  artist: string;
  // For simplicity I'm using a string of genres separated by commas
  // This is because I'm testing with a DB that does not support arrays and cba to setup a Genre table for this.
  @Column(DataType.STRING)
  genre: string;
}

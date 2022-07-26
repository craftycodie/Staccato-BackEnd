import { Column, Model, Table, DataType, PrimaryKey, ForeignKey } from 'sequelize-typescript';
import Album from './Album';

@Table
export default class Track extends Model {
    @PrimaryKey
    @Column(DataType.UUIDV4)
    id: string;

    @ForeignKey(() => Album)
    @Column(DataType.UUIDV4)
    albumId: string;

    @Column
    name: string;
    @Column
    artist: string;
    @Column(DataType.ARRAY(DataType.STRING))
    genre: string[];

    @Column
    deleted: boolean;
}
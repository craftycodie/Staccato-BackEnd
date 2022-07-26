import { Column, Model, Table, DataType, PrimaryKey, HasMany } from 'sequelize-typescript';
import Track from './Track';

@Table
export default class Album extends Model {
    @PrimaryKey
    @Column(DataType.UUIDV4)
    id: string;

    @Column
    name: string;

    @Column
    deleted: boolean;

    @HasMany(() => Track)
    tracks: Track[]
}
import { Injectable } from "@nestjs/common";
import AlbumId from "src/domain/value-objects/AlbumId";
import TrackId from "src/domain/value-objects/TrackId";
import AlbumAggregate from "../../../domain/aggregates/Album";
import IAlbumRepository from "../../../domain/repositories/IAlbumRepository";
import ILogger from "../../../ILogger";
import Album from "../datamodels/Album";
import Track from "../datamodels/Track";
import AlbumDomainMapper from "../mappers/AlbumDomainMapper";
import AlbumPersistanceMapper from "../mappers/AlbumPersistanceMapper";
import MySQLConnection from "../MySQLConnection";

@Injectable()
export default class AlbumRepository implements IAlbumRepository<AlbumAggregate, Album>  {
    constructor(
        private readonly logger: ILogger,
        private readonly  connection: MySQLConnection,
        private readonly  albumDomainMapper: AlbumDomainMapper,
        private readonly  albumPersistanceMapper: AlbumPersistanceMapper,
    ) {
    }

	public async save(target: AlbumAggregate) {
        this.logger.debug(`Saving album ${target.name}.`)
    }

	public async findById(id: AlbumId) {
        this.logger.debug(`Fetching album ${id}.`)

        return null;
    }

	public async findByTrackId(id: TrackId) {
        this.logger.debug(`Fetching album for track ${id}.`)

        return null;
    }

    public async getAll(count: number | undefined) {
        this.logger.debug(`Listing albums.`)
        


        const testAlbum: Album = {
            id: "foo",
            name: "life changing moments seem minor in pictures",
            trackIds: [ "test" ],
            deleted: false
        }

        // const tracks = await this.connection.get().query("SELECT * FROM Track")
        // this.logger.debug(tracks);


        const testTracks: Track[] = [{
            id: "test",
            name: "Now what?",
            artist: "C418",
            genre: [ "ambient", "electronica", "breakbeat" ],
            deleted: false
        }]

        return [this.mapToAggregateRoot(testAlbum, testTracks)];
    }

    protected mapToDataModel(album: AlbumAggregate) {
        return this.albumPersistanceMapper.mapToDataModel(album);
    }

    protected mapToAggregateRoot(album: Album, tracks: Track[]) {
        return this.albumDomainMapper.mapToDomainModel(album, tracks);
    }
}
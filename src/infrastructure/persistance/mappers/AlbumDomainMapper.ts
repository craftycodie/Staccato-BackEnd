import Album from "../datamodels/Album";
import AggregateAlbum from "../../../domain/aggregates/Album";
import Track from "../datamodels/Track";
import ILogger, { ILoggerSymbol } from "../../../ILogger";
import TrackEntity from "../../../domain/entities/Track";
import { Inject, Injectable } from "@nestjs/common";
import TrackId from "src/domain/value-objects/TrackId";
import AlbumId from "src/domain/value-objects/AlbumId";
import Genre from "src/domain/value-objects/Genre";

@Injectable()
export default class AlbumDomainMapper {
    constructor(
        @Inject(ILoggerSymbol) private readonly logger: ILogger,
    ) { }


    public mapToDomainModel(album: Album, tracks: Track[]): AggregateAlbum {
        const matchingTracks = tracks.filter(track => album.trackIds.includes(track.id))
        if (matchingTracks.length != album.trackIds.length) {
            this.logger.warn("Failed to map album to domain, invalid tracks provided.")
            throw new Error("Album Tracks Mismatch!")
        }

        const mappedTracks: TrackEntity[] = matchingTracks.map(track => 
            new TrackEntity({
                id: new TrackId(track.id),
                name: track.name,
                genre: track.genre.map(genre => new Genre(genre)),
                artist: track.artist,
                deleted: track.deleted
            })
        );

        const aggregateAlbum = new AggregateAlbum({
            id: new AlbumId(album.id),
            name: album.name,
            tracks: mappedTracks,
            deleted: album.deleted,
        });

        return aggregateAlbum
    }
}
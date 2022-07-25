import Album from "../datamodels/Album";
import AggregateAlbum from "../../../domain/aggregates/Album";
import { DomainId, Result } from "types-ddd";
import Track from "../datamodels/Track";
import { inject, injectable } from "inversify";
import CoreDependencyIdentifiers from "../../../CoreDependencyIdentifiers";
import ILogger from "../../../ILogger";
import TrackEntity from "../../../domain/entities/Track";

@injectable()
export default class AlbumDomainMapper {
    constructor(
        @inject(CoreDependencyIdentifiers.ILogger) logger: ILogger,
    ) {
        this.logger = logger;
    }

    private logger: ILogger;

    public mapToDomainModel(album: Album, tracks: Track[]): AggregateAlbum {
        const matchingTracks = tracks.filter(track => album.trackIds.includes(track.id))
        if (matchingTracks.length != album.trackIds.length) {
            this.logger.warn("Failed to map album to domain, invalid tracks provided.")
            throw new Error("Album Tracks Mismatch!")
        }

        const mappedTracks: TrackEntity[] = matchingTracks.map(track => {
            const result = TrackEntity.create({
                ID: DomainId.create(track.id),
                name: track.name,
                genre: track.genre,
                artist: track.artist,
                deleted: track.deleted
            });

            if (result.isFailure) {
                this.logger.warn("Failed to map album to domain, unexpected track error.")
                throw new Error(result.errorValue())
            }

            return result.getResult()
        });

        const aggregateAlbum = AggregateAlbum.create({
            ID: DomainId.create(album.id),
            name: album.name,
            tracks: mappedTracks,
            deleted: album.deleted,
        });

        if (aggregateAlbum.isFailure) {
            this.logger.warn("Failed to map album to domain, unexpected track error.")
            throw new Error(aggregateAlbum.errorValue())
        }

        return aggregateAlbum.getResult()
    }
}
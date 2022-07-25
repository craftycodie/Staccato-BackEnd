import { injectable } from "inversify";
import Album from "../../../domain/aggregates/Album";
import PersistanceAlbum from "../datamodels/Album";

@injectable()
export default class AlbumPersistanceMapper {
    public mapToDataModel(album: Album): PersistanceAlbum {
        return {
            id: album.id.toString(),
            name: album.name,
            trackIds: album.tracks.map(track => track.id.toString()),
            deleted: album.deleted
        }
    }
} 
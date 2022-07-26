import { Injectable } from "@nestjs/common";
import Album from "../../../domain/aggregates/Album";
import PersistanceAlbum from "../datamodels/Album";

@Injectable()
export default class AlbumPersistanceMapper {
    public mapToDataModel(album: Album): PersistanceAlbum {
        return new PersistanceAlbum({
            id: album.id.toString(),
            name: album.name,
            trackIds: album.tracks.map(track => track.id.toString()),
            deleted: album.deleted
        })
    }
} 
import { Injectable } from '@nestjs/common';
import Album from '../../../domain/aggregates/Album';
import PersistanceAlbum from '../models/Album';
import Track from '../models/Track';

@Injectable()
export default class AlbumPersistanceMapper {
  public mapToDataModel(album: Album): {
    album: PersistanceAlbum;
    tracks: Track[];
  } {
    return {
      album: new PersistanceAlbum({
        id: album.id.toString(),
        name: album.name,
        trackIds: album.tracks.map((track) => track.id.toString()),
        deleted: album.deleted,
      }),
      tracks: album.tracks.map(
        (track) =>
          new Track({
            id: track.id.toString(),
            albumId: album.id.toString(),
            name: track.name,
            genre: track.genre.join(','),
            deleted: track.deleted,
          }),
      ),
    };
  }
}

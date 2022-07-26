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
      album: new PersistanceAlbum(
        {
          id: album.id.value,
          name: album.name,
          trackIds: album.tracks.map((track) => track.id.value),
          deleted: album.deleted,
        },
        { isNewRecord: false },
      ),
      tracks: album.tracks.map(
        (track) =>
          new Track(
            {
              id: track.id.value,
              albumId: album.id.value,
              name: track.name,
              genre: track.genre.map((genre) => genre.value).join(','),
              deleted: track.deleted,
            },
            { isNewRecord: false },
          ),
      ),
    };
  }
}

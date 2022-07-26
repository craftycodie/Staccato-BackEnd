import { Injectable } from '@nestjs/common';
import Album from '../../../domain/aggregates/Album';
import AlbumModel from '../models/AlbumModel';
import TrackModel from '../models/TrackModel';

@Injectable()
export default class AlbumPersistanceMapper {
  public mapToDataModel(album: Album): {
    album: AlbumModel;
    tracks: TrackModel[];
  } {
    return {
      album: new AlbumModel(
        {
          id: album.id.value,
          name: album.name,
          trackIds: album.tracks.map((track) => track.id.value),
        },
        { isNewRecord: false },
      ),
      tracks: album.tracks.map(
        (track) =>
          new TrackModel(
            {
              id: track.id.value,
              albumId: album.id.value,
              name: track.name,
              genre: track.genre.map((genre) => genre.value).join(','),
            },
            { isNewRecord: false },
          ),
      ),
    };
  }
}

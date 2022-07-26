import AlbumModel from '../models/AlbumModel';
import Album from '../../../domain/aggregates/Album';
import TrackModel from '../models/TrackModel';
import ILogger, { ILoggerSymbol } from '../../../ILogger';
import Track from '../../../domain/entities/Track';
import { Inject, Injectable } from '@nestjs/common';
import TrackId from 'src/domain/value-objects/TrackId';
import AlbumId from 'src/domain/value-objects/AlbumId';
import Genre from 'src/domain/value-objects/Genre';

@Injectable()
export default class AlbumDomainMapper {
  constructor(@Inject(ILoggerSymbol) private readonly logger: ILogger) {}

  public mapToDomainModel(album: AlbumModel, tracks: TrackModel[]): Album {
    const mappedTracks: Track[] = tracks.map(
      (track) =>
        new Track({
          id: new TrackId(track.id),
          name: track.name,
          genre: track.genre.split(',').map((genre) => new Genre(genre)),
          artist: track.artist,
        }),
    );

    const aggregateAlbum = new Album({
      id: new AlbumId(album.id),
      name: album.name,
      tracks: mappedTracks,
    });

    return aggregateAlbum;
  }
}

import Album from '../models/Album';
import AggregateAlbum from '../../../domain/aggregates/Album';
import Track from '../models/Track';
import ILogger, { ILoggerSymbol } from '../../../ILogger';
import TrackEntity from '../../../domain/entities/Track';
import { Inject, Injectable } from '@nestjs/common';
import TrackId from 'src/domain/value-objects/TrackId';
import AlbumId from 'src/domain/value-objects/AlbumId';
import Genre from 'src/domain/value-objects/Genre';

@Injectable()
export default class AlbumDomainMapper {
  constructor(@Inject(ILoggerSymbol) private readonly logger: ILogger) {}

  public mapToDomainModel(album: Album, tracks: Track[]): AggregateAlbum {
    const mappedTracks: TrackEntity[] = tracks.map(
      (track) =>
        new TrackEntity({
          id: new TrackId(track.id),
          name: track.name,
          genre: track.genre.split(',').map((genre) => new Genre(genre)),
          artist: track.artist,
          deleted: track.deleted,
        }),
    );

    const aggregateAlbum = new AggregateAlbum({
      id: new AlbumId(album.id),
      name: album.name,
      tracks: mappedTracks,
      deleted: album.deleted,
    });

    return aggregateAlbum;
  }
}

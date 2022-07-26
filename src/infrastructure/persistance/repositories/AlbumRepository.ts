import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import AlbumId from 'src/domain/value-objects/AlbumId';
import TrackId from 'src/domain/value-objects/TrackId';
import AlbumAggregate from '../../../domain/aggregates/Album';
import IAlbumRepository from '../../../domain/repositories/IAlbumRepository';
import ILogger, { ILoggerSymbol } from '../../../ILogger';
import Album from '../models/Album';
import Track from '../models/Track';
import AlbumDomainMapper from '../mappers/AlbumDomainMapper';
import AlbumPersistanceMapper from '../mappers/AlbumPersistanceMapper';

@Injectable()
export default class AlbumRepository implements IAlbumRepository {
  constructor(
    @Inject(ILoggerSymbol) private readonly logger: ILogger,

    @InjectModel(Album) private albumModel: typeof Album,
    @InjectModel(Track) private trackModel: typeof Track,

    private readonly albumDomainMapper: AlbumDomainMapper,
    private readonly albumPersistanceMapper: AlbumPersistanceMapper,
  ) {}

  public async save(target: AlbumAggregate) {
    this.logger.debug(`Saving album ${target.name}.`);
  }

  public async findById(id: AlbumId) {
    this.logger.debug(`Fetching album ${id}.`);

    return null;
  }

  public async findByTrackId(id: TrackId) {
    this.logger.debug(`Fetching album for track ${id}.`);

    return null;
  }

  public async getAll(count: number | undefined) {
    this.logger.debug(`Listing albums.`);

    const albums = await this.albumModel.findAll({ limit: count });

    // const testAlbum: Album = new Album({
    //     id: "foo",
    //     name: "life changing moments seem minor in pictures",
    //     trackIds: [ "test" ],
    //     deleted: false
    // });

    // const tracks = await this.connection.get().query("SELECT * FROM Track")
    // this.logger.debug(tracks);

    const testTracks: Track[] = [
      new Track({
        id: 'test',
        name: 'Now what?',
        artist: 'C418',
        genre: ['ambient', 'electronica', 'breakbeat'],
        deleted: false,
      }),
    ];

    return [this.mapToAggregateRoot(albums[0], albums[0].tracks)];
  }

  protected mapToDataModel(album: AlbumAggregate) {
    return this.albumPersistanceMapper.mapToDataModel(album);
  }

  protected mapToAggregateRoot(album: Album, tracks: Track[]) {
    return this.albumDomainMapper.mapToDomainModel(album, tracks);
  }
}

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

  public async create(target: AlbumAggregate) {
    this._save(target, true);
  }

  public async save(target: AlbumAggregate) {
    this._save(target);
  }

  private async _save(target: AlbumAggregate, isNewAlbum = false) {
    this.logger.debug(`Saving album ${target.name}.`);

    const { album, tracks } = this.mapToDataModel(target);

    await Promise.all(
      tracks.map(async (track) => {
        track.isNewRecord = isNewAlbum;
        await track.save();
      }),
    );

    album.isNewRecord = isNewAlbum;
    await album.save();
  }

  public async delete(id: AlbumId) {
    await this.trackModel.destroy({ where: { albumId: id.value } });
    await this.albumModel.destroy({ where: { id: id.value } });
  }

  public async findById(id: AlbumId) {
    const album = await this.albumModel.findOne({
      where: { id: id.value },
    });
    const tracks = await this.trackModel.findAll({
      where: { albumId: id.value },
    });

    return this.mapToAggregateRoot(album, tracks);
  }

  public async findByTrackId(id: TrackId) {
    this.logger.debug(`Fetching album for track ${id}.`);

    return null;
  }

  public async getAll(count: number | undefined) {
    this.logger.debug(`Listing albums.`);

    // Grab all albums (limtied by the provided count)
    const albums = await this.albumModel.findAll({
      limit: count,
    });

    // Grab all tracks matching the albums
    const tracks = await this.trackModel.findAll({
      where: { albumId: albums.map((album) => album.id) },
    });

    const albumsAndTracks: { album: Album; tracks: Track[] }[] = albums.map(
      (album) => {
        return {
          album: album,
          tracks: tracks.filter((track) => track.albumId === album.id),
        };
      },
    );

    const albumAggregates = albumsAndTracks.map((albumAndTracks) =>
      this.mapToAggregateRoot(albumAndTracks.album, albumAndTracks.tracks),
    );

    return albumAggregates;
  }

  protected mapToDataModel(album: AlbumAggregate) {
    return this.albumPersistanceMapper.mapToDataModel(album);
  }

  protected mapToAggregateRoot(album: Album, tracks: Track[]) {
    return this.albumDomainMapper.mapToDomainModel(album, tracks);
  }
}

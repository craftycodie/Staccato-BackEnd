import Album from '../aggregates/Album';
import AlbumId from '../value-objects/AlbumId';
import TrackId from '../value-objects/TrackId';

export default interface IAlbumRepository {
  create: (target: Album) => Promise<void>;
  save: (target: Album) => Promise<void>;
  delete: (id: AlbumId) => Promise<void>;
  findById: (id: AlbumId) => Promise<Album | null>;
  findByTrackId: (id: TrackId) => Promise<Album | null>;
  getAll: (count: number | undefined) => Promise<Album[]>;
}

export const IAlbumRepositorySymbol = Symbol('IAlbumRepository');

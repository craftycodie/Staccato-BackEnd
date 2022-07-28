import AlbumId from 'src/domain/value-objects/AlbumId';

export class GetAlbumQuery {
  constructor(public readonly albumId: AlbumId) {}
}

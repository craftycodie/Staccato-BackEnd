import AlbumId from 'src/domain/value-objects/AlbumId';

export class DeleteAlbumCommand {
  constructor(public readonly albumId: AlbumId) {}
}

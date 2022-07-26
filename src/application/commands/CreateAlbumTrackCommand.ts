import AlbumId from 'src/domain/value-objects/AlbumId';
import Genre from 'src/domain/value-objects/Genre';

export class CreateAlbumTrackCommand {
  constructor(
    public readonly albumId: AlbumId,
    public readonly name: string,
    public readonly artist: string,
    public readonly genre: Genre[],
  ) {}
}

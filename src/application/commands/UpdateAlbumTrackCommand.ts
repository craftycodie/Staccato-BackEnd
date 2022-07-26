import AlbumId from 'src/domain/value-objects/AlbumId';
import Genre from 'src/domain/value-objects/Genre';
import TrackId from 'src/domain/value-objects/TrackId';

export class UpdateAlbumTrackCommand {
  constructor(
    public readonly albumId: AlbumId,
    public readonly trackId: TrackId,
    public readonly name: string,
    public readonly artist: string,
    public readonly genre: Genre[],
  ) {}
}

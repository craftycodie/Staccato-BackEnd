import AlbumId from 'src/domain/value-objects/AlbumId';
import TrackId from 'src/domain/value-objects/TrackId';

export class DeleteAlbumTracksCommand {
  constructor(
    public readonly albumId: AlbumId,
    public readonly trackIds: TrackId[],
  ) {}
}

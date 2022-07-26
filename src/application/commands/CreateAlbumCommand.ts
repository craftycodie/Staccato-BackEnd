import Genre from 'src/domain/value-objects/Genre';

export class CreateAlbumCommandTrack {
  constructor(
    public readonly name: string,
    public readonly artist: string,
    public readonly genre: Genre[],
  ) {}
}

export class CreateAlbumCommand {
  constructor(
    public readonly name: string,
    public readonly tracks?: CreateAlbumCommandTrack[],
  ) {}
}

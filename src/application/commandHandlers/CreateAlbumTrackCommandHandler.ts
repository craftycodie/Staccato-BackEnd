import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Album from 'src/domain/aggregates/Album';
import Track from 'src/domain/entities/Track';
import IAlbumRepository, {
  IAlbumRepositorySymbol,
} from 'src/domain/repositories/IAlbumRepository';
import { CreateAlbumTrackCommand } from '../commands/CreateAlbumTrackCommand';

@CommandHandler(CreateAlbumTrackCommand)
export class CreateAlbumTrackCommandHandler
  implements ICommandHandler<CreateAlbumTrackCommand>
{
  constructor(
    @Inject(IAlbumRepositorySymbol) private repository: IAlbumRepository,
  ) {}

  async execute(command: CreateAlbumTrackCommand) {
    const album = await this.repository.findById(command.albumId);

    album.addTrack(
      Track.create({
        name: command.name,
        artist: command.artist,
        genre: command.genre,
      }),
    );

    return await this.repository.save(album);
  }
}

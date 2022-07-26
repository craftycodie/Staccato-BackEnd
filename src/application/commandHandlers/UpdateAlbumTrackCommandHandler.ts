import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import IAlbumRepository, {
  IAlbumRepositorySymbol,
} from 'src/domain/repositories/IAlbumRepository';
import { UpdateAlbumTrackCommand } from '../commands/UpdateAlbumTrackCommand';

@CommandHandler(UpdateAlbumTrackCommand)
export class UpdateAlbumTrackCommandHandler
  implements ICommandHandler<UpdateAlbumTrackCommand>
{
  constructor(
    @Inject(IAlbumRepositorySymbol) private repository: IAlbumRepository,
  ) {}

  async execute(command: UpdateAlbumTrackCommand) {
    const album = await this.repository.findById(command.albumId);

    album.updateTrack(command.trackId, {
      name: command.name,
      artist: command.artist,
      genre: command.genre,
    });

    return await this.repository.save(album);
  }
}

import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import IAlbumRepository, {
  IAlbumRepositorySymbol,
} from 'src/domain/repositories/IAlbumRepository';
import { DeleteAlbumTracksCommand } from '../commands/DeleteAlbumTracksCommand';

@CommandHandler(DeleteAlbumTracksCommand)
export class DeleteAlbumTracksCommandHandler
  implements ICommandHandler<DeleteAlbumTracksCommand>
{
  constructor(
    @Inject(IAlbumRepositorySymbol) private repository: IAlbumRepository,
  ) {}

  async execute(command: DeleteAlbumTracksCommand) {
    const album = await this.repository.findById(command.albumId);
    album.deleteTracks(command.trackIds);
    return await this.repository.save(album);
  }
}

import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import IAlbumRepository, {
  IAlbumRepositorySymbol,
} from 'src/domain/repositories/IAlbumRepository';
import { DeleteAlbumCommand } from '../commands/DeleteAlbumCommand';
import { ListAlbumsQuery } from '../queries/ListAlbumsQuery';

@CommandHandler(DeleteAlbumCommand)
export class DeleteAlbumCommandHandler
  implements ICommandHandler<DeleteAlbumCommand>
{
  constructor(
    @Inject(IAlbumRepositorySymbol) private repository: IAlbumRepository,
  ) {}

  async execute(command: DeleteAlbumCommand) {
    const album = await this.repository.findById(command.albumId);
    album.delete();
    await this.repository.save(album);
  }
}

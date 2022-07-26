import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import IAlbumRepository, {
  IAlbumRepositorySymbol,
} from 'src/domain/repositories/IAlbumRepository';
import { DeleteAlbumCommand } from '../commands/DeleteAlbumCommand';

@CommandHandler(DeleteAlbumCommand)
export class DeleteAlbumCommandHandler
  implements ICommandHandler<DeleteAlbumCommand>
{
  constructor(
    @Inject(IAlbumRepositorySymbol) private repository: IAlbumRepository,
  ) {}

  async execute(command: DeleteAlbumCommand) {
    await this.repository.delete(command.albumId);
  }
}

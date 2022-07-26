import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Album from 'src/domain/aggregates/Album';
import Track from 'src/domain/entities/Track';
import IAlbumRepository, {
  IAlbumRepositorySymbol,
} from 'src/domain/repositories/IAlbumRepository';
import { CreateAlbumCommand } from '../commands/CreateAlbumCommand';

@CommandHandler(CreateAlbumCommand)
export class CreateAlbumCommandHandler
  implements ICommandHandler<CreateAlbumCommand>
{
  constructor(
    @Inject(IAlbumRepositorySymbol) private repository: IAlbumRepository,
  ) {}

  async execute(command: CreateAlbumCommand) {
    const album = Album.create({
      name: command.name,
      tracks: command.tracks
        ? command.tracks.map((track) =>
            Track.create({
              name: track.name,
              artist: track.artist,
              genre: track.genre,
            }),
          )
        : [],
    });

    return await this.repository.save(album);
  }
}

import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PersistanceModule } from 'src/infrastructure/persistance/persistance.module';
import { CreateAlbumCommandHandler } from './commandHandlers/CreateAlbumCommandHandler';
import { CreateAlbumTrackCommandHandler } from './commandHandlers/CreateAlbumTrackCommandHandler';
import { DeleteAlbumCommandHandler } from './commandHandlers/DeleteAlbumCommandHandler';
import { DeleteAlbumTracksCommandHandler } from './commandHandlers/DeleteAlbumTracksCommandHandler';
import { UpdateAlbumTrackCommandHandler } from './commandHandlers/UpdateAlbumTrackCommandHandler';
import { GetAlbumQueryHandler } from './queryHandlers/GetAlbumQueryHandler';
import { ListAlbumsQueryHandler } from './queryHandlers/ListAlbumsQueryHandler';

export const QueryHandlers = [ListAlbumsQueryHandler, GetAlbumQueryHandler];
export const CommandHandlers = [
  DeleteAlbumCommandHandler,
  CreateAlbumCommandHandler,
  CreateAlbumTrackCommandHandler,
  DeleteAlbumTracksCommandHandler,
  UpdateAlbumTrackCommandHandler,
];

@Module({
  imports: [CqrsModule, PersistanceModule],
  providers: [...QueryHandlers, ...CommandHandlers],
})
export class ApplicationModule {}

import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PersistanceModule } from 'src/infrastructure/persistance/persistance.module';
import { DeleteAlbumCommandHandler } from './commandHandlers/DeleteAlbumCommandHandler';
import { ListAlbumsQueryHandler } from './queryHandlers/ListAlbumsQueryHandler';

export const QueryHandlers = [ListAlbumsQueryHandler];
export const CommandHandlers = [DeleteAlbumCommandHandler];

@Module({
  imports: [CqrsModule, PersistanceModule],
  providers: [...QueryHandlers, ...CommandHandlers],
})
export class ApplicationModule {}

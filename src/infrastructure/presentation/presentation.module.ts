import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AlbumController } from './controllers/album.controller';

@Module({
  imports: [CqrsModule],
  controllers: [AlbumController],
  providers: [],
})
export class PresentationModule {}

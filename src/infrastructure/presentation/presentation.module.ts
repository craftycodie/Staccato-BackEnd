import { Module } from '@nestjs/common';
import { AlbumController } from './controllers/album.controller';

@Module({
    imports: [],
    controllers: [AlbumController],
    providers: [],
  })
export class PresentationModule {}

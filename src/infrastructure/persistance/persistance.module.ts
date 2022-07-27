import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { IAlbumRepositorySymbol } from 'src/domain/repositories/IAlbumRepository';
import AlbumModel from './models/AlbumModel';
import TrackModel from './models/TrackModel';
import AlbumDomainMapper from './mappers/AlbumDomainMapper';
import AlbumPersistanceMapper from './mappers/AlbumPersistanceMapper';
import AlbumRepository from './repositories/AlbumRepository';
import PersistanceSettings from './settings/PersistanceSettings';

const persistanceSettings = new PersistanceSettings().get();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: persistanceSettings.host,
      port: persistanceSettings.port,
      username: persistanceSettings.user,
      password: persistanceSettings.password,
      database: persistanceSettings.database,
      models: [AlbumModel, TrackModel],
    }),
    SequelizeModule.forFeature([AlbumModel, TrackModel]),
  ],
  providers: [
    {
      provide: IAlbumRepositorySymbol,
      useClass: AlbumRepository,
    },
    AlbumDomainMapper,
    AlbumPersistanceMapper,
  ],
  exports: [IAlbumRepositorySymbol],
})
export class PersistanceModule {}

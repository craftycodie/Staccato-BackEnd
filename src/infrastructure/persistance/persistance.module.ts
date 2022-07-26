import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { IAlbumRepositorySymbol } from 'src/domain/repositories/IAlbumRepository';
import Album from './datamodels/Album';
import Track from './datamodels/Track';
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
          port: 3306,
          username: persistanceSettings.user,
          password: persistanceSettings.password,
          database: persistanceSettings.database,
          models: [Album, Track],
        }),
        SequelizeModule.forFeature([Album, Track]),
      ],
    providers: [
        {
            provide: IAlbumRepositorySymbol,
            useClass: AlbumRepository
        },
        AlbumDomainMapper,
        AlbumPersistanceMapper
    ],
    exports: [IAlbumRepositorySymbol]
})
export class PersistanceModule {}

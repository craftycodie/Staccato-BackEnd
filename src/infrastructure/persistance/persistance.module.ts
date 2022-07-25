import { Module } from '@nestjs/common';
import { IAlbumRepositorySymbol } from 'src/domain/repositories/IAlbumRepository';
import AlbumDomainMapper from './mappers/AlbumDomainMapper';
import AlbumPersistanceMapper from './mappers/AlbumPersistanceMapper';
import AlbumRepository from './repositories/AlbumRepository';

@Module({
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

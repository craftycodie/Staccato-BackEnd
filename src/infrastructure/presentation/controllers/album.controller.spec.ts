import { Test, TestingModule } from '@nestjs/testing';
import { AlbumController } from './album.controller';
import { StaccatoModule } from '../../../staccato.module';
import { CqrsModule } from '@nestjs/cqrs';
import {
  CommandHandlers,
  QueryHandlers,
} from 'src/application/application.module';
import { IAlbumRepositorySymbol } from 'src/domain/repositories/IAlbumRepository';

describe('AlbumController', () => {
  let albumController: AlbumController;

  const dummyAlbumsResponse = [
    {
      id: 'foo',
      name: 'bar album',
      tracks: [],
    },
  ];

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [StaccatoModule, CqrsModule],
      controllers: [AlbumController],
      providers: [
        ...QueryHandlers,
        ...CommandHandlers,
        {
          provide: IAlbumRepositorySymbol,
          useValue: {
            getAll: async () => {
              return dummyAlbumsResponse;
            },
          },
        },
      ],
    }).compile();

    albumController = app.get<AlbumController>(AlbumController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await albumController.getAlbums()).toBe(dummyAlbumsResponse);
    });
  });
});

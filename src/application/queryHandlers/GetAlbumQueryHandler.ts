import { Inject } from '@nestjs/common';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import IAlbumRepository, {
  IAlbumRepositorySymbol,
} from 'src/domain/repositories/IAlbumRepository';
import { GetAlbumQuery } from '../queries/GetAlbumQuery';

@QueryHandler(GetAlbumQuery)
export class GetAlbumQueryHandler implements IQueryHandler<GetAlbumQuery> {
  constructor(
    @Inject(IAlbumRepositorySymbol) private repository: IAlbumRepository,
  ) {}

  async execute(query: GetAlbumQuery) {
    return await this.repository.findById(query.albumId);
  }
}

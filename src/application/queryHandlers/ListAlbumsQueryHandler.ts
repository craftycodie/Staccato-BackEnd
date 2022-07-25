import { inject, injectable } from "inversify";
import Album from "../../domain/aggregates/Album";
import PersistanceDependencyIdentifiers from "../../infrastructure/persistance/PersistanceDependencyIdentifiers";
import AlbumRepository from "../../infrastructure/persistance/repositories/AlbumRepository";
import IQueryHandler from "../IQueryHandler";
import { ListAlbumsQuery } from "../queries/ListAlbumsQuery";

@injectable()
export class ListAlbumsQueryHandler implements IQueryHandler<ListAlbumsQuery, Promise<Album[]>> {
    constructor(
        @inject(PersistanceDependencyIdentifiers.AlbumRepository) private repository: AlbumRepository
    ) {}

    async execute(query: ListAlbumsQuery) {
        return await this.repository.getAll(query.count);
    }
}

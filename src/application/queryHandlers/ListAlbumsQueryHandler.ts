import { Inject } from "@nestjs/common";
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import IAlbumRepository, { IAlbumRepositorySymbol } from "src/domain/repositories/IAlbumRepository";
import { ListAlbumsQuery } from "../queries/ListAlbumsQuery";

@QueryHandler(ListAlbumsQuery)
export class ListAlbumsQueryHandler implements IQueryHandler<ListAlbumsQuery> {
    constructor(
        @Inject(IAlbumRepositorySymbol) private repository: IAlbumRepository
    ) {}

    async execute(command: ListAlbumsQuery) {
        return await this.repository.getAll(command.count)
    }
}


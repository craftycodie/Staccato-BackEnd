// import { Injectable } from "@nestjs/common";
// import Album from "../../domain/aggregates/Album";
// import AlbumRepository from "../../infrastructure/persistance/repositories/AlbumRepository";
// import IQueryHandler from "../IQueryHandler";
// import { ListAlbumsQuery } from "../queries/ListAlbumsQuery";

// @Injectable()
// export class ListAlbumsQueryHandler implements IQueryHandler<ListAlbumsQuery, Promise<Album[]>> {
//     constructor(
//         private repository: AlbumRepository
//     ) {}

//     async execute(query: ListAlbumsQuery) {
//         return await this.repository.getAll(query.count);
//     }
// }

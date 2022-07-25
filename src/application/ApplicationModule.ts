import { Container } from "inversify";
import Album from "../domain/aggregates/Album";
import IModule from "../IModule";
import ApplicationDependencyIdentifiers from "./ApplicationDependencyIdentifiers";
import IQueryHandler from "./IQueryHandler";
import { ListAlbumsQuery } from "./queries/ListAlbumsQuery";
import { ListAlbumsQueryHandler } from "./queryHandlers/ListAlbumsQueryHandler";

export default class ApplicationModule implements IModule {
    register (container: Container) {
        // TODO: switch to next and import CQRS
        container.bind<IQueryHandler<ListAlbumsQuery, Promise<Album[]>>>(ApplicationDependencyIdentifiers.ListAlbumsQueryHandler).to(ListAlbumsQueryHandler);
    }
}
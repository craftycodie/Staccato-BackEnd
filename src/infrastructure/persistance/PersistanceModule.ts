import { Container } from "inversify";
import IModule from "../../IModule";
import AlbumDomainMapper from "./mappers/AlbumDomainMapper";
import AlbumPersistanceMapper from "./mappers/AlbumPersistanceMapper";
import MySQLConnection from "./MySQLConnection";
import PersistanceDependencyIdentifiers from "./PersistanceDependencyIdentifiers";
import AlbumRepository from "./repositories/AlbumRepository";
import IPersistanceSettings from "./settings/IPersistanceSettings";
import PersistanceSettings from "./settings/PersistanceSettings";

export default class PersistanceModule implements IModule {
    register (container: Container) {
        container.bind<IPersistanceSettings>(PersistanceDependencyIdentifiers.PersistanceSettings).to(PersistanceSettings);
        container.bind<MySQLConnection>(PersistanceDependencyIdentifiers.MySQLConnection).to(MySQLConnection);
        container.bind<AlbumRepository>(PersistanceDependencyIdentifiers.AlbumRepository).to(AlbumRepository);
        container.bind<AlbumDomainMapper>(PersistanceDependencyIdentifiers.AlbumDomainMapper).to(AlbumDomainMapper);
        container.bind<AlbumPersistanceMapper>(PersistanceDependencyIdentifiers.AlbumPersistanceMapper).to(AlbumPersistanceMapper);

    }
}
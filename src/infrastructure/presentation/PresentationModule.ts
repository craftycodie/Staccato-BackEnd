import IModule from "../../IModule";
import express, { Express } from 'express'
import Server from "./Server";
import PresentationSettings from "./settings/PresentationSettings";
import { Container } from "inversify";
import IController from "./controllers/IController";
import AlbumController from "./controllers/AlbumController";
import PresentationDependencyIdentifiers from "./PresentationDependencyIdentifiers";
import IPresentationSettings from "./settings/IPresentationSettings";

export default class PresentationModule implements IModule {
    register (container: Container) {
        container.bind<Express>(PresentationDependencyIdentifiers.Express).toConstantValue(express());
        container.bind<IPresentationSettings>(PresentationDependencyIdentifiers.PresentationSettings).to(PresentationSettings);
        container.bind<Server>(PresentationDependencyIdentifiers.Server).to(Server);
        container.bind<IController>(PresentationDependencyIdentifiers.IController).to(AlbumController).whenTargetNamed("albumController");
    }
}
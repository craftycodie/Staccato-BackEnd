import "reflect-metadata";

import { Container } from "inversify";

import PresentationModule from "./infrastructure/presentation/PresentationModule";
import ApplicationModule from "./application/ApplicationModule";
import PersistanceModule from "./infrastructure/persistance/PersistanceModule";
import DomainModule from "./domain/DomainModule";
import ILogger from "./ILogger";
import ConsoleLogger from "./ConsoleLogger";
import IModule from "./IModule";
import CoreDependencyIdentifiers from "./CoreDependencyIdentifiers";

export default class CoreModule implements IModule {
  constructor() {
    this.container = new Container();
    this.register(this.container);
  }
  
  public readonly container: Container;

  register(container: Container): void {
    container.bind<ILogger>(CoreDependencyIdentifiers.ILogger).to(ConsoleLogger);

    new DomainModule().register(container);
    new ApplicationModule().register(container);
    new PresentationModule().register(container);
    new PersistanceModule().register(container);
  }
}
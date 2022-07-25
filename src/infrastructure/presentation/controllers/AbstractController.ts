import { Express } from 'express'
import { inject, injectable } from "inversify";
import ApplicationDependencyIdentifiers from '../../../application/ApplicationDependencyIdentifiers';
import { ListAlbumsQueryHandler } from '../../../application/queryHandlers/ListAlbumsQueryHandler';
import CoreDependencyIdentifiers from '../../../CoreDependencyIdentifiers';
import ILogger from '../../../ILogger';
import PresentationDependencyIdentifiers from '../PresentationDependencyIdentifiers';

import IController from "./IController";

@injectable()
export default abstract class AbstractController implements IController {
    protected express: Express;
    protected logger: ILogger;
    protected listAlbumsQueryHandler: ListAlbumsQueryHandler;

    constructor(
        @inject(PresentationDependencyIdentifiers.Express) express: Express,
        @inject(CoreDependencyIdentifiers.ILogger) logger: ILogger,
        @inject(ApplicationDependencyIdentifiers.ListAlbumsQueryHandler) listAlbumsQueryHandler: ListAlbumsQueryHandler,
    ) {
        this.express = express;
        this.logger = logger;
        this.listAlbumsQueryHandler = listAlbumsQueryHandler;
    }

    public abstract register(): void;
}
import { Express } from 'express'
import { inject, injectable, named } from 'inversify';
import CoreDependencyIdentifiers from '../../CoreDependencyIdentifiers';
import ILogger from '../../ILogger';
import IController from './controllers/IController';
import PresentationDependencyIdentifiers from './PresentationDependencyIdentifiers';
import IPresentationSettings from './settings/IPresentationSettings';

@injectable()
export default class Server {
    constructor(
        @inject(CoreDependencyIdentifiers.ILogger) logger: ILogger,
        @inject(PresentationDependencyIdentifiers.Express) express: Express,
        @inject(PresentationDependencyIdentifiers.PresentationSettings) settings: IPresentationSettings,

        @inject(PresentationDependencyIdentifiers.IController) @named("albumController") albumController: IController,
    ) {
        this.logger = logger;
        this.settings = settings;
        this.express = express;

        this.albumController = albumController;
    }

    private logger: ILogger;
    private settings: IPresentationSettings;
    private express: Express;

    private albumController: IController;

    private registerRoutes(): void {
        this.albumController.register();
    }

    async start() {
        this.registerRoutes();

        this.express.listen(this.settings.get().port, () => {
            this.logger.info(`Listening on port ${this.settings.get().port}`)
        });
    }
}
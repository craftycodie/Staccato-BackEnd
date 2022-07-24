import CoreDependencyIdentifiers from './src/CoreDependencyIdentifiers';
import ILogger from './src/ILogger';
import Server from './src/infrastructure/presentation/Server';
import CoreModule from './src/CoreModule';
import PresentationDependencyIdentifiers from './src/infrastructure/presentation/PresentationDependencyIdentifiers';

const container = new CoreModule().container;

const server = container.get<Server>(PresentationDependencyIdentifiers.Server);
const logger = container.get<ILogger>(CoreDependencyIdentifiers.ILogger);

logger.debug("Starting server...")
server.start();
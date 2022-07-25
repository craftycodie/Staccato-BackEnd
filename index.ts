import CoreDependencyIdentifiers from './src/CoreDependencyIdentifiers';
import ILogger from './src/ILogger';
import Server from './src/infrastructure/presentation/Server';
import CoreModule from './src/CoreModule';
import PresentationDependencyIdentifiers from './src/infrastructure/presentation/PresentationDependencyIdentifiers';
import MySQLConnection from './src/infrastructure/persistance/MySQLConnection';
import PersistanceDependencyIdentifiers from './src/infrastructure/persistance/PersistanceDependencyIdentifiers';

const container = new CoreModule().container;

const server = container.get<Server>(PresentationDependencyIdentifiers.Server);
const mysqlConnection = container.get<MySQLConnection>(PersistanceDependencyIdentifiers.MySQLConnection);

const logger = container.get<ILogger>(CoreDependencyIdentifiers.ILogger);

const main = async () => {
    logger.debug("Connecting to MySQL Database...")
    await mysqlConnection.connect();
    
    logger.debug("Starting server...")
    await server.start();
}

main();
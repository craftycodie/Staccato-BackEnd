import { inject, injectable } from 'inversify';
import { Connection, createConnection } from 'mysql2/promise'
import CoreDependencyIdentifiers from '../../CoreDependencyIdentifiers';
import ILogger from '../../ILogger';
import PersistanceDependencyIdentifiers from './PersistanceDependencyIdentifiers';
import IPersistanceSettings from './settings/IPersistanceSettings';

@injectable()
export default class MySQLConnection {
    constructor(
        @inject(CoreDependencyIdentifiers.ILogger) logger: ILogger,
        @inject(PersistanceDependencyIdentifiers.PersistanceSettings) settings: IPersistanceSettings,
    ) {
        this.logger = logger;
        this.settings = settings;
    }

    private logger: ILogger;
    private settings: IPersistanceSettings;

    private connection: Connection | undefined;

    public get = (): Connection => {
        if (this.connection == undefined) {
            this.logger.warn("Attempted to get MySQL connection before connecting.");
            throw new Error("MySQL Connection is not established!!!")
        }

        return this.connection!;
    }

    async connect() {
        this.connection = await createConnection({
            host     : this.settings.get().host,
            user     : this.settings.get().user,
            password : this.settings.get().password,
            database : this.settings.get().database
        });

        try {
            await this.connection.connect();
            this.logger.info(`Connected to database at ${this.settings.get().host}`)

        } catch (error) {
            this.logger.warn(error as string);
        }
    }
    
    async disconnect() {
        if (this.connection != undefined)
            this.connection!.end();
    }
}


  
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 

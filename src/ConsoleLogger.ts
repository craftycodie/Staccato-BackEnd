import { injectable } from "inversify";
import ILogger from "./ILogger";

@injectable()
export default class ConsoleLogger implements ILogger {
    public debug(info: any) {
        console.info(info);
    }

    public info(info: any) {
        console.info(info);
    }

    public warn(info: any) {
        console.warn(info);
    }
}
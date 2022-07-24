import { injectable } from "inversify";
import ILogger from "./ILogger";

@injectable()
export default class ConsoleLogger implements ILogger {
    public debug(info: string) {
        console.info(info);
    }

    public info(info: string) {
        console.info(info);
    }
}
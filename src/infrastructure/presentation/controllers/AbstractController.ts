import { Express } from 'express'
import { inject, injectable } from "inversify";
import PresentationDependencyIdentifiers from '../PresentationDependencyIdentifiers';

import IController from "./IController";

@injectable()
export default abstract class AbstractController implements IController {
    protected express: Express;

    constructor(@inject(PresentationDependencyIdentifiers.Express) express: Express) {
        this.express = express;
    }

    public abstract register(): void;
}
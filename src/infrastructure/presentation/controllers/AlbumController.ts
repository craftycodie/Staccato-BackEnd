import { Request, Response } from "express";
import { injectable } from "inversify";
import AbstractController from "./AbstractController";

@injectable()
export default class AlbumController extends AbstractController {
    public register() {
        this.express.get("/", this.indexRoute)
    }

    private indexRoute(req: Request, res: Response) {
        res.send("Hello, World!")
    }
}
import { Request, Response } from "express";
import { injectable } from "inversify";
import { ListAlbumsQuery } from "../../../application/queries/ListAlbumsQuery";
import AbstractController from "./AbstractController";

@injectable()
export default class AlbumController extends AbstractController {
    public register() {
        this.express.get("/", this.indexRoute)
    }

    private indexRoute = async (req: Request, res: Response) => {
        res.send(JSON.stringify(await this.listAlbumsQueryHandler.execute(new ListAlbumsQuery(10))))
        res.contentType("application/json");
    }
}
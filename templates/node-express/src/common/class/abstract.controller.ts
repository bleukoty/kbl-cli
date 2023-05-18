import { Request, Response } from "express";

export abstract class AbstractController {

    protected static postResponse(response: Response, data: any) {
        response.status(200).send({ data });
    }
}
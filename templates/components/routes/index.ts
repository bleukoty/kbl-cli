import { Router, Request, Response } from "express";
import app from "../app";

/*
    ######## ROUTER router_name 
*/

const router = Router();

router.get("/", (req:Request, res: Response) => {
    res.send("Api get request works...");
});

router.post("/", (req:Request, res: Response) => {
    res.send("Api post request works...");
});

router.put("/", (req:Request, res: Response) => {
    res.send("Api put request works...");
});

router.delete("/", (req:Request, res: Response) => {
    res.send("Api delete request works...");
});

app.use("/router_name", router);
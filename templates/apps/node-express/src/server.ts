import app from "./app";
import http from "http";

// load routes
import "./routes";
import { Response } from "express";

// handlers
app.use((error: any, req: any, res: Response, next:any) => {
    console.log("error ", error);
    res.send("internal server error");
});


const PORT = process.env.PORT || 3000;
const httpServer = http.createServer(app);
httpServer.listen(PORT, () => console.log(`app is running on port: ${PORT}...`));
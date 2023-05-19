import Express from "express";
import app from "../app";
import { Error } from '../common/exceptions/error';

const router = Express.Router();

router.get("/sign-in", (req, res) => {
  res.send("welcome to sign-in");
});

router.post("/sign-up", (req, res, next) => {
  try {
    throw new Error("method not implemented", "", "");
  } catch (error) {
    next(error);
  }
});

router.put("/change-password", (req, res) => {});

router.put("/init-change-password", (req, res) => {});

app.use("/auth", router);

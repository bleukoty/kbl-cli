import { sleep } from "./utils";
import figlet from "figlet";
import gradient = require("gradient-string");

const GREETINGS = "Welcome to kbl-cli";

export default async function welcome() {
    figlet(GREETINGS, (error: any, data: any) => {
        console.log(gradient.pastel.multiline("Welcome to kbl-cli..."));
    });
    await sleep();
}
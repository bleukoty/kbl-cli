import { sleep } from "./utils";
import chalk from "chalk";

const GREETINGS = "Welcome to kbl-cli";

export default async function welcome() {
    console.log(chalk.blue(GREETINGS));
    await sleep();
}
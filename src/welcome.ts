import { sleep } from "./utils";

const GREETINGS = "Welcome to kbl-cli";

export default async function welcome() {
    console.log(GREETINGS);
    await sleep();
}
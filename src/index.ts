import welcome from "./welcome";
import {displayMenu} from "./menu";

async function start() {
    await welcome()
    await displayMenu();
    console.log("I have to display now a menu 😅");
}

start();





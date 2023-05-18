#!/usr/bin/env node

import { displayMainMenu, displayAppMenu, displayConfigurationMenu, displayComponentMenu } from "./menus";
import { getUserCurrentFolder } from "./utils";



async function start() {
    
    process.env.CURRENT_USER_FOLDER = await getUserCurrentFolder();

    var exit = false;
    var moduleChoice = "";
    while (exit != true) {
        moduleChoice = await displayMainMenu();
        switch(moduleChoice) {
            case "Application": {
                await displayAppMenu(); break;
            }
            case "Configuration": {
                await displayConfigurationMenu(); break;
            }
            case "Component": {
                await displayComponentMenu(); break;
            }
        }
        exit = true;
    } 
}

start();





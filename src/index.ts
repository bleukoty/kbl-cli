#!/usr/bin/env node

import { displayMainMenu, displayAppMenu } from "./menus";
import childProcess from 'child_process';
import chalk from "chalk";
import { sleep } from "./utils";

var moduleChoice, appType, ans3 = "";
async function start() {

    childProcess.exec("pwd", (error: any, stdout: any, stderr: any) => {
        process.env.CURRENT_USER_FOLDER =  (stdout as string).replace("\n", "");
    });

    var exit = false;    
    label1: while (exit != true) {
        moduleChoice = await displayMainMenu(); // Top level
        if(moduleChoice == "Application") {
            appType = await displayAppMenu();
        } else {
            console.log(chalk.red("Only module Application are available"));
            await sleep(1000);
            continue label1
        }
        exit = true;
    } 
}

start();





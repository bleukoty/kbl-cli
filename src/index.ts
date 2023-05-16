#!/usr/bin/env node
import welcome from "./welcome";
import { displayMenu } from "./menu";
import childProcess from 'child_process';


async function start() {
    childProcess.exec("pwd", (error: any, stdout: any, stderr: any) => {
        process.env.CURRENT_USER_FOLDER =  (stdout as string).replace("\n", "");
    });
    
    await welcome()
    await displayMenu();
}

start();





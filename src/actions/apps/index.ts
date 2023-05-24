#!/usr/bin/env node
import path from "path";
import fs from "fs";
import childProcess from "child_process";
import { replaceExpression } from "../../utils";
import fse from "fs-extra";
import nanospinner from 'nanospinner';


export async function createExpressApp(appName: string, appType: string, appPort = 3000) {
    
    var spinnerInstall: any = "";
    try { 
        // 0. Variables initialization
        const CURRENT_USER_FOLDER = process.env.CURRENT_USER_FOLDER as string;
        const APP_FOLDER = path.resolve(CURRENT_USER_FOLDER, appName);
        const APP_TEMPLATE = path.resolve(__dirname, `../../../templates/apps/${appType}`);
        const APP_FOLDER_ENV= path.resolve(APP_FOLDER, ".env");
        const APP_FOLDER_PACKAGE_JSON = path.resolve(APP_FOLDER, "package.json")
        
        // 1. create application folder
        var spinnerCreation = nanospinner.createSpinner(`create folder ${appName}`);
        spinnerCreation.start();
        fs.mkdirSync(APP_FOLDER);
        spinnerCreation.success({ text: `create folder ${appName}` });
        
        // 2. duplicate express-app's template into current folder
        fse.copySync(APP_TEMPLATE, APP_FOLDER);

        //3. apply custom information like app_name, app_port, etc.
        replaceExpression(APP_FOLDER_ENV, "app_name", appName);
        replaceExpression(APP_FOLDER_PACKAGE_JSON, "app_name", appName);
        replaceExpression(APP_FOLDER_ENV, "app_port", appPort.toString());
    
        // 4. init tsc and node project and install package express, @types/express
        spinnerInstall = nanospinner.createSpinner(`package install`);
        spinnerInstall.start();
        const NODE_APP_INSTALL_CMD = `cd ${APP_FOLDER} && npm install express cors && npm install typescript ts-node @types/node @types/express @types/cors nodemon --save-dev \
        && npm install cors dotenv prisma`;
        childProcess.exec(NODE_APP_INSTALL_CMD, (error: any, stdout: any, stderr: any) => {
            spinnerInstall.success({text: `create successful ${appName} 🙂` });
        });
    } catch(err: any) {
        console.log("error : ", err);
    }  
}
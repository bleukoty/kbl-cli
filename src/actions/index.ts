#!/usr/bin/env node
import path from "path";
import fs from "fs";
import childProcess from "child_process";
import fse from "fs-extra";
import nanospinner from 'nanospinner';

const CMD_FOLDER = path.resolve(__dirname, `../../cmd`);

export async function createExpressApp(appName: string, appType: string, appPort = 3000) {
    
    var spinnerInstall: any = "";
    try { 
        // 0. Variables initialization
        const CURRENT_USER_FOLDER = process.env.CURRENT_USER_FOLDER as string;
        const APP_FOLDER = path.resolve(CURRENT_USER_FOLDER, appName);
        const APP_TEMPLATE = path.resolve(__dirname, `../../templates/${appType}`);
        const APP_FOLDER_SRC_INDEX = path.resolve(APP_FOLDER, "src/index.ts");
        const APP_FOLDER_PACKAGE_JSON = path.resolve(APP_FOLDER, "package.json")
        
        // 1. create a folder
        var spinnerCreation = nanospinner.createSpinner(`create application folder ${appName}`);
        spinnerCreation.start();
        fs.mkdirSync(APP_FOLDER);
        
        // 2. duplicate express-app's template into current
        fse.copySync(APP_TEMPLATE, APP_FOLDER);

        //3. rename all files with **/*.ts.txt or *.json.txt => *.ts or *.json
        const renameFakeTxtFilesCmd = "sh " +path.resolve(CMD_FOLDER, `rename-fake-txt-files.sh ${APP_FOLDER}`); 
        childProcess.execSync(renameFakeTxtFilesCmd);
    
        //4. apply custom information like app_name, app_port, etc.
        const substituteAppNameCmd = "sh " + path.resolve(CMD_FOLDER, `substitute-expression.sh app_name ${appName} ${APP_FOLDER_SRC_INDEX} ${APP_FOLDER_PACKAGE_JSON}` );
        childProcess.execSync(substituteAppNameCmd);
    
        const substituteAppPortCmd = "sh " + path.resolve(CMD_FOLDER, `substitute-expression.sh app_port ${appPort} ${APP_FOLDER_SRC_INDEX}` );
        childProcess.execSync(substituteAppPortCmd);
        spinnerCreation.success();
    
        // 5. init tsc and node project and install package express, @types/express
        spinnerInstall = nanospinner.createSpinner(`package install`);
        spinnerInstall.start();
        const init_express_app_cmd = "sh " + path.resolve(CMD_FOLDER, `init-express-app.sh ${APP_FOLDER}`);
        await childProcess.exec(init_express_app_cmd, (error: any, stdout: any, stderr: any) => {
            if(error != null) {
                spinnerInstall.error({text: "build failed " + error});
            } else {
                spinnerInstall.success({text: `create successful ${appName} 🙂` });
            }
        });
    } catch(err: any) {
        console.log("error : ", err);
    }  
}
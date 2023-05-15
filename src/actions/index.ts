#!/usr/bin/env node
import path from "path";
import fs from "fs";
import childProcess from "child_process";
import fse from "fs-extra";

const CMD_FOLDER = path.resolve(__dirname, `../../cmd`);

export async function createExpressApp(appName: string, appType: string, appPort = 3000) {
    
    const CURRENT_USER_FOLDER = process.env.CURRENT_USER_FOLDER as string;
    var APP_FOLDER = path.resolve(CURRENT_USER_FOLDER, appName);
    var APP_TEMPLATE = path.resolve(__dirname, `../../templates/${appType}`);
    var app_tmp_index = path.resolve(APP_FOLDER, "index.tmp.ts");
    var app_index = path.resolve(APP_FOLDER, "index.ts");
    
    // childProcess.exec("sh " + path.resolve(CMD_FOLDER,"test.sh"), (error: any, stdout:any, stderr: any) => {
    //     if(error != null) console.log("error", error);
    //     console.log("stdout ", stdout);
    // });
    
    // 1. create a folder
    fs.mkdirSync(APP_FOLDER);

    // 2. duplicate express-app's template into current
    fse.copySync(APP_TEMPLATE, APP_FOLDER);
    
    //3. rename all files with **/*.ts.txt or *.json.txt
    const renameFakeTxtFilesCmd = path.resolve(CMD_FOLDER, `rename-fake-txt-files.sh ${APP_FOLDER}`); 
    childProcess.execSync(renameFakeTxtFilesCmd);

    //4. apply custom information like app_name, app_port, etc.

    // // 2. read template file and paste in the target file
    // var inputFileStream = fs.createReadStream(app_template);
    // var outputFileStream = fs.createWriteStream(app_tmp_index, "utf-8");
    // inputFileStream.pipe(outputFileStream);

    // // 3. substitute appName and appPort
    // await substituteExpression(appName, appPort, app_tmp_index, app_index);

    // // 3. init tsc and node project and install package express, @types/express
    // const init_express_app_cmd = path.resolve(CMD_FOLDER, `init-express-app.sh ${app_folder}`);
    // childProcess.exec(init_express_app_cmd, (error:any, stdout:any, stderr:any) => {
    //     if(error != null)
    //         console.log("error ", error);
    //     else 
    //         console.log("stdout " + stdout);
    // });
}

function substituteExpression (appName: string, appPort: number, app_tmp_index: string, app_index: string) {
    // index.js package.json 
    const substituteExpressCmd = path.resolve(CMD_FOLDER, `substitute-expression.sh ${app_tmp_index} ${appName} ${appPort} ${app_index}`);
    return new Promise((resolve, reject) => {
        childProcess.exec(substituteExpressCmd,  (error:any, stdout:any, stderr:any) => {
            if(error != null)
                console.log("error ", error);
            else 
                console.log("stdout " + stdout);
                resolve(true);
        });
    });
}
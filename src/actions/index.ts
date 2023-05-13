import path from "path";
import fs from "fs";
import childProcess from "child_process";

const CMD_FOLDER = path.resolve(__dirname, `../../cmd`);

export async function createExpressApp(appName: string, appType: string, appPort = 3000) {
    
    var app_folder = path.resolve(__dirname, `../../output/${appName}`);
    var app_template = path.resolve(__dirname, `../../templates/${appType}/index.ts.txt`);
    var app_tmp_index = path.resolve(app_folder, "index.tmp.ts");
    var app_index = path.resolve(app_folder, "index.ts");
    
    // 1. create a folder
    fs.mkdirSync(app_folder);

    // 2. read template file and paste in the target file
    var inputFileStream = fs.createReadStream(app_template);
    var outputFileStream = fs.createWriteStream(app_tmp_index, "utf-8");
    inputFileStream.pipe(outputFileStream);

    // 3. substitute appName and appPort
    await substituteExpression(appName, appPort, app_tmp_index, app_index);

    // 3. init tsc and node project and install package express, @types/express
    const init_express_app_cmd = path.resolve(CMD_FOLDER, `init-express-app.sh ${app_folder}`);
    childProcess.exec(init_express_app_cmd, (error:any, stdout:any, stderr:any) => {
        if(error != null)
            console.log("error ", error);
        else 
            console.log("stdout " + stdout);
    });
}

function substituteExpression (appName: string, appPort: number, app_tmp_index: string, app_index: string) {
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
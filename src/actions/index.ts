import path from "path";
import fs from "fs";
import childProcess from "child_process";


export function createExpressApp(appName: string, appType: string) {
    
    var app_folder = path.resolve(__dirname, `../../output/${appName}`);
    var app_template = path.resolve(__dirname, `../../templates/${appType}/index.ts.txt`);
    var app_index = path.resolve(app_folder, "index.ts");
    var cmd_folder = path.resolve(__dirname, `../../cmd`);

    // 1. create a folder
    fs.mkdirSync(app_folder);

    // 2. read template file and paste in the target file
    var inputFileStream = fs.createReadStream(app_template);
    var outputFileStream = fs.createWriteStream(app_index, "utf-8");
    inputFileStream.pipe(outputFileStream);

    // 3. init tsc and node project and install package express, @types/express
    const init_express_app_cmd = path.resolve(cmd_folder, `init-express-app.sh ${app_folder}`);
    childProcess.exec(init_express_app_cmd, (error:any, stdout:any, stderr:any) => {
        if(error != null)
            console.log("error ", error);
        else 
            console.log("stdout " + stdout);
    });
}
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import childProcess from "child_process";

export async function displayMenu() {
    const queryAppType = await inquirer.prompt({
        name: "appType",
        type: "list",
        message: "Choose your application type",
        choices: [
            "node-express",
            "java-spring"
        ]
    });

    const queryAppName = await inquirer.prompt({
        name: "appName",
        type: "input",
        message: "Choose your application name",
        default () {
            return "app-name"
        }
    });

    var app_folder = path.resolve(__dirname, `../output/${queryAppName.appName}`);
    var app_template = path.resolve(__dirname, `../templates/${queryAppType.appType}/index.ts.txt`);
    var app_index = path.resolve(app_folder, "index.ts");
    var cmd_folder = path.resolve(__dirname, `../cmd`);

    // 1. create a folder
    fs.mkdirSync(app_folder);
    // 2. read file index in right templates folder
    const fileTemplateContent = fs.readFileSync(app_template);
    // 3. past all in targeted output
    var inputFileStream = fs.createReadStream(app_template);
    var outputFileStream = fs.createWriteStream(app_index, "utf-8");
    inputFileStream.pipe(outputFileStream);
    // 4. run `tsc --init` command and install package express
    const init_express_app_cmd = path.resolve(__dirname, `../cmd/init-express-app.sh ${app_folder}`);
    childProcess.exec(init_express_app_cmd, (error:any, stdout:any, stderr:any) => {
        if(error != null)
            console.log("error ", error);
        else 
            console.log("stdout " + stdout);
    });

}
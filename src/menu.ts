import inquirer from "inquirer";
import {createExpressApp} from "./actions";
import nanospinner from "nanospinner";

export async function displayMenu() {
    var s = nanospinner.createSpinner("est");
    s.start();
    s.success()

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

    if(queryAppType.appType == "java-spring") {
        console.log("you are too hurry, we only are on version 1.0.0 😅");
        process.exit(0);
    }

    const queryAppPort = await inquirer.prompt({
        name:"appPort",
        type:"number",
        message:"Please enter a valid port",
        default() {
            return "Default port = 3000";
        }
    })
    
    createExpressApp(queryAppName.appName, queryAppType.appType, queryAppPort.appPort);

}
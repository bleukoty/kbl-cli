import figlet from 'figlet';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import { sleep } from '../utils';
import { applicationRequestForm } from '../forms/application-request-form';

// Settings
const GREETINGS = "Welcome to kbl-cli";

export async function displayAppMenu() {
    const appTypeQuery = await inquirer.prompt({
        type: "list",
        name: "appType",
        message: "which application's template would you like to generate ?",
        choices: ["node-express", "java-spring"],
        default() {
            return "node-express";
        }
    })

    await applicationRequestForm(appTypeQuery.appType);

    return appTypeQuery.appType as string;
}

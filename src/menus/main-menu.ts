import figlet from 'figlet';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import { getAppVersion, sleep } from '../utils';

// Settings
const GREETINGS = "Welcome to kbl-cli";

export async function displayMainMenu() {
    console.clear();
    await welcome();
    const featureQuery = await inquirer.prompt({
        type: "list",
        name: "feature",
        message: "which feature are you interested in ?",
        choices: ["Application", "Configuration", "Component"],
        default() {
            return "Application"
        }
    })
    return featureQuery.feature as string;
}

// private function
async function welcome() {
    const version = getAppVersion();
    console.log(gradient.pastel.multiline(figlet.textSync(GREETINGS, {
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      }))+ "v."+ version);
    await sleep();
}
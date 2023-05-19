import inquirer from 'inquirer';
import {componentRequestForm} from '../forms/components/component-request-form';

export async function displayComponentMenu() {
    const query = await inquirer.prompt({
        type: "list",
        name: "componentType",
        message: "which component's template would you like to generate ?",
        choices: ["route", "controller","entities"],
        default() {
            return "route";
        }
    });
    await componentRequestForm(query.componentType);
    return query.componentType as string;
}
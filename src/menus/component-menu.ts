import inquirer from 'inquirer';

export async function displayComponentMenu() {
    const query = await inquirer.prompt({
        type: "list",
        name: "componentType",
        message: "which component's template would you like to generate ?",
        choices: ["route", "controller","entities"],
        default() {
            return "route";
        }
    })
    return query.componentType as string;
}
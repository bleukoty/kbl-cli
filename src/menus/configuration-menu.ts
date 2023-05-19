import inquirer from 'inquirer';

export async function displayConfigurationMenu() {
    const query = await inquirer.prompt({
        type: "list",
        name: "configurationType",
        message: "which configuration's template would you like to generate ?",
        choices: ["nginx", "ssl-certificate", "ssh key pair"],
        default() {
            return "nginx";
        }
    });
    return query.componentType as string;
}
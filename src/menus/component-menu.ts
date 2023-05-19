import inquirer from 'inquirer';
import {componentRequestForm} from '../forms/components/component-request-form';

export async function displayComponentMenu() {
    let ormType = null;
    const { type: componentType } = await inquirer.prompt({
        type: "list",
        name: "type",
        message: "which component's template would you like to generate ?",
        choices: ["route", "controller"],
        default() {
            return "route";
        }
    });

    if(componentType == "entity") {
            const { type } = await inquirer.prompt({
            type: "list",
            name: "type",
            message: "which ORM template would you want to use ?",
            choices: ["knex", "prisma","sequelize"],
            default() {
                return "knex";
            }
        });
        ormType = type;
    }

    await componentRequestForm(componentType, ormType);

    return componentType as string;
}
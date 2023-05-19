import inquirer from "inquirer";
import { createRouterComponent, createControllerComponent, createEntityComponent } from "../../actions/components";

export const componentRequestForm = async (componentType: string, ormType: string) => {
    const { name: componentName} = await inquirer.prompt({
        name:"name",
        type:"input",
        message:`Please enter the name of your ${componentType} component : `,
        default() {
            return `name.${componentType}`
        }
    });


    switch(componentType) {
        case "route": {
            await createRouterComponent(componentName);
            break;
        };
        case "controller": {
            await createControllerComponent(componentName);
            break;
        };
        case "entity": {
            await createEntityComponent(componentName, ormType);
            break;
        };
    }
}
import inquirer from "inquirer";
import { createExpressApp } from "../actions";

export const applicationRequestForm = async (appType: string) => {
  // please enter application name and port
  const answers = await inquirer
    .prompt({
      name: "appName",
      type: "input",
      message: "Enter your application name",
      default() {
        return "app-name";
      },
    })
    .then(async ({ appName: name}) => {
     const { port } = await inquirer.prompt({
        name: "port",
        type: "input",
        message: "Enter your application port",
        default() {
          return 3000;
        },
      });
      var t = "s";
      return { "app": { port, name } };
    });

    // trigger action
    createExpressApp(answers.app.name, appType, answers.app.port);
};

// ToDo : Add database config
    // please enter database type
    // please enter database name
    // please enter database port
    // please enter database host

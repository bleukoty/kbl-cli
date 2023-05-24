// import { Command } from "commander";
// import { createExpressApp } from "./actions/apps";
import { displayCLIMenu } from "./menu-prompt";

// const program = new Command();

// program
//   .name('kbl-cli')
//   .description('CLI to create and manage express and java spring app.')
//   .version('1.0.5');

// program.command('create-express')
//   .argument('<string>', 'Application name')
//   .description('create an express app')
//   .option('-p <string>','--port <string>', '3000')
//   .action((appName, options) => {
//     createExpressApp(appName, "node-express", parseInt(options.p));
//   });

// program
//   .option('-m','--menu')
//   .action(async () => {
//     await displayCLIMenu();
//   });

// program.parse();
displayCLIMenu();

import path from "path";
import fs from "fs";
import { getUserCurrentFolder } from "../../utils";
import childProcess from 'child_process';
import chalk from "chalk";

const CMD_FOLDER = path.resolve(__dirname, `../../../cmd`);

export const createRouterComponent = async (name: string) => {
    const ROUTER_TEMPLATE = path.resolve(__dirname, "../../../templates/components/routes/index.ts");
    const ROUTES_FOLDER = await getUserCurrentFolder();
    const FILENAME = `${name}.routes.ts`;
    const NEW_ROUTE_PATH = path.resolve(`${ROUTES_FOLDER}`, `${FILENAME}`);

    // 1. copy from temp folder to work-dir folder
    fs.copyFileSync(ROUTER_TEMPLATE, NEW_ROUTE_PATH);

    // 2. change all router_name
    const substituteAppNameCmd = "sh " + path.resolve(CMD_FOLDER, `substitute-expression.sh router_name ${name} ${NEW_ROUTE_PATH}` );
    childProcess.execSync(substituteAppNameCmd);

    // 3. update router/index.ts
    const cmd = `(cd ${ROUTES_FOLDER} && echo "import \'./${FILENAME.replace('.ts', '')}\';" >> index.ts)`;
    childProcess.execSync(cmd);

    console.log(chalk.bgGreen(`create successfully route ${name}`));

    return 0;
};

export const createControllerComponent = async (name: string) => {
    const ROUTER_TEMPLATE = path.resolve(__dirname, "../../../templates/components/controllers/index.ts");
    const ROUTES_FOLDER = await getUserCurrentFolder();
    const FILENAME = `${name}.controller.ts`;
    const NEW_ROUTE_PATH = path.resolve(`${ROUTES_FOLDER}`, `${FILENAME}`);

        // 1. copy from temp folder to work-dir folder
        fs.copyFileSync(ROUTER_TEMPLATE, NEW_ROUTE_PATH);

        // 2. change all router_name
        const substituteAppNameCmd = "sh " + path.resolve(CMD_FOLDER, `substitute-expression.sh controller_name ${name} ${NEW_ROUTE_PATH}` );
        childProcess.execSync(substituteAppNameCmd);

        console.log(chalk.bgGreen(`create successfully controller ${name}`));
        return 0;
};

export const createEntityComponent = async (name: string, orm: string) => {
    const ROUTER_TEMPLATE = path.resolve(__dirname, "../../../templates/components/entity/index.ts");
    const ROUTES_FOLDER = await getUserCurrentFolder();
    const FILENAME = `${name}.controller.ts`;
    const NEW_ROUTE_PATH = path.resolve(`${ROUTES_FOLDER}`, `${FILENAME}`);

        // 1. copy from temp folder to work-dir folder
        fs.copyFileSync(ROUTER_TEMPLATE, NEW_ROUTE_PATH);

        // 2. change all router_name
        const substituteAppNameCmd = "sh " + path.resolve(CMD_FOLDER, `substitute-expression.sh controller_name ${name} ${NEW_ROUTE_PATH}` );
        childProcess.execSync(substituteAppNameCmd);

        console.log(chalk.bgGreen(`create successfully controller ${name}`));
        return 0;
};
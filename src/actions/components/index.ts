import path from "path";
import fs from "fs";
import { getUserCurrentFolder } from "../../utils";
import childProcess from 'child_process';

const CMD_FOLDER = path.resolve(__dirname, `../../../cmd`);

export const createRouterComponent = async (name: string) => {
    const ROUTER_TEMPLATE = path.resolve(__dirname, "../../../templates/components/routes/index.ts");
    const ROUTES_FOLDER = await getUserCurrentFolder();
    const FILENAME = `${name}.routes.ts`;
    const NEW_ROUTE_PATH = path.resolve(`${ROUTES_FOLDER}`, `${FILENAME}`);

    // console.log("NEW ROUTE PATH ", NEW_ROUTE_PATH);
    // console.log("ROUTE TEMPLATE ", ROUTER_TEMPLATE);

    // 1. copy from temp folder to work-dir folder
    fs.copyFileSync(ROUTER_TEMPLATE, NEW_ROUTE_PATH);

    // 2. change all router_name
    const substituteAppNameCmd = "sh " + path.resolve(CMD_FOLDER, `substitute-expression.sh router_name ${name} ${NEW_ROUTE_PATH}` );
    childProcess.execSync(substituteAppNameCmd);

    // 3. update router/index.ts
    const cmd = `(cd ${ROUTES_FOLDER} && echo "import \'./${FILENAME.replace('.ts', '')}\';" >> index.ts)`;
    childProcess.execSync(cmd);

    return 0;
}
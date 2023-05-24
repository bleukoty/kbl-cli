import path from "path";
import fs from "fs";
import childProcess from 'child_process';

/**
 * Sleep function freeze the system during a period of time passed 
 * in parameter
 * @param {*} ms -- milliseconds 
 * @returns 
 */
export const sleep = (ms=100) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), ms)
});

/**
 * returns a absolute path
 * @param paths 
 * @returns 
 */
export const resolvePath = (...paths: string[]) => {
    return path.resolve(__dirname, ...paths);
}

export const getUserCurrentFolder = () => {
    return new Promise<string>((resolve, reject) => {
         childProcess.exec("pwd", (error:any, stdout:string, stderr:any) => {
            resolve(stdout.replace("\n", ""));
         });
    });
}

export const getAppVersion = () => {
    const package_json_folder = path.resolve(__dirname, "../../package.json");
    const content = fs.readFileSync(package_json_folder, "utf-8");
    const jsonContent = JSON.parse(content);
    return jsonContent.version;
}

export function replaceExpression(filePath: string, expression: string, value: string) {
    let content = fs.readFileSync(filePath, "utf-8");
    const regExp =  new RegExp(expression, "g");
    content = content.replace(regExp, value);
    fs.writeFileSync(filePath, content, "utf-8");
}
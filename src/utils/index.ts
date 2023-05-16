import path from "path";
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
    return new Promise((resolve, reject) => {
         childProcess.exec("pwd", (error:any, stdout:any, stderr:any) => {
            resolve(stdout);
         });
    });

}
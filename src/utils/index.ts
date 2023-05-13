import path from "path";

/**
 * Sleep function freeze the system during a period of time passed 
 * in parameter
 * @param {*} ms -- milliseconds 
 * @returns 
 */
export const sleep = (ms=2000) => new Promise((resolve, reject) => {
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
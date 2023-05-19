import { Request, Response, NextFunction } from "express";

/*
    ######## CONTROLLER controller_name 
*/

/**
 * Retrieves an item of controller_name by Id
 * @param req 
 * @param res 
 * @param next 
 */
export const getItem = (req:Request, res: Response, next: NextFunction) => {
    // 1. convert request to command (checks command validity)

    // 2. authorizations checks and filtering request

    // 3. send message to client (send response)
}

/**
 * Returns an array of controller_name item
 * @param req 
 * @param res 
 * @param next 
 */
export const getItems = (req:Request, res: Response, next: NextFunction) => {
    // 1. convert request to command (checks command validity)

    // 2. authorizations checks and filtering request

    // 3. send message to client (send response)
}

/**
 * Create a new item of controller_name
 * @param req 
 * @param res 
 * @param next 
 */
export const createItem = (req:Request, res: Response, next: NextFunction) => {
    // 1. convert request to command (checks command validity)

    // 2. call a use-case to process command (checks business rules and perform command)

    // 3. send message to client (send response)
}

/**
 * Update an item of controller_name
 * @param req 
 * @param res 
 * @param next 
 */
export const updateItem = (req:Request, res: Response, next: NextFunction) => {
    // 1. convert request to command (checks command validity)

    // 2. call a use-case to process command (checks business rules and perform command)

    // 3. send message to client (send response)
}

export const deleteItem = (req:Request, res: Response, next: NextFunction) => {
    // 1. convert request to command (checks command validity)

    // 2. call a use-case to process command (checks business rules and perform command)

    // 3. send message to client (send response)
}


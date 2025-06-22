import { Request, Response } from 'express';

export function validateRequestBody(reqBody: Request['body'], res: Response): boolean {
    if (!reqBody) {
        res.status(400).json({ error: { message: "No Se recibieron datos", type: "ERROR_BODY_REQUEST" } });
        return false;
    }
    return true;
}
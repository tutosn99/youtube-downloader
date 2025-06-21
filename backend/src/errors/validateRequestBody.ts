import { Request, Response } from 'express';

export function validateRequestBody(reqBody: Request['body'], res: Response): boolean {
    if (!reqBody) {
        res.status(400).json({ error: 'No se recibieron datos' });
        return false;
    }
    return true;
}
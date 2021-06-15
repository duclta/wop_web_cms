import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const BaseController = (handler: (req: Request, res: Response) => void, isUseAuthInterceptor = false) => {
    return (req: Request, res: Response) => {
        // const { TOKEN_SECRET } = process.env;

        try {
            if (isUseAuthInterceptor) {
                const token = req.headers.authorization;
                if (!token) {
                    throw Error('Secret Token not present in req authorization header!');
                }

                // if (token !== TOKEN_SECRET) {
                //     throw Error('Invalid Secret Token');
                // }
            }

            try {
                handler(req, res);
            } catch (err) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    error: err.message ? err.message : err,
                });
            }
        } catch (err) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                error: err.message ? err.message : err,
            });
        }
    }
}
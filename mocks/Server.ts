import morgan from 'morgan';
import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import cors from 'cors';
import Router from './Router';

const { MOCK_PORT } = process.env;

// Init express
const app = express();
/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/
app.disable('x-powered-by'); // Security: Disable powered-by express in header
app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show subcribers called in console during development
app.use(morgan('dev'));


// Add APIs
app.use(Router);

// Print API errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(StatusCodes.BAD_REQUEST).json({
    error: err.message,
  });
});

app.listen(MOCK_PORT, () => {
  // tslint:disable-next-line: no-console
  console.log('Express server started on port: ' + MOCK_PORT);
});


// Export express instance
export default app;

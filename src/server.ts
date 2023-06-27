import express, {NextFunction, Request, Response} from 'express';
import {json} from 'body-parser';
import userRoutes from "./infra/routes/users";

const app = express();
app.use(json());  // registering this middleware for accepting json requests

app.use('/api/users', userRoutes); // All route must precees with this path
//app.use('/api'); // All route must precees with this path

// http://expressjs.com/en/starter/static-files.html
// app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/../views/index.html');
// });

// default error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
});

app.listen(3000);
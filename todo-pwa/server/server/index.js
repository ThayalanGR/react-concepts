import express from 'express';
import middlewares from './config/middlewares';
import dbconfig from './config/dbconnection';
import { TodoRouter } from './modules';

const PORT = process.env.PORT || 4000;

const app = express();

//middlewares
middlewares(app);

//dbconnection
dbconfig();


// routes
app.use('/api', [TodoRouter]);


//end of routes


//make app listen on port 
app.listen(PORT, (err) => {
    if(err) console.log(err);
    else console.log(`todo server started successfull on port ${PORT}` );
})
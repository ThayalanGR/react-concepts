import morgan from 'morgan';
import bodyParser from 'body-parser';


export default ( app ) => {
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(( req, res, next) => {
        res.header("Access-control-Allow-Origin", "*");
        res.header(
            "Access-control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, DELETE"
        );
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    });
    

}
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';


const app = express();
const PORT = 3000;

// mongoose connection 
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/food');

//bodyParser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//public folder point as an statuc resources
app.use(express.static('public'));

routes(app);


app.get('/', (req, res) => {
    res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`your server is running on port ${PORT}`);
})
import express from 'express';
import routes from './routes';
import dotenv from "dotenv";
import cors from "cors";


dotenv.config()


const app = express();
const port =  8081




app.use(cors());
app.use(express.json());

routes(app)


app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})
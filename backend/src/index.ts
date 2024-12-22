import { createServer } from "http";
import "dotenv/config"
import app from "./config/express.config"

//mounting express app
const server = createServer(app);

const port:number = Number(process.env.PORT|| 5000);
//const port = 8000;
server.listen(port,"127.0.0.1",()=>{
    console.log(`Server is listening at port ${port}`);
    console.log(`Press ctrl+c to disconnect the server`)
})
import {createServer} from "http";
import "dotenv/config";
import app from "./src/config/express.config.js";

const server = createServer(app);

const port = process.env.PORT || 8005

server.listen(port,(err)=>{
    if(!err){
        console.log(`Server is running at port:${port}`);
        console.log(`Press ctrl+c to disconnect the server`);
    }
})


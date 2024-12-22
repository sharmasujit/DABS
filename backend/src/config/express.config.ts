import express,{Express, Request, Response, NextFunction} from "express";
import router from "./router.config";

const app:Express = express();

app.use("/api/v1",router);

app.use((req:Request,res:Response,next:NextFunction)=>{
    next({statusCode:404, message:"Resource not found", status:"RESOURCE_NOT_FOUND"});
})

//garbbage collector or error handling middleware
app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
    let result:any = error.detail || null;
    let message:string = error.message || "Server error...";
    let status:string = error.status ||"INTERNAL_SERVER_ERROR";
    let code:number = error.statusCode || 5000;

    res.status(code).json({
        result:result,
        meta:null,
        message:message,
        status:status,
    })
})

export default app;
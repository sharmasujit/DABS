import { Request, Response,NextFunction } from "express";
class AuthController{

    register = (req:Request,res:Response,next:NextFunction) =>{
        try{
            const data = req.body;
            

            res.json({
                result:null,
                meta:null,
                message:"User has been created successfully",
                status:"REGISTER_SUCCESS"
            })
        }catch(exception:any){
            console.log(exception);
        }

    }

    activateToken = () =>{
        try{

        }catch(exception:any){
            console.log(exception);
        }
    }

    resendToken = () =>{
        try{

        }catch(exception:any){
            console.log(exception);
        }
    }

    login = () =>{
        try{

        }catch(exception:any){
            console.log(exception);
        }
    }

    forgetPassword = () =>{
        try{

        }catch(exception:any){
            console.log(exception);
        }
    }

    resetPassword = () =>{
        try{

        }catch(exception:any){
            console.log(exception);
        }
    }

    logout = () => {
        try{

        }catch(exception:any){
            console.log(exception);
        }
    }



}

const authCtrl = new AuthController;

export default authCtrl;
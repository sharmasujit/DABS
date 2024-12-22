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
        }catch(exception){
            throw exception;
        }

    }

    activateToken = () =>{
        try{

        }catch(exception){
            throw exception;
        }
    }

    resendToken = () =>{
        try{

        }catch(exception){
            throw exception;
        }
    }

    login = () =>{
        try{

        }catch(exception){
            throw exception;
        }
    }

    forgetPassword = () =>{
        try{

        }catch(exception){
            throw exception;
        }
    }

    resetPassword = () =>{
        try{

        }catch(exception){
            throw exception;
        }
    }

    logout = () => {
        try{

        }catch(exception){
            throw exception;
        }
    }



}

const authCtrl = new AuthController;

export default authCtrl;
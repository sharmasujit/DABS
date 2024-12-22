import {Router} from "express";
import authCtrl from "./auth.controller";

const authRouter:Router = Router();

authRouter.post("/register",authCtrl.register);
authRouter.get("/activate/:token",authCtrl.activateToken);
authRouter.get("/resend/activation/:token",authCtrl.resendToken);
authRouter.post("/login",authCtrl.login);
authRouter.delete("/logout",authCtrl.logout);
authRouter.post("/forget-password/",authCtrl.forgetPassword);
authRouter.get("reset-password/:token",authCtrl.resetPassword);

export default authRouter;
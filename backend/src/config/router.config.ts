import {Router} from "express"
import authRouter from "../module/auth/auth.router";

const router:Router = Router();

router.use("/auth",authRouter)

export default router;
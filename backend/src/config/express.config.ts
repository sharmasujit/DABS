import express,{Express} from "express";
import router from "./router.config";

const app:Express = express();

app.use("/api/v1",router);

export default app;
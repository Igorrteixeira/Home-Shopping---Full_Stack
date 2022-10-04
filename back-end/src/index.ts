import app from "./controller/app";
import { userRouter } from "./router/RouterUser";


app.use("/user",userRouter)

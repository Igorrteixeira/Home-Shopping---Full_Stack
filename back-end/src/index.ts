import app from "./controller/app";
import { shoppingListRouter } from "./router/RouterShoppingList";
import {  shoppingOrderRouter } from "./router/RouterShoppingOrder";
import { userRouter } from "./router/RouterUser";


app.use("/user",userRouter)

app.use("/order",shoppingOrderRouter)

app.use("/list",shoppingListRouter)

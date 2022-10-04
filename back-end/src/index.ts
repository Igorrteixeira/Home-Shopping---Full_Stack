import app from "./controller/app";
import { shoppingListRouter } from "./router/RouterShoppingList";
import { userRouter } from "./router/RouterUser";


app.use("/user",userRouter)

app.use("/shopping-list",shoppingListRouter)

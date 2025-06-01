import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/todo.routes.js";

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log("app run at https://todo-app-express-production.up.railway.app/");
});

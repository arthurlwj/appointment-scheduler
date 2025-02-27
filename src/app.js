import express from "express";
import connectDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
routes(app);

export default app;
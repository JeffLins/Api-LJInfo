import express from "express";
import usuarioController from "./controller/usuariocontroller.js"
import generalMiddleware from "./middleware/general-middleware.js"
import database from "./database/sqlite-db.js"

const app = express();

app.use(express.json());

generalMiddleware(app);

usuarioController(app, database);

export default app
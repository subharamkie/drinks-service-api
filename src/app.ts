import express from "express";
export const app = express();
import { router } from "./routes/routes";

app.get("/", (req, res) => res.send("Welcome to the Drinks API!"));

app.get("/coffeelover", (req, res) => res.send("I like Coffee!"));

app.use(express.json());
app.use("/", router);

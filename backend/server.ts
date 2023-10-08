import express from "express";
import dotenv from "dotenv";
import cron from "node-cron";

import { cron_function } from "./cron/cron_server";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 9999;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const github_route = require("./controller/github_api_fetch");

app.use("/", github_route);

app.listen(PORT, () => {
  console.log("Server is running : ", PORT);

  //CRON function for fetch the GitHub repo details...
  cron.schedule(" */5 * * * * *", () => {
    cron_function();
  });
});

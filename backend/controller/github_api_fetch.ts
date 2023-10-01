import express from "express";
import { github_config } from "../config/github";

const router = express.Router();

router.get("/fetch_repo", fetch_repo);

//API to fetch GITHUB repo
function fetch_repo () {
  console.log("Fetching GITBHUB repo");

  console.log("GITHUB Config : ", github_config)
};

module.exports = router;

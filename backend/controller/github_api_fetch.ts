import express, { Request, Response } from "express";
import { FetchRepo } from "../model/fetch_repo";
import { pool } from "../library/dbconnection";
import { GitHubFunc } from "../model/github_func";

const router = express.Router();

router.get("/fetch_repo", fetch_repo);

//API to fetch GITHUB repo
async function fetch_repo(req: Request, res: Response) {
  try {
    const fetchRepo = new FetchRepo();
    const result = await fetchRepo.fetch_repo();

    const rate_limit = new GitHubFunc();
    const fetchRateLimit = rate_limit.get_rate_limit();



    const fetchData = await pool.query("SELECT * FROM repository");

    console.log("Fetch Data : ", fetchRateLimit);

    res.json(result);
  } catch (error: any) {
    res.json(error.message);
  }
}

module.exports = router;

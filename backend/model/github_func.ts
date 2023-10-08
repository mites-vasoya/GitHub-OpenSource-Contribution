import { Functions } from "../library/functions";
import { octokit } from "../library/octokit";

export class GitHubFunc {
  constructor() {}

  get_rate_limit = async () => {
    const result: any = await octokit.request("GET /rate_limit", {
      owner: "github",
      repo: "docs",
      per_page: 2,
    });

    console.log("Rate Limit : ", result)

    const reponseObj = new Functions();
    if (!result.length) return reponseObj.response(200, [], "No Repo Found");

    return reponseObj.response(200, result, "Repo fetched successsfully");
  };
}

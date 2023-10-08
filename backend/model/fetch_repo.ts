import { Functions } from "../library/functions";
import { octokit } from "../library/octokit";

export class FetchRepo {
  constructor() {}

  fetch_repo = async () => {
    const result: any = await octokit.request("GET /users/mites-vasoya", {
      owner: "github",
      repo: "docs",
      per_page: 2,
    });

    const reponseObj = new Functions();
    if (!result.length) return reponseObj.response(200, [], "No Repo Found");

    return reponseObj.response(200, result, "Repo fetched successsfully");
  };
}

import { FetchRepo } from "../model/fetch_repo";

export const cron_function = async () => {
  const fetchRepo = new FetchRepo();
  const result = await fetchRepo.fetch_repo();

  console.log("CRON FUNCTION IS RUNNING : ", result);
};

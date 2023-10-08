import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  password: "123456",
  host: "localhost",
  database: "github_data",
  port: 5432,
});


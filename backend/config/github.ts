import dotenv from "dotenv";

dotenv.config();

export var github_config = {
  client_id: process.env.GITHUB_CLIENT_ID,
  client_secret: process.env.GITHUB_CLIENT_SECRET,
  redirect_url: "http://localhost:3000/github/callback",
  authorize_url: "https://github.com/login/oauth/authorize",
  token_url: "https://github.com/login/oauth/access_token",
  user_url: "https://api.github.com/user",
  scope: "user",
};

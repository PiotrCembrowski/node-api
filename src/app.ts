import express, { Application } from "express";

const app: Application = express();

app.listen(8080, () => {
  console.log("server is running on port 8080");
});

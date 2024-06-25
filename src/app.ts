import express, { Application } from "express";
import feedRoutes from "./routes/feed";

const app: Application = express();

app.use("/feed", feedRoutes);

app.listen(8080, () => {
  console.log("server is running on port 8080");
});

const express = require("express");

const feedRoutes = require("./routes/feed");

const app = express();

app.use("/feed", feedRoutes);

app.liten(8080);

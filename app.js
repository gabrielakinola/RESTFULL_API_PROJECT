const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Genre = require("./models/genres");

//connect to mongoose

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/genres", (req, res) => {
  Genre.getGenres((err, genres) => {
    if (err) {
      throw err;
    }
    res.json(genres);
  });
});

port = 3000;
app.listen(port, () => {
  console.log(`Server Running on port ${port}...`);
});

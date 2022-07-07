const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Genre = require("./models/genres");
const Books = require("./models/book");
const Book = require("./models/book");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//connect to mongoose
mongoose
  .connect("mongodb://localhost/bookstore")
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log(err));
const db = mongoose.connection;

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
app.post("/api/genres", (req, res) => {
  const genre = req.body;

  Genre.addGenres(genre, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});
app.put("/api/genres/:id", (req, res) => {
  const id = req.params.id;
  const genre = req.body;

  Genre.updateGenre(id, genre, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

app.delete("/api/genres/:id", (req, res) => {
  const id = req.params.id;

  Genre.removeGenre(id, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

app.get("/api/books", (req, res) => {
  Book.getBooks((err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

app.post("/api/books", (req, res) => {
  const book = req.body;
  Book.addBooks(book, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.get("/api/books/:id", (req, res) => {
  Book.getBookbyId(req.params.id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.put("/api/books/:id", (req, res) => {
  const id = req.params.id;
  const books = req.body;

  Book.updateBooks(id, books, (err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

port = 3000;
app.listen(port, () => {
  console.log(`Server Running on port ${port}...`);
});

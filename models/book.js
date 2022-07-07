const mongoose = require("mongoose");

//Genre Schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  publisher: {
    type: String,
  },
  pages: {
    type: String,
  },
  img_url: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

//get books
module.exports.getBooks = (callback, limit) => {
  Book.find(callback).limit(limit);
};
//Get book
module.exports.getBookbyId = (id, callback) => {
  Book.findById(id, callback);
};

//Add books
module.exports.addBooks = (book, callback) => {
  Book.create(book, callback);
};

//Update books
module.exports.updateBooks = (id, book, options, callback) => {
  const query = { _id: id };
  const update = {
    title: book.title,
    genre: book.genre,
    description: book.genre,
    author: book.author,
    publisher: book.publisher,
    pages: book.pages,
    image_url: book.image_url,
  };
  Book.findOneAndUpdate(query, update, options, callback);
};

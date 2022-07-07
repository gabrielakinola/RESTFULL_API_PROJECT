const mongoose = require("mongoose");

//Genre Schema
const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;

//get genres
module.exports.getGenres = (callback, limit) => {
  Genre.find(callback).limit(limit);
};

//Add Genres
module.exports.addGenres = (genre, callback) => {
  Genre.create(genre, callback);
};

//Update genre
module.exports.updateGenre = (id, genre, options, callback) => {
  const query = { _id: id };
  const update = { name: genre.name };
  Genre.findOneAndUpdate(query, update, options, callback);
};

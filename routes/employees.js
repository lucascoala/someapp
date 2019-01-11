import express from 'express';
import Book from '../models/Employee';
const router = express.Router();
// Get all books with associated authors and genres
router.get('/', (req, res, next) => {
  Employee
  .fetchAll({withRelated: ['author','genres']})
  .then((books)=>{
    res.json(books);
  })
});
//Insert a book with the particular doctor and genres.
router.post('/', (req, res, next) => {
  let genres = req.body.genres;
  if(genres){
    genres = genres.split(',').map((genre)=>{
      return genre.trim();
    })
  }
  else{
    genres = ['undefined']
  }
  Book
  .forge({
    title : req.body.title,
    year : req.body.year || null,
    author_id : req.body.author_id
  })
  .save()
  .then((book)=>{
    genres.forEach((genre_name)=>{
      Genre
      .where({name : genre_name})
      .fetch()
      .then((genre)=>{
        if(genre){
          book.genres().attach(genre)
        }
        else{
          Genre
          .forge({
            name : genre_name
          })
          .save()
          .then((new_genre)=>{
            book.genres().attach(new_genre)
          })
        }
      })
    })
  })
  .then(()=>{
    res.json("Values Inserted")
  })
})
module.exports = router;
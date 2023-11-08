const Book = require('../models/book')

const fetchBooks = (req,res) => { Book.find()
    .then((books) =>
      res.status(200).json({
        model: books,
        message: "Success",
      })
    )
    .catch((error) =>
      res.status(400).json({
        error: error.message,
        message: "Extraction problem",
      })
    );}

    const addBook = (req,res) =>{
        let newBook = new Book({
            title: req.body.title,
            ISBN: req.body.ISBN,
            author: req.body.author,
            price: req.body.price,
          });
        
          newBook
            .save(newBook)
            .then(() =>
              res.status(201).json({
                model: newBook,
                message: "objet created !",
              })
            )
            .catch((error) =>
              res.status(400).json({
                error: error.message,
                message: "Invalid data !!!",
              })
            );
    }
    
    const getBookById = (req,res) => {
        Book.findOne({ _id: req.params.id })
          .then((book) => {
            if (!book) {
              res.status(404).json({
                message: "Object found !!",
              });
              return;
            }
            res.status(200).json({
              model: book,
              message: "Object found",
            });
          })
          .catch((error) =>
            res.status(400).json({
              error: error.message,
              message: "Object doesn't exist !!!",
            })
          );
    }

    const updateBook = (req,res) => {
        Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
            (book) => {
              if (!book) {
                res.status(404).json({
                  message: "Objet not found !!",
                });
                return;
              }
              res.status(200).json({
                model: book,
                message: "Objet modified",
              });
            }
          );
    }
    const deleteBook = (req,res) => {
        Book.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Objet deleted" }))
        .catch((error) =>
          res.status(400).json({
            error: error.message,
          })
        );
    }




    module.exports = {
        fetchBooks,
        addBook,
        getBookById,
        updateBook,
        deleteBook
     }
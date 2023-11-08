const express = require("express")
const router = express.Router()
const bookController = require('../controllers/book')
const auth = require('../middlewares/auth')

router.get("/", auth.loggedMiddleware,bookController.fetchBooks);

router.get("/:id", auth.loggedMiddleware,bookController.getBookById);
  
  
router.post("/",auth.loggedMiddleware, bookController.addBook);
  
router.patch("/:id", auth.loggedMiddleware,bookController.updateBook);
  
router.delete("/:id",auth.loggedMiddleware, bookController.deleteBook);


  module.exports = router
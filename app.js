const mongoose = require("mongoose");
const express = require("express");
const taskRoutes = require('./routes/task')
const bookRoutes = require('./routes/book')
const userRoutes = require('./routes/user')
const auth = require('./middlewares/auth')


const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/tasks")
  .then(() => console.log("Connexion a MongoDb réussie !!"))
  .catch(() => console.log("Connexion a MongoDB échouée !!!!!!"));



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content,Accept,Content-Type,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT,DELETE,PATCH,OPTIONS"
  );
  next();
});


app.use('/api/tasks/',auth.loggedMiddleware,taskRoutes)
app.use('/api/books/',bookRoutes)
app.use('/api/auth/',userRoutes)


module.exports = app;

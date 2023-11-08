const express = require("express")
const router = express.Router()
const taskController = require('../controllers/task')
const taskCController = require('../controllers/taskcopy')

const auth = require('../middlewares/auth')

/*router.get("/", taskController.fetchTasks);
  
  router.get("/:id", taskController.getTaskById);
  
  
  router.post("/", taskController.addTask);
  
  router.patch("/:id",auth.isAdmin,taskController.updateTask);
  
  router.delete("/:id", taskController.deleteTask);*/

  router.get("/", taskCController.fetchTasks);
  router.post("/", taskCController.addTask);
  router.patch("/:id",taskCController.updateTask);
  router.get("/:id", taskCController.getTaskById);
  router.delete("/:id", taskController.deleteTask);
  module.exports = router
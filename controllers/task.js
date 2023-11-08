const Task = require('../models/task')

const fetchTasks =  (req,res) => { 
   Task.find()
    .then((tasks) =>
      res.status(200).json({
        model: tasks,
        message: "Success",
      })
    )
    .catch((error) =>
      res.status(400).json({
        error: error.message,
        message: "Extraction problem",
      })
    );}


const addTask =  (req,res) =>{
    let newTask = new Task({
        title: req.body.title,
        duration: req.body.duration,
        description: req.body.description,
      });
    
      newTask
        .save(newTask)
        .then(() =>
          res.status(201).json({
            model: newTask,
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

const getTaskById =  (req,res) => {
    Task.findOne({ _id: req.params.id })
      .then((task) => {
        if (!task) {
          res.status(404).json({
            message: "Object found !!",
          });
          return;
        }
        res.status(200).json({
          model: task,
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

const updateTask =  (req,res) => {
    Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
        (task) => {
          if (!task) {
            res.status(404).json({
              message: "Objet not found !!",
            });
            return;
          }
          res.status(200).json({
            model: task,
            message: "Objet modified",
          });
        }
      );
}
const deleteTask = (req,res) => {
    Task.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet deleted" }))
    .catch((error) =>
      res.status(400).json({
        error: error.message,
      })
    );
}

module.exports = {
   fetchTasks,
   addTask,
   getTaskById,
   updateTask,
   deleteTask
}
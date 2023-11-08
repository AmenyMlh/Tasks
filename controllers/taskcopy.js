const Task = require('../models/task')

const fetchTasks = async (req,res) => { 

  try{
 task = await Task.find()
  res.status(200).json({
    model: task,
    message: "Success",
  })
}
  catch(error) {
      res.status(400).json({
        error: error.message,
        message: "Extraction problem",
      })
      }
    }


const addTask =  async (req,res) =>{
  try{
    let newTask = new Task({
        title: req.body.title,
        duration: req.body.duration,
        description: req.body.description,
      });
    
     await newTask
        .save(newTask)
          res.status(201).json({
            model: newTask,
            message: "objet created !",
          })
        }
        catch(error) {
          res.status(400).json({
            error: error.message,
            message: "Invalid data !!!",
          })
}
}

const getTaskById = async (req,res) => {
  try{
   task = await Task.findOne({ _id: req.params.id })
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
      
    }
      catch(error) {
        res.status(400).json({
          error: error.message,
          message: "Object doesn't exist !!!",
        })
      }
}

const updateTask = async (req,res) => {
  try{
   task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
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
        catch(error) {
          res.status(400).json({
            error: error.message,
            message: "Object doesn't exist !!!",
          })
        }
}
const deleteTask = async (req,res) => {
  try{
    await Task.deleteOne({ _id: req.params.id })
     res.status(200).json({ message: "Objet deleted" })
  }
    catch(error){
      res.status(400).json({
        error: error.message,
      })
    }
}

module.exports = {
   fetchTasks,
   addTask,
   getTaskById,
   updateTask,
   deleteTask
}
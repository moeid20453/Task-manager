const app = require('express').Router();
const 
taskController = require('../controllers/tasks_Controller')

app.get('/', taskController.getAllTasks);
app.post('/', taskController.createTask);
app.get('/:id', taskController.getTask);
app.patch('/:id', taskController.updateTask);
app.delete('/:id', taskController.deleteTask);


module.exports = app

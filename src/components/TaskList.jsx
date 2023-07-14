import React, { useState } from 'react';
import Task from './Task';
import useTaskManager from './Hooks/useTaskManager';
import { useForm } from 'react-hook-form';

function TaskList() {
  const { tasks, createTask, updateTask, deleteTask } = useTaskManager();
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const {handleSubmit, register} = useForm();

  const addTask = () => {
    if (newTaskDescription.trim() !== '') {
      createTask(newTaskDescription);
      setNewTaskDescription('');
    }
  }

  const handleNewTaskChange = (e) => {
    setNewTaskDescription(e.target.value)}

  const handleNewTaskKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const onSubmit = () => {
    if(data.tarea.trim() !== '') {
      createTask(data.tarea);
      setNewTaskDescription('');
    }
  };

  return (
      <div> 
          <h3> Add Task </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <input type="text" 
                  name="tarea"
                  value={newTaskDescription}
                  onChange={handleNewTaskChange}
                  onKeyDown={handleNewTaskKeyPress}
                  />
              </div>
              <div>
                  <label> Description </label>
                  <input type="text" name="tarea"/>
              </div>
              <input type="submit" value="Add" />
          </form>

          {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onUpdate={(updatedTask) => updateTask(task.id, updatedTask)}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
      </div>
  )
}

export default TaskList;

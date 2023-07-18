import React, { useState } from 'react';
import Task from './Task';
import useTaskManager from './Hooks/useTaskManager';
import { useForm } from 'react-hook-form';

function TaskList() {
  const { tasks, createTask, updateTask, deleteTask } = useTaskManager();
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const { handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddTask = () => {
    if (newTaskName.length > 3) {
      createTask(newTaskName, newTaskDescription);
      setNewTaskName('');
      setNewTaskDescription('');
      setErrorMessage('');
    } else {
      setErrorMessage("Your task name must have more than 3 characters.");
    }
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(id);
    }
  }

  const handleNewTaskKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTask();
    }
  };

  return (
    <div>
      <h3> Add Task </h3>

      <form onSubmit={handleSubmit(handleAddTask)}>
        <input
          type='text'
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder='Task Name*'
          id='task-name-input'
        />
        <input
          type='text'
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder='Description (optional)'
          id='task-description-input'
        />

        <button type='submit'>
          Add Task
        </button>
      </form>

      {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}

      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onUpdate={updateTask}
          onDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default TaskList;

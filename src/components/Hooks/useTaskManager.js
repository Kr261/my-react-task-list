import { useState, useEffect } from 'react';

function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (name, description) => {
    const newTask = {
      id: Date.now(),
      name,
      description: description || '',
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const deleteTask = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return {
    tasks,
    createTask,
    updateTask,
    deleteTask,
  };
}

export default useTaskManager;

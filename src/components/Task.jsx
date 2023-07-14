import React from 'react';

function Task ({ task, onUpdate, onDelete }) {
  const { id, description, completed } = task;

  const handleDescriptionChange = (e) => {
    const updatedTask = { description: e.target.value };
    onUpdate(updatedTask);
  };  

  const handleCompletedChange = (e) => {
    const updatedTask = { completed: e.target.checked };
    onUpdate(updatedTask);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompletedChange}
        />
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button onClick={handleDelete}>Delete</button>
      </label>
    </div>
  );
}

export default Task;

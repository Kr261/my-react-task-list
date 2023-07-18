import React, { useState } from 'react';
import './Styles/Task.css';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiSolidChevronRightCircle } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';

function Task({ task, onUpdate, onDelete }) {
  const { id, name, description, completed } = task;

  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleNameChange = (e) => {
    setUpdatedName(e.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedName(name);
    setUpdatedDescription(description);
  }

  const handleSave = () => {
    onUpdate(id, { name: updatedName, description: updatedDescription });
    setIsEditing(false);
  }

  const handleDescriptionChange = (e) => {
    setUpdatedDescription(e.target.value);
  };

  return (
    <div className='task'>

      {isEditing ? (
        <>
          <input type="text" value={updatedName} onChange={handleNameChange} />
          <input type="text" value={updatedDescription} onChange={handleDescriptionChange} />
          <button onClick={handleSave}><BiSolidChevronRightCircle /></button>
          <button onClick={handleCancel}><ImCancelCircle /></button>
        </>
      ) : (
        <>
          <div>
            
          <div className='task-header'> 
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => {
              const updatedTask = { completed: e.target.checked };
              onUpdate(id, updatedTask);
            }}
            />
          <h4>{name}</h4>
          <button onClick={handleEdit}><FiEdit2 /></button>
          <button onClick={() => onDelete(id)}><AiOutlineDelete /></button>
          </div>
          <p>{description}</p>
          </div>
        </>
      )}

    </div>
  );
}

export default Task;

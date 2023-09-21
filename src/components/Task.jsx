import React, { useState } from 'react';
import './Styles/Task.css'; // Asegúrate de que Task.css está en la ruta correcta
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { Box, Checkbox, Flex, Input, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import DeleteModal from './modals/DeleteModal';
import EditTaskModal from './modals/EditTaskModal';

function Task({ task, onUpdateTask, onDeleteTask }) {
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCheck = (completed) => {
    onUpdateTask(task.id, { completed });
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    onDeleteTask(task.id);
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <Box className={`task ${editing ? 'editing' : ''}`}>
      {editing ? (
        <Flex className="task-row" alignItems="center" justifyContent="flex-end">
          <Input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <Input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        </Flex>
      ) : (
        <Flex className="task-row" alignItems="center" justifyContent="space-between">
          <Flex className="task-info" alignItems="center">
            <Checkbox
              isChecked={task.completed}
              onChange={(e) => handleCheck(e.target.checked)}
            />
            <Box as="h4" marginLeft="2">
              {task.name}
            </Box>
          </Flex>
          <Flex className="task-actions" alignItems="center">
            <EditTaskModal task={task} onUpdateTask={onUpdateTask} />
            <IconButton
              aria-label="Delete Task"
              colorScheme="red"
              icon={<DeleteIcon />}
              onClick={handleDelete}
            />
          </Flex>
        </Flex>
      )}

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />
    </Box>
  );
}

export default Task;

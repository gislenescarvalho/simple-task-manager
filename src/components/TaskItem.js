import React from 'react';

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div  className="task-item">
      <span>{task.title}</span>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;

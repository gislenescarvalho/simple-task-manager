import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSave, taskToEdit }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      setError('Title is required');
      return;
    }
    onSave({ ...taskToEdit, title });
    setTitle('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (error) setError('');
        }}
        placeholder="Enter task title"
      />
      {error && <div className="error-message">{error}</div>}
      <button type="submit">{taskToEdit ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;

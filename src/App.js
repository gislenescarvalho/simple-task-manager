import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';
import { getTodosInfo } from './services/todosAPI';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    getTodosInfo()
      .then(response => setTasks(response.data.slice(0, 20))) // Limit to 20 tasks for tests
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleAddTask = (task) => {
    const maxId = tasks.reduce((max, t) => (t.id > max ? t.id : max), 0);
    setTasks([...tasks, { ...task, id: maxId + 1 }]); // Ensure unique ID
  };

  const handleEditTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setTaskToEdit(null);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleSaveTask = (task) => {
    taskToEdit ? handleEditTask(task) : handleAddTask(task);
  };

  return (
    <div className="App">
      <h1>Simple Task Manager</h1>
      <TaskForm onSave={handleSaveTask} taskToEdit={taskToEdit} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onEdit={setTaskToEdit} />
    </div>
  );
};

export default App;
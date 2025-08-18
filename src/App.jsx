import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import EditTaskPopup from './components/EditTaskPopup';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

// URL base de tu backend. Asegúrate de que esta URL sea la correcta.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null); // Estado para la tarea a editar
  const [theme, setTheme] = useState('light'); // Estado para el tema, por defecto 'light'
  const [isLoading, setIsLoading] = useState(false);

  // Carga las tareas al iniciar la aplicación
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      const tasksData = await response.json();
      setTasks(tasksData);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Este useEffect se encargará de aplicar la clase 'dark' al HTML
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  const handleAddTask = async (newTask) => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      });
      const addedTask = await response.json();
      setTasks([...tasks, addedTask]);
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleCompletion = async (taskId, completed) => {
    try {
      setIsLoading(true);
      await fetch(`${API_URL}/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed }),
      });
      setTasks(tasks.map(task =>
        task.id === taskId ? { ...task, completed } : task
      ));
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTask = async (taskId) => {
    setIsLoading(true);
    try {
      await fetch(`${API_URL}/${taskId}`, {
        method: 'DELETE',
      });
      // Filtramos la lista de tareas para eliminar la que coincida con el id
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Nueva función para abrir el popup con la tarea seleccionada
  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  // Nueva función para actualizar la tarea
  const handleUpdateTask = async (updatedTask) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/${updatedTask.id}`, {
        method: 'PUT', // o 'PATCH' si solo actualizas ciertos campos
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
      });
      const result = await response.json();

      // Actualiza la lista de tareas en el estado
      setTasks(tasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      ));

      setTaskToEdit(null); // Cierra el popup

      await fetchTasks();
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Nueva función para cerrar el popup sin guardar cambios
  const handleClosePopup = () => {
    setTaskToEdit(null);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-100 dark:bg-gray-900">
      {isLoading && <LoadingSpinner />}
      <div className="container mx-auto px-4 pt-4">
        {/* Theme toggle button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 
                     text-gray-800 dark:text-white shadow-sm 
                     hover:bg-gray-50 dark:hover:bg-gray-600 
                     transition-colors duration-200"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              src="/logo.png"
              alt="SaludTasks Logo"
              className="h-10 w-auto"
            />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
              SaludTasks
            </h1>
            <img
              src="/logo.png"
              alt="SaludTasks Logo"
              className="h-10 w-auto"
            />
          </div>
          <TaskForm onAddTask={handleAddTask} />
          <TaskList
            tasks={tasks}
            onToggleCompletion={handleToggleCompletion}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask}
          />

          {taskToEdit && (
            <EditTaskPopup
              task={taskToEdit}
              onSave={handleUpdateTask}
              onClose={handleClosePopup}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
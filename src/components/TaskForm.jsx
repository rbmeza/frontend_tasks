import { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return; // Evita agregar tareas vacías
        onAddTask({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form className="space-y-4 mb-6" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título de la tarea"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 
                         dark:border-gray-600 bg-white dark:bg-gray-700 
                         text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         dark:focus:ring-blue-400 dark:focus:border-blue-400"
            />
            <textarea
                placeholder="Descripción (opcional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 
                         dark:border-gray-600 bg-white dark:bg-gray-700 
                         text-gray-600 dark:text-gray-400
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         dark:focus:ring-blue-400 dark:focus:border-blue-400
                         min-h-[100px] resize-y"
            ></textarea>
            <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg 
                         bg-blue-500 hover:bg-blue-600 
                         dark:bg-blue-700 dark:hover:bg-blue-800
                         text-white font-medium
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:ring-offset-2 dark:focus:ring-offset-gray-800">Agregar Tarea</button>
        </form>
    );
}

export default TaskForm;
import React, { useState } from 'react';

function EditTaskPopup({ task, onSave, onClose }) {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [isCompleted, setIsCompleted] = useState(task.completed === 1);
    const [isHabit, setIsHabit] = useState(task.is_habit === 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...task,
            title,
            description,
            completed: isCompleted ? 1 : 0,
            is_habit: isHabit ? 1 : 0
        });
    };

    return (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md transform transition-all">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        Editar Tarea
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Título:
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                                         rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 
                                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Descripción:
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                                         rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 
                                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                                         min-h-[100px] resize-y"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                                <input
                                    type="checkbox"
                                    checked={isCompleted}
                                    onChange={(e) => setIsCompleted(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded 
                                             focus:ring-blue-500 dark:focus:ring-blue-400"
                                />
                                <span>Tarea completada</span>
                            </label>

                            <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                                <input
                                    type="checkbox"
                                    checked={isHabit}
                                    onChange={(e) => setIsHabit(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded 
                                             focus:ring-blue-500 dark:focus:ring-blue-400"
                                />
                                <span>Marcar como hábito</span>
                            </label>
                        </div>

                        <div className="flex space-x-3 justify-end mt-6">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 
                                         rounded-md shadow-sm text-sm font-medium 
                                         text-gray-700 dark:text-gray-300 
                                         bg-white dark:bg-gray-700 
                                         hover:bg-gray-50 dark:hover:bg-gray-600 
                                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 border border-transparent rounded-md shadow-sm 
                                         text-sm font-medium text-white bg-blue-600 
                                         hover:bg-blue-700 focus:outline-none 
                                         focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditTaskPopup;
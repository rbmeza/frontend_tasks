import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

function TaskList({ tasks, onToggleCompletion, onDeleteTask, onEditTask }) {
    // Ordenar las tareas: incompletas primero, completadas al final
    const sortedTasks = [...tasks].sort((a, b) => {
        if (a.completed === b.completed) return 0;
        return a.completed ? 1 : -1;
    });

    return (
        <div className="max-h-[60vh] overflow-y-auto
                      scrollbar scrollbar-w-2
                      scrollbar-track-transparent
                      scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-700
                      dark:scrollbar-thumb-gray-600 dark:hover:scrollbar-thumb-gray-700
                      pr-2">
            <ul className="space-y-4">
                {sortedTasks.map(task => (
                    <li
                        key={task.id}
                        className={`p-4 rounded-lg shadow-sm flex items-start justify-between
                    ${task.completed
                                ? 'bg-green-50 dark:bg-green-900/20'
                                : 'bg-gray-200 dark:bg-gray-700'
                            } transition-colors duration-200`}
                    >
                        <div className="flex-1 mr-4">
                            <h3 className={`font-semibold text-gray-900 dark:text-white
                            ${task.completed && 'line-through opacity-75'}`}>
                                {task.title}
                            </h3>
                            {task.description && (
                                <p className={`text-sm text-gray-600 dark:text-gray-400 mt-1
                                ${task.completed && 'line-through opacity-75'}`}>
                                    {task.description}
                                </p>
                            )}
                            <p className={`text-xs italic text-gray-500 dark:text-gray-400 mt-2
                            ${task.completed && 'opacity-75'}`}>
                                Estimación: {task.estimated_time}
                            </p>
                        </div>

                        <div className="flex space-x-2 items-center">
                            <button
                                onClick={() => onEditTask(task)}
                                className={`text-gray-500 hover:text-blue-500 dark:text-gray-400 
                                dark:hover:text-blue-400 transition-colors duration-200
                                ${task.completed && 'opacity-75'}`}
                            >
                                <FaEdit />
                            </button>
                            <button
                                onClick={() => onDeleteTask(task.id)}
                                className={`text-gray-500 hover:text-red-500 dark:text-gray-400 
                                dark:hover:text-red-400 transition-colors duration-200
                                ${task.completed && 'opacity-75'}`}
                            >
                                <FaTrashAlt />
                            </button>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => onToggleCompletion(task.id, !task.completed)}
                                className="form-checkbox h-5 w-5 text-blue-600 rounded-sm 
                                     transition-colors duration-200
                                     focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default TaskList;
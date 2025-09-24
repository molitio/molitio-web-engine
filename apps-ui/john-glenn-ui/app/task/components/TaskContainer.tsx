'use client';
import React, { useEffect, useState } from 'react';
import { Task } from '../utils/types';
import { loadTasks, saveTasks } from '../utils/storage';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './TaskContainer.css';

const TaskContainer: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState<string | null>(null);
    const [showDeletedNoti, setShowDeletedNoti] = useState(false);

    useEffect(() => {
        setTasks(loadTasks());
    }, []);

    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    const addTask = (name: string) => {
        setTasks([...tasks, { id: Date.now().toString(), name, completed: false }]);
    };

    const toggleTask = (id: string) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
    };

    const requestDeleteTask = (id: string) => {
        setTaskToDelete(id);
        setShowDeleteConfirmation(true);
    };

    const confirmDeleteTask = () => {
        if (taskToDelete) {
            setTasks(tasks.filter((task) => task.id !== taskToDelete));
        }
        setShowDeleteConfirmation(false);
        setTaskToDelete(null);
        setShowDeletedNoti(true);
        setTimeout(() => setShowDeletedNoti(false), 4000);
    };

    const cancelDeleteTask = () => {
        setShowDeleteConfirmation(false);
        setTaskToDelete(null);
    };

    return (
        <div>
            <TaskForm onAdd={addTask} />
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={requestDeleteTask} />
            {showDeleteConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
                    <div className="group select-none w-[300px] flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl animate-fadeIn">
                        <div>
                            <div className="text-center p-3 flex-auto justify-center">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="animate-bounce w-12 h-12 flex items-center text-gray-600 fill-red-500 mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                                <h2 className="text-xl font-bold py-4 text-gray-200">Are you sure?</h2>
                                <p className="font-bold text-sm text-gray-500 px-2">
                                    Do you really want to delete this task? This process cannot be undone.
                                </p>
                            </div>
                            <div className="p-2 mt-2 text-center space-x-1 md:block">
                                <button
                                    className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300"
                                    onClick={cancelDeleteTask}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-transparent px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 hover:border-red-500 text-white hover:text-red-500 rounded-full transition ease-in duration-300"
                                    onClick={confirmDeleteTask}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showDeletedNoti && <div className="deleted-noti">Task deleted!</div>}
        </div>
    );
};

export default TaskContainer;

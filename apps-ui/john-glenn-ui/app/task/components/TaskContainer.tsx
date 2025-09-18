'use client';
import React, { useEffect, useState } from 'react';
import { Task } from '../utils/types';
import { loadTasks, saveTasks } from '../utils/storage';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskContainer: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

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

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <TaskForm onAdd={addTask} />
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
    );
};

export default TaskContainer;

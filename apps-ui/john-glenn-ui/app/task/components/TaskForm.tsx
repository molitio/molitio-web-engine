import React, { useState } from 'react';
import './TaskForm.css';

interface TaskFormProps {
    onAdd: (name: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onAdd(name.trim());
            setName('');
        }
    };

    return (
        <form className="input-group" onSubmit={handleSubmit}>
            <label className="label" htmlFor="taskInput">
                Task name
            </label>
            <input
                autoComplete="off"
                name="taskInput"
                id="taskInput"
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter task name..."
            />
            <button type="submit" className="add-btn">
                Add
            </button>
        </form>
    );
};

export default TaskForm;

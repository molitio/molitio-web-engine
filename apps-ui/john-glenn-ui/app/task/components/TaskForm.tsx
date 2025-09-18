import React, { useState } from 'react';

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
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter task name..."
                className="task-input"
            />
            <button type="submit" className="add-btn">
                +
            </button>
        </form>
    );
};

export default TaskForm;

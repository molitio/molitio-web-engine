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
            {/* <button type="submit" className="add-btn">
                Add
            </button> */}

            <button className="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group">
                <div className="relative overflow-hidden">
                    <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                        Button
                    </p>
                    <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                        Button
                    </p>
                </div>
            </button>
        </form>
    );
};

export default TaskForm;

import React, { useState } from 'react';
import './TaskForm.css';

interface TaskFormProps {
    onAdd: (name: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [showMaxCharNoti, setShowMaxCharNoti] = useState(false);
    const [showAddedNoti, setShowAddedNoti] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length > 10) {
            setShowMaxCharNoti(true);
            setTimeout(() => setShowMaxCharNoti(false), 2000);
            setName(value.slice(0, 10));
        } else {
            setName(value);
            if (value.length === 10 && name.length < 10) {
                setShowMaxCharNoti(true);
                setTimeout(() => setShowMaxCharNoti(false), 4000);
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onAdd(name.trim());
            setName('');
            setShowAddedNoti(true);
            setTimeout(() => setShowAddedNoti(false), 3000);
        }
    };

    return (
        <div style={{ position: 'relative' }}>
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
                    onChange={handleChange}
                    placeholder="Enter task name..."
                />

                <button className="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-2xl border-[1px] border-slate-500 text-white font-medium group">
                    <div className="relative overflow-hidden">
                        <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                            Add
                        </p>
                        <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                            Add
                        </p>
                    </div>
                </button>
            </form>

            {showMaxCharNoti && <div className="max-char-noti">Maximum 10 characters allowed</div>}
            {showAddedNoti && <div className="added-noti">Task added!</div>}
        </div>
    );
};

export default TaskForm;

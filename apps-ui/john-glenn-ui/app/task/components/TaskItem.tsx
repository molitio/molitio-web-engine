import React from 'react';
import { Task } from '../utils/types';

interface TaskItemProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => (
    <div className="task-item">
        <span className="task-status">{task.completed ? '✅' : '⭕'}</span>
        <span className="task-name" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
        </span>
        <div className="task-actions">
            <button onClick={() => onToggle(task.id)} title="Toggle Complete">
                {task.completed ? 'Undo' : 'Done'}
            </button>
            <button className="delete-btn" onClick={() => onDelete(task.id)} title="Delete">
                🗑️
            </button>
        </div>
    </div>
);

export default TaskItem;

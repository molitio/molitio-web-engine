import React from 'react';
import { Task } from '../utils/types';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => (
    <div className="task-list">
        {tasks.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#ffffffff', fontSize: '22px', fontWeight: 'bold' }}>
                No tasks yet.
            </div>
        ) : (
            tasks.map((task) => <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />)
        )}
    </div>
);

export default TaskList;

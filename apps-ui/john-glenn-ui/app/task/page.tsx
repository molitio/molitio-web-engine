'use client';
import React from 'react';

const Task = () => {
    const headerString = 'HTML HERE <--';
    return (
        <div>
            Task
            <br />
            <span className="text-purple-600">Practice Task App</span>
            <br />
            <span className="text-purple-600">{`${headerString}`}</span>
        </div>
    );
};

export default Task;

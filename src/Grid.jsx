import React, { useState } from 'react';
import Cell from './Cell';
import './Grid.css';

function Grid() {
    const [count, setCount] = useState(0);

    const handleToggle = (isOn) => {
        setCount((prevCount) => isOn ? prevCount + 1 : prevCount - 1);
    };

    return (
        <div className="grid-container">
            <h1>Cells On: {count}</h1>
            <div className="grid">
                <Cell onToggle={handleToggle} />
                <Cell onToggle={handleToggle} />
                <Cell onToggle={handleToggle} />
                <Cell onToggle={handleToggle} />
            </div>
        </div>
    );
}

export default Grid;


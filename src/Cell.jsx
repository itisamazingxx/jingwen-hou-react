import React, { useState } from 'react';
import './Cell.css';

function Cell({ onToggle }) {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
        onToggle(!isOn);
    };

    return (
        <div 
            className="cell" 
            onClick={handleClick} 
            style={{ backgroundColor: isOn ? 'black' : 'white' }}
        ></div>
    );
}

export default Cell;

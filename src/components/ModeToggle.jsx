import React from 'react';

export default function ModeToggle({ onToggle, isDayMode }) {
    return (
        <button onClick={onToggle} className="dock-icon-toggle">
            {isDayMode ? 'Switch to Night Mode' : 'Switch to Day Mode'}
        </button>
    );
}

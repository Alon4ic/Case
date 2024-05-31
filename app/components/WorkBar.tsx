import React, { useState } from 'react';

interface WorkBarProps {
    onFilterChange: (filter: string) => void;
}

const WorkBar: React.FC<WorkBarProps> = ({ onFilterChange }) => {
    const [activeFilter, setActiveFilter] = useState<string>('Gallery');

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        onFilterChange(filter);
    };

    return (
        <div className="filter-buttons gap-[15px]">
            <button
                className={`filter-btn cursor-style ${
                    activeFilter === 'Gallery' ? 'active' : ''
                }`}
                onClick={() => handleFilterChange('Gallery')}
            >
                <span
                    className={`dot ${
                        activeFilter === 'Gallery' ? 'active' : ''
                    }`}
                ></span>
                Gallery
            </button>
            <button
                className={`filter-btn cursor-style ${
                    activeFilter === 'Single' ? 'active' : ''
                }`}
                onClick={() => handleFilterChange('Single')}
            >
                <span
                    className={`dot ${
                        activeFilter === 'Single' ? 'active' : ''
                    }`}
                ></span>
                Single
            </button>
            <button
                className={`filter-btn cursor-style ${
                    activeFilter === 'Group' ? 'active' : ''
                }`}
                onClick={() => handleFilterChange('Group')}
            >
                <span
                    className={`dot ${
                        activeFilter === 'Group' ? 'active' : ''
                    }`}
                ></span>
                Group
            </button>
        </div>
    );
};

export default WorkBar;

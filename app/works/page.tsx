'use client';

import React, { useState } from 'react';
import './worksPage.css';
import WorkBar from '../components/WorkBar';
import Portfolio from '../components/Portfolio';

const WorksPage: React.FC = () => {
    const [filter, setFilter] = useState<string>('Gallery');

    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
    };

    return (
        <section id="works" className="works bg-darks">
            <div className="box-top">
                <h2 className="text-white">
                    My works<span className="text-reds">.</span>
                </h2>
                <p className="box-desc text-white">portfolio</p>
            </div>
            <div className="works-block">
                <WorkBar onFilterChange={handleFilterChange} />
            </div>
            <div>
                <Portfolio filter={filter} />
            </div>
        </section>
    );
};

export default WorksPage;

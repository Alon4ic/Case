import { skillsIcons } from '@/constans';
import React from 'react';
import './skillsPage.css';
import Gallery from '../components/Gallery';

const SkillsPage = () => {
    return (
        <section id="skills" className="skills bg-darks">
            <div className="container">
                <div className="box-top">
                    <h2 className="skills-title text-white">
                        My skills & tools<span className="text-reds">.</span>
                    </h2>
                    <p className="box-desc text-white">2 years of experience</p>
                </div>
                <div className="skills-container">
                    <div className="skills-icons">
                        {skillsIcons.map((icon) => (
                            <div key={icon.name} className="skills-box">
                                <img
                                    src={icon.iconSrc}
                                    alt={icon.name}
                                    className="social-icon"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-container">
                    <Gallery />
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;

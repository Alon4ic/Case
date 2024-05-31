'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const sections = [
    { id: 'home', name: 'Home' },
    { id: 'works', name: 'Works' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' },
];

const NavFix = () => {
    const [activeSection, setActiveSection] = useState('');
    const [showNavFix, setShowNavFix] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.id);
                    }
                }
            });

            const headerHeight = 60; // Предполагаемая высота хедера в пикселях
            if (window.scrollY > headerHeight) {
                setShowNavFix(true);
            } else {
                setShowNavFix(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navFix ${showNavFix ? 'visible' : 'hidden'}`}>
            {sections.map((section) => (
                <Link key={section.id} href={`#${section.id}`} className='cursor-style'>
                    <p
                        className={`navFix__link ${
                            activeSection === section.id ? 'active' : ''
                        }`}
                    >
                        <span className="navFix__circle"></span>
                        <span className="navFix__text">{section.name}</span>
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default NavFix;

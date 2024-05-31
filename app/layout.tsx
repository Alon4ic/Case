'use client';
import React, { useState, useEffect, ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import './globals.css';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import MousePointer from './components/mousePointer/MousePointer';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <html lang="en">
            <head>
                <title>Alon4ik&apos;s portfolio</title>
            </head>
            <body
                className={`${poppins.className} bg-darks with-preloader cursor-style`}
            >
                {loading ? (
                    <Preloader />
                ) : (
                    <>
                        <MousePointer />
                        <Header />
                        {children}
                        <Footer />
                    </>
                )}
            </body>
        </html>
    );
};

export default RootLayout;

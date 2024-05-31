'use client';
import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence, wrap } from 'framer-motion';

import { toolsSrc } from '@/constans';

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

const Gallery = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, toolsSrc.length, page);

    const paginate = (newDirection: number) => {
        if (
            (page === 0 && newDirection === -1) ||
            (page === toolsSrc.length - 1 && newDirection === 1)
        ) {
            return; // Prevent moving out of bounds
        }
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="gallery-container">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={toolsSrc[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="tools-img"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>
            <button
                className={`next cursor-style ${
                    page === toolsSrc.length - 1 ? 'disabled' : ''
                }`}
                onClick={() => paginate(1)}
                disabled={page === toolsSrc.length - 1}
            >
                {'‣'}
            </button>
            <button
                className={`prev cursor-style ${page === 0 ? 'disabled' : ''}`}
                onClick={() => paginate(-1)}
                disabled={page === 0}
            >
                {'‣'}
            </button>
        </div>
    );
};

export default Gallery;

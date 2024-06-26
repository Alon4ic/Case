import React, { useState } from 'react';
import { motion } from 'framer-motion';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Images = ({ src, alt }: { src: string; alt: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    return (
        <section>
            <motion.div
                initial={false}
                animate={
                    isLoaded && isInView
                        ? {
                              WebkitMaskImage: visibleMask,
                              maskImage: visibleMask,
                          }
                        : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
            >
                <img className='scale-animation' src={src} alt={alt} onLoad={() => setIsLoaded(true)} />
            </motion.div>
        </section>
    );
};

export default Images; //

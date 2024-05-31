'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ar from '../../public/images/arrow-right.svg';
import './aboutPage.css';

const slides = [
    {
        title: `Hi! I<span class="text-reds">&apos;</span>m <br/> Olena Redko`,
        subtitle: 'I&apos;m front-end developer from Ukraine.',
    },
    {
        title: `Let<span class="text-reds">&apos;</span>s work <br /> together!`,
        subtitle: 'Build a unique, innovative and amazing project.',
    },
];

const AboutPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const fullText = `I am ready to create a website or application for you with intuitive navigation, transitions, and animations. I write clean code, minify, and use other techniques to make a site or app load quickly.<br /><br />With so many different devices and platforms coming out, it&apos;s important that your website or app is accessible to users with different operating systems, browsers, and screen sizes. I will ensure your site is compatible with a range of devices and platforms, ensuring a seamless experience for all users.`;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 6000); // Меняем слайд каждые 6 секунд

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const slideIndex =
                Math.floor(scrollY / window.innerHeight) % slides.length;
            setCurrentSlide(slideIndex);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let currentCharIndex = 0;
        const typingInterval = 30; // Интервал для печати символов
        let typingTimer: NodeJS.Timeout;

        const typeWriter = () => {
            setTypedText((prev) => prev + fullText.charAt(currentCharIndex));
            currentCharIndex++;

            if (currentCharIndex < fullText.length) {
                typingTimer = setTimeout(typeWriter, typingInterval);
            } else {
                setIsTyping(false);
            }
        };

        if (isTyping) {
            typingTimer = setTimeout(typeWriter, typingInterval);
        } else {
            setTypedText(fullText); // Убедитесь, что весь текст отображается после завершения печати
        }

        return () => clearTimeout(typingTimer);
    }, [isTyping, fullText]);

    return (
        <div className="home container">
            <div className="home-left md:w-[66%] w-full">
                <div className="absolute home-content">
                    <h1
                        className="home-title text-white tracking-tighter font-semibold uppercase mb-[26px]"
                        dangerouslySetInnerHTML={{
                            __html: slides[currentSlide].title,
                        }}
                    />
                    <p className="text-white font-medium uppercase home-text">
                        {slides[currentSlide].subtitle}
                    </p>
                    <a
                        href="#contact"
                        className="flex justify-between items-center bg-black w-[153px] h-[36px] pr-4 pl-1 rounded-lg cursor-style home-link"
                    >
                        <Image src={ar} alt="arrow" width={30} height={30} />
                        <span className="text-white">Contact</span>
                    </a>
                </div>
            </div>
            <div className="home-right bg-darks">
                {/* Дополнительный контент, если нужен */}
            </div>
            <Link
                href="/"
                className="home-center h-[469px] bg-grays z-40 cursor-style absolute"
            >
                <p
                    className="typed-text text-white"
                    dangerouslySetInnerHTML={{ __html: typedText }}
                />
            </Link>
        </div>
    );
};

export default AboutPage;

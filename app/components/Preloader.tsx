'use client';
import React, { useEffect } from 'react';

const Preloader: React.FC = () => {
    useEffect(() => {
        const animateCoding = () => {
            const codingText = document.querySelector(
                '.coding-text'
            ) as HTMLElement;
            if (!codingText) return;
            codingText.style.opacity = '1';
            const moveAmount = codingText.offsetWidth;
            const moveDuration = 2600; // Время в миллисекундах для анимации
            const fps = 120;
            const frames = moveDuration / (500 / fps);
            let currentFrame = 0;

            const move = () => {
                currentFrame++;
                const progress = currentFrame / frames;
                const moveX = moveAmount * progress * -1;
                codingText.style.transform = `translateX(${moveX}px)`;

                if (currentFrame < frames) {
                    requestAnimationFrame(move);
                }
            };

            move();
        };

        const showLoader = () => {
            // Показываем прелоадер
            const preloader = document.querySelector(
                '.preloader'
            ) as HTMLElement;
            if (preloader) {
                preloader.classList.add('visible');
                animateCoding();
            }
        };

        const hideLoader = () => {
            // Скрываем прелоадер
            const preloader = document.querySelector(
                '.preloader'
            ) as HTMLElement;
            if (preloader) {
                preloader.classList.remove('visible');
                preloader.classList.add('hidden');
            }
        };

        showLoader();

        const delay = 2600;

        const timeout = setTimeout(() => {
            hideLoader();
        }, delay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="preloader">
            <p className="coding-text" style={{ opacity: 0.4 }}>
                CODING
            </p>
            <div className="square"></div>
            <div className="preloader-text">
                <p>
                    Full-stack developer
                    <br />
                    Olena Redko
                </p>
            </div>
            <style jsx>{`
                .preloader {
                    position: fixed;
                    width: 100%;
                    height: 100vh;
                    z-index: 100;
                    background-color: #000;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                .coding-text {
                    position: absolute;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 360px;
                    line-height: 443px;
                    color: #25272c;
                    opacity: 0;
                    transform: translateX(7%);
                }
                .visible {
                    opacity: 1;
                    transition: opacity 1s ease;
                }
                .hidden {
                    display: none;
                }
                .square {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 400px;
                    height: 320px;
                    z-index: 200;
                    transform: translate(-50%, -50%);
                    background-color: #464951;
                    animation: expandWidth 1s linear forwards;
                }

                @keyframes expandWidth {
                    from {
                        width: 0;
                    }
                    to {
                        width: 400px;
                    }
                }
                @keyframes slideInFromBottom {
                    0% {
                        opacity: 0;
                        transform: translateY(0%);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(-130%);
                    }
                }

                .preloader-text {
                    font-style: normal;
                    font-weight: 500;
                    z-index: 1000;
                    font-size: 72px;
                    line-height: 91px;
                    color: #fff;
                    opacity: 0;
                    animation: slideInFromBottom 0.7s ease forwards;
                    text-align: center;
                    margin-top: 35%;
                }
                @media (max-width: 1200px) {
                    .preloader-text {
                        margin-top: 40%;
                    }
                }
                @media (max-width: 1040px) {
                    .preloader-text {
                        margin-top: 50%;
                    }
                }
                @media (max-width: 768px) {
                    .coding-text {
                        position: absolute;
                        font-style: medium;
                        font-weight: 480;
                        font-size: 300px;
                        line-height: 443px;
                        color: #25272c;
                        opacity: 0;
                        transform: translateX(7%);
                    }
                    .preloader-text {
                        font-size: 60px;
                        line-height: 72px;
                        margin-top: 60%;
                    }
                }
                @media (max-width: 640px) {
                    .preloader-text {
                        font-size: 46px;
                        line-height: 55px;
                        margin-top: 60%;
                    }
                }
                @media (max-width: 450px) {
                    .square {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        width: 300px;
                        height: 240px;
                        z-index: 200;
                        transform: translate(-50%, -50%);
                        background-color: #464951;
                        animation: expandWidth 1s linear forwards;
                    }

                    @keyframes expandWidth {
                        from {
                            width: 0;
                        }
                        to {
                            width: 300px;
                        }
                    }
                    .preloader-text {
                        margin-top: 100%;
                    }
                }
                @media (max-width: 350px) {
                    .square {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        width: 250px;
                        height: 208px;
                        z-index: 200;
                        transform: translate(-50%, -50%);
                        background-color: #464951;
                        animation: expandWidth 1s linear forwards;
                    }

                    @keyframes expandWidth {
                        from {
                            width: 0;
                        }
                        to {
                            width: 250px;
                        }
                    }
                    .preloader-text {
                        font-size: 36px;
                        line-height: 43px;
                        margin-top: 110%;
                    }
                }
            `}</style>
        </div>
    );
};

export default Preloader;

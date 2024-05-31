import React, { useState, useEffect } from 'react';
import { portfolioItems } from '@/constans';
import Link from 'next/link';
import Images from './Images';

interface PortfolioProps {
    filter: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ filter }) => {
    const [visibleItems, setVisibleItems] = useState(4);

    useEffect(() => {
        console.log('Current filter:', filter);
    }, [filter]);

    const filteredItems = portfolioItems.filter(
        (item) => filter === 'Gallery' || item.id === filter
    );

    useEffect(() => {
        console.log('Filtered items:', filteredItems);
    }, [filteredItems]);

    const loadMoreItems = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
    };

    return (
        <div>
            <div className="portfolio-grid">
                {filteredItems.slice(0, visibleItems).map((item, index) => (
                    <div
                        key={index}
                        className={`portfolio-item ${
                            index % 2 === 0 ? 'even' : 'odd'
                        }`}
                    >
                        <div className="description">
                            <div className="block-content">
                                <h3 className="block-title">{item.title}</h3>
                                <p className="block-text">
                                    {item.description.slice(0, 200)}...
                                </p>
                                <Link
                                    href={item.linkImg}
                                    className="block-link cursor-style"
                                    target="_blank"
                                >
                                    <img
                                        src={item.iconSrc}
                                        alt="arrow"
                                        className="block-icon"
                                    />
                                    <span className="block-btn">
                                        check work
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <Link
                            href={item.linkImg}
                            className="portfolio-link cursor-style"
                        >
                            <Images src={item.imgSrc} alt="Portfolio Image" />
                        </Link>
                    </div>
                ))}
            </div>
            {visibleItems < filteredItems.length && (
                <div className="work-show text-white">
                    <button
                        onClick={loadMoreItems}
                        id="show-more"
                        className="work-show--btn"
                    >
                        <img
                            src="../../images/arrow-right.svg"
                            alt="arrow"
                            className="block-icon"
                        />
                        Show more
                    </button>
                </div>
            )}
        </div>
    );
};
export default Portfolio;
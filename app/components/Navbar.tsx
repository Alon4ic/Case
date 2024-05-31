'use client';
import { NavLinks } from '../../constans/index';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isRouting, setisRouting] = useState(false);
    const path = usePathname();
    const [prevPath, setPrevPath] = useState('/');

    useEffect(() => {
        if (prevPath !== path) {
            setisRouting(true);
        }
    }, [path, prevPath]);

    useEffect(() => {
        if (isRouting) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setisRouting(false);
            }, 1200);

            return () => clearTimeout(timeout);
        }
    }, [isRouting, path]);
    return (
        <div
            style={{ left: '20%' }}
            className="flex justify-between rounded-lg items-center gap-[57px] lg:gap-[47]"
        >
            {NavLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.link}
                    className="link group cursor-style"
                >
                    <span className="text-white text-base font-semibold border-b-2 border-transparent group-hover:border-reds transition-all duration-300 ease-in-out">
                        {nav.name}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default Navbar;

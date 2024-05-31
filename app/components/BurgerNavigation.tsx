import { NavLinks } from '../../constans/index';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const BurgerNavigation: React.FC = () => {
    const [isRoutingLink, setIsRoutingLink] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();
    const [prevPath, setPrevPath] = useState('/');

    useEffect(() => {
        if (prevPath !== path) {
            setIsRoutingLink(true);
        }
    }, [path, prevPath]);

    useEffect(() => {
        if (isRoutingLink) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setIsRoutingLink(false);
            }, 1200);

            return () => clearTimeout(timeout);
        }
    }, [isRoutingLink, path]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
           
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`burger-menu flex ${isOpen ? 'open' : ''}`}>
            <button
                className="burger-icon text-white pl-[48%]"
                onClick={toggleMenu}
            >
                {isOpen ? 'X' : '☰'}
            </button>
            <div
                className={`menu-overlay z-50 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="menu-content flex flex-col bg-black min-w-[200px] gap-5 absolute top-8 pt-4 pb-8 left-[25%] rounded-lg transition-opacity duration-500 ease-in-out text-center">
                    {NavLinks.map((nav) => (
                        <Link
                            key={nav.name}
                            href={nav.link}
                            className="link group"
                            onClick={toggleMenu}
                        >
                            <span className="text-white text-sm font-semibold border-b-2 border-transparent group-hover:border-reds group-hover:text-base transition-all duration-300 ease-in-out">
                                {nav.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BurgerNavigation;

// import { NavLinks } from '../../constans/index';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { useEffect, useState } from 'react';

// const BurgerNavigation: React.FC = () => {
//     const [isRoutingLink, setIsRoutingLink] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//     const path = usePathname();
//     const [prevPath, setPrevPath] = useState('/');

//     useEffect(() => {
//         if (prevPath !== path) {
//             setIsRoutingLink(true);
//         }
//     }, [path, prevPath]);

//     useEffect(() => {
//         if (isRoutingLink) {
//             setPrevPath(path);
//             const timeout = setTimeout(() => {
//                 setIsRoutingLink(false);
//             }, 1200);

//             return () => clearTimeout(timeout);
//         }
//     }, [isRoutingLink, path]);

//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = '';
//         }
//     }, [isOpen]);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className={`burger-menu flex ${isOpen ? 'open' : ''}`}>
//             <button
//                 className="burger-icon text-white pl-[48%]"
//                 onClick={toggleMenu}
//             >
//                 {isOpen ? 'X' : '☰'}
//             </button>
//             <div
//                 className={`menu-overlay ${
//                     isOpen ? 'opacity-100' : 'opacity-0'
//                 }`}
//             >
//                 <div className="menu-content flex flex-col bg-black min-w-[200px] gap-5 absolute top-8 pt-4 pb-8 left-[25%] transition-opacity duration-1000 ease-in-out text-center rounded-lg">
//                     {NavLinks.map((nav) => (
//                         <Link
//                             key={nav.name}
//                             href={`#${nav.link}`}
//                             className="link"
//                             onClick={toggleMenu}
//                         >
//                             <span className="text-white text-base font-semibold">
//                                 {nav.name}
//                             </span>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BurgerNavigation;

import Image from 'next/image';
import React from 'react';
import logo from '../../public/images/AR..svg'
import Navbar from './Navbar';
import SocialLink from './SocialLink';
import BurgerNavigation from './BurgerNavigation';

const Header = () => {
  return (
      <header className="container flex justify-between items-center header">
          <div className="logo">
              <Image src={logo} alt="logo" width={67} height={60} />
          </div>
          <div className="hidden md:flex">
              <Navbar />
          </div>
          <div className="md:hidden flex justify-center">
              <BurgerNavigation />
          </div>
          <div>
              <SocialLink />
          </div>
      </header>
  );
}

export default Header

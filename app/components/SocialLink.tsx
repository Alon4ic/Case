import { socialLinks } from '@/constans';
import React from 'react'

const SocialLink:React.FC = () => {
  return (
      <div className='flex justify-between gap-6 md:gap-10'>
          {socialLinks.map((social) => (
              <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='cursor-style'
              >
                  <img
                      src={social.icon}
                      alt={social.name}
                      className="social-icon"
                  />
              </a>
          ))}
      </div>
  );
}

export default SocialLink

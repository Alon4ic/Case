import Image from 'next/image';
import React from 'react';
import logo from '../../../public/images/AR..svg';
import './contactsPage.css';
import { contactsLinks } from '@/constans';
import SocialLink from '../SocialLink';
import ContactsForm from '../ContactsForm';

const ContactsPage = () => {
    return (
        <div className="contacts" id="contact">
            <div className="contacts-left bg-maxDark">
                <div className="contacts-left--box">
                    <div className="logo contacts-logo">
                        <Image src={logo} alt="logo" width={67} height={60} />
                    </div>
                    {contactsLinks.map((contact, index) => (
                        <div className="contacts-links" key={index}>
                            <a
                                className="font-normal text-base text-grayLight cursor-style wrap-text"
                                href={contact.link}
                                target="_blank"
                            >
                                <span className="font-bold text-white text-base">
                                    {contact.name}&nbsp;
                                </span>
                                {contact.content}
                            </a>
                        </div>
                    ))}
                    <div className="contacts-social">
                        <p className="contacts-title">follow me</p>
                        <div className="contacts-social-icon">
                            <SocialLink />
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts-right bg-bgDark">
                <div className="contacts-right--box">
                    <p className="contacts-title">contact me</p>
                    <ContactsForm />
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;

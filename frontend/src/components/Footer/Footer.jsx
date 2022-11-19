/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
import React from 'react';
import logo from '../../assets/header/logo.png.svg';
import NavLinks from './NavLinks';

const Footer = () => {
    const navItems = [
        {
            name: 'Get To Know Us',
            navLinks: [
                { link: 'About MyStockPlug' },
                { link: 'Careers' },
                { link: 'Stock Tips' },
                { link: 'Contact Us' }
            ]
        },
        {
            name: 'Support',
            navLinks: [{ link: 'Help' }, { link: 'FAQ' }, { link: 'News' }, { link: 'Blog' }]
        },
        {
            name: 'Legal',
            navLinks: [
                { link: 'Terms of Use' },
                { link: 'Privacy Policy' },
                { link: 'Disclaimer' },
                { link: 'Cookies Policy' }
            ]
        }
    ];

    const footerStyle = {
        background: '#000718',
        color: 'white'
    };
    return (
        <footer
            style={footerStyle}
            className="p-4 flex flex-col items-center justify-center w-full">
            <div className="flex w-full flex-wrap justify-between items-start max-w-screen-xl gap-8 border-b border-white pb-12 mb-8 md:mt-12">
                <div className="w-60 pb-8 md:pb-0">
                    <img src={logo} alt="" />
                </div>
                <div className="flex justify-between items-start flex-wrap gap-8 max-w-2xl w-full">
                    {navItems.map((item, index) => {
                        const { name, navLinks } = item;
                        return (
                            <div key={index} className="w-36">
                                <p className="mb-8 ">{name}</p>
                                <NavLinks navLinks={navLinks} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="text-center pb-10">2022 MyStockPlug</div>
        </footer>
    );
};

export default Footer;

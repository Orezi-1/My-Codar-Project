import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import headerLogo from '../images/logo/logo.png';
import {FiMenu} from "react-icons/fi";
import { pageLinks } from '../Data';

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 75) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Add this to your pageLinks array or create a separate array for dropdown items
    const blogDropdownItems = [
        { id: 'blog', name: 'Blog', path: '/blog' },
        { id: 'blog-details', name: 'Blog Details', path: '/blog-details' },
        { id: 'elements', name: 'Elements', path: '/elements' }
    ];
    
    return (
        <>
            <header
                className={`bg-primary flex h-[75px] fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
                    isScrolled ? 'translate-y-0 shadow-lg' : 'translate-y-0'
                }`}
            >
                <div className='flex items-center grow justify-between mr-4 px-8'>
                    <Link to="/">
                        <img src={headerLogo} alt="narosundar" className='logo' />
                    </Link>

                    <nav className='hidden lg:flex lg:space-x-10'>
                        {pageLinks.map((link) => {
                            if (link.name.toLowerCase() === 'blog') {
                                return (
                                    <div 
                                        key={link.id}
                                        className="relative group"
                                    >
                                        <NavLink 
                                            to={link.path}
                                            className="uppercase text-sm font-semibold text-white group-hover:text-red-500 transition-colors duration-200"
                                        >
                                            {link.name}
                                        </NavLink>
                                        
                                        {/* Custom Dropdown Menu */}
                                        <div className="absolute left-0 mt-0 w-56 rounded shadow-lg bg-[#18191b] opacity-0 group-hover:opacity-100 group-hover:block invisible group-hover:visible transition-all duration-200 z-20"
                                             style={{top: '100%'}}
                                        >
                                            <div className="flex flex-col py-2">
                                                {blogDropdownItems.map((item, idx) => (
                                                    <NavLink
                                                        key={item.id}
                                                        to={item.path}
                                                        className={`px-6 py-2 text-[15px] text-left font-semibold transition-colors duration-200 ${
                                                            idx === 0
                                                            ? 'text-white hover:bg-secondary'
                                                            : 'text-white hover:text-red-500 hover:bg-[#232325]'
                                                        }`}
                                                    >
                                                        {item.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <NavLink key={link.id} to={link.path}
                                className='uppercase text-sm text-white font-semibold
                                '>
                                    {link.name}
                                </NavLink>
                            )
                        }
                        )}
                    </nav>
                </div>
                <button className='hidden lg:block font-bold text-base text-white 
                    uppercase bg-secondary px-18 ms-auto'>
                    Free Quote
                </button>
            </header>

            {/* Mobile Menu Button Container - Moved outside header */}
            <div className='fixed top-[75px] left-0 w-full bg-[#4c4c4c] h-16 lg:hidden z-40'>
                <button
                    className='text-white p-2 flex gap-3 cursor-pointer bg-[black] lg:hidden absolute top-2 right-3 rounded-md'
                    onClick={toggleMenu}
                >   
                    <span>Menu</span>
                    <FiMenu className='text-white text-2xl' />
                </button>
            </div>

            {/* Mobile Menu Navigation*/}
            <nav
                className={`lg:hidden fixed top-[139px] bg-[#4c4c4c] 
                    transition-all duration-300 w-full py-10 z-30
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {pageLinks.map((link) => {
                    const { id, name, path } = link;
                    if (name.toLowerCase() === 'blog') {
                        return (
                            <div key={id} className="relative">
                                <NavLink 
                                    to={path}
                                    className='uppercase text-sm font-semibold 
                                    hover:text-secondary transition duration-300 -tracking-wide 
                                    block text-white py-2 px-6'
                                >
                                    {name}
                                </NavLink>
                                <div className="pl-6">
                                    {blogDropdownItems.map((item) => (
                                        <NavLink
                                            key={item.id}
                                            to={item.path}
                                            className="uppercase text-sm font-semibold block
                                            text-white py-2 hover:text-secondary transition-colors duration-200"
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                    return (
                        <NavLink 
                            key={id}
                            to={path}
                            className='uppercase text-sm font-semibold 
                            hover:text-secondary transition duration-300 -tracking-wide 
                            block text-white py-2 px-6'
                        >
                            {name}
                        </NavLink>
                    );
                })}
            </nav>
        </>
    )
}

export default Header;
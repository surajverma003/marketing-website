import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Header = () => {
    const navRef = useRef(null);
    const dropdownRef = useRef(null);
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const serviceRoutes = ['/branding', '/digital-marketing', '/seo-services', '/social-media'];
    const isServiceActive = serviceRoutes.includes(location.pathname);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Initialize dark mode from system preference
    useEffect(() => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (servicesDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setServicesDropdownOpen(false);
            }
            if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [servicesDropdownOpen, isOpen]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setServicesDropdownOpen(false);
    }, [location.pathname]);

    const NavLink = ({ to, children }) => {
        const isActive = location.pathname === to;
        return (
            <Link to={to} className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive
                ? 'text-cyan-600 dark:text-cyan-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                } after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-teal-500 after:transition-all after:duration-300 ${isActive ? 'after:w-6' : 'hover:after:w-6'}`}
            >
                {children}
            </Link>
        );
    };

    return (
        <nav ref={navRef} className={`font-[Poppins] fixed z-50 w-full top-0 transition-all duration-500 ${scrolled ? 'py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-slate-900/30' : 'py-5 bg-transparent' }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl text-white font-bold text-xl shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-105">D</span>
                        <span className="text-xl font-bold text-slate-900 dark:text-white">Delectus</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        <NavLink to="/">Home</NavLink>

                        {/* Services Dropdown */}
                        <div ref={dropdownRef} className="relative">
                            <button onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)} className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isServiceActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400' }`}>
                                Services <Icon icon="iconamoon:arrow-down-2" className={`w-5 h-5 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}/>
                            </button>

                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-0 mt-2 w-64 transition-all duration-300 origin-top
                                ${servicesDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
                            `}>
                                <div className="p-2 bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700">
                                    {[
                                        { to: '/branding', label: 'Branding', icon: 'fluent:design-ideas-24-regular' },
                                        { to: '/digital-marketing', label: 'Digital Marketing', icon: 'nimbus:marketing' },
                                        { to: '/seo-services', label: 'SEO Services', icon: 'carbon:search-advanced' },
                                        { to: '/social-media', label: 'Social Media', icon: 'fluent:people-community-24-regular' }
                                    ].map((item) => (
                                        <Link key={item.to} to={item.to} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${location.pathname === item.to ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
                                            <Icon icon={item.icon} className="w-5 h-5" /> <span className="font-medium">{item.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-3">
                        {/* Dark Mode Toggle */}
                        <button onClick={toggleDarkMode} className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105" aria-label="Toggle dark mode" >
                            <Icon icon={darkMode ? "ph:sun-bold" : "ph:moon-stars-bold"} className="w-5 h-5 transition-transform duration-300" />
                        </button>

                        {/* CTA Button */}
                        <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5">
                            Get a Free Quote
                        </button>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300" aria-label="Toggle menu" >
                            <Icon icon={isOpen ? "iconamoon:close" : "iconamoon:menu-burger-horizontal"} className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out
                    ${isOpen ? 'max-h-auto opacity-100 mt-4' : 'max-h-0 opacity-0'}
                `}>
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                        <div className="space-y-1">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/about', label: 'About' },
                                { to: '/blog', label: 'Blog' },
                                { to: '/contact', label: 'Contact' }
                            ].map((item) => (
                                <Link key={item.to} to={item.to} className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${location.pathname === item.to ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
                                    {item.label}
                                </Link>
                            ))}

                            {/* Mobile Services Accordion */}
                            <div>
                                <button onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isServiceActive ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
                                    Services <Icon icon="iconamoon:arrow-down-2" className={`w-5 h-5 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}/>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ${servicesDropdownOpen ? 'max-h-48 mt-1' : 'max-h-0'}`}>
                                    <div className="pl-4 space-y-1">
                                        {[
                                            { to: '/branding', label: 'Branding' },
                                            { to: '/digital-marketing', label: 'Digital Marketing' },
                                            { to: '/seo-services', label: 'SEO Services' },
                                            { to: '/social-media', label: 'Social Media' }
                                        ].map((item) => (
                                            <Link key={item.to} to={item.to} className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === item.to ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20' : 'text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400'}`}>
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile CTA */}
                        <button className="w-full mt-4 px-5 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300">
                            Get a Free Quote
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;

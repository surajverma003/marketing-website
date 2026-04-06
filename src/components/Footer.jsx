import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const services = [
        { name: "SEO Services", link: "/seo-services" },
        { name: "Digital Marketing", link: "/digital-marketing" },
        { name: "Social Media", link: "/social-media" },
        { name: "Branding", link: "/branding" },
        { name: "PPC Advertising", link: "/digital-marketing" }
    ];

    const company = [
        { name: "About Us", link: "/about" },
        { name: "Our Team", link: "/about" },
        { name: "Careers", link: "/contact" },
        { name: "Blog", link: "/blog" },
        { name: "Contact Us", link: "/contact" }
    ];

    const socials = [
        { icon: "mdi:github", label: "Github", link: "#", color: "hover:bg-white hover:text-slate-900/80" },
        { icon: "mdi:linkedin", label: "LinkedIn", link: "#", color: "hover:bg-blue-700" },
        { icon: "mdi:youtube", label: "YouTube", link: "#", color: "hover:bg-red-600" },
        { icon: "mdi:twitter", label: "Twitter", link: "#", color: "hover:bg-blue-500" },
    ];

    return (
        <footer className="font-[Poppins] bg-slate-900 dark:bg-slate-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="inline-flex items-center gap-2 group mb-6">
                            <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl text-white font-bold text-xl shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-105">D</span>
                            <span className="text-xl font-bold text-white">Delectus</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                            Transform your digital presence with data-driven strategies that deliver measurable results. We help businesses scale through innovative marketing solutions.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socials.map((social, i) => (
                                <a key={i} href={social.link} aria-label={social.label} className={`w-10 h-10 flex items-center justify-center bg-slate-800 rounded-xl text-slate-400 hover:text-white ${social.color} transition-all duration-300 hover:scale-110`} >
                                    <Icon icon={social.icon} width="20" height="20" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span> Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service, i) => (
                                <li key={i}>
                                    <Link to={service.link} className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group" >
                                        <Icon icon="mdi:chevron-right" className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" width="16" height="16" /> {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {company.map((item, i) => (
                                <li key={i}>
                                    <Link  to={item.link} className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group" >
                                        <Icon icon="mdi:chevron-right" className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" width="16" height="16" /> {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4">
                        <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span> Contact Info
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-slate-800 rounded-xl text-cyan-500">
                                    <Icon icon="mdi:map-marker" width="20" height="20" />
                                </span>
                                <div className="text-slate-400">
                                    <p>123 Demo St, Lakeland,</p>
                                    <p>FL 45678, United States</p>
                                </div>
                            </li>
                            <li>
                                <a href="mailto:hello@delectus.com" className="flex items-center gap-4 group">
                                    <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-slate-800 rounded-xl text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                                        <Icon icon="mdi:email" width="20" height="20" />
                                    </span>
                                    <span className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                                        hello@delectus.com
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+11234567890" className="flex items-center gap-4 group">
                                    <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-slate-800 rounded-xl text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                                        <Icon icon="mdi:phone" width="20" height="20" />
                                    </span>
                                    <span className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                                        +1 123-456-7890
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-slate-500 text-sm text-center md:text-left">© {currentYear} Delectus. All rights reserved.</p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                            <Link to="#" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">Privacy Policy</Link>
                            <Link to="#" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">Terms of Service</Link>
                            <Link to="#" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Gradient */}
            {/* <div className="h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500"></div> */}
        </footer>
    );
};

export default Footer;
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

const Branding = () => {
    const [activeProcess, setActiveProcess] = useState(0);

    const processes = [
        { icon: "icon-park-outline:concept-sharing", title: "Discovery", desc: "Deep dive into your business, audience, and competitive landscape to uncover unique opportunities." },
        { icon: "carbon:model-builder", title: "Strategy", desc: "Develop a comprehensive brand strategy that aligns with your business goals and resonates with your audience." },
        { icon: "fluent:design-ideas-24-regular", title: "Design", desc: "Create visual identity systems including logos, color palettes, typography, and brand guidelines." },
        { icon: "fluent:task-list-ltr-24-filled", title: "Launch", desc: "Roll out your new brand across all touchpoints with a coordinated launch strategy." }
    ];

    const works = [
        { img: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-work-2.jpg", title: "NeatBuds", category: "Brand Identity", result: "+250% Brand Recognition" },
        { img: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-work-1.jpg", title: "Glang Smartwatch", category: "Visual Design", result: "+180% Market Share" },
        { img: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-work-4.jpg", title: "Roogitec", category: "Rebranding", result: "+320% Customer Trust" },
        { img: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-work-3.jpg", title: "Nyez Water", category: "Packaging", result: "+200% Sales Growth" },
        { img: "https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?q=80&w=1665&auto=format&fit=crop", title: "Laptop SmartChoice", category: "Brand Strategy", result: "+150% Brand Value" },
        { img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1664&auto=format&fit=crop", title: "TechFlow", category: "Digital Branding", result: "+280% Engagement" }
    ];

    const services = [
        { icon: "fluent:design-ideas-24-regular", title: "Logo Design", desc: "Memorable logos that capture your brand essence" },
        { icon: "mdi:palette-outline", title: "Visual Identity", desc: "Cohesive visual systems across all touchpoints" },
        { icon: "mdi:file-document-outline", title: "Brand Guidelines", desc: "Comprehensive guides for consistent branding" },
        { icon: "mdi:message-text-outline", title: "Brand Voice", desc: "Distinctive messaging that resonates" },
        { icon: "mdi:package-variant-closed", title: "Packaging Design", desc: "Eye-catching packaging that sells" },
        { icon: "mdi:web", title: "Digital Branding", desc: "Online presence that converts" }
    ];

    return (
        <div className="font-[Poppins] bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-end overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-cyan-900">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
                </div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-32 w-full">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">Services / Branding</span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                            Build a Brand That
                            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Stands Out
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">Create a powerful brand identity that connects with your audience and sets you apart from the competition.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1">
                                Start Your Project <Icon icon="mdi:arrow-right" className="inline ml-2 group-hover:translate-x-1 transition-transform" width="20" height="20" />
                            </button>
                            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300">View Portfolio</button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10">
                        {[
                            { value: "500+", label: "Brands Created" },
                            { value: "98%", label: "Client Satisfaction" },
                            { value: "15+", label: "Years Experience" },
                            { value: "50+", label: "Awards Won" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center sm:text-left">
                                <h3 className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</h3>
                                <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3">
                            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-8"></div>
                        </div>
                        <div className="lg:w-2/3">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">We help brands get where they need to be</h2>
                            <div className="grid sm:grid-cols-2 gap-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>Your brand is more than a logo—it's the complete experience your customers have with your company. We craft comprehensive brand identities that resonate deeply with your target audience.</p>
                                <p>From startups to established enterprises, we've helped hundreds of businesses transform their brand presence and achieve remarkable growth through strategic branding.</p>
                            </div>
                            <button className="group mt-10 flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-lg hover:gap-4 transition-all duration-300">
                                Let's work together <Icon icon="mdi:arrow-right" width="28" height="28" className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">What We Offer</span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Branding Services</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Comprehensive branding solutions to elevate your business</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <div key={i} className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">
                                <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl text-white mb-6 shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <Icon icon={service.icon} width="28" height="28" />
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-gradient-to-br from-cyan-600 via-cyan-700 to-teal-700 dark:from-cyan-800 dark:via-cyan-900 dark:to-teal-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-cyan-100 text-sm font-semibold tracking-wider uppercase mb-6">Our Approach</span>
                        <h2 className="text-3xl sm:text-5xl font-bold mb-4">Insight. Creativity. Technology.</h2>
                        <p className="text-lg text-cyan-100 max-w-2xl mx-auto">Our proven 4-step process ensures exceptional results every time</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {processes.map((process, i) => (
                            <div key={i} className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 ${ activeProcess === i ? 'bg-white/20 backdrop-blur-sm border-2 border-white/30 scale-105' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`} onClick={() => setActiveProcess(i)}>
                                <span className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-white text-cyan-600 rounded-full font-bold shadow-lg">{i + 1}</span>
                                <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${activeProcess === i ? 'bg-white/30' : 'bg-white/10'}`}>
                                    <Icon icon={process.icon} width="28" height="28" />
                                </span>
                                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                                <p className="text-cyan-100 text-sm leading-relaxed">{process.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">Portfolio</span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Our Works</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">See how we've helped brands transform their identity and achieve remarkable results</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {works.map((work, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-2xl mb-6">
                                    <img className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" src={work.img} alt={work.title} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div>
                                            <span className="inline-block px-3 py-1 bg-cyan-500/20 backdrop-blur-sm text-cyan-300 text-xs font-medium rounded-full mb-2">
                                                {work.result}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">{work.category}</span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{work.title}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition-all duration-300">View All Projects</button>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
                <div className="max-w-5xl mx-auto">
                    <div className="relative p-8 sm:p-12 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700">
                        <span className="absolute -top-6 left-10 text-cyan-500">
                            <Icon icon="fa6-solid:quote-right" width="60" height="60" />
                        </span>
                        <blockquote className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white leading-relaxed mt-8 mb-10">
                            "Working with Delectus transformed our entire brand perception. They didn't just create a logo—they built a complete brand ecosystem that resonates with our customers and has driven incredible growth."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <img className="w-14 h-14 rounded-full object-cover ring-4 ring-cyan-500/20" src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-executive-chariman-img.jpg" alt="Matthew Johnson" />
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white">Matthew Johnson</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">CEO, TechStart Inc.</p>
                            </div>
                            <div className="ml-auto flex gap-1 text-yellow-400">
                                {[...Array(5)].map((_, i) => <Icon key={i} icon="flowbite:star-solid" width="20" height="20" />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        <div className="flex flex-col justify-center text-white">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">Ready to Build Your Brand?</h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">Let's create a brand identity that captures your essence and connects with your audience on a deeper level.</p>
                            <ul className="space-y-4">
                                {["Free brand audit", "Custom strategy", "Unlimited revisions", "Full ownership rights"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <span className="w-6 h-6 flex items-center justify-center bg-cyan-500 rounded-full">
                                            <Icon icon="mdi:check" className="text-white" width="16" height="16" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-8 sm:p-10 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Let's Talk</h3>
                            <form className="space-y-5">
                                <input type="text" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Full Name" />
                                <input type="email" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Email Address" />
                                <textarea rows="4" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none" placeholder="Tell us about your project"></textarea>
                                <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1">
                                    Get Your Free Quote
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Branding;

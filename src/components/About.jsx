
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const About = () => {
    const stats = [
        { icon: "devicon-plain:google", value: "4.8", label: "200+ Reviews" },
        { icon: "fa-brands:facebook-f", value: "4.6", label: "400+ Reviews" },
        { icon: "weui:location-filled", value: "4.8", label: "100+ Reviews" },
        { icon: "flowbite:star-solid", value: "4.7", label: "200+ Reviews" }
    ];

    const services = [
        { icon: "bi:chat-text", title: "Consulting", desc: "Strategic guidance to maximize your digital potential" },
        { icon: "la:telegram-plane", title: "Marketing", desc: "Data-driven campaigns that deliver results" },
        { icon: "ant-design:ant-design-outlined", title: "Design", desc: "Stunning visuals that captivate audiences" }
    ];

    const testimonials = [
        { quote: "Working with Delectus transformed our digital presence. Their strategic approach delivered a 300% increase in qualified leads.", name: "Matthew Johnson", role: "CEO, TechStart", img: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-reviewer-img-1.jpg" },
        { quote: "The team's expertise in SEO and content marketing helped us dominate our industry. Exceptional results and outstanding support.", name: "Luis Carlos", role: "Founder, GrowthCo", img: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-reviewer-img-2.jpg" },
        { quote: "Professional, innovative, and results-driven. Delectus exceeded our expectations and became a true extension of our team.", name: "Alice Miles", role: "CMO, Innovate Inc", img: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-reviewer-img-3.jpg" }
    ];

    const partners = [
        "https://i.ibb.co/5FFkwXg/depositphotos-449066958-stock-photo-financial-accounting-logo-financial-logo-removebg-preview.png",
        "https://i.ibb.co/4Jx34fY/abstract-logo-design-for-any-corporate-brand-business-company-vector-removebg-preview.png",
        "https://i.ibb.co/hLTTSZ5/abstract-colorful-logo-design-650075-1506-removebg-preview.png",
        "https://i.ibb.co/GHfgX1n/circle-line-simple-design-logo-600nw-2174926871-removebg-preview-1.png",
        "https://i.ibb.co/qRTNY5t/cc1b70bc4761268353e65850988524b1-removebg-preview.png",
        "https://i.ibb.co/kQgY648/finance-logo-design-finance-logo-design-166727245-removebg-preview.png",
        "https://i.ibb.co/YDTLTfq/a-logo-design-company-logo-template-7246ba946d6686a9a5b984a1e4380b1b-screen-removebg-preview-1.png",
        "https://i.ibb.co/86RCcnS/cb1264967fdc34b0aab2db2f9c3ff04d-removebg-preview.png"
    ];

    return (
        <div className="font-[Poppins] bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-32">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm animate-fade-in">Our Story</span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">About Us</h1>
                        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">Transforming businesses through innovative digital marketing strategies since 2015.</p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight">Specialists in Digital Marketing Solutions</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">We're not just another marketing agency. We're your strategic partners in digital growth, combining creativity with data-driven insights to deliver measurable results.</p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Our team of experts brings together decades of experience across SEO, content marketing, social media, and paid advertising to create comprehensive strategies that drive real business outcomes.</p>
                        </div>
                    </div>

                    {/* Quote Section */}
                    <div className="mt-24 p-8 sm:p-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <span className="flex-shrink-0 text-cyan-500">
                                <Icon icon="fa6-solid:quote-right" width="60" height="60" />
                            </span>
                            <div>
                                <blockquote className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white leading-relaxed mb-8">"Since the beginning, our mission has been clear: help businesses unlock their full potential through innovative digital strategies that deliver real, measurable results."</blockquote>
                                <div className="flex items-center gap-4">
                                    <img className="w-14 h-14 rounded-full object-cover ring-4 ring-cyan-500/20" src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-executive-chariman-img.jpg" alt="George Best" />
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">George Best</h4>
                                        <p className="text-slate-500 dark:text-slate-400">Executive Chairman</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Width Image */}
            <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <img className="w-full h-full object-cover" src="https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-about-us-full-width-img.jpg" alt="Our Team" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-6xl mx-auto -mt-24 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 dark:from-slate-800 dark:via-slate-900 dark:to-cyan-950 rounded-3xl shadow-2xl">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex items-center gap-4 p-4">
                                <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl text-white shadow-lg shadow-cyan-500/25">
                                    <Icon icon={stat.icon} width="24" height="24" />
                                </span>
                                <div>
                                    <h4 className="text-4xl sm:text-5xl font-bold text-white">{stat.value}</h4>
                                    <p className="text-slate-400 text-sm font-medium mt-1">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <span className="inline-block px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">What We Do</span>
                            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight">Full-service Digital Marketing Solutions</h2>
                        </div>

                        <div>
                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-8"></div>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">From strategy to execution, we provide end-to-end digital marketing services that help businesses grow and thrive in the digital age.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {services.map((service, i) => (
                                    <div key={i} className="group">
                                        <span className="inline-flex items-center justify-center w-14 h-14 bg-cyan-500/10 dark:bg-cyan-500/20 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-teal-500 rounded-2xl text-cyan-600 dark:text-cyan-400 group-hover:text-white mb-4 transition-all duration-300">
                                            <Icon icon={service.icon} width="28" height="28" />
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{service.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-gradient-to-br from-cyan-600 via-cyan-700 to-teal-700 dark:from-cyan-800 dark:via-cyan-900 dark:to-teal-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
                        <p className="text-cyan-100 text-lg">Real results from real businesses</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, i) => (
                            <div key={i} className="group p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
                                <div className="flex gap-1 text-yellow-400 mb-6">
                                    {[...Array(5)].map((_, j) => <Icon key={j} icon="flowbite:star-solid" width="20" height="20" />)}
                                </div>
                                <p className="text-white text-lg leading-relaxed mb-8">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <img className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20" src={testimonial.img} alt={testimonial.name} />
                                    <div>
                                        <h5 className="text-white font-semibold">{testimonial.name}</h5>
                                        <p className="text-cyan-200 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-20 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-center text-sm font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400 mb-12">Trusted Partners & Awards</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-8 gap-8 items-center opacity-60 dark:opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {partners.map((logo, i) => (
                            <img key={i} className="w-full h-20 object-contain dark:invert" src={logo} alt="Partner logo" />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        <div className="flex flex-col justify-center">
                            <span className="inline-block w-fit px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">Get Started</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Ready to Transform Your Digital Presence?</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Let's create a customized strategy that drives real results for your business. Our team is ready to help you succeed.</p>
                            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                                {["Free initial consultation", "Custom strategy development", "Transparent reporting", "Dedicated account manager"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-6 h-6 flex items-center justify-center bg-cyan-500 rounded-full text-white">
                                            <Icon icon="flowbite:check-outline" width="16" height="16" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-8 sm:p-10 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700">
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">Let's Talk</h3>
                            <form className="space-y-5">
                                <input type="text" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" placeholder="Full Name" />
                                <input type="email" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" placeholder="Email Address" />
                                <textarea rows="5" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none" placeholder="Your Message"></textarea>
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

export default About;
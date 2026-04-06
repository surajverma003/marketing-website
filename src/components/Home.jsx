import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="font-[Poppins] bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 -left-40 w-96 h-96 bg-teal-500/10 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full animate-pulse delay-500"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-32">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium tracking-wider uppercase mb-8 backdrop-blur-sm">Welcome to Delectus</span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                            Leading Internet
                            <span className="block bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Marketing Agency</span>
                            Based in Florida.
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">Transform your digital presence with data-driven strategies that deliver measurable results. We help businesses scale through innovative marketing solutions.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button type="button" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1"                            >
                                Get a Free Quote <Icon icon="flowbite:arrow-right-outline" className="inline ml-2 group-hover:translate-x-1 transition-transform" width="20" height="20" />
                            </button>
                            <button onClick={() => navigate("/about")} type="button" className="group flex justify-center items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300" >
                                <span>Learn More</span>
                                <Icon icon="flowbite:arrow-right-outline" className="group-hover:translate-x-1 transition-transform" width="20" height="20" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <Icon icon="flowbite:chevron-down-outline" className="text-white/50" width="32" height="32" />
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">What We Do</span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Full-service Internet Marketing Solutions</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Comprehensive digital marketing services designed to elevate your brand, drive engagement, and maximize your return on investment.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { icon: "bi:chat-text", title: "Consulting", desc: "Strategic guidance to optimize your digital presence and marketing efforts" },
                            { icon: "la:telegram-plane", title: "Marketing", desc: "Data-driven campaigns that connect with your target audience" },
                            { icon: "ant-design:ant-design-outlined", title: "Design", desc: "Stunning visuals that capture attention and drive conversions" }
                        ].map((item, i) => (
                            <div key={i} className="group text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-teal-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                                <span className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 dark:bg-cyan-500/20 group-hover:bg-white/20 rounded-2xl text-cyan-600 dark:text-cyan-400 group-hover:text-white mb-6 transition-all duration-500"><Icon icon={item.icon} width="32" height="32" /></span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-white mb-3 transition-colors duration-500">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 group-hover:text-white/80 transition-colors duration-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">Our Services</span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6"> Take Your Business to the Next Level</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Comprehensive solutions tailored to your unique business needs and growth objectives</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: "teenyicons:box-outline", title: "Digital Strategy", desc: "Comprehensive digital roadmaps that align with your business goals and drive sustainable growth through innovative approaches." },
                            { icon: "nimbus:marketing", title: "Advertising", desc: "Targeted advertising campaigns across multiple platforms that maximize reach and deliver exceptional return on ad spend." },
                            { icon: "fluent:globe-28-filled", title: "Online Marketing", desc: "Holistic online marketing solutions that build brand awareness, engage audiences, and convert prospects into loyal customers." },
                            { icon: "fluent:arrow-growth-20-filled", title: "Search Engine Optimization", desc: "Advanced SEO strategies that improve visibility, drive organic traffic, and establish your authority in search results." }
                        ].map((service, i) => (
                            <div key={i} className="group relative p-8 sm:p-10 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-1" >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl text-white mb-6 shadow-lg shadow-cyan-500/25"><Icon icon={service.icon} width="28" height="28" /></span>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-20 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-center text-sm font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400 mb-12">Trusted by Industry Leaders</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-8 gap-8 items-center opacity-60 dark:opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {[
                            "https://i.ibb.co/5FFkwXg/depositphotos-449066958-stock-photo-financial-accounting-logo-financial-logo-removebg-preview.png",
                            "https://i.ibb.co/4Jx34fY/abstract-logo-design-for-any-corporate-brand-business-company-vector-removebg-preview.png",
                            "https://i.ibb.co/hLTTSZ5/abstract-colorful-logo-design-650075-1506-removebg-preview.png",
                            "https://i.ibb.co/GHfgX1n/circle-line-simple-design-logo-600nw-2174926871-removebg-preview-1.png",
                            "https://i.ibb.co/qRTNY5t/cc1b70bc4761268353e65850988524b1-removebg-preview.png",
                            "https://i.ibb.co/kQgY648/finance-logo-design-finance-logo-design-166727245-removebg-preview.png",
                            "https://i.ibb.co/YDTLTfq/a-logo-design-company-logo-template-7246ba946d6686a9a5b984a1e4380b1b-screen-removebg-preview-1.png",
                            "https://i.ibb.co/86RCcnS/cb1264967fdc34b0aab2db2f9c3ff04d-removebg-preview.png"
                        ].map((logo, i) => (
                            <img key={i} className="w-full h-20 object-contain dark:invert" src={logo} alt="Partner logo" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-6 sm:px-10 bg-white dark:bg-slate-950 transition-colors duration-500">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 sm:p-12 
                    bg-slate-50 border border-slate-200 shadow-xl
                    dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-cyan-900 
                    dark:border-none dark:shadow-2xl rounded-3xl transition-all">
                        {[
                            { icon: "devicon-plain:google", rating: "4.8", reviews: "200+ Reviews" },
                            { icon: "fa-brands:facebook-f", rating: "4.6", reviews: "400+ Reviews" },
                            { icon: "weui:location-filled", rating: "4.8", reviews: "100+ Reviews" },
                            { icon: "flowbite:star-solid", rating: "4.7", reviews: "200+ Reviews" }
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-4 p-4">
                                <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl text-white shadow-lg shadow-cyan-500/25"><Icon icon={stat.icon} width="24" height="24" /></span>

                                <div>
                                    <h4 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">{stat.rating}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">{stat.reviews}</p>
                                </div>
                            </div>
                        ))}
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
                        {[
                            { quote: "Working with Delectus transformed our digital presence. Their strategic approach delivered a 300% increase in qualified leads within six months.", name: "Matthew Johnson", role: "CEO, TechStart", img: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-reviewer-img-1.jpg" },
                            { quote: "The team's expertise in SEO and content marketing helped us dominate our industry keywords. Exceptional results and outstanding support.", name: "Luis Carlos", role: "Founder, GrowthCo", img: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-reviewer-img-2.jpg" },
                            { quote: "Professional, innovative, and results-driven. Delectus exceeded our expectations and became a true extension of our marketing team.", name: "Alice Miles", role: "CMO, Innovate Inc", img: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-reviewer-img-3.jpg" }
                        ].map((testimonial, i) => (
                            <div key={i} className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
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

            {/* CTA & Contact Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        <div className="flex flex-col justify-center">
                            <span className="inline-block w-fit px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">Get Started</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Ready to Transform Your Digital Presence?</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Partner with us to unlock your business potential. Our team of experts is ready to create a customized strategy that drives real results and sustainable growth.</p>
                            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                                {["Free initial consultation", "Custom strategy development", "Transparent reporting", "Dedicated account manager"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-6 h-6 flex items-center justify-center bg-cyan-500 rounded-full text-white"><Icon icon="flowbite:check-outline" width="16" height="16" /></span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-8 sm:p-10 bg-slate-50 dark:bg-slate-800 rounded-3xl shadow-xl">
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">Let's Talk</h3>
                            <form className="space-y-5">
                                <input type="text" className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" placeholder="Full Name" />
                                <input type="email" className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" placeholder="Email Address" />
                                <textarea rows="5" className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none" placeholder="Your Message" ></textarea>
                                <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1" >
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

export default Home;

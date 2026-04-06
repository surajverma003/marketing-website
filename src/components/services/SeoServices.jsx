import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

const SeoServices = () => {
    const services = [
        { icon: "mdi:magnify", title: "Keyword Research", desc: "Identify high-value keywords that your target audience is actively searching for" },
        { icon: "mdi:file-document-edit-outline", title: "On-Page SEO", desc: "Optimize your content, meta tags, and site structure for maximum visibility" },
        { icon: "mdi:link-variant", title: "Link Building", desc: "Build high-quality backlinks that boost your domain authority" },
        { icon: "mdi:cog-outline", title: "Technical SEO", desc: "Fix crawl errors, improve site speed, and enhance overall performance" },
        { icon: "mdi:map-marker-radius-outline", title: "Local SEO", desc: "Dominate local search results and attract nearby customers" },
        { icon: "mdi:chart-box-outline", title: "SEO Analytics", desc: "Track rankings, traffic, and conversions with detailed reporting" }
    ];

    const rankings = [
        { position: "#1", keyword: "Digital Marketing Agency Florida", volume: "2.4K/mo" },
        { position: "#1", keyword: "SEO Services Near Me", volume: "5.8K/mo" },
        { position: "#2", keyword: "Best Marketing Company", volume: "3.2K/mo" },
        { position: "#1", keyword: "PPC Management Services", volume: "1.9K/mo" }
    ];

    const process = [
        { num: "01", title: "SEO Audit", desc: "Comprehensive analysis of your current SEO performance" },
        { num: "02", title: "Strategy", desc: "Custom roadmap based on your goals and competition" },
        { num: "03", title: "Implementation", desc: "Execute optimizations across all SEO pillars" },
        { num: "04", title: "Monitor & Refine", desc: "Continuous optimization for sustained growth" }
    ];

    return (
        <div className="font-[Poppins] bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-end overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=2000')] bg-cover bg-center opacity-20"></div>
                </div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-32 w-full">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">Services / SEO</span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                            Dominate
                            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                Search Rankings
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">Get found by customers actively searching for your services. Our data-driven SEO strategies deliver sustainable organic growth.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1">
                                Get Free SEO Audit <Icon icon="mdi:arrow-right" className="inline ml-2 group-hover:translate-x-1 transition-transform" width="20" height="20" />
                            </button>
                            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300">
                                See Rankings
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10">
                        {[
                            { value: "150+", label: "Page 1 Rankings" },
                            { value: "300%", label: "Avg Traffic Increase" },
                            { value: "10K+", label: "Keywords Ranked" },
                            { value: "95%", label: "Client Retention" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <h3 className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</h3>
                                <p className="text-slate-400 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-6">Our SEO Services</span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Comprehensive SEO Solutions</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Everything you need to climb the rankings and stay there</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <div key={i} className="group p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10">
                                <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl text-white mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
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
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-gradient-to-br from-emerald-600 via-emerald-700 to-cyan-700 dark:from-emerald-800 dark:via-emerald-900 dark:to-cyan-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-emerald-100 text-sm font-semibold tracking-wider uppercase mb-6">Our Process</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Achieve Results</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((item, i) => (
                            <div key={i} className="relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                                <span className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-white text-emerald-600 rounded-full font-bold shadow-lg">{item.num}</span>
                                <h3 className="text-xl font-bold mb-3 mt-4">{item.title}</h3>
                                <p className="text-emerald-100">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-6">Results</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Real Results for Real Businesses</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">Our SEO strategies consistently deliver exceptional results across industries.</p>

                            <div className="space-y-6">
                                {[
                                    { label: "Organic Traffic Increase", value: 340, color: "emerald" },
                                    { label: "Keyword Rankings Improved", value: 85, color: "cyan" },
                                    { label: "Conversion Rate Boost", value: 65, color: "teal" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-700 dark:text-slate-300 font-medium">{item.label}</span>
                                            <span className="text-slate-900 dark:text-white font-bold">{item.value}%</span>
                                        </div>
                                        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full bg-gradient-to-r from-${item.color}-500 to-cyan-500 rounded-full transition-all duration-1000`}
                                                style={{ width: `${item.value}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Get Your Free SEO Audit</h3>
                            <form className="space-y-5">
                                <input type="text" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your Name" />
                                <input type="email" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Email Address" />
                                <input type="url" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Website URL" />
                                <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1">
                                    Get Free Audit Report
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeoServices;

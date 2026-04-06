import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

const SocialMedia = () => {
    const [activePlatform, setActivePlatform] = useState(0);

    const platforms = [
        { icon: "mdi:instagram", name: "Instagram", color: "from-pink-500 to-purple-500", followers: "2.5M+", engagement: "4.8%" },
        { icon: "mdi:facebook", name: "Facebook", color: "from-blue-600 to-blue-500", followers: "5M+", engagement: "3.2%" },
        { icon: "mdi:linkedin", name: "LinkedIn", color: "from-blue-700 to-blue-600", followers: "1.2M+", engagement: "5.1%" },
        { icon: "mdi:twitter", name: "Twitter/X", color: "from-slate-800 to-slate-700", followers: "800K+", engagement: "2.9%" },
        { icon: "mdi:youtube", name: "YouTube", color: "from-red-600 to-red-500", followers: "3M+", engagement: "6.2%" },
        { icon: "ri:tiktok-fill", name: "TikTok", color: "from-slate-900 to-pink-500", followers: "4M+", engagement: "8.5%" }
    ];

    const services = [
        { icon: "mdi:strategy", title: "Strategy Development", desc: "Custom social media strategies aligned with your business goals" },
        { icon: "mdi:content-paste", title: "Content Creation", desc: "Engaging content that resonates with your target audience" },
        { icon: "mdi:account-group", title: "Community Management", desc: "Build and nurture an engaged community around your brand" },
        { icon: "mdi:bullhorn-outline", title: "Paid Social Ads", desc: "Targeted advertising campaigns that drive results" },
        { icon: "mdi:chart-bar", title: "Analytics & Reporting", desc: "Data-driven insights to optimize performance" },
        { icon: "mdi:account-star-outline", title: "Influencer Marketing", desc: "Partner with influencers to expand your reach" }
    ];

    const results = [
        { client: "Fashion Brand", platform: "Instagram", metric: "+580% Followers", period: "6 months" },
        { client: "Tech Startup", platform: "LinkedIn", metric: "+340% Engagement", period: "4 months" },
        { client: "Restaurant Chain", platform: "TikTok", metric: "12M Views", period: "3 months" }
    ];

    return (
        <div className="font-[Poppins] bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-end overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-pink-900 to-purple-900">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=2000')] bg-cover bg-center opacity-20"></div>
                </div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-32 w-full">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">Services / Social Media</span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                            Social Media
                            <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                That Converts
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">Build a powerful social presence that engages your audience and drives real business results.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1">
                                Start Growing <Icon icon="mdi:arrow-right" className="inline ml-2 group-hover:translate-x-1 transition-transform" width="20" height="20" />
                            </button>
                            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300">
                                See Results
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10">
                        {[
                            { value: "50M+", label: "Total Reach" },
                            { value: "200+", label: "Brands Managed" },
                            { value: "5.2%", label: "Avg Engagement" },
                            { value: "10x", label: "Avg ROI" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <h3 className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</h3>
                                <p className="text-slate-400 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms Section */}
            <section className="py-12 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-6xl mx-auto">
                    <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Platforms We Master</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                            {platforms.map((platform, i) => (
                                <button key={i} className={`p-4 rounded-xl transition-all duration-300 ${ activePlatform === i ? `bg-gradient-to-br ${platform.color} text-white scale-105` : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:scale-105'}`} onClick={() => setActivePlatform(i)}>
                                    <Icon icon={platform.icon} className="mx-auto" width="32" height="32" />
                                    <span className="block text-xs mt-2 font-medium">{platform.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Platform Stats */}
                        <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                            <div className="flex items-center gap-4 mb-4">
                                <span className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${platforms[activePlatform].color} rounded-xl text-white`}>
                                    <Icon icon={platforms[activePlatform].icon} width="28" height="28" />
                                </span>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{platforms[activePlatform].name}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Results for our clients</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl">
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{platforms[activePlatform].followers}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Followers Gained</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl">
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{platforms[activePlatform].engagement}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Avg Engagement Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-pink-500/10 dark:bg-pink-500/20 rounded-full text-pink-600 dark:text-pink-400 text-sm font-semibold tracking-wider uppercase mb-6">Our Services</span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Complete Social Media Solutions</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">From strategy to execution, we handle every aspect of your social media presence</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <div key={i} className="group p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10">
                                <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl text-white mb-6 shadow-lg shadow-pink-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <Icon icon={service.icon} width="28" height="28" />
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-gradient-to-br from-pink-600 via-purple-600 to-purple-700 dark:from-pink-800 dark:via-purple-800 dark:to-purple-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-pink-100 text-sm font-semibold tracking-wider uppercase mb-6">Results</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Real Results, Real Growth</h2>
                        <p className="text-lg text-pink-100 max-w-2xl mx-auto">See how we've helped brands explode their social presence</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {results.map((result, i) => (
                            <div key={i} className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
                                <span className="text-pink-200 text-sm font-medium">{result.platform}</span>
                                <h3 className="text-xl font-bold text-white mt-2 mb-4">{result.client}</h3>
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-3xl font-bold text-white">{result.metric}</p>
                                        <p className="text-pink-200 text-sm">in {result.period}</p>
                                    </div>
                                    <Icon icon="mdi:trending-up" className="text-white/50" width="48" height="48" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Examples */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-pink-500/10 dark:bg-pink-500/20 rounded-full text-pink-600 dark:text-pink-400 text-sm font-semibold tracking-wider uppercase mb-6">Content Types</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Content That Engages</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: "mdi:image-multiple", title: "Photos", desc: "Eye-catching imagery" },
                            { icon: "mdi:video", title: "Videos", desc: "Engaging video content" },
                            { icon: "mdi:movie-roll", title: "Reels/Shorts", desc: "Viral short-form content" },
                            { icon: "mdi:account-voice", title: "Stories", desc: "Daily engagement" }
                        ].map((type, i) => (
                            <div key={i} className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-center hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-2">
                                <span className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 dark:bg-pink-500/20 rounded-xl text-pink-600 dark:text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Icon icon={type.icon} width="24" height="24" />
                                </span>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{type.title}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Ready to Go Viral?</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">Let's create a social media strategy that turns followers into customers.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1">
                            Get Started Today
                        </button>
                        <button className="px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition-all duration-300">
                            View Packages
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SocialMedia;

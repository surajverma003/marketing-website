import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

const DigitalMarketing = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const services = [
        { icon: "mdi:bullseye-arrow", title: "PPC Advertising", desc: "Strategic paid campaigns that maximize ROI across Google, Facebook, and more", stat: "340% avg. ROAS" },
        { icon: "mdi:email-fast-outline", title: "Email Marketing", desc: "Automated email sequences that nurture leads and drive conversions", stat: "42% open rate" },
        { icon: "mdi:chart-line", title: "Analytics & Reporting", desc: "Data-driven insights to optimize every aspect of your marketing", stat: "Real-time data" },
        { icon: "mdi:account-group-outline", title: "Audience Targeting", desc: "Precision targeting to reach your ideal customers at the right time", stat: "85% accuracy" },
        { icon: "mdi:ab-testing", title: "A/B Testing", desc: "Continuous optimization through rigorous testing and analysis", stat: "23% lift avg." },
        { icon: "mdi:robot-outline", title: "Marketing Automation", desc: "Streamlined workflows that scale your marketing efforts efficiently", stat: "60% time saved" }
    ];

    const results = [
        { metric: "500%", label: "Average ROI", desc: "Return on marketing investment" },
        { metric: "2M+", label: "Leads Generated", desc: "Qualified leads for our clients" },
        { metric: "98%", label: "Client Retention", desc: "Long-term partnerships" },
        { metric: "$50M+", label: "Revenue Generated", desc: "For our clients combined" }
    ];

    const faqs = [
        { q: "How long until I see results?", a: "Most clients see measurable improvements within 30-60 days, with significant results typically appearing at 90 days." },
        { q: "What's your minimum budget requirement?", a: "We work with budgets starting at $2,500/month for paid advertising, though we recommend $5,000+ for optimal results." },
        { q: "Do you offer performance guarantees?", a: "We provide performance benchmarks and KPI targets with transparent reporting. Our track record speaks for itself." },
        { q: "How do you measure success?", a: "We focus on metrics that matter: ROI, cost per acquisition, lifetime value, and revenue growth—not vanity metrics." }
    ];

    const caseStudies = [
        { title: "E-commerce Brand", industry: "Retail", result: "+450% Revenue", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500" },
        { title: "SaaS Startup", industry: "Technology", result: "+280% Signups", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500" },
        { title: "Healthcare Provider", industry: "Healthcare", result: "+320% Leads", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500" }
    ];

    return (
        <div className="font-[Poppins] bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-end overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2000')] bg-cover bg-center opacity-20"></div>
                </div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-32 w-full">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">Services / Digital Marketing</span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                            Data-Driven
                            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Digital Marketing
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">Transform your digital presence with strategies that are backed by data, driven by creativity, and focused on ROI.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1">
                                Get Free Audit <Icon icon="mdi:arrow-right" className="inline ml-2 group-hover:translate-x-1 transition-transform" width="20" height="20" />
                            </button>
                            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300">
                                View Case Studies
                            </button>
                        </div>
                    </div>

                    {/* Results Bar */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10">
                        {results.map((item, i) => (
                            <div key={i}>
                                <h3 className="text-3xl sm:text-4xl font-bold text-white">{item.metric}</h3>
                                <p className="text-cyan-400 font-medium">{item.label}</p>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">Our Services</span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Full-Funnel Marketing Solutions</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">End-to-end digital marketing services designed to attract, convert, and retain customers</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <div key={i} className="group p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">
                                <div className="flex items-start justify-between mb-6">
                                    <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl text-white shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                                        <Icon icon={service.icon} width="28" height="28" />
                                    </span>
                                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold rounded-full">{service.stat}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">Our Process</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">How We Drive Results</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">Our proven methodology ensures consistent, measurable growth for your business.</p>

                            <div className="space-y-6">
                                {[
                                    { step: "01", title: "Audit & Analysis", desc: "Deep dive into your current performance and market opportunity" },
                                    { step: "02", title: "Strategy Development", desc: "Custom roadmap aligned with your business objectives" },
                                    { step: "03", title: "Implementation", desc: "Execute campaigns with precision and agility" },
                                    { step: "04", title: "Optimize & Scale", desc: "Continuous improvement for maximum ROI" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                                        <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl text-white font-bold">
                                            {item.step}
                                        </span>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-3xl p-8 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                                        <Icon icon="mdi:chart-areaspline" className="text-white" width="64" height="64" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Real-Time Dashboard</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Track your performance 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-gradient-to-br from-cyan-600 via-cyan-700 to-teal-700 dark:from-cyan-800 dark:via-cyan-900 dark:to-teal-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-cyan-100 text-sm font-semibold tracking-wider uppercase mb-6">Case Studies</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proven Results</h2>
                        <p className="text-lg text-cyan-100 max-w-2xl mx-auto">See how we've helped businesses like yours achieve remarkable growth</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caseStudies.map((study, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-2xl">
                                <img src={study.img} alt={study.title} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                                    <span className="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm text-cyan-300 text-lg font-bold rounded-lg w-fit">{study.result}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">FAQ</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Common Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 cursor-pointer transition-all duration-300 ${activeFaq === i ? 'border-cyan-500' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} >
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-slate-900 dark:text-white">{faq.q}</h3>
                                    <Icon icon={activeFaq === i ? "mdi:minus" : "mdi:plus"} className="text-cyan-500" width="24" height="24" />
                                </div>
                                {activeFaq === i && (
                                    <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Ready to Accelerate Your Growth?</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">Get a free marketing audit and discover untapped opportunities for your business.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1">Get Free Audit</button>
                        <button className="px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition-all duration-300">Schedule a Call</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketing;

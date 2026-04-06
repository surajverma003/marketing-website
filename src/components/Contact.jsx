import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

    const contactInfo = [
        { icon: "weui:location-filled", title: "Visit Us", content: "123 Demo St, Lakeland, FL 45678, United States", link: "#" },
        { icon: "teenyicons:phone-solid", title: "Call Us", content: "+1 123-456-7890", link: "tel:+11234567890" },
        { icon: "ic:baseline-email", title: "Email Us", content: "hello@delectus.com", link: "mailto:hello@delectus.com" }
    ];

    const socialLinks = [
        { icon: "mdi:facebook", label: "Facebook", link: "#" },
        { icon: "mdi:twitter", label: "Twitter", link: "#" },
        { icon: "mdi:linkedin", label: "LinkedIn", link: "#" },
        { icon: "mdi:instagram", label: "Instagram", link: "#" }
    ];

    const faqs = [
        { q: "What services do you offer?", a: "We offer comprehensive digital marketing services including SEO, PPC, social media marketing, content creation, and web development." },
        { q: "How long until I see results?", a: "Results vary by service, but most clients see measurable improvements within 3-6 months of consistent effort." },
        { q: "Do you offer free consultations?", a: "Yes! We offer a free 30-minute consultation to understand your needs and discuss how we can help." }
    ];

    return (
        <div className="font-[Poppins] bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-32">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">Get In Touch</span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">Contact Us</h1>
                        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">Have a question or ready to start your project? We'd love to hear from you.</p>
                    </div>
                </div>
            </section>

            {/* Contact Cards Section */}
            <section className="py-12 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-6xl mx-auto -mt-20 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactInfo.map((info, i) => (
                            <a key={i} href={info.link} className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10" >
                                <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl text-white mb-6 shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <Icon icon={info.icon} width="28" height="28" />
                                </span>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{info.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{info.content}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Left Side */}
                        <div>
                            <span className="inline-block px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">Let's Connect</span>
                            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Don't Hesitate To Get in Touch</h2>
                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-8"></div>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">Whether you have a question about our services, pricing, or just want to say hello, our team is ready to answer all your questions. Fill out the form and we'll get back to you within 24 hours.</p>

                            {/* Social Links */}
                            <div className="mb-12">
                                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Follow Us</h4>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, i) => (
                                        <a key={i} href={social.link} className="w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all duration-300 hover:scale-110" aria-label={social.label} >
                                            <Icon icon={social.icon} width="24" height="24" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="relative h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <Icon icon="mdi:map-marker" className="w-12 h-12 text-cyan-500 mx-auto mb-2" />
                                        <p className="text-slate-500 dark:text-slate-400">Lakeland, Florida</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-8 sm:p-10 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">Send Us a Message</h3>
                            <form className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <input type="text" className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" placeholder="Full Name" />
                                    <input type="email" className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" placeholder="Email Address" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <input type="tel" className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" placeholder="Phone Number" />
                                    <select className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" >
                                        <option value="">Select a Service</option>
                                        <option value="seo">SEO Services</option>
                                        <option value="ppc">PPC Advertising</option>
                                        <option value="social">Social Media</option>
                                        <option value="content">Content Marketing</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <textarea rows="5" className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none" placeholder="Tell us about your project..." ></textarea>
                                <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2" >
                                    Send Message <Icon icon="mdi:send" width="20" height="20" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">FAQ</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Quick answers to common questions</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:border-cyan-500/50" >
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white pr-4">{faq.q}</h3>
                                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded-xl text-slate-600 dark:text-slate-300 group-open:bg-gradient-to-br group-open:from-cyan-500 group-open:to-teal-500 group-open:text-white transition-all duration-300">
                                        <Icon icon="mdi:plus" className="group-open:rotate-45 transition-transform duration-300" width="24" height="24" />
                                    </span>
                                </summary>
                                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 px-6 sm:px-10 bg-gradient-to-br from-cyan-600 via-cyan-700 to-teal-700 dark:from-cyan-800 dark:via-cyan-900 dark:to-teal-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
                    <p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">Let's discuss how we can help transform your digital presence and drive real results for your business.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-cyan-50 transition-all duration-300 hover:-translate-y-1 shadow-lg">Schedule a Call</button>
                        <button className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">View Our Work</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
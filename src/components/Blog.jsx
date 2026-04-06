
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const posts = [
        {
            id: 1,
            image: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-blog-post-img-3.jpg",
            title: "How Artists Can Leverage Digital Marketing for Success",
            category: "Digital Marketing",
            author: "Sarah Chen",
            date: "Dec 15, 2024",
            readTime: "5 min read",
            excerpt: "Discover proven strategies for artists to build their online presence and reach new audiences through effective digital marketing techniques."
        },
        {
            id: 2,
            image: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-blog-post-img-2.jpg",
            title: "The Future of Social Media Marketing in 2025",
            category: "Social Media",
            author: "Mike Johnson",
            date: "Dec 10, 2024",
            readTime: "7 min read",
            excerpt: "Explore the emerging trends and technologies shaping the future of social media marketing and how businesses can stay ahead."
        },
        {
            id: 3,
            image: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-blog-post-img-1.jpg",
            title: "SEO Best Practices: A Complete Guide for 2025",
            category: "Creative",
            author: "Emily Davis",
            date: "Dec 5, 2024",
            readTime: "10 min read",
            excerpt: "Master the latest SEO techniques and best practices to improve your website's visibility and drive organic traffic."
        }
    ];

    const categories = ['All', 'Creative', 'Digital Marketing', 'Social Media'];
    const recentPosts = posts.slice(0, 3);
    const filteredPosts = selectedCategory === 'All' ? posts : posts.filter(post => post.category === selectedCategory);

    return (
        <div className="font-[Poppins] bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-32">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">Insights & Updates</span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">Our Blog</h1>
                        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">Stay ahead with the latest trends, tips, and insights in digital marketing.</p>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-24 px-6 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Main Content */}
                        <div className="flex-1">
                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-3 mb-12">
                                {categories.map((category) => (
                                    <button key={category} onClick={() => setSelectedCategory(category)} className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${selectedCategory === category ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/25' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700' }`}>
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Blog Posts */}
                            <div className="space-y-12">
                                {filteredPosts.map((post, index) => (
                                    <article key={post.id} className={`group ${index > 0 ? 'pt-12 border-t border-slate-200 dark:border-slate-700' : ''}`}>
                                        <div className="relative overflow-hidden rounded-2xl mb-8">
                                            <img className="w-full h-[300px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" src={post.image} alt={post.title} />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-cyan-600 dark:text-cyan-400">{post.category}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                                            <span className="flex items-center gap-2"><Icon icon="mdi:account-circle" width="18" height="18" /> {post.author}</span>
                                            <span className="flex items-center gap-2"><Icon icon="mdi:calendar" width="18" height="18" /> {post.date}</span>
                                            <span className="flex items-center gap-2"><Icon icon="mdi:clock-outline" width="18" height="18" /> {post.readTime}</span>
                                        </div>

                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{post.title}</h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{post.excerpt}</p>

                                        <button className="group/btn flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:gap-4 transition-all duration-300">
                                            Read More <Icon icon="material-symbols:arrow-right-alt" width="24" height="24" className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-center gap-2 mt-16">
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                    <Icon icon="mdi:chevron-left" width="24" height="24" />
                                </button>
                                {[1, 2, 3].map((page) => (
                                    <button  key={page} className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${page === 1 ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
                                        {page}
                                    </button>
                                ))}
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                    <Icon icon="mdi:chevron-right" width="24" height="24" />
                                </button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-80 flex-shrink-0">
                            <div className="sticky top-32 space-y-8">
                                {/* Search */}
                                <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Search</h3>
                                    <div className="relative">
                                        <input type="text" placeholder="Search articles..."className="w-full px-4 py-3 pr-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"/>
                                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-500 transition-colors">
                                            <Icon icon="mdi:magnify" width="24" height="24" />
                                        </button>
                                    </div>
                                </div>

                                {/* Recent Posts */}
                                <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Recent Posts</h3>
                                    <div className="space-y-4">
                                        {recentPosts.map((post) => (
                                            <a key={post.id} href="#" className="group flex gap-4">
                                                <img className="w-16 h-16 rounded-lg object-cover flex-shrink-0" src={post.image} alt={post.title} />
                                                <div>
                                                    <h4 className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">{post.title}</h4>
                                                    <p className="text-xs text-slate-500 mt-1">{post.date}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Categories */}
                                <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Categories</h3>
                                    <div className="space-y-3">
                                        {categories.filter(c => c !== 'All').map((category) => (
                                            <button  key={category} onClick={() => setSelectedCategory(category)} className="flex items-center justify-between w-full px-4 py-3 bg-white dark:bg-slate-900 rounded-xl text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all" >
                                                <span>{category}</span>
                                                <Icon icon="mdi:chevron-right" width="20" height="20" />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Newsletter */}
                                <div className="p-6 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl text-white">
                                    <h3 className="text-lg font-bold mb-2">Newsletter</h3>
                                    <p className="text-cyan-100 text-sm mb-4">Subscribe to get the latest insights delivered to your inbox.</p>
                                    <input type="email" placeholder="Your email"className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 mb-3"/>
                                    <button className="w-full px-4 py-3 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-cyan-50 transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 sm:py-32 px-6 sm:px-10 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        <div className="flex flex-col justify-center text-white">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">Ready to Take Your Marketing to the Next Level?</h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">Let's create a customized strategy that drives real results for your business.</p>
                            <p className="text-slate-400 leading-relaxed">Our team of experts is ready to help you unlock your business potential through innovative digital marketing solutions.</p>
                        </div>

                        <div className="p-8 sm:p-10 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Let's Talk</h3>
                            <form className="space-y-5">
                                <input type="text" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" placeholder="Full Name" />
                                <input type="email" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" placeholder="Email Address" />
                                <textarea rows="4" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none" placeholder="Your Message"></textarea>
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

export default Blog;
import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link, useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="poppins min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl transition-transform duration-300"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/20 rounded-full blur-3xl transition-transform duration-300"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                <div className="relative mb-4">
                    <h1 className="text-9xl font-bold leading-none bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-600 bg-clip-text text-transparent select-none">404</h1>
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Oops! Page Not Found</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">The page you're looking for seems to have wandered off. Don't worry, even the best explorers get lost sometimes.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Link to="/" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2" >
                        <Icon icon="mdi:home" width="20" height="20" /> Back to Home
                    </Link>
                    <button onClick={() => navigate(-1)} className="px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2" >
                        <Icon icon="mdi:arrow-left" width="20" height="20" /> Go Back
                    </button>
                </div>

                <p className="mt-10 text-slate-400 dark:text-slate-600 text-xs">Fun fact: The 404 error code was named after room 404 at CERN, where the original web servers were located.</p>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 text-cyan-500/20 animate-float">
                <Icon icon="mdi:code-braces" width="60" height="60" />
            </div>
            <div className="absolute top-40 right-20 text-teal-500/20 animate-float delay-500">
                <Icon icon="mdi:web" width="50" height="50" />
            </div>
            <div className="absolute bottom-32 left-20 text-cyan-500/20 animate-float delay-1000">
                <Icon icon="mdi:server" width="45" height="45" />
            </div>
            <div className="absolute bottom-20 right-10 text-teal-500/20 animate-float delay-700">
                <Icon icon="mdi:cloud-outline" width="55" height="55" />
            </div>
        </div>
    );
};

export default Error;

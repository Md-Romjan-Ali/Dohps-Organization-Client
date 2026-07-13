import React from 'react';
import {
    BiPulse,
    BiShieldQuarter,
    BiBulb
} from 'react-icons/bi';
import { FiCloudLightning } from 'react-icons/fi';
import { HiOutlineUsers } from 'react-icons/hi2';

export default function CorePrograms() {
    const programs = [
        {
            title: "Education Support Program",
            description: "Counseling and need-based educational assistance for talented students at risk of dropping out.",
            icon: BiShieldQuarter,
        },
        {
            title: "Health & Nutrition Program",
            description: "Awareness campaigns on health, hygiene, nutrition, water, and sanitation to improve community well-being.",
            icon: BiPulse,
        },
        {
            title: "Disaster Risk & Climate Adaptation",
            description: "Enhancing community awareness, resilience building, and preparedness for environmental hazards.",
            icon: FiCloudLightning,
        },
        {
            title: "Human Rights & Protection",
            description: "Fostering social security, protecting the marginalized, and empowering women in the community.",
            icon: BiShieldQuarter,
        },
        {
            title: "Innovation Program",
            description: "Developing creative, efficient, and forward-thinking solutions for sustainable development.",
            icon: BiBulb,
        },
        {
            title: "Youth & Women Empowerment",
            description: "Guiding the next generation of leaders to rebuild their lives with honor, confidence, and meaningful purpose.",
            icon: HiOutlineUsers,
        },
    ];

    return (
        <section id="programs" className="bg-slate-50/50 dark:bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto text-center mb-16">
                {/* Main Heading with dynamic mode scaling */}
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl mb-4 tracking-tight">
                    Our Core Programs
                </h2>
                <div className="h-1 w-16 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-6" />

                {/* Top Description */}
                <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                    DOHPS identifies the holistic needs of the community. From keeping brilliant but
                    vulnerable students in school to supporting the livelihoods of marginalized families and
                    building homes for destitute women, our priorities ensure a wide-reaching, sustainable
                    impact.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((program, index) => {
                    const IconComponent = program.icon;
                    return (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-slate-900/60 p-8 rounded-2xl border border-slate-100 dark:border-slate-800/80 flex flex-col items-start text-left
                                       transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)
                                       hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                                       hover:border-blue-100 dark:hover:border-blue-900/50 active:scale-[0.98]"
                        >
                            {/* Hidden decorative top gradient accent that fades in on hover */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* HeroUI Inspired Adaptive Icon Container */}
                            <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-50/60 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-2xl mb-6 
                                            transition-all duration-300 
                                            group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white dark:group-hover:text-slate-950 group-hover:scale-110 group-hover:rotate-3
                                            shadow-sm shadow-blue-100/80 dark:shadow-none">
                                <IconComponent />
                            </div>

                            {/* Card Title */}
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                {program.title}
                            </h3>

                            {/* Card Description */}
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-200 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                                {program.description}
                            </p>

                            {/* Subtle "Learn More" Arrow hint that shows up on hover */}
                            <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
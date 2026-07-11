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
        <section className="bg-slate-50/50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto text-center mb-12">
                {/* Main Heading */}
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6 tracking-tight">
                    Our Core Programs
                </h2>

                {/* Top Description */}
                <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed text-sm sm:text-base">
                    DOHPS identifies the holistic needs of the community. From keeping brilliant but
                    vulnerable students in school to supporting the livelihoods of marginalized families and
                    building homes for destitute women, our priorities ensure a wide-reaching, sustainable
                    impact.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((program, index) => {
                    const IconComponent = program.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100/60 flex flex-col items-start text-left"
                        >
                            {/* React Icon Container */}
                            <div className="text-[#1d4ed8] text-4xl mb-5">
                                <IconComponent />
                            </div>

                            {/* Card Title */}
                            <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                                {program.title}
                            </h3>

                            {/* Card Description */}
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {program.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
import React from 'react';

const MissionVisionValues = () => {
    return (
        <div className='dark:bg-slate-950'>
            <div id='mission' className="max-w-7xl mx-auto p-6 bg-gray-50 dark:bg-gray-950 space-y-6 transition-colors duration-300">

                {/* Top Cards: Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Our Mission Card with Hover Effect */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800/60 flex flex-col items-start transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md dark:hover:shadow-black/30">
                        <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
                            {/* Target Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                            </svg>
                            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Our Mission</h3>
                        </div>
                        <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-sm">
                            To promote sustainable human development through education, health, and social empowerment of disadvantaged populations. Our main focus is providing robust educational support to vulnerable communities in rural and remote areas.
                        </p>
                    </div>

                    {/* Our Vision Card with Hover Effect */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800/60 flex flex-col items-start transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md dark:hover:shadow-black/30">
                        <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
                            {/* Eye Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
                            </svg>
                            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Our Vision</h3>
                        </div>
                        <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-sm">
                            We envision a society where every individual enjoys equal opportunities for education, health, and a dignified life, regardless of their financial or social constraints.
                        </p>
                    </div>

                </div>

                {/* Bottom Card: Core Values */}
                <div className="bg-blue-600 dark:bg-blue-700 rounded-xl p-8 shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-blue-900/20">
                    <h3 className="text-white text-xl font-bold mb-6">Our Core Values</h3>

                    {/* Pills Flex Container */}
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {['Mutual Respect', 'Human Well-being', 'Integrity', 'Transparency', 'Equity', 'Accountability', 'Innovation', 'Partnership'].map((value, index) => (
                            <span
                                key={index}
                                className="bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-medium px-5 py-2 rounded-full text-sm shadow-sm cursor-pointer transition-all duration-200 ease-in-out hover:bg-blue-50 dark:hover:bg-slate-800 hover:scale-105 hover:shadow"
                            >
                                {value}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    );
};

export default MissionVisionValues;
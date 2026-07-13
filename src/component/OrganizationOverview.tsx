import React from 'react';

const OrganizationalOverview = () => {
    return (
        <div className='dark:bg-slate-950 py-12'>
            <section className="max-w-7xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800/80 transition-colors duration-300">

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-955 dark:text-white mb-6 tracking-tight">
                    Organizational Overview
                </h2>

                {/* Main Description Paragraphs */}
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base mb-8">
                    <p>
                        Established in 2008, Development Organization for Human Potential Sustainability (DOHPS) is dedicated to advancing sustainable development in Bangladesh. We primarily focus on improving access to education for vulnerable and marginalized communities.
                    </p>
                    <p>
                        In addition to educational assistance, DOHPS offers interest-free financial support to families to help increase household income. We also conduct awareness campaigns on health, hygiene, nutrition, water, and sanitation, alongside engaging in vital initiatives related to climate change adaptation, resilience building, and disaster risk management. Local administrations, community leaders, teachers, parents, and stakeholders actively collaborate with us in implementing these programs.
                    </p>
                </div>

                {/* Bottom Sub-sections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Geographic Coverage Card */}
                    <div className="bg-gray-50/70 dark:bg-slate-900/40 p-6 rounded-xl border border-slate-100 dark:border-slate-800/60 flex flex-col items-start transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md dark:hover:shadow-black/30 hover:bg-white dark:hover:bg-slate-900">
                        <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
                            {/* Map / Location Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" />
                                <path d="M9 3v15M15 6v15" />
                            </svg>
                            <h3 className="text-base font-bold text-blue-900 dark:text-blue-300">Geographic Coverage</h3>
                        </div>

                        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>
                                <strong className="text-slate-800 dark:text-slate-200">Current Operations:</strong> All five sub-districts of Sherpur District (Nalitabari, Sreebordi, Nokla, Jhinaigati, and Sherpur Sadar).
                            </p>
                            <p>
                                <strong className="text-slate-800 dark:text-slate-200">Future Expansions:</strong> Jamalpur, Mymensingh, Kurigram, Kishoreganj, and Natore districts.
                            </p>
                        </div>
                    </div>

                    {/* Key Target Groups Card */}
                    <div className="bg-gray-50/70 dark:bg-slate-900/40 p-6 rounded-xl border border-slate-100 dark:border-slate-800/60 flex flex-col items-start transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md dark:hover:shadow-black/30 hover:bg-white dark:hover:bg-slate-900">
                        <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
                            {/* Users Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <h3 className="text-base font-bold text-blue-900 dark:text-blue-300">Key Target Groups</h3>
                        </div>

                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            We work closely to support students, parents, teachers, women, adolescents, and marginalized populations from vulnerable communities.
                        </p>
                    </div>

                </div>
            </section>
        </div>

    );
};

export default OrganizationalOverview;
import React from 'react';

const GetInTouch = () => {
    return (
        <section className="max-w-6xl mx-auto my-12 p-6 bg-gray-50/50 rounded-xl">
            {/* Main Section Header */}
            <h2 className="text-2xl font-bold text-center text-gray-950 mb-8 tracking-tight">
                Get In Touch
            </h2>

            {/* Grid Wrapper */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* Left Side: Contact Form (Takes up 5 columns on large screens) */}
                <form className="lg:col-span-5 bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Send Us a Message</h3>

                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Full Name</label>
                        <input
                            type="text"
                            className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg outline-none transition-all focus:border-blue-500 hover:border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg outline-none transition-all focus:border-blue-500 hover:border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Subject</label>
                        <input
                            type="text"
                            className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg outline-none transition-all focus:border-blue-500 hover:border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Message</label>
                        <textarea name="description"
                            rows={8}
                            className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg outline-none transition-all focus:border-blue-500 hover:border-gray-300 resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 bg-blue-600 text-white font-medium text-sm py-2.5 rounded-lg shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow active:scale-[0.99]"
                    >
                        Send Email
                    </button>
                </form>

                {/* Right Side: Contact Details & Office (Takes up 7 columns on large screens) */}
                <div className="lg:col-span-7 flex flex-col gap-6">

                    {/* Contact Information & Legal Registration Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>

                        {/* Info List */}
                        <div className="space-y-3 text-sm text-gray-600 mb-5">
                            <div className="flex items-center gap-3">
                                <svg className="text-blue-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                <p><strong className="text-gray-800">Founder & Executive Director:</strong> Md. Shahin Miya</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="text-blue-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                <p><strong className="text-gray-800">Email:</strong> <a href="mailto:dohps2008@gmail.com" className="text-blue-600 hover:underline">dohps2008@gmail.com</a></p>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="text-blue-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <p><strong className="text-gray-800">Mobile:</strong> 01728-097987</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="text-blue-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                                <p><strong className="text-gray-800">Website:</strong> <a href="https://www.dohps.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.dohps.org</a></p>
                            </div>
                        </div>

                        <hr className="border-gray-100 my-4" />

                        {/* Legal Registration */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-800 mb-2">Legal Registration</h4>
                            <ul className="space-y-1 text-xs text-gray-600 leading-relaxed">
                                <li><strong className="text-gray-700">NGO Affairs Bureau:</strong> Reg. No. 3438 (Date: 16-04-2025)</li>
                                <li><strong className="text-gray-700">Social Welfare:</strong> Reg. No. SHER-00541/2011</li>
                            </ul>
                        </div>
                    </div>

                    {/* Our Offices Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Our Offices</h3>

                        <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
                            <div>
                                <h4 className="font-bold text-gray-800">Head Office</h4>
                                <p>Gowripur, Sherpur Town, Sherpur</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Sub-District Operations</h4>
                                <p>Nalitabari, Sreebordi, Nokla, Jhinaigati, and Sherpur Sadar</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Future Expansions</h4>
                                <p>Jamalpur, Mymensingh, Kurigram, Kishoreganj, and Natore districts</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default GetInTouch;
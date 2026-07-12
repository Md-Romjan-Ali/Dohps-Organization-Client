import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1e293b] text-slate-400 py-12 px-6 border-t border-slate-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">

                {/* Left Column: Logo & Description */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center justify-center bg-transparent p-1 rounded-full bg-slate-800/30">
                        <Image
                            src="https://dohps.org/dohps_logo_big.png"
                            alt="DOHPS Logo"
                            width={200}
                            height={200}
                            className="w-24 h-24 object-contain"
                        />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-2 tracking-wider">DOHPS</h3>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto md:mx-0">
                            Development Organization for Human Potential Sustainability. Working to empower brilliant, underprivileged students for a brighter future.
                        </p>
                    </div>
                </div>

                {/* Middle Column: Social Media Connections */}
                <div className=" h-full">
                    <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
                        Connect With Us
                    </h3>

                    {/* Social Icons Container */}
                    <div className="flex items-center gap-4">
                        {/* Facebook */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center justify-center h-11 w-11 rounded-xl bg-slate-50 border border-slate-100 text-[#1877F2] 
                           transition-all duration-300 ease-out
                           hover:bg-[#1877F2] hover:text-white hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1 active:scale-95"
                            aria-label="Facebook"
                        >
                            <FaFacebookF className="text-xl transition-transform duration-300 group-hover:scale-110" />
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/8801728097987"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center justify-center h-11 w-11 rounded-xl bg-slate-50 border border-slate-100 text-[#25D366] 
                           transition-all duration-300 ease-out
                           hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-emerald-100 hover:-translate-y-1 active:scale-95"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className="text-2xl transition-transform duration-300 group-hover:scale-110" />
                        </a>

                        {/* YouTube */}
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center justify-center h-11 w-11 rounded-xl bg-slate-50 border border-slate-100 text-[#FF0000] 
                           transition-all duration-300 ease-out
                           hover:bg-[#FF0000] hover:text-white hover:shadow-lg hover:shadow-rose-100 hover:-translate-y-1 active:scale-95"
                            aria-label="YouTube"
                        >
                            <FaYoutube className="text-xl transition-transform duration-300 group-hover:scale-110" />
                        </a>
                    </div>
                </div>

                {/* Right Column: Location Map */}
                <div className="flex flex-col items-center md:items-end w-full md:pt-4">
                    <div className=" w-full h-50 rounded-lg overflow-hidden border border-slate-700 shadow-sm opacity-90 hover:opacity-100 transition-opacity duration-300">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14460.676609688771!2d90.002222!3d25.028333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757d700777d7a4d%3A0x88b7a4e98c340c3!2sDOHPS%20office%202!5e0!3m2!1sen!2sus!4v1783751152126!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                </div>

            </div>

            {/* Decorative Divider */}
            <hr className="max-w-7xl mx-auto border-slate-800 my-8" />

            {/* Bottom Legal bar */}
            <div className="text-xs text-center md:text-sm text-slate-500">
                <p>© 2026 DOHPS. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
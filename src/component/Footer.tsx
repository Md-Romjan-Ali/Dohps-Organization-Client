import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaWhatsapp, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    const quickLinks = [
        { name: "Mission", href: "#mission" },
        { name: "FAQ", href: "#faq" },
        { name: "Core Programs", href: "#programs" },
        { name: "Story", href: "#story" },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-slate-300 py-16 px-6 border-t border-slate-800/80 overflow-hidden">
            {/* Top decorative color glow */}
            <div className="absolute top-0 left-1/4 -translate-y-1/2 w-80 h-40 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />
            <div className="absolute top-0 right-1/4 -translate-y-1/2 w-80 h-40 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

                {/* Column 1: Logo & Mission Statement */}
                <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                    <div className="flex items-center justify-center p-1.5 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 border border-slate-700/50 shadow-inner group transition-all duration-300 hover:border-blue-500/40">
                        <Image
                            src="https://dohps.org/dohps_logo_big.png"
                            alt="DOHPS Logo"
                            width={120}
                            height={120}
                            className="w-20 h-20 object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                            DOHPS
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                            Development Organization for Human Potential Sustainability. Working to empower brilliant, underprivileged students for a brighter future.
                        </p>
                    </div>
                </div>

                {/* Column 2: Quick Navigation Links */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                    <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5 pb-1 border-b-2 border-blue-500/60 w-fit">
                        Explore Links
                    </h3>
                    <ul className="space-y-3 text-sm font-medium">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-slate-400 transition-colors duration-200 hover:text-blue-400 flex items-center gap-2 justify-center md:justify-start group"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors" />
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact Channels & Connections */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                    <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5 pb-1 border-b-2 border-indigo-500/60 w-fit">
                        Connect With Us
                    </h3>

                    {/* Contact Details */}
                    <ul className="space-y-3 text-sm text-slate-400 mb-6 w-full">
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <FaMapMarkerAlt className="text-blue-400 shrink-0" />
                            <span>Dhaka, Bangladesh</span>
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <FaEnvelope className="text-indigo-400 shrink-0" />
                            <a href="mailto:info@dohps.org" className="hover:text-indigo-300 transition-colors">info@dohps.org</a>
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <FaPhoneAlt className="text-emerald-400 shrink-0" />
                            <a href="tel:+8801728097987" className="hover:text-emerald-300 transition-colors">+880 1728-097987</a>
                        </li>
                    </ul>

                    {/* Social Icons Container */}
                    <div className="flex items-center justify-center md:justify-start gap-4 w-full">
                        {/* Facebook */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center h-10 w-10 rounded-xl bg-slate-800/80 border border-slate-700/60 text-[#1877F2] 
                            transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 active:scale-95"
                            aria-label="Facebook"
                        >
                            <FaFacebookF className="text-lg transition-transform duration-300 group-hover:scale-110" />
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/8801728097987"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center h-10 w-10 rounded-xl bg-slate-800/80 border border-slate-700/60 text-[#25D366] 
                            transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 active:scale-95"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className="text-xl transition-transform duration-300 group-hover:scale-110" />
                        </a>

                        {/* YouTube */}
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center h-10 w-10 rounded-xl bg-slate-800/80 border border-slate-700/60 text-[#FF0000] 
                            transition-all duration-300 hover:bg-[#FF0000] hover:text-white hover:shadow-lg hover:shadow-rose-500/20 hover:-translate-y-1 active:scale-95"
                            aria-label="YouTube"
                        >
                            <FaYoutube className="text-lg transition-transform duration-300 group-hover:scale-110" />
                        </a>
                    </div>
                </div>

                {/* Column 4: Embed Interactive Location Map */}
                <div className="flex flex-col items-center md:items-start lg:items-end w-full">
                    <div className="w-full h-44 rounded-2xl overflow-hidden border border-slate-700/70 shadow-xl opacity-90 hover:opacity-100 transition-opacity duration-300 bg-slate-900">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.207849549751!2d90.00805577414724!3d25.0270194385749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757d700777d7a4d%3A0x88b7a4e98c340c3!2sDOHPS%20office%202!5e0!3m2!1sen!2sus!4v1783934996956!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="DOHPS Location Map"
                        />

                    </div>
                </div>

            </div>

            {/* Decorative Layout Divider */}
            <hr className="max-w-7xl mx-auto border-slate-800/80 my-10" />

            {/* Bottom Copyright & Fine Print Legal bar */}
            <div className="text-xs text-center text-slate-500 tracking-wide font-medium flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
                <p>© 2026 DOHPS. All rights reserved.</p>
                <div className="flex gap-6 text-slate-500">
                    <p className="hover:text-slate-400 transition-colors">Privacy Policy</p>
                    <p className="hover:text-slate-400 transition-colors">Terms of Service</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
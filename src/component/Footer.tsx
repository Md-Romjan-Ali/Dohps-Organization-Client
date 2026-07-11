import Image from 'next/image';
import React from 'react';

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
                            className="text-[#1877F2] hover:scale-110 transition-transform duration-200"
                            aria-label="Facebook"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/8801728097987"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#25D366] hover:scale-110 transition-transform duration-200"
                            aria-label="WhatsApp"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>

                        {/* YouTube */}
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#FF0000] hover:scale-110 transition-transform duration-200"
                            aria-label="YouTube"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
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
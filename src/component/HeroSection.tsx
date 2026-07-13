'use client';

import Image from 'next/image';
import { Button } from '@heroui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

interface SlideItem {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
}

const slides: SlideItem[] = [
    {
        id: 1,
        src: 'https://i.ibb.co.com/4RNJwvQK/731417683-1037900729203201-6372893792368051374-n.jpg',
        alt: 'Empowering Education',
        title: 'Education Support Program',
        description:
            'Keeping brilliant but vulnerable students in school by providing need-based assistance and mentorship.',
    },
    {
        id: 2,
        src: 'https://i.ibb.co.com/HTmnv1Gz/729467044-4477234469183061-3924117260958461690-n.jpg',
        alt: 'Healthcare and Nutrition Outreach',
        title: 'Health & Nutrition Initiatives',
        description:
            'Driving community-wide well-being through awareness campaigns on health, hygiene, and sustainable nutrition.',
    },
    {
        id: 3,
        src: 'https://i.ibb.co.com/d4WQHJMx/726220694-1007311262194349-472581489429437782-n.jpg',
        alt: 'Community Transformation',
        title: 'Sustainable Community Impact',
        description:
            'Building homes for destitute women and constructing climate-resilient futures for marginalized families.',
    },
];

export default function Hero() {
    return (
        <header className="relative w-full h-[70vh] min-h-[550px] overflow-hidden bg-slate-950 dark:bg-slate-950 text-white transition-colors duration-300">

            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                navigation={{
                    prevEl: '.hero-prev',
                    nextEl: '.hero-next',
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                loop
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-[70vh] min-h-[550px]">

                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                priority={index === 0}
                                quality={90}
                                className="object-cover"
                            />

                            {/* Dark Content Overlay Protection Layer */}
                            <div className="absolute inset-0 bg-black/60 dark:bg-black/70 transition-colors duration-300" />

                            {/* Main Content Presentation Layer */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
                                <div className="max-w-3xl text-center">

                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white dark:text-slate-100 tracking-tight">
                                        {slide.title}
                                    </h1>

                                    <p className="mt-6 text-lg md:text-xl text-gray-200 dark:text-slate-300 leading-relaxed">
                                        {slide.description}
                                    </p>

                                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                                        <Button
                                            size="lg"
                                            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-8 transition shadow-lg dark:shadow-blue-500/10"
                                        >
                                            Our Programs
                                        </Button>

                                        <Button
                                            size="lg"
                                            variant="ghost"
                                            className="border-white text-white hover:bg-white hover:text-slate-900 dark:border-slate-300 dark:text-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-950 font-semibold px-8 transition"
                                        >
                                            Get Involved
                                        </Button>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Left Control Arrow */}
            <button
                aria-label="Previous Slide"
                className="hero-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30
                flex h-12 w-12 md:h-14 md:w-14 items-center justify-center
                rounded-full border border-white/20 dark:border-slate-700/50
                bg-white/10 dark:bg-slate-900/40 backdrop-blur-md text-white
                transition-all duration-300 cursor-pointer
                hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-110 active:scale-95"
            >
                <FaChevronLeft size={20} />
            </button>

            {/* Right Control Arrow */}
            <button
                aria-label="Next Slide"
                className="hero-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30
                flex h-12 w-12 md:h-14 md:w-14 items-center justify-center
                rounded-full border border-white/20 dark:border-slate-700/50
                bg-white/10 dark:bg-slate-900/40 backdrop-blur-md text-white
                transition-all duration-300 cursor-pointer
                hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-110 active:scale-95"
            >
                <FaChevronRight size={20} />
            </button>

            {/* Scroll Down Navigator Component */}
            <a
                href="#programs"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-sm uppercase tracking-widest text-white/80 dark:text-slate-400 hover:text-white dark:hover:text-slate-200 transition-colors duration-200"
            >
                <span className="font-medium">Discover More</span>

                <svg
                    className="mt-2 h-5 w-5 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 9l6 6 6-6"
                    />
                </svg>
            </a>

        </header>
    );
}
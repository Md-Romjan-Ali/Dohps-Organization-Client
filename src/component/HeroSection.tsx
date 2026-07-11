'use client';

import Image from 'next/image';
import { Button } from '@heroui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styling directly into the component file
import 'swiper/css';
import 'swiper/css/effect-fade';

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
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
        alt: 'Tech Workspace',
        title: 'Next-Gen Digital Solutions',
        description: 'We build robust, scalable, and beautifully crafted experiences that propel your business forward.',
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
        alt: 'Collaboration',
        title: 'Collaborative Innovation',
        description: 'Empowering cross-functional teams with beautiful interfaces and integrated workflows.',
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
        alt: 'Digital Network',
        title: 'Cloud-Scale Architecture',
        description: 'Engineered for high availability, performance safety, and seamless customer experiences.',
    },
];

export default function Hero() {
    return (
        <header className="relative w-full h-[60vh] md:h-[65vh] min-h-[450px] bg-black text-white overflow-hidden">

            {/* Background Swiper Container */}
            <div className="absolute inset-0 w-full h-full z-10">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide.id} className="relative w-full h-full">
                            {/* Image Layer */}
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                priority={index === 0}
                                quality={85}
                                className="object-cover"
                            />
                            {/* Individual Dimming Overlay */}
                            <div className="absolute inset-0 bg-black/60 z-20" />

                            {/* Dynamic Content locked to each active slide view */}
                            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-5 text-center">
                                <div className="max-w-3xl space-y-6">
                                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                                        {slide.title}
                                    </h1>

                                    <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
                                        {slide.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                        <Button
                                            size="lg"
                                            className="font-semibold shadow-lg shadow-blue-500/40 w-full sm:w-auto"
                                        >
                                            Get Started
                                        </Button>
                                        <Button
                                            size="lg"
                                            className="font-semibold border-white text-white hover:bg-white hover:text-black w-full sm:w-auto"
                                        >
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Persistent Global Visual Flow Arrow */}
            <a
                href="#features"
                className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 text-xs tracking-widest text-white/80 uppercase hover:text-white transition-colors"
                aria-label="Scroll down to features"
            >
                <span>Discover More</span>
                <svg
                    className="w-5 h-5 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
            </a>

        </header>
    );
}
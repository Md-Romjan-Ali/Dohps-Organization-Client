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
        src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80',
        alt: 'Empowering Education',
        title: 'Education Support Program',
        description: 'Keeping brilliant but vulnerable students in school by providing need-based assistance and mentorship.',
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1600&q=80',
        alt: 'Healthcare and Nutrition Outreach',
        title: 'Health & Nutrition Initiatives',
        description: 'Driving community-wide well-being through awareness campaigns on health, hygiene, and sustainable nutrition.',
    },
    {
        id: 3,
        src: 'https://media.licdn.com/dms/image/v2/D4D12AQHNAaGTYqw1Lg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1655700217847?e=2147483647&v=beta&t=xRl077jUSluZW0U2fQTDwdU7aX0fmKQMtSW4SjqX_1A',
        alt: 'Community Transformation',
        title: 'Sustainable Community Impact',
        description: 'Building homes for destitute women and constructing climate-resilient futures for marginalized families.',
    },
];

export default function Hero() {
    return (
        <header className="relative w-full h-[65vh] md:h-[75vh] min-h-[500px] bg-slate-950 text-white overflow-hidden">

            {/* Background Swiper Container */}
            <div className="absolute inset-0 w-full h-full z-10">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    autoplay={{
                        delay: 6000,
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
                                quality={90}
                                className="object-cover"
                            />
                            {/* Individual Dimming Overlay */}
                            <div className="absolute inset-0 bg-slate-950/70 z-20" />

                            {/* Dynamic Content locked to each active slide view */}
                            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-5 text-center">
                                <div className="max-w-3xl space-y-6">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                                        {slide.title}
                                    </h1>

                                    <p className="text-base md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                                        {slide.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                                        <Button
                                            size="lg"
                                            className="font-semibold shadow-lg shadow-blue-600/30 w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                                        >
                                            Our Programs
                                        </Button>
                                        <Button
                                            size="lg"
                                            variant="bordered"
                                            className="font-semibold border-white text-white hover:bg-white hover:text-slate-950 w-full sm:w-auto transition-colors"
                                        >
                                            Get Involved
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
                href="#programs"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 text-xs font-medium tracking-widest text-slate-300 uppercase hover:text-white transition-colors"
                aria-label="Scroll down to core programs"
            >
                <span>Discover More</span>
                <svg
                    className="w-5 h-5 animate-bounce text-blue-500 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
            </a>

        </header>
    );
}
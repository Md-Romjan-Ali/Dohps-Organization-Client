'use client';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

const MeetOurFounder = () => {
    return (
        <div className='dark:bg-slate-950 py-12'>
            <section className="max-w-7xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800/80 transition-colors duration-300">
                {/* Section Heading */}
                <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-3">
                    Meet Our Founder
                </h2>
                <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-6" />

                {/* Content Container */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    {/* Left Side: Circular Image */}
                    <div className="flex-shrink-0">
                        <Image
                            src="https://dohps.org/images/home/founder_img.jpg"
                            alt="Md. Shahin Miya"
                            width={500}
                            height={500}
                            className="w-48 h-48 md:w-[400px] md:h-[400px] rounded-full object-cover shadow-md border-4 border-slate-50 dark:border-slate-800"
                        />
                    </div>

                    {/* Right Side: Text Information */}
                    <div className="flex-1 text-left">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                            Md. Shahin Miya
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                            <Typewriter
                                words={[' Founder and Executive Director', 'Retired Bangladesh Army Officer', 'Social Entrepreneur', 'Education Advocate']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />

                        </p>

                        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                            <p>
                                Md. Shahin Miya, our Founder and Executive Director, established DOHPS with a singular vision: to seek out, support, and sustain the brilliant minds who have been left behind by financial or social constraints. Under his leadership, DOHPS works to bridge the gap for talented dropouts and empowers them to achieve their full potential for a sustainable future.
                            </p>
                            <p>
                                Through his personalized guidance and the organization`s need-based educational support, these students are encouraged to lead dignified, honest, and meaningful lives while contributing positively to their communities.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>

    );
};

export default MeetOurFounder;
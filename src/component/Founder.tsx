import Image from 'next/image';
import React from 'react';

const MeetOurFounder = () => {
    return (
        <section className="max-w-7xl mx-auto my-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            {/* Section Heading */}
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Meet Our Founder
            </h2>

            {/* Content Container */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

                {/* Left Side: Circular Image */}
                <div className="flex-shrink-0">
                    <Image
                        src="https://dohps.org/images/home/founder_img.jpg" // Replace with your image source
                        alt="Md. Shahin Miya"
                        width={500}
                        height={500}
                        className="w-48 h-48 md:w-70 md:h-70 rounded-full object-cover shadow-md"
                    />
                </div>

                {/* Right Side: Text Information */}
                <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                        Md. Shahin Miya
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                        Founder and Executive Director
                    </p>

                    <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                        <p>
                            Md. Shahin Miya, our Founder and Executive Director, established DOHPS with a singular vision: to seek out, support, and sustain the brilliant minds who have been left behind by financial or social constraints. Under his leadership, DOHPS works to bridge the gap for talented dropouts and empowers them to achieve their full potential for a sustainable future.
                        </p>
                        <p>
                            Through his personalized guidance and the organization` need-based educational support, these students are encouraged to lead dignified, honest, and meaningful lives while contributing positively to their communities.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MeetOurFounder;
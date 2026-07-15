import { getSuccessData } from "@/lib/get/getSuccessData";
import SuccessSection from "./SuccessSection";
import { GetSuccess } from "@/app/(main)/success/page";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const SuccessBaner = async () => {
    const datas = await getSuccessData();
    console.log(datas);

    return (
        <section className="bg-white dark:bg-slate-950 py-16 border-b border-slate-100 dark:border-slate-900/50 transition-colors duration-300">
            <div className="w-full py-5 mx-auto px-6">

                {/* Header Section */}
                <div className="flex max-w-7xl mx-auto flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div className="max-w-xl mx-auto text-center">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-wider uppercase block mb-1">
                            Our Impact
                        </span>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl tracking-tight">
                            Stories of Excellence & Change
                        </h2>
                        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                            A quick glimpse into how we support brilliant minds and help marginalized communities achieve sustainable human growth.
                        </p>
                    </div>

                    {/* View All Redirect Button */}
                    <Link
                        href="/success"
                        className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                    >
                        See All Stories
                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* 4 Cards Preview Grid */}
                <Marquee pauseOnHover={true} speed={50} gradient={false} className="overflow-hidden">

                    <div className="flex items-center gap-6">

                        {
                            datas?.map((data: GetSuccess) =>
                                <SuccessSection key={data._id} data={data} />
                            )
                        }

                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default SuccessBaner;
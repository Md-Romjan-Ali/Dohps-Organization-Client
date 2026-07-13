import { GetDetailsSuccessData } from "@/lib/get/getSuccessData";
import Image from "next/image";
import Link from "next/link";
import { FaGraduationCap, FaUserAlt } from "react-icons/fa";

interface DetailsPromise {
    params: Promise<{ id: string }>
}

export default async function ProjectDetails({ params }: DetailsPromise) {
    const { id } = await params;
    const project = await GetDetailsSuccessData(id);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-3xl mx-auto">
                {/* Back Button */}
                <Link
                    href={'/'}
                    className="group mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to Stories
                </Link>

                {/* Main Article Card with Smooth Hover Elevation */}
                <article className="group/card overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/40 hover:-translate-y-0.5">

                    {/* Image Container with Zoom effect */}
                    <div className="relative h-64 w-full sm:h-96 bg-slate-100 dark:bg-slate-950 overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 768px"
                            className="object-cover transition-transform duration-500 group-hover/card:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6 sm:p-10">
                        {/* Meta Tags / ID Badge */}
                        <div className="flex items-center justify-between gap-4 mb-4">
                            <span className="text-xs font-mono bg-slate-50 dark:bg-slate-950 text-slate-400 dark:text-slate-500 px-2.5 py-1 rounded-md border border-slate-100 dark:border-slate-800/60">
                                ID: {project._id}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors duration-200">
                            {project.title}
                        </h1>

                        {/* Student and University Info Badges */}
                        <div className="mt-4 flex flex-wrap gap-3">
                            <div className="inline-flex items-center gap-2 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100/50 dark:border-blue-900/30 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-400 transition-all hover:bg-blue-50 dark:hover:bg-blue-950/60">
                                <FaUserAlt className="text-blue-500 dark:text-blue-400 text-xs" />
                                <span>{project.studentName}</span>
                            </div>
                            <div className="inline-flex items-center gap-2 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-900/30 px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-400 transition-all hover:bg-indigo-50 dark:hover:bg-indigo-950/60">
                                <FaGraduationCap className="text-indigo-500 dark:text-indigo-400 text-base" />
                                <span className="capitalize">{project.universityName}</span>
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="mt-8 border-t border-slate-100 dark:border-slate-800/80 pt-6">
                            <p className="whitespace-pre-line text-base leading-relaxed text-slate-600 dark:text-slate-300 selection:bg-blue-100 dark:selection:bg-blue-900/40">
                                {project.description}
                            </p>
                        </div>
                    </div>

                </article>
            </div>
        </div>
    );
}
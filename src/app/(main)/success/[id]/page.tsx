
import { GetDetailsSuccessData } from "@/lib/get/getSuccessData";
import Image from "next/image";
import Link from "next/link";
interface DetailsPromise {
    params: Promise<{ id: string }>
}
export default async function ProjectDetails({ params }: DetailsPromise) {
    const { id } = await params;
    console.log(id);
    const project = await GetDetailsSuccessData(id)

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">

                <Link
                    href={'/'}
                    className="group mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
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
                    Back to Projects
                </Link>

                <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

                    <div className="relative h-64 w-full sm:h-96 bg-gray-100">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 768px"
                            className="object-cover"
                        />
                    </div>

                    <div className="p-6 sm:p-10">
                        <span className="text-xs font-mono text-gray-400 block mb-2">
                            ID: {project._id}
                        </span>

                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {project.title}
                        </h1>

                        <div className="mt-6 border-t border-gray-100 pt-6">
                            <p className="whitespace-pre-line text-base leading-relaxed text-gray-600">
                                {project.description}
                            </p>
                        </div>
                    </div>

                </article>
            </div>
        </div>
    );
}
export const dynamic = 'force-dynamic';
import ManageCostomHandle from "@/component/ManageCostomHandle";
import { getSuccessData } from "@/lib/get/getSuccessData";
import Image from "next/image";

interface Story {
    _id: string;
    image: string;
    studentName: string;
    universityName: string;
}

export default async function StoryTable() {
    const stories = await getSuccessData();

    return (
        <div className="max-w-7xl mx-auto my-10 px-4 transition-colors duration-300">
            {/* Header Content Section */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Success Stories Management
                </h2>

                <p className="mt-2 max-w-2xl text-gray-600 dark:text-slate-400 text-sm md:text-base">
                    Manage all published success stories from one place. Review existing
                    stories, update their information when needed, or remove outdated content
                    to keep your website engaging and up to date.
                </p>
            </div>

            {/* Table Overlays */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-slate-800 shadow-lg dark:shadow-black/20">
                <table className="min-w-full bg-white dark:bg-slate-900 transition-colors duration-300">
                    <thead className="bg-indigo-600 dark:bg-indigo-700 text-white">
                        <tr>
                            <th className="px-6 py-4 text-left font-semibold text-sm">#</th>
                            <th className="px-6 py-4 text-left font-semibold text-sm">Image</th>
                            <th className="px-6 py-4 text-left font-semibold text-sm">Name</th>
                            <th className="px-6 py-4 text-left font-semibold text-sm">University</th>
                            <th className="px-6 py-4 text-center font-semibold text-sm">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        {stories?.map((story: Story, index: number) => (
                            <tr
                                key={story._id}
                                className="border-b border-gray-100 dark:border-slate-800/60 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition duration-200"
                            >
                                <td className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-slate-500">
                                    {index + 1}
                                </td>

                                <td className="px-6 py-4">
                                    <Image
                                        src={story.image}
                                        alt={story.studentName}
                                        width={200}
                                        height={200}
                                        className="h-16 w-24 rounded-lg object-cover border border-slate-100 dark:border-slate-800"
                                    />
                                </td>

                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                                    {story.studentName}
                                </td>

                                <td className="px-6 py-4 text-gray-600 dark:text-slate-400 text-sm">
                                    {story.universityName}
                                </td>

                                <td className="px-6 py-4 text-center">
                                    <ManageCostomHandle id={story._id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
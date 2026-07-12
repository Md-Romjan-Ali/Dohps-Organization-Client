import { getSuccessData } from "@/lib/get/getSuccessData";
import Image from "next/image";

interface Story {
    _id: string;
    image: string;
    studentName: string;
    universityName: string;
}
export default async function StoryTable() {
    const stories = await getSuccessData()
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                    Success Stories Management
                </h2>

                <p className="mt-2 max-w-2xl text-gray-600">
                    Manage all published success stories from one place. Review existing
                    stories, update their information when needed, or remove outdated content
                    to keep your website engaging and up to date.
                </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
                <table className="min-w-full bg-white">
                    <thead className="bg-indigo-600 text-white">
                        <tr>
                            <th className="px-6 py-4 text-left">#</th>
                            <th className="px-6 py-4 text-left">Image</th>
                            <th className="px-6 py-4 text-left">Name</th>
                            <th className="px-6 py-4 text-left">University</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {stories.map((story: Story, index: string) => (
                            <tr
                                key={story._id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4">{index + 1}</td>

                                <td className="px-6 py-4">
                                    <Image
                                        src={story.image}
                                        alt={story.studentName}
                                        width={200}
                                        height={200}
                                        className="h-16 w-24 rounded-lg object-cover"
                                    />
                                </td>

                                <td className="px-6 py-4 font-semibold">{story.studentName}</td>

                                <td className="px-6 py-4 text-gray-600">
                                    {story.universityName}
                                </td>

                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-3">
                                        <button
                                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                                        >
                                            Update
                                        </button>

                                        <button
                                            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}
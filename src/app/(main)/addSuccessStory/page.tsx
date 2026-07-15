
"use client";

import { postSuccessData } from "@/lib/post/successPost";
import { Spinner } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

interface Data {
    _id: string;
    studentName: string;
    universityName: string;
    title: string;
    description: string;
    image: string;
}

const AddItem = () => {
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        const form = e.currentTarget
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries()) as unknown as Data;
        const promise = postSuccessData(data);

        console.log(promise);
        toast.promise(promise, {
            loading: "Publishing success story...",
            success: "Success story published successfully!",
            error: "Failed to publish success story.",
        });
        const datas = await promise
        console.log(datas);
        setLoading(false)
        form.reset();

    };

    return (
        <section className="w-full max-w-2xl mx-auto px-4 py-12">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-md dark:border-neutral-800 dark:bg-neutral-900 md:p-8">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                        Add Student Success Story
                    </h2>

                    <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                        Share an inspiring student success story by filling out the
                        information below. All fields marked with * are required.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Student Name */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="studentName"
                            className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                        >
                            Student Name <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="studentName"
                            name="studentName"
                            type="text"
                            required
                            placeholder="Enter student's full name"
                            className="w-full rounded-md border border-neutral-300 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:text-white"
                        />
                    </div>

                    {/* University Name */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="universityName"
                            className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                        >
                            University Name <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="universityName"
                            name="universityName"
                            type="text"
                            required
                            placeholder="Enter university name"
                            className="w-full rounded-md border border-neutral-300 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:text-white"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="image"
                            className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                        >
                            Image URL <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="image"
                            name="image"
                            type="url"
                            required
                            placeholder="https://example.com/image.jpg"
                            className="w-full rounded-md border border-neutral-300 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:text-white"
                        />
                    </div>

                    {/* Story Title */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="title"
                            className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                        >
                            Story Title <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="title"
                            name="title"
                            type="text"
                            required
                            placeholder="e.g. From Student to Software Engineer"
                            className="w-full rounded-md border border-neutral-300 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:text-white"
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="description"
                            className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                        >
                            Success Story <span className="text-red-500">*</span>
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            rows={6}
                            required
                            placeholder="Write the student's success story, achievements, learning journey, and career milestones..."
                            className="w-full resize-none rounded-md border border-neutral-300 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:text-white"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-blue-700"
                    >
                        {
                            loading ?
                                <div className="flex flex-col items-center gap-2">
                                    <Spinner color="current" />
                                </div>
                                :
                                'Publish Success Story'
                        }

                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddItem;


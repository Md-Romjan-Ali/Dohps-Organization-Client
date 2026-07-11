"use client"

import { postSuccessData } from "@/lib/post/successPost";
interface Data {
    _id: string,
    title: string,
    description: string,
    image: string
}
const AddItem = () => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries()) as unknown as Data
        const postData = await postSuccessData(data)
        console.log(postData, 'and', data);
    }
    return (
        <section className="w-full max-w-xl mx-auto px-4 py-12">
            <div className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-xl shadow-md border border-neutral-100 dark:border-neutral-800">

                {/* Header Block */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                        DOHPS Portal
                    </h2>
                    <h3 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                        Create New Entry
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Please fill out the details below to publish your content.
                    </p>
                </div>

                {/* Semantic HTML Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* 1. Image Upload Field */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="image" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Upload Image <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="image"
                            type="url"
                            accept="image/*"
                            required
                            className="w-full px-3 py-2 text-sm bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-neutral-100 dark:file:bg-neutral-800 file:text-neutral-700 dark:file:text-neutral-300 hover:file:bg-neutral-200 dark:hover:file:bg-neutral-700 file:cursor-pointer cursor-pointer"
                            name="image"
                        />
                    </div>

                    {/* 2. Title Input */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="title" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="title"
                            type="text"
                            required
                            placeholder="Enter item title..."
                            className="w-full px-3 py-2 text-sm bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white"
                            name="title"
                        />
                    </div>

                    {/* 3. Description Textarea */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="description" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="description"
                            rows={5}
                            required
                            placeholder="Provide a detailed description..."
                            className="w-full px-3 py-2 text-sm bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y dark:text-white"
                            name="description"
                        />
                    </div>

                    {/* Action CTA Button */}
                    <button
                        type="submit"
                        className="w-full mt-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-md shadow-sm transition-colors duration-200 text-sm flex items-center justify-center gap-2"
                    >
                        Submit Entry
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddItem;


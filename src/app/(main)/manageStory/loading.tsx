export default function Loading() {
    return (
        <div className="max-w-7xl mx-auto my-10 px-4 animate-pulse">
            {/* Header */}
            <div className="mb-8">
                <div className="h-9 w-80 rounded bg-gray-200 dark:bg-slate-700"></div>
                <div className="mt-3 h-4 w-full max-w-2xl rounded bg-gray-200 dark:bg-slate-700"></div>
                <div className="mt-2 h-4 w-3/4 max-w-xl rounded bg-gray-200 dark:bg-slate-700"></div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-slate-800 shadow-lg">
                <table className="min-w-full">
                    {/* Table Header */}
                    <thead className="bg-indigo-600">
                        <tr>
                            <th className="px-6 py-4 text-left text-white">#</th>
                            <th className="px-6 py-4 text-left text-white">Image</th>
                            <th className="px-6 py-4 text-left text-white">Name</th>
                            <th className="px-6 py-4 text-left text-white">University</th>
                            <th className="px-6 py-4 text-center text-white">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white dark:bg-slate-900">
                        {[...Array(6)].map((_, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 dark:border-slate-800"
                            >
                                {/* Serial */}
                                <td className="px-6 py-5">
                                    <div className="h-4 w-6 rounded bg-gray-200 dark:bg-slate-700"></div>
                                </td>

                                {/* Image */}
                                <td className="px-6 py-5">
                                    <div className="h-16 w-24 rounded-lg bg-gray-200 dark:bg-slate-700"></div>
                                </td>

                                {/* Name */}
                                <td className="px-6 py-5">
                                    <div className="h-5 w-40 rounded bg-gray-200 dark:bg-slate-700"></div>
                                </td>

                                {/* University */}
                                <td className="px-6 py-5">
                                    <div className="h-5 w-52 rounded bg-gray-200 dark:bg-slate-700"></div>
                                </td>

                                {/* Actions */}
                                <td className="px-6 py-5">
                                    <div className="flex justify-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-gray-200 dark:bg-slate-700"></div>
                                        <div className="h-10 w-10 rounded-lg bg-gray-200 dark:bg-slate-700"></div>
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
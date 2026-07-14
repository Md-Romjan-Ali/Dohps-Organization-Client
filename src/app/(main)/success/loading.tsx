export default function Loading() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 animate-pulse">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="h-10 w-72 mx-auto rounded-lg bg-gray-200 dark:bg-zinc-800"></div>

                <div className="mt-5 h-4 w-full rounded bg-gray-200 dark:bg-zinc-800"></div>
                <div className="mt-3 h-4 w-5/6 mx-auto rounded bg-gray-200 dark:bg-zinc-800"></div>
            </div>

            {/* Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
                    >
                        {/* Image */}
                        <div className="h-52 w-full bg-gray-200 dark:bg-zinc-800"></div>

                        {/* Content */}
                        <div className="p-5">
                            {/* Student Name */}
                            <div className="h-4 w-28 rounded bg-gray-200 dark:bg-zinc-800"></div>

                            {/* University */}
                            <div className="mt-3 h-6 w-44 rounded bg-gray-200 dark:bg-zinc-800"></div>

                            {/* Button */}
                            <div className="mt-6 flex justify-end">
                                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-zinc-800"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
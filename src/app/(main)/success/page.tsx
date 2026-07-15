import { SearchComponent } from "@/component/SearchField";
import SuccessSection from "@/component/SuccessSection";
import { getSuccessData } from "@/lib/get/getSuccessData";
import { FaSearch } from "react-icons/fa";

export interface GetSuccess {
    _id: string;
    image: string;
    title: string;
    description: string;
    studentName: string;
    universityName: string;
}
interface Props {
    searchParams: Promise<{ search?: string | undefined }>
}

export default async function CustomCard({ searchParams }: Props) {
    const { search } = await searchParams;
    console.log(search, 'rams');
    const datas = await getSuccessData(search);
    console.log(datas);

    return (
        <section className="my-16 max-w-7xl mx-auto px-4 transition-colors duration-300">
            {/* Context Heading & Text Layer */}
            <div className="text-center mb-10 max-w-2xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl mb-3">
                    Our Success Stories
                </h2>
                <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                    Discover how DOHPS is breaking barriers, shifting lives, and helping brilliant yet underprivileged minds achieve sustainable human excellence.
                </p>
            </div>
            <div className="flex items-center gap-4 mb-6">
                <SearchComponent />
                <p className="text-lg flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    Found <span className="text-blue-500 font-semibold">{datas.length}</span>
                </p>
            </div>

            {/* Dynamic Grid Cards Layout */}
            {datas.length === 0 ? (
                <div className="col-span-full flex justify-center py-12">
                    <div className="w-full max-w-lg rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                            <FaSearch size={25} />
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            No Success Story Found
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                            We couldn not find any success stories matching your search.
                            Try searching with a different student name or university name.
                        </p>

                        {search && (
                            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                Search term:
                                <span className="ml-1 font-semibold text-blue-600 dark:text-blue-400">
                                    {search}
                                </span>
                            </p>
                        )}
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {datas.map((data: GetSuccess) => (
                        <SuccessSection key={data._id} data={data} />
                    ))}
                </div>
            )}
        </section>
    );
}
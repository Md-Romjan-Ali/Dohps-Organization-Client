import SuccessSection from "@/component/SuccessSection";
import { getSuccessData } from "@/lib/get/getSuccessData";

export interface GetSuccess {
    _id: string,
    image: string,
    title: string,
    description: string
}

export default async function CustomCard() {
    const datas = await getSuccessData();
    console.log(datas);

    return (
        <section className="my-16 max-w-7xl mx-auto px-4">
            {/* Context Heading & Text Layer */}
            <div className="text-center mb-10 max-w-2xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-3">
                    Our Success Stories
                </h2>
                <p className="text-base text-slate-500 leading-relaxed">
                    Discover how DOHPS is breaking barriers, shifting lives, and helping brilliant yet underprivileged minds achieve sustainable human excellence.
                </p>
            </div>

            {/* Dynamic Grid Cards Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {
                    datas.map((data: GetSuccess) => (
                        <SuccessSection key={data._id} data={data} />
                    ))
                }
            </div>
        </section>
    );
}
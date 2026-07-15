import { GetSuccess } from "@/app/(main)/success/page";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
interface Datas {
    data: GetSuccess
}
const SuccessSection = async ({ data }: Datas) => {

    return (
        <div id="story">
            <div
                className="group  relative overflow-hidden bg-blue-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl"
            >
                {/* Wrap image in a hidden overflow box to lock the zoom within boundaries */}
                <div className="relative overflow-hidden h-70 w-full">
                    <Image
                        alt={data.title}
                        src={data.image}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content Box */}
                <div className="p-5 flex flex-col justify-between">
                    <div>
                        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                            {data.studentName}
                        </p>
                        <h3 className="text-xl w-80 font-bold text-zinc-800 dark:text-zinc-100 tracking-tight transition-colors duration-300 group-hover:text-blue-600">
                            {data.universityName}
                        </h3>

                    </div>

                    {/* Action Row containing React Icon */}
                    <div className="mt-4 flex items-center justify-end">
                        <Link
                            href={`/success/${data._id}`}
                            className="p-2 rounded-full bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                            <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessSection;
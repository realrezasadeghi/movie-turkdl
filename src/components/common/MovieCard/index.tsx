import Image from "next/image";
import { BASE_URL_IMAGE } from "@/constants/image";
import { MdStar } from "react-icons/md";

type TMovieCardProps = {
    title: string;
    posterPatch: string;
    average: number;
}

export default function MovieCard({ title, posterPatch, average }: TMovieCardProps) {
    return (
        <article className="flex flex-col gap-2 cursor-pointer mx-1">
            <div className="relative w-40 h-56">
                <Image
                    fill
                    alt={title}
                    className="rounded-md object-cover"
                    src={`${BASE_URL_IMAGE}${posterPatch}`}
                />
            </div>
            <p className="dark:text-gray-200 text-xs font-bold text-ellipsis whitespace-nowrap overflow-hidden">{title}</p>
            <span className="text-orange-500">{average}</span>
        </article>
    )
}
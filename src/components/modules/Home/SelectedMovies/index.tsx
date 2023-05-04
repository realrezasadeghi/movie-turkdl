import MovieCard from "@/components/common/MovieCard"
import Slider from "@/components/common/Slider"
import { useTranslation } from "react-i18next"

type TSelectedMoviesProps = {
    items: any[]
}

export default function SelectedMovies({ items }: TSelectedMoviesProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'translation:home.selectedMovies' })

    return (
        <div className="flex flex-col gap-2">
            <h1 className="dark:text-gray-200 text-lg font-bold">{t('title')}</h1>
            <Slider items={items} renderItem={(item) => <MovieCard average={item.vote_average} title={item?.title} posterPatch={item.poster_path} />} />
        </div>
    )
}
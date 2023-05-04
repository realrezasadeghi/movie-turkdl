import { useTranslation } from "react-i18next";
import { RiSearch2Line } from "react-icons/ri";
export default function Search() {
    const { t } = useTranslation('translation', { 'keyPrefix': 'translation:header' })
    const handleSubmit = () => { };

    return (
        <form id="search-box" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 transition hover:opacity-80 rounded-md p-2">
                <RiSearch2Line size={20} className="text-gray-400" />
                <input className="w-full bg-transparent focus:outline-none text-black dark:text-white text-xs" placeholder={`${t('search')}...`} />
            </div>
        </form>
    )
}
import { useMemo } from "react"
import { Menu } from "@/types/TMenu"
import { FaAngleDown } from "react-icons/fa";
import { useTranslation } from "react-i18next"
import { BsCalendarWeekFill } from "react-icons/bs";
import { MdCategory, MdGeneratingTokens, MdNewspaper, MdStar, MdWatchLater } from 'react-icons/md';

import Box from "../Box";

export default function Category() {
    const { t } = useTranslation('translation', { keyPrefix: 'translation:category' })

    const CATEGORY_LIST = useMemo<Array<Menu>>(() => [
        {
            id: 1,
            label: t('title'),
            icon: <MdCategory />,
        },
        {
            id: 2,
            label: t('genres'),
            icon: <MdGeneratingTokens />,
        },
        {
            id: 3,
            icon: <MdNewspaper />,
            label: t('cinemaNews'),
        },
        {
            id: 4,
            icon: <BsCalendarWeekFill />,
            label: t('weeklyScheduleOfSeries'),
        },
        {
            id: 5,
            icon: <MdStar />,
            label: t('topTitles'),
        },
        {
            id: 6,
            icon: <MdWatchLater />,
            label: t('watchList'),
        }
    ], [t])

    return (
        <Box>
            <ul className="w-full flex items-center justify-evenly gap-4">
                {CATEGORY_LIST.map(({ id, label, icon }) => (
                    <li key={id} className="flex items-center gap-2">
                        <div className="bg-gray-300 dark:bg-gray-800 rounded-full dark:text-gray-200 p-2">{icon}</div>
                        <span className="dark:text-white text-xs">{label}</span>
                        <FaAngleDown size={10} className="dark:text-gray-300" />
                    </li>
                ))}
            </ul>
        </Box>
    )
}
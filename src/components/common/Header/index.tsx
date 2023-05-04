import React from "react";
import Link from "next/link";
import { useMemo } from 'react'
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import Search from "../Search";
import ToggleDarkMode from "../ToggleDarkMode";
import Button from "../‌Button";
import { Menu } from "@/types/TMenu";

export default function Header() {
    const { t } = useTranslation('translation', { keyPrefix: 'translation:header' })

    const MENU_LIST = useMemo<Array<Menu>>(() => ([
        {
            id: 1,
            link: '/',
            label: t('home'),
        },
        {
            id: 2,
            link: '/',
            label: t('moviesSpecial'),
        },
        {
            id: 3,
            link: '/',
            label: t('dedicatedSubtitles'),
        },
        {
            id: 4,
            link: '/',
            label: t('boxOffice'),
        },
        {
            id: 5,
            link: '/',
            label: t('buySpecialSubscription'),
            icon: <FaStar className="text-orange-500" size={20} />,
        },
    ]), [t])

    return (
        <header className="w-full">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between py-4">
                    <section className="flex items-center">
                        <ToggleDarkMode />
                        <ul className="flex gap-4">
                            {MENU_LIST.map(({ id, label, link, icon }) => (
                                <li key={id}>
                                    <Link href={link as string} className="flex items-center gap-1">
                                        {icon}
                                        <span className="dark:text-white text-xs">{label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="flex items-center gap-2">
                        <Search />
                        <Button label={t('login')} className="bg-orange-500" />
                        <Button label={t('register')} className="bg-transparent" />
                    </section>
                </nav>
            </div>
        </header>
    )
}
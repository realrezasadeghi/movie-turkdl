import Box from "@/components/common/Box";
import { useTranslation } from "react-i18next";

export default function SearchAdvanced() {
    const { t } = useTranslation('translation', { keyPrefix: 'translation:home.searchAdvanced' })
    return (
        <Box className="flex flex-col gap-2">
            <header className="flex items-center gap-2">
                <p className="dark:text-gray-200 font-bold">{t('title')}</p>
            </header>
            <main className="">
            </main>
        </Box>
    )
}
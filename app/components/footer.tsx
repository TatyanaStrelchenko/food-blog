import { getTranslations } from "next-intl/server";

export const Footer = async () => {
    const t = await getTranslations('Footer')
    return (
        <footer className="items-center bg-grey-500 text-center pt-10 pb-10">
            {t('footer')}
        </footer>
    )}
import { useTranslations } from "next-intl"

export const Footer = () => {
    const t = useTranslations('Footer')
    
    return (
        <footer className="items-center bg-grey-500 text-center pt-10 pb-10">
            {t('footer')}
        </footer>
    )}
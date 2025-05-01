import {useTranslations} from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <div title={t('title')}>
      <p className="max-w-[460px]">{t('description')}</p>
      Notttt
    </div>
  );
}

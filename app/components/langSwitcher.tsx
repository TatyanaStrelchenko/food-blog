import { Link, useLocale } from 'next-intl';

export const LangSwitcher = () => {
  const locale = useLocale();

  return (
    <div>
      <Link href="/" locale="uk">UA</Link>
      <Link href="/" locale="en">EN</Link>
    </div>
  );
};

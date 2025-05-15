
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import type { Metadata } from 'next';

import { notFound } from 'next/navigation';
import './globals.css';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Ukrainian Food',
  description: 'Food blog'
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
          <NextIntlClientProvider >
            {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
}

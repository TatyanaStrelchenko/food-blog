
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import './globals.css';
import { routing } from '@/i18n/routing';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ukrainian Food',
  description: 'Food blog'
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // const { locale = 'en'} = props.params;

  // // if (!locales.includes(locale as any)) notFound();

  // // const messages = (await import(`../../messages/${locale}.json`)).default;

  // let messages;
  // try {
  //   messages = (await import(`../../messages/${locale}.json`)).default;
  // } catch (error) {
  //   notFound(); // Fallback if locale not found
  // }

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

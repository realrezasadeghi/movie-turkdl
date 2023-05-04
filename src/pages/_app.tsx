import i18n from '@/i18n';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import MainLayout from '@/layouts/MainLayout';
import { I18nextProvider } from 'react-i18next';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </I18nextProvider>
  )
}

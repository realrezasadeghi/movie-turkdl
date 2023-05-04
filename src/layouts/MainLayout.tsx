import localFont from 'next/font/local';
import { PropsWithChildren } from 'react'
import Header from '@/components/common/Header';


const iranSans = localFont({
    variable: '--font-iran-sans',
    src: [
        { path: '../../public/fonts/IRANSansX-Bold.woff', },
        { path: '../../public/fonts/IRANSansX-Light.woff', },
        { path: '../../public/fonts/IRANSansX-Medium.woff' },
        { path: '../../public/fonts/IRANSansX-Regular.woff' },
    ],
});

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <div className={iranSans.className}>
            <Header />
            <main className='container mx-auto'>{children}</main>
        </div>
    )
}
import Navigation from './components/navigation';
import './globals.css';
import { Inter } from 'next/font/google';

/* const store = createStore(allReducers); */

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Fashion and spa',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navigation />

                {children}
                {/*              <Provider store={store}>
                    <CookieConsentPopup />
                </Provider> */}
            </body>
        </html>
    );
}

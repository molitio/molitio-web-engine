import React from 'react';
//import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../style-system/global.css';

const inter = Inter({ subsets: ['latin'] });

// TODO: implement context retrieval for metadata
/* export const metadata: Metadata = {
    title: 'molitio web engine',
    description: 'powered by bits',
};
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}

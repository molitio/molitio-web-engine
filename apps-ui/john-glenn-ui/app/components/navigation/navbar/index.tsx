import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Button, ButtonType } from '@molitio/ui-core';

const Navbar = ({ toggle }: { toggle: () => void }) => {
    return (
        <>
            <div className="h-20 bg-black sticky top-0">
                <div className="bg-cover mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        {/*
                        <Logo />
                        <button type="button" className="inline-flex items-center md:hidden" onClick={toggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
                            </svg>
                        </button>
                        <Button type={ButtonType.Primary}>{`Hi`}</Button>
                        <ul className="hidden md:flex gap-x-8 text-white">
                            <p>Bejelentkezés +36 30 123 4567</p>
                            <li>
                                <Link href="/about">
                                    <p>About Us</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    <p>Services</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacts">
                                    <p>Contacts</p>
                                </Link>
                            </li>
                        </ul>
                        <div className="hidden md:block">
                            <Button type={ButtonType.Secondary} />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

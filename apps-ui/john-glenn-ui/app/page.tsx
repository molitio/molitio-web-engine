'use client';

import { Button, Loading } from '@molitio/mwe-ui-core';
import { Card, CardContainer } from '@molitio/mwe-ui-core';
import Image from 'next/image';
import { useState, useEffect, Suspense, use } from 'react';

export function MOCK_FetchData(delayInSec: number) {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('Data loaded');
        }, delayInSec * 1000);
    });
}

type MOCK_FetchDataState = 'loading' | 'ready';

function ExampleCardWrapper() {
    const [status, setStatus] = useState<MOCK_FetchDataState>('ready');

    function MOCK_toggleStatus() {
        setStatus((prev) => (prev === 'ready' ? 'loading' : 'ready'));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            MOCK_toggleStatus();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    async function handleMockDataFetch() {
        if (status === 'ready') {
            const result = await MOCK_FetchData(10);
            alert(` Status: ${result}`);
        }
    }

    return (
        <Card
            title="Accent Card"
            description="Accent border and text color."
            variant="accent"
            actions={[
                {
                    content: 'accept',
                    variant: {
                        variant: 'secondary',
                        fullWidth: true,
                        onClick: handleMockDataFetch,
                    },
                },
            ]}
        />
    );
}

// FOR AI: create a mock component that does a timeout, than loads content, than loads again every 5 sec, this will be a mock to test suspense for the Card component.

export default function Home() {
    return (
        <div className="min-h-screen bg-secondary flex flex-col text-primary">
            {/* Navbar: Primary background, onPrimary text */}
            <nav className="bg-primary text-white px-6 py-4 flex items-center justify-between shadow-md">
                {/* Logo and Brand */}
                <div className="flex items-center gap-6">
                    <span className="font-bold text-lg">Molitio Sandbox</span>
                    {/* Nav Menu */}
                    <ul className="hidden md:flex gap-4">
                        <li>
                            <a
                                href="#"
                                className="px-3 py-2 rounded hover:bg-primary/80 transition bg-secondary text-white"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2 rounded hover:bg-primary/80 transition">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2 rounded hover:bg-primary/80 transition">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2 rounded hover:bg-primary/80 transition">
                                About
                            </a>
                        </li>
                        <li className="relative group">
                            <button className="px-3 py-2 rounded hover:bg-primary/80 transition flex items-center gap-1">
                                More
                                <span className="material-icons text-xs">expand_more</span>
                            </button>
                            {/* Dropdown */}
                            <ul className="absolute left-0 top-full mt-2 bg-white text-primary rounded shadow-lg min-w-[120px] hidden group-hover:block">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-tertiary">
                                        Docs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-tertiary">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-tertiary">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* Right Side: Search, CTA, Avatar */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="hidden md:block">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-3 py-2 rounded bg-tertiary text-primary border border-gray-300 focus:outline-none focus:border-accent"
                        />
                    </div>
                    {/* CTA Buttons */}
                    <button className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/80 transition">
                        Accent CTA
                    </button>
                    <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary transition">
                        Secondary
                    </button>
                    {/* User Avatar */}
                    <div className="relative w-9 h-9 rounded-full bg-muted overflow-hidden shadow">
                        <Image
                            src="https://avatars.githubusercontent.com/u/73017569?s=96&v=4"
                            alt="User avatar"
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                    </div>
                </div>
                {/* Mobile Menu Button */}
                <button className="md:hidden ml-4 p-2 rounded bg-secondary text-white">
                    <span className="material-icons">menu</span>
                </button>
            </nav>

            <div className="flex flex-1">
                {/* Sidebar: Secondary background, onSecondary text */}
                <aside className="w-56 bg-primary text-white flex flex-col p-4 space-y-2">
                    <div className="font-semibold mb-2 text-white">Sidebar</div>
                    <a href="#" className="hover:text-accent text-white">
                        Dashboard
                    </a>
                    <a href="#" className="hover:text-accent text-white">
                        Profile
                    </a>
                    <a href="#" className="hover:text-accent text-white">
                        Settings
                    </a>
                </aside>

                {/* Main Content: Tertiary background, primary text */}
                <main className="flex-1 p-8 space-y-8 text-primary">
                    {/* Section: Button Showcase */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Button Showcase</h2>
                        <div className="flex flex-wrap gap-4 mb-6">
                            {/* Primary Button */}
                            <Button variant="primary" rounded="sm" size="sm">
                                Primary
                            </Button>
                            {/* Secondary Button */}
                            <Button variant="secondary" rounded="sm" size="sm">
                                Secondary
                            </Button>
                            {/* Outlined Button */}
                            <Button variant="outlined" rounded="sm" size="sm">
                                Outlined
                            </Button>
                            {/* Text Button */}
                            <Button variant="text" rounded="sm" size="sm">
                                Text
                            </Button>
                            {/* Danger Button */}
                            <Button variant="danger" rounded="sm" size="sm" disabled={true}>
                                Danger
                            </Button>
                            {/* Icon start Button */}
                            <Button
                                startIcon={<span className="material-icons">star</span>}
                                variant="primary"
                                size="md"
                                rounded="lg"
                                fullWidth={false}
                            >
                                Icon
                            </Button>
                            {/* Icon end Button */}
                            <Button
                                endIcon={<span className="material-icons">star</span>}
                                variant="primary"
                                size="md"
                                rounded="lg"
                                fullWidth={false}
                            >
                                Icon
                            </Button>
                            {/* Disabled Button */}
                            <Button variant="primary" size="md" rounded="lg" fullWidth={false} disabled={true}>
                                Disabled
                            </Button>
                            {/* Loading Button */}
                            <Button
                                variant="primary"
                                size="md"
                                fullWidth={false}
                                rounded={'lg'}
                                loading={true}
                                onClick={() => alert('Gombra kattintottál!')}
                            >
                                gomb
                            </Button>
                            {/* Full width Button */}
                            <Button variant="primary" size="md" rounded="lg" fullWidth={true}>
                                Full Width
                            </Button>
                        </div>
                    </section>

                    {/* Section: Card Container */}
                    <section>
                        <CardContainer columns={3} gap="gap-6" title="Card Showcase">
                            <Card
                                title="Default Card"
                                description="This is a default card with primary and secondary text."
                                variant="default"
                                /*            actions={[
                                    {
                                        text: 'default',
                                        variant: 'primary',
                                    },
                                ]} */
                            />
                            <Card
                                title="Accent Card"
                                description="Accent border and text color."
                                variant="accent"
                                actions={[
                                    {
                                        content: 'accept',
                                        variant: {
                                            variant: 'secondary',
                                            fullWidth: true,
                                        },
                                    },
                                ]}
                            />
                            <Card
                                title="Muted Card"
                                description="Muted background and secondary text."
                                variant="muted"
                            />
                            <Card
                                title="Image Card"
                                description="Card with image header."
                                variant="image"
                                imageSrc="https://avatars.githubusercontent.com/u/73017569?s=96&v=4"
                            />
                            <Card
                                title="Icon Card"
                                description="Card with icon and action."
                                variant="icon"
                                icon="star"
                            />
                            <Card
                                title="Actions Card"
                                description="Card with multiple actions."
                                variant="actions"
                                actionOrientation="grid"
                                actions={[
                                    {
                                        content: 'Save',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'primary',
                                            fullWidth: true,
                                            onClick: () => alert('Save'),
                                        },
                                    },
                                    {
                                        content: 'Share',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'danger',
                                            fullWidth: true,
                                            onClick: () => alert('Share'),
                                        },
                                    },
                                    {
                                        content: 'Error',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'danger',
                                            //fullWidth: true,
                                            onClick: () => alert('Error'),
                                        },
                                    },
                                    {
                                        content: 'Share',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'danger',
                                            //fullWidth: true,
                                            onClick: () => alert('Share'),
                                        },
                                    },
                                ]}
                            />
                            <Card
                                title="Actions Card Vertical"
                                description="Card with multiple actions."
                                variant="actions"
                                actionOrientation="column"
                                actions={[
                                    {
                                        content: 'Save',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'primary',
                                            fullWidth: true,
                                            onClick: () => alert('Edit'),
                                        },
                                    },
                                    {
                                        content: 'Share',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'danger',
                                            fullWidth: true,
                                            onClick: () => alert('Share'),
                                        },
                                    },
                                    {
                                        content: 'Share',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'danger',
                                            //fullWidth: true,
                                            onClick: () => alert('Share'),
                                        },
                                    },
                                    {
                                        content: 'Share',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'danger',
                                            //fullWidth: true,
                                            onClick: () => alert('Share'),
                                        },
                                    },
                                ]}
                            />
                            <Card
                                title="Actions Card Horizontal"
                                description="Card with multiple actions."
                                variant="actions"
                                actionOrientation="row"
                                actions={[
                                    {
                                        content: 'Save',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'primary',
                                            fullWidth: true,
                                            onClick: () => alert('Edit'),
                                        },
                                    },
                                    {
                                        content: 'Share',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'outlined',
                                            //fullWidth: true,
                                            onClick: () => alert('Share'),
                                        },
                                    },
                                    {
                                        content: 'Share',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'danger',
                                            //fullWidth: true,
                                            onClick: () => alert('Share'),
                                        },
                                    },
                                    {
                                        content: 'Share',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'danger',
                                            //fullWidth: true,
                                            onClick: () => alert('Share'),
                                        },
                                    },
                                ]}
                            />
                            <Card
                                title="Status Card"
                                description="Card with success status border and text."
                                variant="status"
                                /*  buttonAction={() => alert('Status Card')} */
                            />
                            <Card
                                title="Loading Card"
                                description="Loading card component."
                                variant="accent"
                                status="loading"
                            />
                            <Card
                                title="Disabled Card"
                                description="Disabled card."
                                variant="default"
                                status="disabled"
                            />

                            <ExampleCardWrapper />
                        </CardContainer>
                    </section>

                    {/* Section: Input Controls */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Input & Interactive Controls</h2>
                        <form className="space-y-6 max-w-lg">
                            {/* Text Input */}
                            <div>
                                <label className="block text-primary mb-1" htmlFor="input1">
                                    Text Input
                                </label>
                                <input
                                    id="input1"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent placeholder-secondary text-primary"
                                    placeholder="Type here..."
                                />
                            </div>
                            {/* Password Input */}
                            <div>
                                <label className="block text-primary mb-1" htmlFor="input2">
                                    Password
                                </label>
                                <input
                                    id="input2"
                                    type="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent placeholder-secondary text-primary"
                                    placeholder="Password"
                                />
                            </div>
                            {/* Email Input */}
                            <div>
                                <label className="block text-primary mb-1" htmlFor="input3">
                                    Email
                                </label>
                                <input
                                    id="input3"
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent placeholder-secondary text-primary"
                                    placeholder="Email"
                                />
                            </div>
                            {/* Textarea */}
                            <div>
                                <label className="block text-primary mb-1" htmlFor="textarea1">
                                    Textarea
                                </label>
                                <textarea
                                    id="textarea1"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent placeholder-secondary text-primary"
                                    rows={3}
                                    placeholder="Type your message..."
                                />
                            </div>
                            {/* Select */}
                            <div>
                                <label className="block text-primary mb-1" htmlFor="select1">
                                    Select
                                </label>
                                <select
                                    id="select1"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent text-primary"
                                >
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                            {/* Radio Group */}
                            <div>
                                <span className="block text-primary mb-1">Radio Group</span>
                                <label className="inline-flex items-center mr-4">
                                    <input type="radio" name="radioGroup" className="accent-accent" defaultChecked />
                                    <span className="ml-2 text-primary">Option A</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="radioGroup" className="accent-accent" />
                                    <span className="ml-2 text-primary">Option B</span>
                                </label>
                            </div>
                            {/* Checkbox Group */}
                            <div>
                                <span className="block text-primary mb-1">Checkbox Group</span>
                                <label className="inline-flex items-center mr-4">
                                    <input type="checkbox" className="accent-accent" defaultChecked />
                                    <span className="ml-2 text-primary">Check 1</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="accent-accent" />
                                    <span className="ml-2 text-primary">Check 2</span>
                                </label>
                            </div>
                            {/* Toggle Switch */}
                            <div className="flex items-center gap-2">
                                <span className="text-primary">Toggle</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-accent transition"></div>
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
                                </label>
                            </div>
                            {/* File Upload */}
                            <div>
                                <label className="block text-primary mb-1" htmlFor="file1">
                                    File Upload
                                </label>
                                <input id="file1" type="file" className="block w-full text-primary" />
                            </div>
                            {/* Range Slider */}
                            <div>
                                <label className="block text-primary mb-1" htmlFor="range1">
                                    Range
                                </label>
                                <input id="range1" type="range" min="0" max="100" className="w-full accent-accent" />
                            </div>
                            {/* Search Input */}
                            <div>
                                <label className="block text-primary mb-1" htmlFor="search1">
                                    Search
                                </label>
                                <input
                                    id="search1"
                                    type="search"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent placeholder-secondary text-primary"
                                    placeholder="Search..."
                                />
                            </div>
                            {/* Disabled Input */}
                            <div>
                                <label className="block text-primary mb-1" htmlFor="disabled1">
                                    Disabled
                                </label>
                                <input
                                    id="disabled1"
                                    className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-400 cursor-not-allowed"
                                    placeholder="Disabled"
                                    disabled
                                />
                            </div>
                            {/* Error Input */}
                            <div>
                                <label className="block text-primary mb-1" htmlFor="error1">
                                    Error
                                </label>
                                <input
                                    id="error1"
                                    className="w-full px-3 py-2 border border-error rounded focus:outline-none focus:border-error placeholder-secondary text-error"
                                    placeholder="Error state..."
                                />
                                <span className="text-error text-sm">This field is required.</span>
                            </div>
                            {/* Success Input */}
                            <div>
                                <label className="block text-primary mb-1" htmlFor="success1">
                                    Success
                                </label>
                                <input
                                    id="success1"
                                    className="w-full px-3 py-2 border border-success rounded focus:outline-none focus:border-success placeholder-secondary text-success"
                                    placeholder="Success state..."
                                />
                                <span className="text-success text-sm">Looks good!</span>
                            </div>
                            {/* Grouped Controls */}
                            <div className="flex gap-2">
                                <input
                                    className="px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-accent placeholder-secondary text-primary"
                                    placeholder="First"
                                />
                                <input
                                    className="px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-accent placeholder-secondary text-primary"
                                    placeholder="Middle"
                                />
                                <input
                                    className="px-3 py-2 border border-gray-300 rounded-r focus:outline-none focus:border-accent placeholder-secondary text-primary"
                                    placeholder="Last"
                                />
                            </div>
                            {/* Submit Button */}
                            <button
                                className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </section>

                    {/* Section: Alerts */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Alerts</h2>
                        <div className="space-y-2">
                            <div className="bg-success/10 border-l-4 border-success text-success p-4 rounded">
                                Success alert using theme color.
                            </div>
                            <div className="bg-warning/10 border-l-4 border-warning text-warning p-4 rounded">
                                Warning alert using theme color.
                            </div>
                            <div className="bg-error/10 border-l-4 border-error text-error p-4 rounded">
                                Error alert using theme color.
                            </div>
                            <div className="bg-info/10 border-l-4 border-info text-info p-4 rounded">
                                Info alert using theme color.
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

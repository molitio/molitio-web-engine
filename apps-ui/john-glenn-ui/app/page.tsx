'use client';

import { Button /*Loading*/ } from '@molitio/mwe-ui-core';
import { Card, CardContainer } from '@molitio/mwe-ui-core';
import { NavBar } from '@molitio/mwe-ui-core'; 
import Image from 'next/image';
import { useState, useEffect /*, Suspense, use*/ } from 'react';

const MOCK_MENU_ITEMS = [
    { id: '1', label: 'Home', href: '#Home' },
    { id: '2', label: 'Features', href: '#Features' },
    { id: '3', label: 'Pricing', href: '#Pricing' },
    { id: '4', label: 'About', href: '#About' },
    { id: '5', label: 'Contact', href: '#Contact' },
];

const MOCK_USER = {
    name: 'John Glenn',
    avatarUrl: 'https://avatars.githubusercontent.com/u/73017569?s=96&v=4'
};

function MOCK_FetchData(delayInSec: number) {
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

export default function Home() {
    return (
        <div className="min-h-screen bg-secondary flex flex-col text-primary">
            
            <NavBar 
                logoSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0iIzNiODJmNiIgLz48dGV4dCB4PSI1MCIgeT0iNjUiIGZvbnQtc2l6ZT0iNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiPk08L3RleHQ+PC9zdmc+"
                brandMessage="Molitio Sandbox"
                menuItems={MOCK_MENU_ITEMS}
                accountManagement={true}
                user={MOCK_USER}
                styles={{
                    container: {
                        bgColor: 'bg-slate-900',
                        borderColor: 'border-slate-800',
                        borderWidth: 'border-b',
                        shadow: 'shadow-lg',
                        height: 'h-16',
                        padding: 'px-6',
                    },
                    layout: {
                        logoSection: {
                            padding: 'pl-[3vw]',  // 8% of viewport width
                            margin: '',
                        },
                        accountSection: {
                            padding: 'pr-[8vw]',  // 8% of viewport width
                            margin: '',
                        },
                    },
                    logo: {
                        height: 'h-10',
                        width: 'w-auto',
                        shadow: 'shadow-lg shadow-blue-500/50',
                        animation: 'hover:scale-110 hover:rotate-3 transition-all duration-300',
                        rounded: 'rounded-full',
                        border: '',
                    },
                    brandMessage: {
                        textColor: 'text-slate-100',
                        fontSize: 'text-xl',
                        fontWeight: 'font-bold',
                        fontFamily: 'font-sans',
                        animation: 'hover:text-blue-400 transition-colors duration-300',
                    },
                    menuItem: {
                        textColor: 'text-slate-300',
                        hoverTextColor: 'hover:text-blue-400',
                        hoverBgColor: 'hover:bg-slate-800',
                        activeTextColor: 'text-blue-400',
                        activeBgColor: 'bg-slate-800',
                        activeFontWeight: 'font-medium',
                        padding: 'px-4 py-2',
                        rounded: 'rounded-lg',
                        gap: 'gap-2',
                        animation: 'hover:scale-110 transition-all duration-200',
                    },
                    hamburger: {
                        textColor: 'text-slate-300',
                        hoverTextColor: 'hover:text-blue-400',
                        padding: 'p-2',
                        iconSize: 'text-2xl',
                    },
                    dropdown: {
                        bgColor: 'bg-slate-900',
                        borderColor: 'border-slate-800',
                        shadow: 'shadow-xl',
                        padding: 'p-3',
                        gap: 'gap-1',
                    },
                    accountManagement: {
                        dividerColor: 'border-slate-700',
                        loginButton: {
                            textColor: 'text-blue-400',
                            hoverTextColor: 'hover:text-blue-300',
                            hoverBgColor: 'hover:bg-slate-800',
                            fontSize: 'text-sm',
                            fontWeight: 'font-medium',
                            padding: 'px-4 py-2',
                            rounded: 'rounded-lg',
                            animation: 'hover:scale-105 transition-all duration-200',
                        },
                        avatar: {
                            size: 'w-9 h-9',
                            rounded: 'rounded-full',
                            border: 'border-2 border-blue-500',
                            shadow: 'shadow-md shadow-blue-500/30',
                            animation: 'hover:scale-110 hover:border-blue-400 transition-all duration-200',
                        },
                        avatarFallback: {
                            bgColor: 'bg-blue-600',
                            textColor: 'text-white',
                            fontSize: 'text-sm',
                            fontWeight: 'font-bold',
                        },
                        userName: {
                            textColor: 'text-slate-200',
                            fontSize: 'text-sm',
                            fontWeight: 'font-medium',
                        },
                        logoutButton: {
                            textColor: 'text-slate-400',
                            hoverTextColor: 'hover:text-red-400',
                            fontSize: 'text-xs',
                            animation: 'hover:scale-105 transition-all duration-200',
                        },
                    },
                }}
            />

            <div className="flex flex-1">
                {/* Sidebar: Secondary background, onSecondary text */}
                <aside className="w-56 bg-primary text-white flex flex-col p-4 space-y-2 hidden lg:flex">
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
                                            onClick: () => alert('Error'),
                                        },
                                    },
                                    {
                                        content: 'Share',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'danger',
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
                                            onClick: () => alert('Share'),
                                        },
                                    },
                                    {
                                        content: 'Share',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'danger',
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
                                            onClick: () => alert('Share'),
                                        },
                                    },
                                    {
                                        content: 'Share',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'danger',
                                            onClick: () => alert('Share'),
                                        },
                                    },
                                    {
                                        content: 'Share',
                                        variant: {
                                            color: 'text-accent',
                                            variant: 'danger',
                                            onClick: () => alert('Share'),
                                        },
                                    },
                                ]}
                            />
                            <Card
                                title="Status Card"
                                description="Card with success status border and text."
                                variant="status"
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

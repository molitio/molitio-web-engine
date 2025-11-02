"use client";
import React from 'react';
import { Button } from '../../../packages-ui/mwe-ui-core/src/ui-interactive/index';

export default function Home() {
    return (
        <div className="min-h-screen bg-tertiary flex flex-col text-primary">
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
                    <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-primary font-bold shadow border border-gray-300">
                        N
                    </div>
                </div>
                {/* Mobile Menu Button */}
                <button className="md:hidden ml-4 p-2 rounded bg-secondary text-white">
                    <span className="material-icons">menu</span>
                </button>
            </nav>

            <div className="flex flex-1">
                {/* Sidebar: Secondary background, onSecondary text */}
                <aside className="w-56 bg-secondary text-white flex flex-col p-4 space-y-2">
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
                            <Button children="Primary" variant='primary' rounded='sm' size='sm'/>
                            {/* Secondary Button */}
                            <Button children="Secondary" variant='secondary' rounded='sm' size='sm'/>
                            {/* Outlined Button */}
                            <Button children="Outlined" variant='outlined' rounded='sm' size='sm'/>
                            {/* Text Button */}
                            <Button children="Text" variant='text' rounded='sm' size='sm'/>
                            {/* Danger Button */}
                            <Button
                                children="Danger"
                                variant="danger"
                                rounded="sm"
                                size="sm"
                                disabled={true}
                            />
                            {/* Icon start Button */}
                            <Button startIcon={<span className="material-icons">star</span>} children="Icon" variant='primary' size='md' rounded='lg' fullWidth={false} />
                            {/* Icon end Button */}
                            <Button endIcon={<span className="material-icons">star</span>} children="Icon" variant='primary' size='md' rounded='lg' fullWidth={false} />
                            {/* Disabled Button */}
                            <Button children="Disabled" variant='primary' size='md' rounded='lg' fullWidth={false} disabled={true} />
                            {/* Loading Button */}
                            <Button
                                children="gomb"
                                variant='primary'
                                size='md' 
                                fullWidth={false}
                                rounded={'lg'}
                                loading={true}
                                onClick={() => alert('Gombra kattintottál!')}
                            />
                            {/* Full width Button */}
                            <Button children="Full Width" variant="primary" size="md" rounded="lg" fullWidth={true} />
                        </div>
                    </section>

                    {/* Section: Cards */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Cards Showcase</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Default Card */}
                            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                                <h3 className="font-semibold text-lg text-primary mb-2">Default Card</h3>
                                <p className="text-secondary mb-4">
                                    This is a default card with primary and secondary text.
                                </p>
                                <button className="bg-primary text-white px-3 py-1 rounded hover:bg-primary/80 transition">
                                    Primary Action
                                </button>
                            </div>
                            {/* Accent Card */}
                            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-accent">
                                <h3 className="font-semibold text-lg text-accent mb-2">Accent Card</h3>
                                <p className="text-secondary mb-4">Accent border and text color.</p>
                                <button className="bg-accent text-white px-3 py-1 rounded hover:bg-accent/80 transition">
                                    Accent Action
                                </button>
                            </div>
                            {/* Muted Card */}
                            <div className="bg-muted rounded-lg shadow-inner p-6 border border-gray-300">
                                <h3 className="font-semibold text-lg text-primary mb-2">Muted Card</h3>
                                <p className="text-secondary mb-4">Muted background and secondary text.</p>
                                <button className="bg-secondary text-white px-3 py-1 rounded hover:bg-primary transition">
                                    Secondary Action
                                </button>
                            </div>
                            {/* Card with Image */}
                            <div className="bg-white rounded-lg shadow-lg p-0 border border-gray-200 flex flex-col">
                                <img
                                    src="https://source.unsplash.com/random/400x200"
                                    alt="Random"
                                    className="rounded-t-lg object-cover h-32 w-full"
                                />
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="font-semibold text-lg text-primary mb-2">Image Card</h3>
                                    <p className="text-secondary mb-4">Card with image header.</p>
                                    <button className="bg-primary text-white px-3 py-1 rounded hover:bg-accent transition">
                                        View
                                    </button>
                                </div>
                            </div>
                            {/* Card with Icon */}
                            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col items-center">
                                <span className="material-icons text-accent text-3xl mb-2">star</span>
                                <h3 className="font-semibold text-lg text-primary mb-2">Icon Card</h3>
                                <p className="text-secondary mb-4">Card with icon and action.</p>
                                <button className="bg-accent text-white px-3 py-1 rounded hover:bg-accent/80 transition">
                                    Favorite
                                </button>
                            </div>
                            {/* Card with Actions */}
                            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
                                <h3 className="font-semibold text-lg text-primary mb-2">Actions Card</h3>
                                <p className="text-secondary mb-4">Card with multiple actions.</p>
                                <div className="flex gap-2">
                                    <button className="bg-primary text-white px-3 py-1 rounded hover:bg-primary/80 transition">
                                        Save
                                    </button>
                                    <button className="bg-accent text-white px-3 py-1 rounded hover:bg-accent/80 transition">
                                        Share
                                    </button>
                                </div>
                            </div>
                            {/* Card with Status */}
                            <div className="bg-white rounded-lg shadow-lg p-6 border border-success">
                                <h3 className="font-semibold text-lg text-success mb-2">Status Card</h3>
                                <p className="text-secondary mb-4">Card with success status border and text.</p>
                                <button className="bg-success text-white px-3 py-1 rounded hover:bg-success/80 transition">
                                    Success
                                </button>
                            </div>
                        </div>
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

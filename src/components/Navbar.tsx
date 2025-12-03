    "use client";

    import Link from "next/link";
    import Image from "next/image";
    import { useState } from "react";

    export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="w-full bg-white">
        {/* Top Header Bar */}
        <div className="bg-orange-500 text-white py-2 px-4 text-xs md:text-sm hidden md:block">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div className="text-xs lg:text-sm">
                <span>
                JL.pahlawan GG.1 Rejoagung Kedungwaru Tulungagung Jawa Timur
                </span>
            </div>
            <div className="flex items-center gap-3 lg:gap-6 text-xs lg:text-sm">
                <span className="font-semibold">0878-6257-0428</span>
                <span className="hidden lg:inline">tulungagungmusikschool@gmail.com</span>
                <button className="bg-white text-orange-500 px-3 py-1 rounded font-semibold hover:bg-gray-100 transition text-xs">
                Hubungi kami
                </button>
            </div>
            </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <Image
                src="/logoAM.png"
                alt="TMS Logo"
                width={150}
                height={150}
                className="h-12 md:h-16 w-auto"
                />
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
                <Link
                href="/"
                className="text-gray-800 hover:text-orange-600 transition font-medium"
                >
                Home
                </Link>
                <Link
                href="/company-profile"
                className="text-gray-800 hover:text-orange-600 transition font-medium"
                >
                Company Profile
                </Link>
                <Link
                href="/price-list"
                className="text-gray-800 hover:text-orange-600 transition font-medium"
                >
                Price List
                </Link>

                {/* Gallery Dropdown */}
                <div className="relative">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-gray-800 hover:text-orange-500 transition font-medium flex items-center gap-1"
                >
                    Gallery
                    <svg
                    className={`w-4 h-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                    </svg>
                </button>
                {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                    <Link
                        href="/gallery/photos"
                        className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition"
                    >
                        Photo Gallery
                    </Link>
                    <Link
                        href="/gallery/videos"
                        className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition"
                    >
                        Video Gallery
                    </Link>
                    </div>
                )}
                </div>

                <Link
                href="/contact"
                className="text-gray-800 hover:text-orange-400 transition font-medium"
                >
                Contact
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
            >
                <span className="w-6 h-0.5 bg-gray-800 transition-all"></span>
                <span className="w-6 h-0.5 bg-gray-800 transition-all"></span>
                <span className="w-6 h-0.5 bg-gray-800 transition-all"></span>
            </button>
            </div>

            {/* Mobile Menu */}
            {isDropdownOpen && (
            <div className="lg:hidden border-t border-gray-200">
                <div className="py-4 space-y-2">
                <Link
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition font-medium"
                    onClick={() => setIsDropdownOpen(false)}
                >
                    Home
                </Link>
                <Link
                    href="/company-profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition font-medium"
                    onClick={() => setIsDropdownOpen(false)}
                >
                    Company Profile
                </Link>
                <Link
                    href="/price-list"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition font-medium"
                    onClick={() => setIsDropdownOpen(false)}
                >
                    Price List
                </Link>
                <div className="px-4 py-2">
                    <p className="text-sm font-semibold text-gray-600 mb-2">Gallery</p>
                    <Link
                    href="/gallery/photos"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition"
                    onClick={() => setIsDropdownOpen(false)}
                    >
                    Photo Gallery
                    </Link>
                    <Link
                    href="/gallery/videos"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition"
                    onClick={() => setIsDropdownOpen(false)}
                    >
                    Video Gallery
                    </Link>
                </div>
                <Link
                    href="/contact"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition font-medium"
                    onClick={() => setIsDropdownOpen(false)}
                >
                    Contact
                </Link>
                </div>
            </div>
            )}
        </nav>
        </div>
    );
    }

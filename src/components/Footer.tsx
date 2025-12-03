    'use client';

    import Link from 'next/link';
    import Image from 'next/image';
    import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Music } from 'lucide-react';

    export default function Footer() {
    return (
        <footer className="w-full bg-linear-to-b from-gray-900 to-gray-950 text-white">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            {/* Company Info */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                <Image
                    src="/logoAM.png"
                    alt="Arya Musica Logo"
                    width={120}
                    height={120}
                    className="h-16 w-auto brightness-0 invert"
                />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                Arya Musica - Tulungagung Music School adalah tempat terbaik untuk belajar musik dengan pengajar profesional dan fasilitas modern.
                </p>
                <div className="flex items-center gap-3 pt-2">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300"
                >
                    <Facebook className="w-5 h-5" />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300"
                >
                    <Instagram className="w-5 h-5" />
                </a>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300"
                >
                    <Youtube className="w-5 h-5" />
                </a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="text-lg font-bold mb-4 text-orange-500">Menu</h3>
                <ul className="space-y-3">
                <li>
                    <Link
                    href="/"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2"
                    >
                    <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                    Home
                    </Link>
                </li>
                <li>
                    <Link
                    href="/company-profile"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2"
                    >
                    <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                    Company Profile
                    </Link>
                </li>
                <li>
                    <Link
                    href="/price-list"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2"
                    >
                    <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                    Price List
                    </Link>
                </li>
                <li>
                    <Link
                    href="/contact"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2"
                    >
                    <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                    Contact
                    </Link>
                </li>
                </ul>
            </div>

            {/* Programs */}
            <div>
                <h3 className="text-lg font-bold mb-4 text-orange-500">Program Kelas</h3>
                <ul className="space-y-3">
                <li className="text-gray-400 text-sm flex items-center gap-2">
                    <Music className="w-4 h-4 text-orange-500" />
                    Hobby Class
                </li>
                <li className="text-gray-400 text-sm flex items-center gap-2">
                    <Music className="w-4 h-4 text-orange-500" />
                    Online Class
                </li>
                <li className="text-gray-400 text-sm flex items-center gap-2">
                    <Music className="w-4 h-4 text-orange-500" />
                    Home Course
                </li>
                <li className="text-gray-400 text-sm flex items-center gap-2">
                    <Music className="w-4 h-4 text-orange-500" />
                    Private Class
                </li>
                <li className="text-gray-400 text-sm flex items-center gap-2">
                    <Music className="w-4 h-4 text-orange-500" />
                    Digital Producing & Recording
                </li>
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h3 className="text-lg font-bold mb-4 text-orange-500">Hubungi Kami</h3>
                <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-400 leading-relaxed">
                    JL. Pahlawan GG.1 Rejoagung Kedungwaru Tulungagung, Jawa Timur
                    </span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                    <a
                    href="tel:087862570428"
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300"
                    >
                    0878-6257-0428
                    </a>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                    <a
                    href="mailto:tulungagungmusikschool@gmail.com"
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300 break-all"
                    >
                    tulungagungmusikschool@gmail.com
                    </a>
                </li>
                </ul>

                {/* CTA Button */}
                <a
                href="https://wa.me/6287862570428"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm"
                >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat WhatsApp
                </a>
            </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Arya Musica - Tulungagung Music School. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                <Link
                    href="/privacy"
                    className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300"
                >
                    Privacy Policy
                </Link>
                <Link
                    href="/terms"
                    className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300"
                >
                    Terms of Service
                </Link>
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
    }

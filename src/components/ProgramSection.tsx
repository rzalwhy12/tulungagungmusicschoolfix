            'use client';

            import React from 'react';
            import { Music, Laptop, Home, Users } from 'lucide-react';

        const programs = [
        {
            icon: Music,
            title: 'Arya Musica Hobby Class',
            description: 'Kelas tatap muka untuk dewasa yang ingin belajar musik santai tanpa target ujian. Materi fleksibel sesuai minat siswa.',
            price: 'Rp 250.000',
            meetings: '4x Pertemuan',
            duration: '45 Menit',
            color: 'bg-orange-500'
        },
        {
            icon: Laptop,
            title: 'Arya Musica Online Class',
            description: 'Belajar musik dari rumah menggunakan Zoom atau Skype. Siswa wajib memiliki alat musik sendiri, tetap dibimbing oleh instruktur profesional.',
            price: 'Rp 300.000',
            meetings: '4x Pertemuan',
            duration: '45 Menit',
            color: 'bg-orange-500'
        },
        {
            icon: Home,
            title: 'Arya Musica Home Course',
            description: 'Instruktur datang ke rumah siswa untuk kelas tatap muka lebih personal dan nyaman. Siswa wajib memiliki alat musik sendiri.',
            price: 'Rp 450.000',
            meetings: '4x Pertemuan',
            duration: '45 Menit',
            color: 'bg-orange-500'
        },
        {
            icon: Users,
            title: 'Arya Musica Private Class',
            description: 'Belajar musik dengan sistem engineering dan arrangement profesional untuk yang serius mengembangkan karir musik.',
            price: 'Rp 250.000',
            meetings: '4x Pertemuan',
            duration: '60 Menit',
            color: 'bg-orange-500'
        }
        ];    export default function ProgramSection() {
            return (
                <section className="w-full bg-linear-to-b from-white to-gray-50 py-16 md:py-24">
                <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                <p className="text-orange-500 font-semibold mb-3 text-sm">
                    Program Arya Musica - Tulungagung Music School
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-900">
                    Belajar Musik Sesuai Gaya & Kebutuhan Anda
                </h2>
                <p className="text-sm text-gray-600 max-w-4xl mx-auto mb-6">
                    Arya Musica - Tulungagung Music School menghadirkan berbagai kelas mulai dari privat, hobi, online, home course, hingga digital producing & recording. Semua dirancang fleksibel dengan pengajar profesional agar setiap siswa bisa berkembang sesuai tujuan belajarnya.
                </p>                {/* Price & Benefits */}
                    <div className="mb-4">
                        <p className="text-gray-700 text-base mb-2">
                        Biaya Pendaftaran: <span className="text-orange-500 font-bold text-xl">Rp 100.000,-</span>
                        </p>
                        <p className="text-sm text-gray-600">
                        <span className="font-semibold">FREE</span> Kaos Eksklusif, <span className="font-semibold">FREE</span> Totbag Eksklusif, <span className="font-semibold">FREE</span> Buku Perkembangan Siswa
                        </p>
                    </div>
                    </div>

                    {/* Program Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {programs.map((program, index) => {
                        const Icon = program.icon;
                        return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                        {/* Card Header with Icon */}
                        <div className="p-6 pb-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{program.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed min-h-20">
                            {program.description}
                        </p>
                        </div>

                        {/* Divider */}
                        <div className="px-6">
                        <div className="h-px bg-orange-500"></div>
                        </div>                    {/* Pricing Details */}
                            <div className="p-6 pt-4 space-y-3 grow">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Harga</span>
                                <span className="text-base font-bold text-gray-900">{program.price}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Total Pertemuan</span>
                                <span className="text-sm font-semibold text-gray-900">{program.meetings}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Durasi Pertemuan</span>
                                <span className="text-sm font-semibold text-gray-900">{program.duration}</span>
                            </div>
                            </div>

                            {/* CTA Button */}
                            <div className="p-6 pt-0">
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-colors duration-300 flex items-center justify-center gap-2">
                                Hubungi Kami
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </button>
                            </div>
                        </div>
                        );
                    })}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center">
                    <div className="inline-block bg-linear-to-r from-orange-500 via-orange-600 to-orange-500 h-1 w-full max-w-4xl mb-6"></div>
                    <p className="text-sm text-gray-700">
                        Dapatkan promo <span className="text-orange-500 font-bold">FREE TRIAL</span> dan Diskon Spesial hanya untuk yang <span className="text-orange-500 font-bold">klik tombol WA!</span>
                    </p>
                    </div>
                </div>
                </section>
            );
            }

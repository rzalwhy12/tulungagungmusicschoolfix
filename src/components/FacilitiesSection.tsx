    'use client';

    import React, { useState } from 'react';
    import Image from 'next/image';
    import { ChevronDown, ChevronUp } from 'lucide-react';

    const facilities = [
    {
        title: 'Concert, Grand Concert, Competition, I-Best',
        description: 'Siswa berkesempatan tampil di berbagai acara konser dan kompetisi untuk mengasah kemampuan perform di depan publik.',
        image: '/images/concert.jpg'
    },
    {
        title: 'Konser di Mall',
        description: 'Program konser reguler di mall memberikan pengalaman tampil di lingkungan publik yang ramai dan dinamis.',
        image: '/images/mall-concert.jpg'
    },
    {
        title: 'Ruang Kelas Nyaman & Ber-AC',
        description: 'Lingkungan belajar yang nyaman membuat siswa lebih fokus dan betah belajar musik.',
        image: '/images/classroom.jpg',
        isActive: true
    },
    {
        title: 'Media Pembelajaran Digital',
        description: 'Teknologi pembelajaran modern membantu siswa memahami materi musik dengan lebih mudah dan interaktif.',
        image: '/images/digital-learning.jpg'
    },
    {
        title: 'Ujian, Video & Sertifikat',
        description: 'Sistem evaluasi terstruktur dengan ujian berkala, dokumentasi video, dan sertifikat resmi untuk setiap pencapaian.',
        image: '/images/certificate.jpg'
    },
    {
        title: 'Ruang Tunggu Nyaman',
        description: 'Ruang tunggu yang nyaman untuk orang tua sambil menunggu anak-anak belajar musik.',
        image: '/images/waiting-room.jpg'
    },
    {
        title: 'Video Cover untuk Youtuber',
        description: 'Fasilitas recording dan produksi video cover untuk siswa yang ingin mengembangkan konten musik digital.',
        image: '/images/video-cover.jpg'
    },
    {
        title: 'Ruang Kelas Gratis di Luar Jam Kursus',
        description: 'Siswa dapat menggunakan ruang kelas untuk latihan mandiri di luar jam kursus tanpa biaya tambahan.',
        image: '/images/practice-room.jpg'
    },
    {
        title: 'Pembentukan Grup Band',
        description: 'Program pembentukan band untuk siswa yang ingin belajar bermain musik secara kolaboratif dalam grup.',
        image: '/images/band.jpg'
    }
    ];

    export default function FacilitiesSection() {
    const [activeIndex, setActiveIndex] = useState(2); // Default: Ruang Kelas Nyaman & Ber-AC

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="w-full bg-linear-to-b from-gray-100 to-white py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
            <p className="text-orange-600 font-semibold mb-3 text-sm">
                Fasilitas Arya Musica - Tulungagung Music School
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-900">
                Belajar Musik Nyaman dengan Dukungan Sarana Profesional
            </h2>
            <p className="text-sm text-gray-600 max-w-4xl mx-auto">
                Arya Musica - Tulungagung Music School menyediakan fasilitas modern yang mendukung proses belajar siswa. Mulai dari ruang kelas yang nyaman, alat musik lengkap dan terawat, hingga studio untuk latihan dan recording. Setiap fasilitas dirancang agar siswa bisa fokus belajar, berlatih, dan mengekspresikan kreativitas musiknya dengan maksimal.
            </p>
            </div>

            {/* Content: Image & Accordion */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Image */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                src={facilities[activeIndex]?.image || '/images/classroom.jpg'}
                alt={facilities[activeIndex]?.title || 'Facility'}
                fill
                className="object-cover transition-all duration-500"
                priority
                />
            </div>

            {/* Right: Accordion List */}
            <div className="space-y-3">
                {facilities.map((facility, index) => (
                <div
                    key={index}
                    className={`border-b border-gray-300 transition-all duration-300 ${
                    activeIndex === index ? 'bg-white rounded-lg shadow-lg' : ''
                    }`}
                >
                    <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full flex items-center justify-between p-4 text-left transition-colors duration-300 ${
                        activeIndex === index
                        ? 'text-orange-600 font-bold'
                        : 'text-gray-700 font-semibold hover:text-gray-900'
                    }`}
                    >
                    <span className="text-base md:text-lg">{facility.title}</span>
                    {activeIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-orange-600 shrink-0" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                    )}
                    </button>
                    
                    {activeIndex === index && (
                    <div className="px-4 pb-4 text-sm text-gray-600 animate-fadeIn">
                        {facility.description}
                    </div>
                    )}
                </div>
                ))}
            </div>
            </div>
        </div>

        <style jsx>{`
            @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
            }
            .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
            }
        `}</style>
        </section>
    );
    }

    'use client';

    import { useState } from 'react';
    import Image from 'next/image';
    import Link from 'next/link';
    import { X, ZoomIn, Calendar, Users, Music, Award, Camera } from 'lucide-react';

    // Data kategori foto
    const categories = [
    'Semua',
    'Kelas & Pembelajaran',
    'Konser & Pertunjukan',
    'Kompetisi',
    'Fasilitas',
    'Student Activities',
    ];

    // Data foto galeri
    const photos = [
    {
        id: 1,
        src: '/images/gallery/class-1.jpg',
        alt: 'Kelas Piano',
        title: 'Kelas Piano Privat',
        category: 'Kelas & Pembelajaran',
        date: '15 November 2025',
        description: 'Suasana pembelajaran piano di ruang kelas yang nyaman',
    },
    {
        id: 2,
        src: '/images/gallery/concert-1.jpg',
        alt: 'Konser Mall',
        title: 'Konser di Hartono Mall',
        category: 'Konser & Pertunjukan',
        date: '10 Oktober 2025',
        description: 'Penampilan siswa di konser mall yang meriah',
    },
    {
        id: 3,
        src: '/images/gallery/competition-1.jpg',
        alt: 'Kompetisi Musik',
        title: 'Juara 1 Kompetisi Regional',
        category: 'Kompetisi',
        date: '5 September 2025',
        description: 'Siswa kami meraih juara 1 di kompetisi musik regional',
    },
    {
        id: 4,
        src: '/images/gallery/facility-1.jpg',
        alt: 'Studio Recording',
        title: 'Studio Recording Profesional',
        category: 'Fasilitas',
        date: '1 Agustus 2025',
        description: 'Fasilitas studio recording dengan peralatan modern',
    },
    {
        id: 5,
        src: '/images/gallery/class-2.jpg',
        alt: 'Kelas Drum',
        title: 'Sesi Latihan Drum',
        category: 'Kelas & Pembelajaran',
        date: '20 Juli 2025',
        description: 'Pembelajaran teknik drum dengan instruktur berpengalaman',
    },
    {
        id: 6,
        src: '/images/gallery/concert-2.jpg',
        alt: 'Grand Concert',
        title: 'Grand Concert Tahunan',
        category: 'Konser & Pertunjukan',
        date: '15 Juni 2025',
        description: 'Konser besar tahunan dengan 100+ siswa tampil',
    },
    {
        id: 7,
        src: '/images/gallery/activity-1.jpg',
        alt: 'Latihan Band',
        title: 'Formasi Band Siswa',
        category: 'Student Activities',
        date: '10 Mei 2025',
        description: 'Siswa berlatih bersama dalam formasi band',
    },
    {
        id: 8,
        src: '/images/gallery/competition-2.jpg',
        alt: 'Festival Musik',
        title: 'Best Performance Award',
        category: 'Kompetisi',
        date: '5 April 2025',
        description: 'Penghargaan best performance di festival musik',
    },
    {
        id: 9,
        src: '/images/gallery/class-3.jpg',
        alt: 'Kelas Gitar',
        title: 'Pembelajaran Gitar Elektrik',
        category: 'Kelas & Pembelajaran',
        date: '20 Maret 2025',
        description: 'Teknik bermain gitar elektrik untuk pemula',
    },
    {
        id: 10,
        src: '/images/gallery/facility-2.jpg',
        alt: 'Ruang Kelas',
        title: 'Ruang Kelas Ber-AC',
        category: 'Fasilitas',
        date: '15 Februari 2025',
        description: 'Ruang kelas nyaman dengan AC dan soundproof',
    },
    {
        id: 11,
        src: '/images/gallery/activity-2.jpg',
        alt: 'Grup Vokal',
        title: 'Latihan Vokal Grup',
        category: 'Student Activities',
        date: '10 Januari 2025',
        description: 'Siswa berlatih harmoni vokal dalam grup',
    },
    {
        id: 12,
        src: '/images/gallery/concert-3.jpg',
        alt: 'Penampilan Solo',
        title: 'Solo Performance',
        category: 'Konser & Pertunjukan',
        date: '25 Desember 2024',
        description: 'Penampilan solo piano di konser akhir tahun',
    },
    ];

    export default function PhotoGalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

    // Filter foto berdasarkan kategori
    const filteredPhotos =
        selectedCategory === 'Semua'
        ? photos
        : photos.filter((photo) => photo.category === selectedCategory);

    return (
        <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] bg-linear-to-r from-orange-600 to-orange-800">
            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-full flex flex-col justify-center items-center text-center">
            <Camera className="w-16 h-16 text-white mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Galeri Foto
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6">
                Momen-momen berharga dari perjalanan musik siswa Arya Musica
            </p>
            <div className="mt-2 flex items-center gap-2 text-white/80">
                <Link href="/" className="hover:text-white transition">
                Home
                </Link>
                <span>/</span>
                <span>Gallery</span>
                <span>/</span>
                <span>Photos</span>
            </div>
            </div>
        </section>

        {/* Stats Section */}
        <section className="w-full bg-white py-8 border-b">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                <Camera className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{photos.length}+</p>
                <p className="text-sm text-gray-600">Foto Koleksi</p>
                </div>
                <div>
                <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Siswa Aktif</p>
                </div>
                <div>
                <Music className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-600">Event Diikuti</p>
                </div>
                <div>
                <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">100+</p>
                <p className="text-sm text-gray-600">Prestasi Diraih</p>
                </div>
            </div>
            </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full bg-linear-to-b from-gray-50 to-white py-16 md:py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16">
            {/* Category Filter */}
            <div className="mb-12">
                <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                    <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        selectedCategory === category
                        ? 'bg-orange-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                    }`}
                    >
                    {category}
                    </button>
                ))}
                </div>
                <p className="text-center mt-6 text-gray-600">
                Menampilkan <span className="font-bold text-orange-600">{filteredPhotos.length}</span>{' '}
                foto
                </p>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredPhotos.map((photo) => (
                <div
                    key={photo.id}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedPhoto(photo)}
                >
                    {/* Image Container */}
                    <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="w-12 h-12 text-white" />
                        </div>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {photo.category}
                    </div>
                    </div>

                    {/* Photo Info */}
                    <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {photo.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{photo.date}</span>
                    </div>
                    </div>
                </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredPhotos.length === 0 && (
                <div className="text-center py-16">
                <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-600 mb-2">Tidak ada foto di kategori ini</p>
                <p className="text-gray-500">Coba pilih kategori lain</p>
                </div>
            )}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-linear-to-r from-orange-600 to-orange-800 py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <Music className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ingin Menjadi Bagian dari Cerita Kami?
            </h2>
            <p className="text-lg text-white/90 mb-8">
                Bergabunglah dengan Arya Musica dan ciptakan momen berharga Anda sendiri!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                href="/price-list"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition duration-300"
                >
                Lihat Program Kelas
                </Link>
                <a
                href="https://wa.me/6287862570428"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition duration-300"
                >
                Hubungi Kami
                </a>
            </div>
            </div>
        </section>

        {/* Lightbox Modal */}
        {selectedPhoto && (
            <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
            >
            <button
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                onClick={() => setSelectedPhoto(null)}
            >
                <X className="w-6 h-6" />
            </button>

            <div
                className="max-w-6xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Image */}
                <div className="lg:col-span-2 relative h-96 lg:h-auto bg-gray-200">
                    <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    fill
                    className="object-cover"
                    />
                </div>

                {/* Info */}
                <div className="p-6 lg:p-8 flex flex-col">
                    <div className="mb-4">
                    <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {selectedPhoto.category}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedPhoto.title}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedPhoto.date}</span>
                    </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">{selectedPhoto.description}</p>

                    <div className="mt-auto">
                    <a
                        href="https://wa.me/6287862570428"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-full transition-colors duration-300"
                    >
                        Daftar Sekarang
                        <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )}
        </main>
    );
    }

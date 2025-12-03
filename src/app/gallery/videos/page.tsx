    'use client';

    import { useState } from 'react';
    import Link from 'next/link';
    import { X, Play, Calendar, Eye, Music, Award, Video } from 'lucide-react';

    // Data kategori video
    const categories = [
    'Semua',
    'Konser & Pertunjukan',
    'Kompetisi',
    'Tutorial & Tips',
    'Student Cover',
    'Behind The Scenes',
    ];

    // Data video galeri
    const videos = [
    {
        id: 1,
        videoId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Grand Concert 2025 - Full Performance',
        category: 'Konser & Pertunjukan',
        date: '15 November 2025',
        views: '12.5K',
        duration: '45:30',
        description:
        'Rekaman lengkap grand concert tahunan 2025 dengan penampilan dari lebih 100 siswa. Menampilkan berbagai genre musik dari klasik hingga modern.',
    },
    {
        id: 2,
        videoId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Juara 1 Kompetisi Piano Regional Jawa Timur',
        category: 'Kompetisi',
        date: '5 Oktober 2025',
        views: '8.2K',
        duration: '12:45',
        description:
        'Penampilan memukau siswa kami yang berhasil meraih juara 1 di kompetisi piano tingkat regional Jawa Timur.',
    },
    {
        id: 3,
        videoId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Tutorial: Teknik Fingering Piano untuk Pemula',
        category: 'Tutorial & Tips',
        date: '20 September 2025',
        views: '15.3K',
        duration: '18:20',
        description:
        'Instruktur profesional kami berbagi tips dan teknik fingering piano yang tepat untuk pemula agar cepat mahir.',
    },
    {
        id: 4,
        videoId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Student Cover: "Bohemian Rhapsody" - Band Formation',
        category: 'Student Cover',
        date: '10 Agustus 2025',
        views: '25.7K',
        duration: '6:15',
        description:
        'Cover luar biasa dari lagu legendaris Bohemian Rhapsody oleh formasi band siswa kami. Penuh emosi dan teknik tinggi!',
    },
    {
        id: 5,
        videoId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Behind The Scenes: Persiapan Grand Concert',
        category: 'Behind The Scenes',
        date: '1 Agustus 2025',
        views: '5.8K',
        duration: '22:10',
        description:
        'Lihat proses persiapan intensif menjelang grand concert. Dari latihan hingga soundcheck, semua ada di sini!',
    },
    {
        id: 6,
        videoId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Konser Mall: Pertunjukan Gitar Akustik',
        category: 'Konser & Pertunjukan',
        date: '15 Juli 2025',
        views: '10.4K',
        duration: '8:45',
        description:
        'Penampilan solo gitar akustik yang memukau di konser mall. Suasana intimate dengan teknik fingerstyle yang memukau.',
    },
    {
        id: 7,
        videoId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Best Performance Award - Festival Musik Nasional',
        category: 'Kompetisi',
        date: '5 Juni 2025',
        views: '18.9K',
        duration: '10:30',
        description:
        'Momen bersejarah saat siswa kami meraih Best Performance Award di festival musik tingkat nasional.',
    },
    {
        id: 8,
        videoId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Tutorial: Chord Progressions untuk Songwriter',
        category: 'Tutorial & Tips',
        date: '20 Mei 2025',
        views: '22.1K',
        duration: '25:15',
        description:
        'Pelajari chord progressions yang populer dan efektif untuk menciptakan lagu sendiri. Cocok untuk songwriter pemula.',
    },
    {
        id: 9,
        videoId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Student Cover: "Shape of You" - Drum Solo',
        category: 'Student Cover',
        date: '10 April 2025',
        views: '14.6K',
        duration: '4:30',
        description:
        'Drum cover energik dari lagu Shape of You dengan improvisasi solo yang menakjubkan.',
    },
    {
        id: 10,
        videoId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Orchestra Performance: Musik Klasik Indonesia',
        category: 'Konser & Pertunjukan',
        date: '25 Maret 2025',
        views: '9.3K',
        duration: '35:20',
        description:
        'Penampilan orkestra dengan aransemen musik klasik Indonesia yang indah dan menyentuh.',
    },
    {
        id: 11,
        videoId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Behind The Scenes: Studio Recording Session',
        category: 'Behind The Scenes',
        date: '10 Februari 2025',
        views: '7.2K',
        duration: '15:40',
        description:
        'Ikuti proses recording original song di studio profesional kami. Dari vocal take hingga mixing!',
    },
    {
        id: 12,
        videoId: 'dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Student Cover Medley: Hits Indonesia',
        category: 'Student Cover',
        date: '1 Januari 2025',
        views: '31.5K',
        duration: '12:00',
        description:
        'Medley lagu-lagu hits Indonesia yang dibawakan oleh siswa dengan aransemen segar dan menarik.',
    },
    ];

    export default function VideoGalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null);

    // Filter video berdasarkan kategori
    const filteredVideos =
        selectedCategory === 'Semua'
        ? videos
        : videos.filter((video) => video.category === selectedCategory);

    return (
        <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] bg-linear-to-r from-orange-600 to-orange-800">
            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-full flex flex-col justify-center items-center text-center">
            <Video className="w-16 h-16 text-white mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Galeri Video
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6">
                Koleksi video konser, kompetisi, dan momen spesial dari siswa Arya Musica
            </p>
            <div className="mt-2 flex items-center gap-2 text-white/80">
                <Link href="/" className="hover:text-white transition">
                Home
                </Link>
                <span>/</span>
                <span>Gallery</span>
                <span>/</span>
                <span>Videos</span>
            </div>
            </div>
        </section>

        {/* Stats Section */}
        <section className="w-full bg-white py-8 border-b">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                <Video className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{videos.length}+</p>
                <p className="text-sm text-gray-600">Video Koleksi</p>
                </div>
                <div>
                <Eye className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">180K+</p>
                <p className="text-sm text-gray-600">Total Views</p>
                </div>
                <div>
                <Music className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-600">Konser & Event</p>
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
        <section className="w-full bg-linear-to-brom-gray-50 to-white py-16 md:py-24">
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
                Menampilkan{' '}
                <span className="font-bold text-orange-600">{filteredVideos.length}</span> video
                </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video) => (
                <div
                    key={video.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                >
                    {/* Thumbnail Container */}
                    <div className="relative h-56 bg-gray-200 overflow-hidden">
                    <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        </div>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded">
                        {video.duration}
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {video.category}
                    </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                        {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{video.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>{video.views}</span>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredVideos.length === 0 && (
                <div className="text-center py-16">
                <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-600 mb-2">Tidak ada video di kategori ini</p>
                <p className="text-gray-500">Coba pilih kategori lain</p>
                </div>
            )}
            </div>
        </section>

        {/* Subscribe CTA */}
        <section className="w-full bg-white py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <div className="bg-linear-to-r from-orange-600 to-orange-800 rounded-2xl p-8 md:p-12 text-white">
                <Video className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe Channel YouTube Kami</h2>
                <p className="text-lg mb-8 opacity-90">
                Jangan lewatkan video terbaru dari konser, kompetisi, dan tutorial musik!
                </p>
                <a
                href="https://youtube.com/@aryamusica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition duration-300 text-lg"
                >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Subscribe YouTube
                </a>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-linear-to-b from-gray-50 to-white py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <Music className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Siap Tampil di Video Berikutnya?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
                Bergabunglah dengan Arya Musica dan wujudkan impian musik Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                href="/price-list"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition duration-300"
                >
                Lihat Program Kelas
                </Link>
                <a
                href="https://wa.me/6287862570428"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition duration-300"
                >
                Hubungi Kami
                </a>
            </div>
            </div>
        </section>

        {/* Video Modal */}
        {selectedVideo && (
            <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
            >
            <button
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
                onClick={() => setSelectedVideo(null)}
            >
                <X className="w-6 h-6" />
            </button>

            <div
                className="max-w-6xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Video Player */}
                <div className="lg:col-span-2 bg-black aspect-video">
                    <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>

                {/* Video Info */}
                <div className="p-6 lg:p-8 flex flex-col">
                    <div className="mb-4">
                    <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {selectedVideo.category}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {selectedVideo.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedVideo.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>{selectedVideo.views} views</span>
                        </div>
                    </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">{selectedVideo.description}</p>

                    <div className="mt-auto space-y-3">
                    <a
                        href={`https://www.youtube.com/watch?v=${selectedVideo.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-colors duration-300"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        Tonton di YouTube
                    </a>
                    <a
                        href="https://wa.me/6287862570428"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-full transition-colors duration-300"
                    >
                        Daftar Sekarang
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

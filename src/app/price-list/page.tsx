    'use client';

    import Link from 'next/link';
    import { Music, Laptop, Home, Users, Check, Star, Sparkles } from 'lucide-react';

    const programs = [
    {
        icon: Music,
        title: 'Arya Musica Hobby Class',
        subtitle: 'Untuk Dewasa & Santai',
        description: 'Kelas tatap muka untuk dewasa yang ingin belajar musik santai tanpa target ujian. Materi fleksibel sesuai minat siswa.',
        price: 250000,
        meetings: '4x Pertemuan',
        duration: '45 Menit',
        features: [
        'Materi fleksibel sesuai minat',
        'Tanpa target ujian',
        'Suasana belajar santai',
        'Pengajar berpengalaman',
        'Ruang kelas ber-AC',
        ],
        popular: false,
        color: 'orange',
    },
    {
        icon: Laptop,
        title: 'Arya Musica Online Class',
        subtitle: 'Belajar dari Rumah',
        description:
        'Belajar musik dari rumah menggunakan Zoom atau Skype. Siswa wajib memiliki alat musik sendiri, tetap dibimbing oleh instruktur profesional.',
        price: 300000,
        meetings: '4x Pertemuan',
        duration: '45 Menit',
        features: [
        'Belajar via Zoom/Skype',
        'Fleksibel waktu & tempat',
        'Wajib punya alat musik',
        'Instruktur profesional',
        'Materi terstruktur',
        ],
        popular: false,
        color: 'orange',
    },
    {
        icon: Home,
        title: 'Arya Musica Home Course',
        subtitle: 'Instruktur Datang ke Rumah',
        description:
        'Instruktur datang ke rumah siswa untuk kelas tatap muka lebih personal dan nyaman. Siswa wajib memiliki alat musik sendiri.',
        price: 450000,
        meetings: '4x Pertemuan',
        duration: '45 Menit',
        features: [
        'Instruktur datang ke rumah',
        'Pembelajaran personal',
        'Wajib punya alat musik',
        'Lebih privat & nyaman',
        'Jadwal fleksibel',
        ],
        popular: true,
        color: 'orange',
    },
    {
        icon: Users,
        title: 'Arya Musica Private Class',
        subtitle: 'Profesional & Serius',
        description:
        'Belajar musik dengan sistem engineering dan arrangement profesional untuk yang serius mengembangkan karir musik.',
        price: 250000,
        meetings: '4x Pertemuan',
        duration: '60 Menit',
        features: [
        'Sistem engineering profesional',
        'Music arrangement',
        'Target karir musik',
        'Ujian & sertifikat',
        'Akses ke kompetisi & event',
        ],
        popular: false,
        color: 'orange',
    },
    ];

    const instruments = [
    'Piano & Keyboard',
    'Gitar Akustik & Elektrik',
    'Bass',
    'Drum',
    'Vokal',
    'Digital Music Production',
    ];

    export default function PriceListPage() {
    return (
        <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] bg-linear-to-r from-orange-600 to-orange-800">
            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Daftar Harga Program
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6">
                Pilih program kelas yang sesuai dengan kebutuhan dan tujuan belajar musik Anda
            </p>
            <div className="mt-2 flex items-center gap-2 text-white/80">
                <Link href="/" className="hover:text-white transition">
                Home
                </Link>
                <span>/</span>
                <span>Price List</span>
            </div>
            </div>
        </section>

        {/* Registration Fee Banner */}
        <section className="w-full bg-linear-to-r from-gray-900 to-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                <p className="text-white/80 text-sm mb-2">Biaya Pendaftaran Sekali</p>
                <p className="text-3xl md:text-4xl font-bold text-orange-500">
                    Rp 100.000,-
                </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 text-white text-sm">
                <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-orange-500" />
                    <span>
                    <strong>FREE</strong> Kaos Eksklusif
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-orange-500" />
                    <span>
                    <strong>FREE</strong> Totbag Eksklusif
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-orange-500" />
                    <span>
                    <strong>FREE</strong> Buku Perkembangan Siswa
                    </span>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Program Cards */}
        <section className="w-full bg-linear-to-b from-white to-gray-50 py-16 md:py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
                <p className="text-orange-600 font-semibold mb-3 text-sm">
                Pilihan Program Kelas
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
                Program Belajar Musik Sesuai Kebutuhan Anda
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                Semua program dilengkapi dengan instruktur profesional, materi terstruktur, dan
                kesempatan untuk tampil di berbagai event & kompetisi musik
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                    <div
                    key={index}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col relative ${
                        program.popular ? 'ring-4 ring-orange-500' : ''
                    }`}
                    >
                    {/* Popular Badge */}
                    {program.popular && (
                        <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10">
                        <Star className="w-3 h-3" />
                        POPULER
                        </div>
                    )}

                    {/* Card Header */}
                    <div className="p-6 pb-4">
                        <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {program.title}
                        </h3>
                        <p className="text-sm text-orange-600 font-semibold mb-3">
                        {program.subtitle}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed min-h-20">
                        {program.description}
                        </p>
                    </div>

                    {/* Price Section */}
                    <div className="px-6 py-4 bg-orange-50">
                        <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Harga Per Bulan</p>
                        <p className="text-3xl font-bold text-orange-600">
                            Rp {program.price.toLocaleString('id-ID')}
                        </p>
                        <div className="mt-2 flex justify-center gap-4 text-xs text-gray-600">
                            <span>• {program.meetings}</span>
                            <span>• {program.duration}</span>
                        </div>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="p-6 pt-4 space-y-2 grow">
                        {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="p-6 pt-0">
                        <a
                        href="https://wa.me/6287862570428"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-full transition-colors duration-300 flex items-center justify-center gap-2"
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
                );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center bg-linear-to-r from-orange-500 to-orange-600 rounded-2xl p-8 shadow-xl">
                <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Promo Spesial untuk Anda!
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Dapatkan <strong>FREE TRIAL</strong> dan Diskon Spesial hanya dengan klik tombol
                WhatsApp di bawah ini!
                </p>
                <a
                href="https://wa.me/6287862570428"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition duration-300 text-lg"
                >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hubungi Kami via WhatsApp
                </a>
            </div>
            </div>
        </section>

        {/* Instruments Section */}
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12">
                <p className="text-orange-600 font-semibold mb-3">Instrumen yang Tersedia</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
                Pilihan Alat Musik
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                Berbagai pilihan instrumen musik untuk Anda pelajari sesuai minat dan bakat
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {instruments.map((instrument, index) => (
                <div
                    key={index}
                    className="bg-linear-to-br from-orange-50 to-white border border-orange-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                    <Music className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">{instrument}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* FAQ / Additional Info */}
        <section className="w-full bg-linear-to-b from-gray-50 to-white py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12">
                <p className="text-orange-600 font-semibold mb-3">Informasi Tambahan</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
                Yang Perlu Anda Ketahui
                </h2>
            </div>

            <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Metode Pembayaran
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    Pembayaran dapat dilakukan secara cash atau transfer bank. Biaya pendaftaran hanya
                    dibayar sekali di awal, sedangkan biaya kursus dibayarkan per bulan.
                </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Jadwal Kelas
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    Jadwal kelas fleksibel dan dapat disesuaikan dengan kebutuhan siswa. Kami buka
                    setiap hari Senin - Minggu dengan berbagai pilihan waktu.
                </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Free Trial Class
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    Dapatkan kesempatan mencoba kelas gratis sebelum mendaftar! Hubungi kami untuk
                    jadwal free trial dan rasakan pengalaman belajar musik di Arya Musica.
                </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Kompetisi & Event
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    Siswa akan mendapatkan kesempatan untuk tampil di berbagai event seperti konser di
                    mall, kompetisi musik, dan festival. Kami membantu siswa meraih prestasi nyata!
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="w-full bg-linear-to-r from-orange-600 to-orange-800 py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Siap Memulai Perjalanan Musik Anda?
            </h2>
            <p className="text-lg text-white/90 mb-8">
                Jangan ragu untuk menghubungi kami dan dapatkan informasi lengkap tentang program yang
                sesuai untuk Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                href="https://wa.me/6287862570428"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition duration-300"
                >
                Chat WhatsApp
                </a>
                <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition duration-300"
                >
                Lihat Kontak Lengkap
                </Link>
            </div>
            </div>
        </section>
        </main>
    );
    }

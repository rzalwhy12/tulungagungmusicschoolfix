    'use client';

    import Image from 'next/image';
    import Link from 'next/link';

    export default function AboutSection() {
    return (
        <section className="w-full bg-linear-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div>
                <p className="text-orange-600 font-semibold mb-4">
                Selamat Datang di Arya Musica
                </p>
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-gray-900">
                Tempat Belajar Musik yang Menjadi Rumah Bagi Kreativitasmu
                </h2>
                <div className="space-y-4 text-gray-700 mb-8">
                <p>
                    Arya Musica - Tulungagung Musik School adalah ruang bagi siapa saja yang ingin menjadikan musik
                    sebagai bagian dari hidupnya.
                </p>
                <p>
                    Kami percaya setiap orang punya potensi musikal unik, dan dengan bimbingan yang
                    tepat, musik bisa tumbuh menjadi bahasa ekspresi yang indah.
                </p>
                <p>
                    Di Arya Musica, kami menghadirkan pengajar berpengalaman, kurikulum terarah, serta suasana
                    belajar yang nyaman dan menyenangkan.
                </p>
                <p>
                    Dari kelas privat, hobi, hingga digital music producing, semua dirancang untuk
                    mendukung perjalanan musikmu — apakah sekadar hobi atau menuju karier profesional.
                </p>
                <p className="font-semibold text-gray-900">
                    Mari bergabung dan rasakan bagaimana musik bisa membuka dunia baru dalam hidupmu.
                </p>
                </div>
                <Link
                href="/company-profile"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition duration-300"
                >
                Selengkapnya Tentang Kami
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
                </Link>
            </div>

            {/* Right Image */}
            <div className="relative">
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                    src="/fixabout.png"
                    alt="Arya Musica - Tulungagung Musik School - Students"
                    fill
                    className="object-contain"
                    priority
                />
                </div>
                
                {/* Floating Labels */}
                <div className="absolute top-1/4 left-0 md:left-0 hidden sm:block">
                <div className="bg-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg font-semibold text-xs md:text-sm whitespace-nowrap">
                    Pengajar profesional & ramah
                </div>
                </div>
                
                <div className="absolute bottom-1/4 right-0 md:right-0 hidden sm:block">
                <div className="bg-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg font-semibold text-xs md:text-sm whitespace-nowrap">
                    Metode belajar terstruktur & terkini
                </div>
                </div>
                
                <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 hidden sm:block">
                <div className="bg-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg font-semibold text-xs md:text-sm whitespace-nowrap max-w-[320px] text-center">
                    Free trial class untuk calon siswa baru
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    }

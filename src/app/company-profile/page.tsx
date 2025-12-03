    'use client';

    import Image from 'next/image';
    import Link from 'next/link';
    import { Target, Eye, Music, Award, Users, Sparkles, Heart, TrendingUp } from 'lucide-react';

    export default function CompanyProfilePage() {
    return (
        <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] bg-linear-to-r from-orange-600 to-orange-800">
            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Tentang Kami
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                Arya Musica - Tulungagung Music School
            </p>
            <div className="mt-6 flex items-center gap-2 text-white/80">
                <Link href="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span>Company Profile</span>
            </div>
            </div>
        </section>

        {/* Sejarah & Latar Belakang */}
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                <p className="text-orange-600 font-semibold mb-4">
                    Cerita Kami
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
                    Lahir dari Keresahan, Tumbuh dari Kepedulian
                </h2>
                <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                    Arya Musica - Tulungagung Music School lahir dari sebuah keresahan yang mendalam. 
                    Di tengah maraknya tempat kursus musik di Tulungagung, kami melihat ada yang hilang 
                    — <strong>tidak ada yang benar-benar menyalurkan bakat siswa ke ajang kompetisi dan 
                    event-event bergengsi</strong>.
                    </p>
                    <p className="leading-relaxed">
                    Banyak siswa yang belajar musik bertahun-tahun, menguasai teknik, dan punya bakat luar biasa. 
                    Tapi sayangnya, potensi mereka hanya berhenti di ruang kelas. Tidak ada wadah untuk mereka 
                    bersinar, tidak ada kesempatan untuk meraih prestasi di luar lingkup les-lesan internal.
                    </p>
                    <p className="leading-relaxed">
                    Dari sinilah kami bertekad: <strong>musik bukan hanya soal belajar nada dan ritme, 
                    tapi juga tentang memberikan panggung, membuka peluang, dan membantu siswa meraih 
                    prestasi nyata</strong>.
                    </p>
                    <p className="leading-relaxed font-semibold text-gray-900">
                    Arya Musica hadir sebagai solusi — tempat di mana setiap siswa tidak hanya belajar musik, 
                    tapi juga dibimbing untuk tampil, berkompetisi, dan menorehkan prestasi yang membanggakan.
                    </p>
                </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                    src="/fixabout.png"
                    alt="Arya Musica Story"
                    fill
                    className="object-cover"
                    priority
                    />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-3">
                    <Award className="w-10 h-10" />
                    <div>
                        <p className="text-2xl font-bold">100+</p>
                        <p className="text-sm">Prestasi Siswa</p>
                    </div>
                    </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border-4 border-orange-500">
                    <div className="flex items-center gap-3">
                    <Users className="w-10 h-10 text-orange-600" />
                    <div>
                        <p className="text-2xl font-bold text-gray-900">500+</p>
                        <p className="text-sm text-gray-600">Siswa Aktif</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Visi & Misi */}
        <section className="w-full bg-linear-to-b from-gray-50 to-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
                <p className="text-orange-600 font-semibold mb-3">
                Visi & Misi Kami
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
                Komitmen Kami untuk Masa Depan Musik Indonesia
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Visi */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-t-4 border-orange-600">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Visi</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Menjadi lembaga pendidikan musik terdepan di Indonesia yang tidak hanya mengajarkan 
                    teori dan praktik musik, tetapi juga <strong className="text-orange-600">membuka jalan 
                    bagi setiap siswa untuk meraih prestasi dan pengakuan di tingkat lokal, nasional, 
                    hingga internasional</strong>.
                </p>
                </div>

                {/* Misi */}
                <div className="bg-linear-to-br from-orange-600 to-orange-700 rounded-2xl shadow-xl p-8 md:p-10 text-white">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Misi</h3>
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                    <p className="leading-relaxed">
                        Memberikan pendidikan musik berkualitas dengan kurikulum terstruktur dan metode pembelajaran modern
                    </p>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                    <p className="leading-relaxed">
                        <strong>Menyalurkan siswa ke berbagai kompetisi, festival, dan event musik bergengsi</strong>
                    </p>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                    <p className="leading-relaxed">
                        Membangun ekosistem musik yang mendukung pengembangan karir dan prestasi siswa
                    </p>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                    <p className="leading-relaxed">
                        Menghadirkan pengajar profesional dan bersertifikat yang berpengalaman di industri musik
                    </p>
                    </li>
                    <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                    <p className="leading-relaxed">
                        Menciptakan komunitas musik yang solid dan suportif untuk tumbuh bersama
                    </p>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </section>

        {/* Nilai-Nilai Kami */}
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
                <p className="text-orange-600 font-semibold mb-3">
                Nilai-Nilai Kami
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
                Yang Membuat Kami Berbeda
                </h2>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Value 1 */}
                <div className="bg-linear-to-br from-orange-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
                <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Prestasi Nyata
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Kami tidak hanya mengajar, tapi membawa siswa ke kompetisi dan event untuk meraih prestasi yang membanggakan.
                </p>
                </div>

                {/* Value 2 */}
                <div className="bg-linear-to-br from-orange-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
                <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Peduli & Supportif
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Setiap siswa adalah prioritas kami. Kami mendampingi perjalanan musik mereka dengan penuh dedikasi.
                </p>
                </div>

                {/* Value 3 */}
                <div className="bg-linear-to-br from-orange-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
                <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Inovasi & Kreativitas
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Metode pembelajaran modern dengan teknologi terkini untuk hasil maksimal dan pengalaman menyenangkan.
                </p>
                </div>

                {/* Value 4 */}
                <div className="bg-linear-to-br from-orange-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
                <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Pertumbuhan Berkelanjutan
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Sistem evaluasi terukur dengan ujian berkala untuk memantau dan meningkatkan kemampuan siswa.
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* Komitmen Kami */}
        <section className="w-full bg-linear-to-br from-orange-600 to-orange-800 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="text-center text-white">
                <Music className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Komitmen Kami untuk Anda
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
                Di Arya Musica - Tulungagung Music School, kami berkomitmen untuk tidak hanya mengajari Anda bermain musik, 
                tetapi juga <strong>membuka pintu kesempatan, memfasilitasi prestasi, dan menjadi bagian dari perjalanan 
                musik Anda menuju kesuksesan</strong>.
                </p>
                <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto opacity-90">
                Karena bagi kami, setiap siswa berhak mendapatkan panggung untuk bersinar, 
                kompetisi untuk berkembang, dan prestasi untuk dibanggakan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                    href="/price-list"
                    className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition duration-300 text-lg"
                >
                    Lihat Program Kelas
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
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition duration-300 text-lg"
                >
                    Hubungi Kami
                </Link>
                </div>
            </div>
            </div>
        </section>

        {/* Achievement Highlights */}
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12">
                <p className="text-orange-600 font-semibold mb-3">
                Pencapaian Kami
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
                Bukti Nyata Komitmen Kami
                </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-linear-to-br from-orange-50 to-white rounded-2xl shadow-lg">
                <p className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">500+</p>
                <p className="text-gray-600 font-semibold">Siswa Aktif</p>
                </div>
                <div className="text-center p-6 bg-linear-to-br from-orange-50 to-white rounded-2xl shadow-lg">
                <p className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">100+</p>
                <p className="text-gray-600 font-semibold">Prestasi Diraih</p>
                </div>
                <div className="text-center p-6 bg-linear-to-br from-orange-50 to-white rounded-2xl shadow-lg">
                <p className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">50+</p>
                <p className="text-gray-600 font-semibold">Event Diikuti</p>
                </div>
                <div className="text-center p-6 bg-linear-to-br from-orange-50 to-white rounded-2xl shadow-lg">
                <p className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">20+</p>
                <p className="text-gray-600 font-semibold">Instruktur Profesional</p>
                </div>
            </div>
            </div>
        </section>
        </main>
    );
    }

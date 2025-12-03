    'use client';

    import React, { useRef, useState, useEffect } from 'react';
    import { Lightbulb, Palette, BookOpen, Users, Music, Sparkles } from 'lucide-react';

    const features = [
    {
        icon: Lightbulb,
        title: 'Faster Learning',
        description: 'Sistem belajar memanfaatkan teknologi dan metode efektif, sehingga siswa dapat menguasai materi lebih cepat sambil tetap menikmati prosesnya.'
    },
    {
        icon: Palette,
        title: 'Be Creative Musician',
        description: 'Siswa dibimbing untuk berkreasi dan berpikir kreatif, sehingga siap menghadapi kebutuhan industri musik yang dinamis dan penuh tantangan.'
    },
    {
        icon: BookOpen,
        title: 'Measurable Progress',
        description: 'Setiap siswa memiliki buku perkembangan dan mengikut ujian, sehingga kemajuan belajar bisa dipantau secara jelas dan terukur.'
    },
    {
        icon: Users,
        title: 'Group Class & Concert',
        description: 'Belajar dalam kelompok dan tampil di konser membangun kebersamaan, sekaligus menumbuhkan keberanian dan pengalaman tampil di depan orang lain.'
    },
    {
        icon: Music,
        title: 'Music For Everyone',
        description: 'Kelas tersedia untuk segala usia, mulai dari anak 4 tahun hingga dewasa, sehingga setiap orang punya kesempatan belajar musik sesuai tahap perkembangannya.'
    },
    {
        icon: Sparkles,
        title: 'Professional Instructors',
        description: 'Pengajar berpengalaman dan bersertifikat siap membimbing Anda dengan metode pembelajaran yang menyenangkan dan efektif untuk semua level.'
    }
    ];

    export default function WhyLearnSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        scrollContainerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Multiply by 2 for faster scroll
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseLeave = () => {
        if (isDragging) {
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
        }
        }
    };

    useEffect(() => {
        if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = 'grab';
        }

        // Auto slide every 6 seconds
        const autoSlide = setInterval(() => {
        if (scrollContainerRef.current && !isDragging) {
            const container = scrollContainerRef.current;
            const cardWidth = 350 + 24; // card width + gap
            const maxScroll = container.scrollWidth - container.clientWidth;
            
            if (container.scrollLeft >= maxScroll - 10) {
            // Reset to start when reaching the end
            container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
            // Scroll to next card
            container.scrollTo({
                left: container.scrollLeft + cardWidth,
                behavior: 'smooth'
            });
            }
        }
        }, 6000);

        return () => clearInterval(autoSlide);
    }, [isDragging]);

    return (
        <section className="w-full bg-linear-to-b from-gray-50 to-gray-100 py-16 md:py-24">
        <div className="max-w-[1500px] mx-auto px-4 md:px-8 lg:px-16">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
            <p className="text-orange-800 font-semibold mb-3 text-sm">
                Keunggulan Arya Musica - Tulungagung Music School
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-900">
                Mengapa Perlu Belajar Musik?
            </h2>
            <p className="text-base text-gray-700 max-w-4xl mx-auto mb-3">
                <strong>Belajar musik bukan hanya soal nada dan irama, tapi juga tentang membentuk masa depan anak.</strong>
            </p>
            <p className="text-sm text-gray-600 max-w-4xl mx-auto">
                Musik terbukti memberikan dampak positif pada kecerdasan, emosi, sosial, hingga kepercayaan diri. Di Arya Musica - Tulungagung Music School, setiap nada yang dimainkan menjadi bekal berharga untuk pertumbuhan dan pengembangan diri siswa.
            </p>
            </div>

            {/* Slider Container */}
            <div className="relative">
            {/* Cards Container */}
            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-custom select-none"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <div
                    key={index}
                    className="flex-none w-[350px] md:w-[420px] bg-white rounded-2xl p-6 shadow-lg hover:bg-orange-600 hover:text-white transition-all duration-300 snap-start group"
                    >
                    <div className="mb-4">
                        <div className="w-14 h-14 bg-gray-100 group-hover:bg-white rounded-xl flex items-center justify-center transition-colors duration-300">
                        <Icon className="w-7 h-7 text-gray-600 group-hover:text-orange-600 transition-colors duration-300" />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                        {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-white leading-relaxed transition-colors duration-300">
                        {feature.description}
                    </p>
                    </div>
                );
                })}
            </div>
            </div>

        </div>

        <style jsx>{`
            .scrollbar-custom::-webkit-scrollbar {
            height: 6px;
            }
            .scrollbar-custom::-webkit-scrollbar-track {
            background: linear-gradient(to right, transparent, #e5e7eb, transparent);
            border-radius: 10px;
            margin: 0 20px;
            }
            .scrollbar-custom::-webkit-scrollbar-thumb {
            background: #2563eb;
            border-radius: 10px;
            }
            .scrollbar-custom::-webkit-scrollbar-thumb:hover {
            background: #1d4ed8;
            }
            .scrollbar-custom {
            scrollbar-width: thin;
            scrollbar-color: #2563eb #e5e7eb;
            }
            /* Always show scrollbar */
            .scrollbar-custom::-webkit-scrollbar-thumb {
            visibility: visible;
            }
        `}</style>
        </section>
    );
    }
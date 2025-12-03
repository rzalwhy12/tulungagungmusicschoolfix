    'use client';

    import { useState, useEffect } from 'react';
    import Image from 'next/image';
    import Link from 'next/link';

    interface HeroSlide {
    id: number;
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
    }

    const heroSlides: HeroSlide[] = [
    {
        id: 1,
        title: 'Musik untuk Semua Kalangan',
        description:
        'Arya Musica - Tulungagung Musik School membuka kesempatan bagi siapa saja untuk belajar musik. Anak-anak, remaja, hingga dewasa bisa memilih kelas reguler, hobi, online, atau home course sesuai kebutuhan dan tujuan mereka.',
        image: '/hero-1.jpg',
        buttonText: 'Lihat Program Kelas',
        buttonLink: '/price-list',
    },
    {
        id: 2,
        title: 'Belajar Musik dengan Profesional',
        description:
        'Tim guru kami terdiri dari musisi berpengalaman yang siap membimbing Anda mencapai impian musik. Dengan metode pembelajaran yang interaktif dan menyenangkan.',
        image: '/hero-2.jpg',
        buttonText: 'Lihat Kelas',
        buttonLink: '/price-list',
    },
    {
        id: 3,
        title: 'Fasilitas Lengkap untuk Belajar',
        description:
        'Studio musik modern dengan peralatan berkualitas tinggi siap mendukung proses pembelajaran Anda. Suasana nyaman dan kondusif untuk mengembangkan bakat musik.',
        image: '/hero-3.jpg',
        buttonText: 'Kunjungi Kami',
        buttonLink: '/gallery',
    },
    ];

    export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);
    const [dragStart, setDragStart] = useState<number | null>(null);
    const [dragEnd, setDragEnd] = useState<number | null>(null);

    useEffect(() => {
        if (!isAutoplay) return;

        const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoplay]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsAutoplay(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setIsAutoplay(false);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoplay(false);
    };

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setDragStart(clientX);
        setIsAutoplay(false);
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (dragStart === null) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setDragEnd(clientX);
    };

    const handleDragEnd = () => {
        if (dragStart === null || dragEnd === null) return;
        
        const distance = dragStart - dragEnd;
        const minSwipeDistance = 50;

        if (Math.abs(distance) > minSwipeDistance) {
        if (distance > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
        }

        setDragStart(null);
        setDragEnd(null);
    };

    return (
        <div 
        className="relative w-full overflow-hidden aspect-4/3 md:h-[600px] lg:h-[700px] cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        >
        <div 
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
        {heroSlides.map((slide, index) => (
            <div
            key={slide.id}
            className="relative min-w-full h-full shrink-0"
            >
            {/* Background Image */}
            <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl text-center text-white w-full">
                <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight">
                    {slide.title}
                </h1>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl mb-4 md:mb-8 leading-relaxed px-2 line-clamp-3 md:line-clamp-none">
                    {slide.description}
                </p>
                <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 text-xs md:text-base"
                >
                    {slide.buttonText}
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
            </div>
            </div>
        ))}
        </div>

        {/* Left Arrow */}
        <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 transition duration-300 items-center justify-center w-12 h-12 shadow-lg"
            aria-label="Previous slide"
        >
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
            />
            </svg>
        </button>

        {/* Right Arrow */}
        <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 transition duration-300 items-center justify-center w-12 h-12 shadow-lg"
            aria-label="Next slide"
        >
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
            />
            </svg>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
            {heroSlides.map((_, index) => (
            <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition duration-300 rounded-full ${
                index === currentSlide
                    ? 'bg-white w-6 h-2.5 md:w-8 md:h-3'
                    : 'bg-white/50 hover:bg-white/75 w-2.5 h-2.5 md:w-3 md:h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
            />
            ))}
        </div>
        </div>
    );
    }

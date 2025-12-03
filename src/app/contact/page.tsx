    'use client';

    import { useState } from 'react';
    import Link from 'next/link';
    import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle,
    Instagram,
    Facebook,
    Youtube,
    CheckCircle,
    } from 'lucide-react';

    export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Format pesan WhatsApp
        const message = `Halo, saya ${formData.name}

    Email: ${formData.email}
    Telepon: ${formData.phone}
    Keperluan: ${formData.subject}

    Pesan:
    ${formData.message}`;
        
        // Encode dan redirect ke WhatsApp
        const whatsappURL = `https://wa.me/6287862570428?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
        
        // Reset form dan tampilkan success message
        setIsSubmitted(true);
        setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] bg-linear-to-r from-orange-600 to-orange-800">
            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-full flex flex-col justify-center items-center text-center">
            <MessageCircle className="w-16 h-16 text-white mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6">
                Kami siap membantu menjawab pertanyaan Anda seputar program kelas musik
            </p>
            <div className="mt-2 flex items-center gap-2 text-white/80">
                <Link href="/" className="hover:text-white transition">
                Home
                </Link>
                <span>/</span>
                <span>Contact</span>
            </div>
            </div>
        </section>

        {/* Contact Info Cards */}
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {/* Phone */}
                <div className="bg-linear-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Telepon</h3>
                <a
                    href="tel:087862570428"
                    className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                >
                    0878-6257-0428
                </a>
                <p className="text-sm text-gray-600 mt-2">Senin - Minggu, 09:00 - 21:00</p>
                </div>

                {/* WhatsApp */}
                <div className="bg-linear-to-br from-green-50 to-white border border-green-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                    <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
                <a
                    href="https://wa.me/6287862570428"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                >
                    Chat Langsung
                </a>
                <p className="text-sm text-gray-600 mt-2">Respon cepat & ramah</p>
                </div>

                {/* Email */}
                <div className="bg-linear-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <a
                    href="mailto:tulungagungmusikschool@gmail.com"
                    className="text-blue-600 hover:text-blue-700 font-semibold transition-colors text-sm break-all"
                >
                    tulungagungmusikschool@gmail.com
                </a>
                <p className="text-sm text-gray-600 mt-2">Balas dalam 24 jam</p>
                </div>

                {/* Location */}
                <div className="bg-linear-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Lokasi</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                    JL. Pahlawan GG.1 Rejoagung Kedungwaru Tulungagung
                </p>
                <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-semibold text-sm mt-2 inline-block"
                >
                    Lihat di Maps
                </a>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                <div className="mb-8">
                    <p className="text-orange-600 font-semibold mb-3">Kirim Pesan</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
                    Ada Pertanyaan? Hubungi Kami
                    </h2>
                    <p className="text-gray-600">
                    Isi form di bawah ini dan pesan Anda akan langsung dikirim via WhatsApp
                    </p>
                </div>

                {/* Success Message */}
                {isSubmitted && (
                    <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                        <p className="font-semibold text-green-900">Pesan terkirim!</p>
                        <p className="text-sm text-green-700">
                        Anda akan dialihkan ke WhatsApp. Terima kasih telah menghubungi kami.
                        </p>
                    </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nama Lengkap *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                        placeholder="Masukkan nama lengkap Anda"
                    />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                        placeholder="email@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        No. Telepon *
                        </label>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                        placeholder="08xx-xxxx-xxxx"
                        />
                    </div>
                    </div>

                    {/* Subject */}
                    <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Keperluan *
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                    >
                        <option value="">Pilih keperluan Anda</option>
                        <option value="Informasi Program Kelas">Informasi Program Kelas</option>
                        <option value="Pendaftaran Siswa Baru">Pendaftaran Siswa Baru</option>
                        <option value="Free Trial Class">Free Trial Class</option>
                        <option value="Jadwal Kelas">Jadwal Kelas</option>
                        <option value="Biaya & Pembayaran">Biaya & Pembayaran</option>
                        <option value="Kompetisi & Event">Kompetisi & Event</option>
                        <option value="Lainnya">Lainnya</option>
                    </select>
                    </div>

                    {/* Message */}
                    <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Pesan *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                        placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                    <Send className="w-5 h-5" />
                    Kirim via WhatsApp
                    </button>
                </form>
                </div>

                {/* Additional Info */}
                <div>
                {/* Operating Hours */}
                <div className="bg-linear-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-8 mb-6">
                    <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Jam Operasional</h3>
                        <p className="text-gray-600 text-sm">Kami siap melayani Anda setiap hari</p>
                    </div>
                    </div>
                    <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="font-semibold text-gray-700">Senin - Jumat</span>
                        <span className="text-orange-600 font-semibold">09:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="font-semibold text-gray-700">Sabtu</span>
                        <span className="text-orange-600 font-semibold">09:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="font-semibold text-gray-700">Minggu</span>
                        <span className="text-orange-600 font-semibold">10:00 - 18:00</span>
                    </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Kami</h3>
                    <p className="text-gray-600 text-sm mb-6">
                    Ikuti media sosial kami untuk update terbaru seputar konser, kompetisi, dan
                    kegiatan siswa
                    </p>
                    <div className="flex gap-4">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                        <Facebook className="w-6 h-6" />
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                        <Youtube className="w-6 h-6" />
                    </a>
                    </div>
                </div>

                {/* Map */}
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="h-64 bg-gray-200 relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.123456789!2d111.9!3d-8.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDYnMDAuMCJTIDExMcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </div>
                    <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Alamat Lengkap</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        JL. Pahlawan GG.1 Rejoagung Kedungwaru Tulungagung, Jawa Timur
                    </p>
                    <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm"
                    >
                        <MapPin className="w-4 h-4" />
                        Buka di Google Maps
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-linear-to-b from-gray-50 to-white py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12">
                <p className="text-orange-600 font-semibold mb-3">FAQ</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
                Pertanyaan yang Sering Diajukan
                </h2>
            </div>

            <div className="space-y-4">
                {[
                {
                    q: 'Apakah ada free trial class?',
                    a: 'Ya, kami menyediakan free trial class untuk calon siswa baru. Hubungi kami untuk jadwal trial.',
                },
                {
                    q: 'Berapa biaya pendaftaran?',
                    a: 'Biaya pendaftaran Rp 100.000,- (sekali bayar) sudah termasuk kaos, totbag, dan buku perkembangan siswa.',
                },
                {
                    q: 'Apakah harus punya alat musik sendiri?',
                    a: 'Untuk kelas di studio, kami menyediakan semua alat musik. Untuk online class dan home course, siswa wajib punya alat musik sendiri.',
                },
                {
                    q: 'Bagaimana sistem pembayaran?',
                    a: 'Pembayaran dilakukan per bulan dan dapat dibayar cash atau transfer bank.',
                },
                {
                    q: 'Apakah ada event dan kompetisi?',
                    a: 'Ya! Kami rutin mengikutkan siswa ke berbagai kompetisi, konser, dan festival musik untuk meraih prestasi.',
                },
                ].map((faq, index) => (
                <details
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden group"
                >
                    <summary className="px-6 py-4 font-semibold text-gray-900 cursor-pointer hover:bg-orange-50 transition-colors list-none flex items-center justify-between">
                    {faq.q}
                    <span className="text-orange-600 text-xl group-open:rotate-45 transition-transform">
                        +
                    </span>
                    </summary>
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.a}</div>
                </details>
                ))}
            </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="w-full bg-linear-to-r from-orange-600 to-orange-800 py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Masih Ada Pertanyaan?
            </h2>
            <p className="text-lg text-white/90 mb-8">
                Tim kami siap membantu menjawab semua pertanyaan Anda. Jangan ragu untuk menghubungi
                kami!
            </p>
            <a
                href="https://wa.me/6287862570428"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition duration-300 text-lg"
            >
                <MessageCircle className="w-6 h-6" />
                Chat WhatsApp Sekarang
            </a>
            </div>
        </section>
        </main>
    );
    }

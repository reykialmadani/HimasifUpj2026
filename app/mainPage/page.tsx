import Image from "next/image";
import Link from "next/link";

const programKerja = [
  { icon: "💻", title: "Workshop Teknologi", desc: "Pelatihan skill digital terkini untuk anggota aktif Himasif." },
  { icon: "🏆", title: "Kompetisi IT", desc: "Ajang adu kreativitas dan kemampuan di bidang sistem informasi." },
  { icon: "🤝", title: "Bakti Sosial", desc: "Kontribusi nyata kepada masyarakat melalui program sosial." },
  { icon: "🎓", title: "Seminar Nasional", desc: "Forum akademik menghadirkan pakar industri dan teknologi." },
  { icon: "🌐", title: "Networking Night", desc: "Mempertemukan mahasiswa dengan profesional di dunia IT." },
  { icon: "📱", title: "Himasif Berbagi", desc: "Program mentoring dan berbagi ilmu antar sesama anggota." },
];

const blogPosts = [
  {
    tag: "Teknologi",
    date: "12 Maret 2025",
    title: "Mengenal Lebih Dalam Sistem Informasi di Era Digital",
    desc: "Sistem informasi kini menjadi tulang punggung transformasi digital di berbagai sektor industri dan pemerintahan.",
    img: "/blog1.jpg",
    author: "Admin Himasif",
  },
  {
    tag: "Kegiatan",
    date: "5 Maret 2025",
    title: "Recap Workshop UI/UX: Belajar Desain dari Praktisi Industri",
    desc: "Lebih dari 80 peserta hadir antusias dalam workshop intensif bersama desainer profesional dari perusahaan teknologi terkemuka.",
    img: "/blog2.jpg",
    author: "Divisi Akademik",
  },
  {
    tag: "Prestasi",
    date: "28 Feb 2025",
    title: "Himasif Raih Juara 2 Kompetisi IT Tingkat Nasional 2025",
    desc: "Tim Himasif berhasil menorehkan prestasi gemilang di ajang kompetisi yang diikuti 120 tim dari seluruh Indonesia.",
    img: "/blog3.jpg",
    author: "Divisi Humas",
  },
];

export default function Main() {
  return (
    <main className="bg-slate-950">

      {/* ══ HERO: FULL SCREEN IMAGE + PROKER CARDS ══ */}
      <section className="relative w-full min-h-screen flex flex-col">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/pengurusImage.jpg" alt="Foto Pengurus Himasif 2024/2025" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
        </div>

        {/* Title */}
        <div className="relative z-10 flex flex-col items-center pt-16 sm:pt-20 px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Periode 2024 / 2025
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-none tracking-tight mt-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-300">HIMASIF</span>
          </h1>
          <p className="mt-4 text-white/50 text-sm sm:text-base font-medium tracking-wide">Himpunan Mahasiswa Sistem Informasi</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-slate-950 z-10" />
      </section>

        {/* Proker Cards */}
        <div className="relative z-10 mt-auto px-4 sm:px-8 lg:px-16 pb-10">
          <div className="text-center mb-5">
            <span className="text-white/40 text-xs font-bold tracking-[0.25em] uppercase">Program Kerja Unggulan</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
            {programKerja.map((proker, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300" />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/25 to-indigo-600/25" />
                <div className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-blue-400 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="relative z-10 p-4 sm:p-5 flex flex-col gap-2 min-h-[180px]">
                  <span className="text-2xl sm:text-3xl">{proker.icon}</span>
                  <h3 className="text-white font-bold text-xs sm:text-sm leading-snug">{proker.title}</h3>
                  <p className="text-white/55 text-xs leading-relaxed hidden sm:block">{proker.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-3 flex-wrap">
            <Link href="/about" className="px-6 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/25 hover:bg-white/20 text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5">Tentang Kami</Link>
            <Link href="/contact" className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-900/40 hover:-translate-y-0.5">Hubungi Kami</Link>
          </div>
        </div>

      {/* ══ BLOG SECTION ══ */}
      <section className="relative w-full overflow-hidden">
        {/* Background: same photo blurred + darkened */}
        <div className="absolute inset-0 w-full h-full">
          <Image src="/pengurusImage.jpg" alt="" fill className="object-cover object-center scale-110" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />
        </div>

        {/* Top separator line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-20">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase">Berita & Artikel</span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Blog{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Himasif</span>
              </h2>
              <p className="mt-2 text-white/40 text-sm max-w-md">
                Update terkini seputar kegiatan, prestasi, dan wawasan teknologi dari Himasif.
              </p>
            </div>
            <Link href="/blog" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 self-start sm:self-auto">
              Lihat Semua
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <article key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col">
                {/* Glass base */}
                <div className="absolute inset-0 bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl group-hover:bg-white/14 transition-all duration-300" />
                {/* Blue glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/15 to-indigo-600/15" />
                {/* Left accent */}
                <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-blue-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Thumbnail */}
                  <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-slate-800/60">
                    <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wide uppercase">
                      {post.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <p className="text-white/35 text-xs font-medium">{post.date}</p>
                    <h3 className="text-white font-bold text-sm sm:text-base leading-snug group-hover:text-blue-200 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed flex-1">{post.desc}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 mt-auto border-t border-white/10">
                      <span className="text-white/40 text-xs">{post.author}</span>
                      <span className="inline-flex items-center gap-1 text-blue-400 text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                        Baca
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom separator line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
      </section>

    </main>
  );
}
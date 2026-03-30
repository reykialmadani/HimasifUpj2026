"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

const filosofiSlides = [
  {
    number: "01",
    title: "Titik Tiga",
    subtitle: "Pola Ilmiah & Landasan Organisasi",
    image: "/himasifLogo1.svg",
    desc: "Melambangkan segitiga tanpa garis, bermakna ilmu dapat diperoleh dari mana saja dan menggambarkan 3 (tiga) pola ilmiah pokok Universitas Pembangunan Jaya yang menjadi landasan HIMASIF.",
    accent: "from-blue-400 to-indigo-400",
    glow: "from-blue-500/20 to-indigo-600/20",
  },
  {
    number: "02",
    title: "Garis Tegas",
    subtitle: "Hubungan & Kekeluargaan",
    image: "/himasifLogo2.svg",
    desc: "Melambangkan hubungan yang erat antar mahasiswa",
    accent: "from-cyan-400 to-blue-400",
    glow: "from-cyan-500/20 to-blue-600/20",
  },
  {
    number: "03",
    title: "Garis Putus-Putus",
    subtitle: "Kompetisi & Semangat Berkarya",
    image: "/himasifLogo3.svg",
    desc: "Garis putus-putus melambangkan HIMASIF Selalu berlomba - lomba menjadi yang terbaik.",
    accent: "from-indigo-400 to-violet-400",
    glow: "from-indigo-500/20 to-violet-600/20",
  },
  {
    number: "04",
    title: "Lingkaran Besar",
    subtitle: "Lingkaran Dinamisme",
    image: "/himasifLogo4.svg",
    desc: "Elemen yang melambangkan dinamisme dalam HIMASIF.",
    accent: "from-blue-400 to-cyan-400",
    glow: "from-blue-500/20 to-cyan-600/20",
  },
  {
    number: "05",
    title: "Simbol Play Button",
    subtitle: "Perjalanan & Perkembangan",
    image: "/himasifLogo4.svg",
    desc: "Simbol Play button dengan tulisan HIMASIF, Bermakna bahwa HIMASIF memulai untuk berkembang seiring berjalannya waktu",
    accent: "from-blue-400 to-cyan-400",
    glow: "from-blue-500/20 to-cyan-600/20",
  },
  {
    number: "06",
    title: "Identitas Himpunan dan Universitas",
    subtitle: "Identitas & Kebanggaan",
    image: "/himasifLogo6.svg",
    desc: "Bermakna sebagai identitas organisasi Program Studi Sistem Informasi dan Universitas Pembangunan Jaya",
    accent: "from-sky-400 to-blue-500",
    glow: "from-sky-500/20 to-blue-600/20",
  },
  {
    number: "07",
    title: "Warna Biru Langit",
    subtitle: "Ketenangan & Profesionalisme",
    image: "/himasifLogo7.svg",
    desc: "Melambangkan arti dari teknologi, profesionalitas, keseriusan dan integritas.",
    accent: "from-violet-400 to-indigo-400",
    glow: "from-violet-500/20 to-indigo-600/20",
  },
  {
    number: "08",
    title: "Warna Putih",
    subtitle: "Kesucian & Keterbukaan",
    image: "/himasifLogo7.svg",
    desc: "Melambangkan arti dari kesucian, keihkhlasan dan kebenaran.",
    accent: "from-blue-300 to-indigo-300",
    glow: "from-blue-400/20 to-indigo-500/20",
  },
];

const misiList = [
  {
    number: "01",
    title: "Bangun Jiwa Program Studi",
    desc: "Menanamkan rasa cinta dan solidaritas terhadap Program Studi dan Himpunan Mahasiswa Sistem Informasi melalui penggunaan PDH HIMASIF setiap hari Senin berdasarkan AD/ART.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Pengembangan Akademik Berkelanjutan",
    desc: "Memfasilitasi dan mengembangkan skill serta pemahaman akademik civitas akademika HIMASIF melalui inovasi divisi Riset dan Pengembangan.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Wadah Aspirasi Civitas HIMASIF",
    desc: "Menyediakan wadah untuk civitas akademika HIMASIF dapat memberikan kritik dan saran yang akan dikaji secara inklusif dan profesional.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Sinergi Bangun Citra HIMASIF",
    desc: "Mengembangkan kolaborasi strategis untuk memperkuat eksistensi dan nama baik Program Studi dan Himpunan Mahasiswa Sistem Informasi.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const [active, setActive] = useState(0);
  const [activeMisi, setActiveMisi] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number, dir: "next" | "prev") => {
    if (animating || index === active) return;
    setDirection(dir);
    setAnimating(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 320);
  };

  const prev = () => {
    const idx = (active - 1 + filosofiSlides.length) % filosofiSlides.length;
    goTo(idx, "prev");
  };

  const next = () => {
    const idx = (active + 1) % filosofiSlides.length;
    goTo(idx, "next");
  };

  const current = filosofiSlides[active];

  return (
    <main className="bg-slate-950 min-h-screen">

      {/* ══ HERO SECTION ══ */}
      <section className="relative w-full min-h-[60vh] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/pengurusImage.jpg" alt="Foto Pengurus Himasif" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-slate-950" />
        </div>
        <div className="absolute top-6 left-0 right-0 z-10 px-4 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-white/40 text-xs font-medium">
            <Link href="/" className="hover:text-white/70 transition-colors duration-200">Beranda</Link>
            <span>/</span>
            <span className="text-white/70">Tentang Kami</span>
          </div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 pb-16 w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Tentang Kami
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none tracking-tight">
            <span className="text-white">Apa Itu </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-300">Himasif?</span>
          </h1>
        </div>
      </section>

      {/* ══ PROFIL SECTION ══ */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/40 to-indigo-600/40 blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-blue-900/30">
                <Image src="/pengurusImage2.jpg" alt="Pengurus Himasif 2024/2025" width={700} height={480} className="object-cover object-top w-full h-[320px] sm:h-[400px] group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">Himasif 2024 / 2025</p>
                      <p className="text-white/50 text-xs">Himpunan Mahasiswa Sistem Informasi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase">Profil Organisasi</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Mengenal{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Himasif</span>{" "}
                Lebih Dekat
              </h2>
              <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400" />
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/80 via-indigo-400/50 to-transparent" />
                <p className="pl-5 text-white/70 text-sm sm:text-base leading-relaxed text-justify">
                  Himpunan Mahasiswa Sistem Informasi (HIMASIF) adalah organisasi kemahasiswaan yang mewadahi seluruh mahasiswa Program Studi Sistem Informasi. HIMASIF hadir sebagai sarana pengembangan diri, minat, dan bakat mahasiswa baik dalam bidang akademik maupun non-akademik. Sebagai organisasi yang dinamis dan adaptif terhadap perkembangan teknologi, HIMASIF berkomitmen untuk menjadi wadah kolaboratif yang mendukung pertumbuhan intelektual, profesionalisme, serta kepedulian sosial anggotanya. Melalui berbagai program kerja seperti pembekalan terkait organisasi ataupun microsoft office untuk pengurusnya, lomba-lomba akademik dan non akademik, company visit, hingga kegiatan keakraban antaranggota, HIMASIF turut serta menciptakan lingkungan yang positif, inovatif, dan produktif. Dengan semangat kekeluargaan dan profesionalisme, HIMASIF berperan aktif dalam membangun citra unggul mahasiswa Sistem Informasi yang siap bersaing di dunia industri maupun akademik.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {[
                  { value: "26+", label: "Anggota Aktif" },
                  { value: "20+", label: "Program Kerja" },
                  { value: "10+", label: "Prestasi Nasional" },
                ].map((stat, i) => (
                  <div key={i} className="relative group/stat rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl group-hover/stat:bg-white/14 transition-all duration-300" />
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/20 to-indigo-600/20" />
                    <div className="relative z-10 p-4 text-center">
                      <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">{stat.value}</p>
                      <p className="text-white/50 text-xs mt-1 leading-tight">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap mt-2">
                <Link href="/contact" className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-900/40 hover:-translate-y-0.5">Hubungi Kami</Link>
                <Link href="/blog" className="px-6 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/25 hover:bg-white/20 text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5">Baca Blog</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
      </section>

      {/* ══ VISI & MISI ══ */}
      <section className="relative w-full overflow-hidden py-24">
        {/* Ambient glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[160px] pointer-events-none -translate-x-1/4" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[140px] pointer-events-none translate-x-1/4" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">

          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase">Arah & Tujuan</span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Visi &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Misi</span>
            </h2>
            <p className="mt-3 text-white/40 text-sm max-w-md mx-auto">
              Landasan arah gerak HIMASIF dalam menjalankan roda organisasi.
            </p>
          </div>

          {/* ── VISI — full-width hero card ── */}
          <div className="relative mb-8 group">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-blue-500/50 via-indigo-500/40 to-blue-500/50 opacity-50 group-hover:opacity-80 transition-opacity duration-500 blur-sm" />
            <div className="relative rounded-3xl overflow-hidden border border-white/12 bg-white/5 backdrop-blur-2xl p-8 sm:p-10 lg:p-12">
              {/* Animated top bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400" />
              {/* Decorative BG text */}
              <div className="absolute right-6 top-2 text-[110px] font-black text-white/[0.025] leading-none select-none pointer-events-none hidden lg:block tracking-widest">
                VISI
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-10">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-indigo-600/30 blur-md" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/15 to-indigo-600/15 border border-blue-400/25 flex items-center justify-center">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300">
                        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                        <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
                        <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide border border-blue-400/30 bg-blue-400/10 text-blue-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    Visi Organisasi
                  </span>
                  <p className="text-lg sm:text-xl lg:text-2xl font-black text-white leading-snug max-w-3xl">
                    Menjadikan HIMASIF sebagai wadah yang{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                      kompeten, kreatif, dan profesional
                    </span>{" "}
                    dalam memberikan pengalaman berorganisasi yang bermanfaat bagi anggota.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── MISI — interactive accordion cards ── */}
          <div className="flex flex-col gap-3">
            {/* Misi label */}
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide border border-indigo-400/30 bg-indigo-400/10 text-indigo-300">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Misi Organisasi
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
            </div>

            {misiList.map((misi, i) => {
              const isOpen = activeMisi === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveMisi(isOpen ? -1 : i)}
                  className="group/misi relative text-left w-full"
                >
                  {/* Glow only when active */}
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/30 to-indigo-500/30 blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} />

                  <div className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-blue-400/35 bg-white/9 backdrop-blur-2xl"
                      : "border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/18 hover:bg-white/7"
                  }`}>
                    {/* Active top accent */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} />

                    {/* Header row — always visible */}
                    <div className="flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5">
                      {/* Icon box */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "bg-blue-500/20 border-blue-400/40 text-blue-300"
                          : "bg-white/8 border-white/12 text-white/40 group-hover/misi:text-white/60 group-hover/misi:border-white/20"
                      }`}>
                        {misi.icon}
                      </div>

                      {/* Title + number */}
                      <div className="flex-1 min-w-0 flex items-center gap-3">
                        <span className={`text-[10px] font-black tracking-widest flex-shrink-0 transition-colors duration-300 ${isOpen ? "text-blue-400" : "text-white/20"}`}>
                          {misi.number}
                        </span>
                        <h4 className={`font-black text-sm sm:text-base leading-snug truncate transition-colors duration-300 ${
                          isOpen ? "text-white" : "text-white/60 group-hover/misi:text-white/80"
                        }`}>
                          {misi.title}
                        </h4>
                      </div>

                      {/* Chevron */}
                      <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "bg-blue-500/20 border-blue-400/30 text-blue-300 rotate-180"
                          : "bg-white/5 border-white/10 text-white/30 group-hover/misi:text-white/50 rotate-0"
                      }`}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>

                    {/* Expandable body */}
                    <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-40" : "max-h-0"}`}>
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                        <div className="ml-[3.25rem] border-t border-white/8 pt-4">
                          <p className="text-white/60 text-sm leading-relaxed">{misi.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </section>

      {/* ══ FILOSOFI LOGO ══ */}
      <section className="relative w-full overflow-hidden py-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/8 blur-[140px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase">Identitas Visual</span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Filosofi{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Logo</span>
              </h2>
              <p className="mt-2 text-white/40 text-sm max-w-md">
                Setiap elemen logo Himasif memiliki makna mendalam yang mencerminkan nilai dan semangat organisasi.
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm self-start sm:self-auto">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300 font-black text-lg leading-none">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="text-white/25 font-light text-sm">/</span>
              <span className="text-white/40 text-sm font-medium">
                {String(filosofiSlides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="relative">
            <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${current.glow} blur-xl opacity-60 transition-all duration-700`} />
            <div className="relative rounded-3xl overflow-hidden border border-white/12 bg-white/6 backdrop-blur-2xl shadow-2xl shadow-black/40">
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${current.accent} transition-all duration-500`} />
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[440px]">
                {/* Image Side */}
                <div className="relative overflow-hidden bg-white/4 border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="absolute top-4 left-5 z-20">
                    <span className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br ${current.accent} opacity-20 leading-none select-none`}>
                      {current.number}
                    </span>
                  </div>
                  <div
                    key={active}
                    className={`w-full h-72 lg:h-full min-h-[280px] relative flex items-center justify-center p-8 transition-all duration-300 ease-out ${
                      animating
                        ? direction === "next" ? "opacity-0 translate-x-4 scale-95" : "opacity-0 -translate-x-4 scale-95"
                        : "opacity-100 translate-x-0 scale-100"
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <Image src={current.image} alt={current.title} fill className="object-contain drop-shadow-2xl" />
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${current.glow} opacity-30 pointer-events-none`} />
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-between p-8 sm:p-10">
                  <div
                    key={`content-${active}`}
                    className={`flex flex-col gap-5 transition-all duration-300 ease-out delay-75 ${
                      animating
                        ? direction === "next" ? "opacity-0 translate-y-3" : "opacity-0 -translate-y-3"
                        : "opacity-100 translate-y-0"
                    }`}
                  >
                    <span className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide border border-white/15 bg-white/8 text-blue-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {current.subtitle}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">{current.title}</h3>
                      <div className={`mt-3 w-10 h-0.5 rounded-full bg-gradient-to-r ${current.accent}`} />
                    </div>
                    <p className="text-white/65 text-sm sm:text-base leading-relaxed">{current.desc}</p>
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      {filosofiSlides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => goTo(i, i > active ? "next" : "prev")}
                          className={`rounded-full transition-all duration-300 ${
                            i === active ? "w-6 h-1.5 bg-blue-400" : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                          }`}
                          aria-label={`Slide ${i + 1}`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={prev} disabled={animating} className="group/btn flex items-center justify-center w-10 h-10 rounded-xl border border-white/20 bg-white/8 hover:bg-white/18 hover:border-white/35 transition-all duration-200 disabled:opacity-40" aria-label="Previous">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover/btn:text-white transition-colors -translate-x-px">
                          <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button onClick={next} disabled={animating} className="group/btn flex items-center justify-center w-10 h-10 rounded-xl border border-blue-500/40 bg-blue-600/20 hover:bg-blue-600/40 hover:border-blue-400/60 transition-all duration-200 disabled:opacity-40" aria-label="Next">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300 group-hover/btn:text-white transition-colors translate-x-px">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex items-center gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
            {filosofiSlides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > active ? "next" : "prev")}
                className={`flex-shrink-0 relative rounded-xl overflow-hidden transition-all duration-300 ${
                  i === active ? "ring-2 ring-blue-400 ring-offset-2 ring-offset-slate-950 scale-105" : "opacity-50 hover:opacity-80"
                }`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative bg-white/8 border border-white/15 rounded-xl flex items-center justify-center">
                  <Image src={slide.image} alt={slide.title} fill className="object-contain p-2" />
                  <span className="absolute bottom-1 right-1.5 text-[9px] font-black text-white/40">{slide.number}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </section>

    </main>
  );
}
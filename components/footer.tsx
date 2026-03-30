import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-white px-4 lg:px-[120px] py-[50px] overflow-hidden">

      {/* Top separator line — sama seperti blog section */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

      {/* Background glow dekoratif */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col gap-[60px]">

        {/* Konten Utama */}
        <div className="flex flex-col lg:flex-row justify-between gap-[60px]">

          {/* Kolom Kiri */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Logo placeholder */}
            <div className="w-[150px] h-auto mb-2">
              {/* <Image src="/logo-himasif.svg" alt="Logo Himasif" width={150} height={50} /> */}
            </div>

            {/* Nama */}
            <h2 className="text-xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-300">
              HIMASIF
            </h2>

            {/* Slogan */}
            <p className="text-sm italic text-blue-400/80 font-medium">
              We Make IT Happen
            </p>

            {/* Garis aksen biru */}
            <div className="h-px w-[200px] bg-gradient-to-r from-blue-500 to-indigo-500" />

            {/* Deskripsi */}
            <p className="text-sm text-white/40 max-w-[380px] leading-relaxed">
              Himpunan Mahasiswa Sistem Informasi yang berkomitmen mengembangkan
              potensi anggota di bidang teknologi, inovasi, dan kolaborasi.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-2">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-blue-400 hover:scale-105 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.847s-.012 3.581-.07 4.847c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.581 2.163 15.201 2.163 12s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 1.942 5.039 1.341 1.341 3.183 1.857 5.039 1.942C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.856-.085 3.698-.601 5.039-1.942 1.341-1.341 1.857-3.183 1.942-5.039.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.085-1.856-.601-3.698-1.942-5.039C20.646.673 18.804.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                Instagram
              </Link>

              <Link
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-blue-400 hover:scale-105 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.379 3.5 12 3.5 12 3.5s-7.379 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.2 0 12 0 12s0 3.8.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.621 20.5 12 20.5 12 20.5s7.379 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.8 24 12 24 12s0-3.8-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </Link>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="flex-1 flex flex-row justify-between text-sm pt-6 lg:pt-10">

            {/* Menu Navigasi */}
            <div className="flex flex-col gap-3">
              <p className="text-blue-400/80 font-bold text-xs uppercase tracking-widest mb-1">
                Navigasi
              </p>
              {[
                { label: "Beranda", href: "/" },
                { label: "Tentang Kami", href: "/about" },
                { label: "Divisi", href: "/divisi" },
                { label: "Program Kerja", href: "/proker" },
                { label: "Kontak", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/40 hover:text-blue-400 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3">
              <p className="text-blue-400/80 font-bold text-xs uppercase tracking-widest mb-1">
                Legal
              </p>
              <p className="text-white/40 cursor-default">Syarat & Ketentuan</p>
              <p className="text-white/40 cursor-default">Kebijakan Privasi</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Copyright */}
        <div className="text-xs text-center text-white/25 -mt-10">
          &copy; {new Date().getFullYear()} HIMASIF. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/galeri", label: "Galeri" },
  { href: "/contact", label: "Kontak" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active link based on current path
  // useEffect(() => {
  //   setActiveLink(window.location.pathname);
  // }, []);

  const handleMobileLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-0"
            : "bg-white/95 backdrop-blur-sm shadow-sm py-0"
        }`}
      >
        {/* Top accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600" />

        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => handleMobileLinkClick("/")}>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/logo-himasif.svg"
                alt="Logo Himasif"
                width={48}
                height={48}
                className="w-12 h-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase leading-none">
                Himasif
              </p>
              <p className="text-[10px] text-gray-400 tracking-wide leading-tight mt-0.5">
                Himpunan Mahasiswa Sistem Informasi
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setActiveLink(href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  activeLink === href
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {label}
                {activeLink === href && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side: Social + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Media */}
            <div className="flex items-center gap-2 pr-3 border-r border-gray-200">
              <a
                href="https://www.instagram.com/garage_sarohaccu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white text-gray-500 transition-all duration-300 group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1W7zPmpgC4/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-500 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-blue-200 hover:shadow-md"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200 gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`bg-gray-700 h-0.5 w-5 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`bg-gray-700 h-0.5 w-5 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`bg-gray-700 h-0.5 w-5 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-6 py-4">
            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-1 mb-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => handleMobileLinkClick(href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeLink === href
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {activeLink === href && (
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  )}
                  {label}
                </Link>
              ))}
            </nav>

            {/* Mobile Divider */}
            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/garage_sarohaccu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-pink-100 text-gray-500 hover:text-pink-600 transition-all duration-200"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1W7zPmpgC4/?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 text-gray-500 hover:text-blue-600 transition-all duration-200"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                </div>
                <Link
                  href="/contact"
                  onClick={() => handleMobileLinkClick("/contact")}
                  className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[65px]" />
    </>
  );
};

export default Header;
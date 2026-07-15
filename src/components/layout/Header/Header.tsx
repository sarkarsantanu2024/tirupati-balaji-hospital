"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationData, topBarLinks } from "@/data/navigation";
import { useScrollY } from "@/hooks/useInView";
import { useUIStore, useAppointmentStore } from "@/store/uiStore";
import { cn } from "@/lib/utils";

export default function Header() {
  const scrollY = useScrollY();
  const { mobileMenuOpen, setMobileMenuOpen } = useUIStore();
  const { openModal } = useAppointmentStore();

  const isScrolled = scrollY > 60;

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setMobileMenuOpen]);

  return (
    <>
      {/* Top Bar – Mobile */}
      <div className="bg-primary-800 text-white py-1.5 hidden md:block lg:hidden">
        <div className="flex items-center justify-center gap-4 overflow-x-auto scrollbar-hide px-10">
          {topBarLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-white/80 hover:text-accent-300 transition-colors whitespace-nowrap text-[11px]"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 10 }}
              >
                phone
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Top Bar – Desktop */}
      <div className="bg-primary-800 text-white text-sm py-2 hidden lg:block">
        <div className="flex items-center justify-between px-10">
          <div className="flex items-center gap-6">
            {topBarLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 text-white/80 hover:text-accent-300 transition-colors"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 13 }}
                >
                  phone
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 text-white/70 text-xs">
            <span>Emergency: Available 24×7</span>
            <span className="w-px h-4 bg-white/20" />
            <a
              href="mailto:info@tirupoticarebalaji.com"
              className="hover:text-white transition-colors"
            >
              info@tirupoticarebalaji.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-[100] transition-all duration-300",
          isScrolled
            ? "bg-white shadow-md py-2"
            : "bg-white/95 backdrop-blur-md shadow-sm py-3",
        )}
      >
        <div className="px-10 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/images/brand-logo.jpeg"
              alt="Tirupoti Balaji Multi-Specialty Hospital"
              width={48}
              height={48}
              priority
              className="w-12 h-12 rounded-xl object-cover shrink-0"
            />
            <div className="hidden sm:block leading-tight">
              <div className="font-extrabold text-primary-700 text-lg leading-none">
                Tirupoti Balaji
              </div>
            </div>
          </Link>

          {/* Desktop Nav — links disabled while only the home page is live */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navigationData.map((item) => (
              <span
                key={item.label}
                aria-disabled="true"
                title="Coming soon"
                className="flex items-center px-3 py-2 rounded-lg font-semibold text-sm text-neutral-400 cursor-not-allowed select-none"
              >
                {item.label}
              </span>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              className="p-2 rounded-lg text-neutral-500 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              aria-label="Search"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 18 }}
              >
                search
              </span>
            </button>
            <button
              onClick={() => openModal()}
              className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-button hover:shadow-lg hover:-translate-y-0.5 text-sm"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 15 }}
              >
                calendar_today
              </span>
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 22 }}
              >
                close
              </span>
            ) : (
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 22 }}
              >
                menu
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[99] transition-all duration-300",
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-neutral-900/50 transition-opacity",
            mobileMenuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl flex flex-col transition-transform duration-300",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-neutral-100 bg-gradient-to-r from-primary-600 to-secondary-500">
            <span className="font-bold text-white text-lg">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 18 }}
              >
                close
              </span>
            </button>
          </div>

          {/* Mobile Nav Links — disabled while only the home page is live */}
          <div className="flex-1 overflow-y-auto py-4">
            {navigationData.map((item) => (
              <div key={item.label} className="border-b border-neutral-50">
                <span
                  aria-disabled="true"
                  className="block px-5 py-3.5 text-neutral-400 font-semibold cursor-not-allowed select-none"
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Book Appointment CTA */}
          <div className="p-5 border-t border-neutral-100 space-y-3">
            <button
              onClick={() => {
                openModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3.5 rounded-xl transition-colors"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 18 }}
              >
                calendar_today
              </span>
              Book Appointment
            </button>
            <a
              href="tel:08662500108"
              className="w-full flex items-center justify-center gap-2 border-2 border-primary-200 text-primary-600 font-semibold py-3 rounded-xl hover:bg-primary-50 transition-colors text-sm"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 16 }}
              >
                phone
              </span>
              Emergency: 0866-250-0108
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

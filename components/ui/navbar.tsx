"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["hero", "about", "projects", "skills", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-xl border-b border-zinc-100 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-black font-black text-2xl tracking-tighter relative group"
          whileHover={{ scale: 1.05 }}
        >
          TRK<span className="text-zinc-300">.</span>
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${
                  active === link.href.slice(1)
                    ? "text-black"
                    : "text-zinc-400 hover:text-black"
                }`}
              >
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill-bw"
                    className="absolute inset-0 bg-zinc-100 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, backgroundColor: "#333" }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-xl"
        >
          Hire Me ✨
        </motion.a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black p-2 flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-[2px] bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-[2px] bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-[2px] bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden bg-white border-t border-zinc-100 shadow-2xl"
          >
            <ul className="flex flex-col py-6 px-6 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-zinc-400 hover:text-black transition-colors text-xs font-black uppercase tracking-[0.3em]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

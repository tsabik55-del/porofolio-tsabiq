"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-purple-900/20"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>

        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">
                Hi, I'm <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-gradient-purple">
                  Tsabiq Riyu Kautsar
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-700 dark:text-purple-200 mt-4 font-light">
                Web Developer & Designer
              </p>
            </>
          }
        >
          <Image
            src="/foto_saya.jpg"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-3xl object-cover h-full object-left-top shadow-2xl"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* About Section */}
      <section className="min-h-screen bg-gradient-to-br from-purple-50/50 via-white to-purple-50/50 dark:from-slate-900 dark:via-slate-950 dark:to-purple-900/10 section-padding relative overflow-hidden">
        {/* Accent element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/10 dark:bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
            About <span className="text-gradient-purple">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-700 dark:text-purple-100 mb-4 leading-relaxed font-light">
                Saya seorang web developer yang passionate dalam menciptakan
                pengalaman digital yang menarik dan fungsional. Dengan keahlian
                dalam front-end dan back-end development, saya siap mengubah ide
                Anda menjadi kenyataan.
              </p>
              <p className="text-lg text-slate-700 dark:text-purple-100 leading-relaxed font-light">
                Saya fokus pada clean code, user experience, dan performance
                optimization.
              </p>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden hover-lift glow-purple">
              <Image
                src="/foto_saya.jpg"
                alt="profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen section-padding bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Left accent */}
        <div className="absolute left-0 top-1/2 w-96 h-96 bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">
            Featured <span className="text-gradient-purple">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="group bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden hover-lift border border-purple-100 dark:border-purple-500/20 transition-all duration-500 hover:border-purple-400 dark:hover:border-purple-400">
              <div className="relative h-64 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
                  alt="project 1"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  E-commerce Platform
                </h3>
                <p className="text-slate-600 dark:text-purple-200/70 mb-4 font-light">
                  Platform belanja online dengan fitur pembayaran dan manajemen
                  inventory.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Node.js</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden hover-lift border border-purple-100 dark:border-purple-500/20 transition-all duration-500 hover:border-purple-400 dark:hover:border-purple-400">
              <div className="relative h-64 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="project 2"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Analytics Dashboard
                </h3>
                <p className="text-slate-600 dark:text-purple-200/70 mb-4 font-light">
                  Dashboard analytics real-time dengan visualisasi data yang
                  interaktif.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="tech-badge">Next.js</span>
                  <span className="tech-badge">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden hover-lift border border-purple-100 dark:border-purple-500/20 transition-all duration-500 hover:border-purple-400 dark:hover:border-purple-400">
              <div className="relative h-64 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-adf4e565e479?w=600&h=400&fit=crop"
                  alt="project 3"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Mobile App
                </h3>
                <p className="text-slate-600 dark:text-purple-200/70 mb-4 font-light">
                  Aplikasi mobile untuk manajemen tugas dengan sinkronisasi
                  cloud.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="tech-badge">Flutter</span>
                  <span className="tech-badge">Firebase</span>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="group bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden hover-lift border border-purple-100 dark:border-purple-500/20 transition-all duration-500 hover:border-purple-400 dark:hover:border-purple-400">
              <div className="relative h-64 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                  alt="project 4"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Social Network
                </h3>
                <p className="text-slate-600 dark:text-purple-200/70 mb-4 font-light">
                  Platform media sosial dengan fitur messaging dan video
                  streaming.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="tech-badge">Vue.js</span>
                  <span className="tech-badge">GraphQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen bg-gradient-to-br from-purple-50/50 via-white to-purple-50/50 dark:from-slate-900 dark:via-slate-950 dark:to-purple-900/10 section-padding relative overflow-hidden">
        {/* Right accent */}
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-purple-400/5 dark:bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">
            Skills & <span className="text-gradient-purple">Technologies</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-purple-100 dark:border-purple-500/20 backdrop-blur-sm hover:shadow-lg hover:border-purple-400 transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Frontend
              </h3>
              <ul className="space-y-3">
                <li className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="text-slate-700 dark:text-purple-100">
                    React / Next.js
                  </span>
                </li>
                <li className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="text-slate-700 dark:text-purple-100">
                    TypeScript
                  </span>
                </li>
                <li className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="text-slate-700 dark:text-purple-100">
                    Tailwind CSS
                  </span>
                </li>
                <li className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="text-slate-700 dark:text-purple-100">
                    Vue.js
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-purple-100 dark:border-purple-500/20 backdrop-blur-sm hover:shadow-lg hover:border-purple-400 transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Backend
              </h3>
              <ul className="space-y-3">
                <li className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="text-slate-700 dark:text-purple-100">
                    Node.js / Express
                  </span>
                </li>
                <li className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="text-slate-700 dark:text-purple-100">
                    Python / Django
                  </span>
                </li>
                <li className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="text-slate-700 dark:text-purple-100">
                    PostgreSQL
                  </span>
                </li>
                <li className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="text-slate-700 dark:text-purple-100">
                    MongoDB
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-purple-100 dark:border-purple-500/20 backdrop-blur-sm hover:shadow-lg hover:border-purple-400 transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Tools & Others
              </h3>
              <ul className="space-y-3">
                <li className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="text-slate-700 dark:text-purple-100">
                    Git & GitHub
                  </span>
                </li>
                <li className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="text-slate-700 dark:text-purple-100">
                    Docker
                  </span>
                </li>
                <li className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="text-slate-700 dark:text-purple-100">
                    AWS / Firebase
                  </span>
                </li>
                <li className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="text-slate-700 dark:text-purple-100">
                    UI/UX Design
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen section-padding bg-white dark:bg-slate-950 flex items-center relative overflow-hidden">
        {/* Bottom accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">
            Let's <span className="text-gradient-purple">Connect</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-700 dark:text-purple-100 mb-8 leading-relaxed font-light">
                Saya selalu terbuka untuk peluang baru dan kolaborasi menarik.
                Jangan ragu untuk menghubungi saya untuk diskusi proyek atau
                pertanyaan lainnya.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center text-lg text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  ✉️ Email: your.email@example.com
                </a>
                <a
                  href="https://linkedin.com"
                  className="flex items-center text-lg text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  💼 LinkedIn: /in/tsabiq
                </a>
                <a
                  href="https://github.com"
                  className="flex items-center text-lg text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  🐙 GitHub: @tsabiq
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 dark:from-purple-700 dark:via-purple-800 dark:to-purple-900 rounded-2xl p-8 text-white shadow-2xl hover-lift border border-purple-500/30">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm placeholder-white/70 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm placeholder-white/70 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                />
                <textarea
                  placeholder="Pesan Anda"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm placeholder-white/70 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent resize-none transition-all"
                ></textarea>
                <button className="w-full bg-white text-purple-700 font-bold py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-purple-900 dark:from-slate-950 dark:to-purple-950 text-white py-12 px-4 md:px-20 border-t border-purple-500/20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-purple-200 font-light">
            © 2024 Tsabiq Riyu Kautsar. All rights reserved. ✨
          </p>
        </div>
      </footer>
    </main>
  );
}

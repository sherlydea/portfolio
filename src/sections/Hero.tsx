"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SocialButton from "@/components/ui/SocialButton";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeadset,
  FaChartBar,
  FaPalette,
} from "react-icons/fa";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // WARNA STICKER DIUBAH MENJADI KOMBINASI MATCHA-SALMON-GOLD YANG UNIK
  const stickers = [
    {
      icon: <FaHeadset size={14} />,
      label: "IT Support",
      rotate: "-rotate-6",
      pos: "-top-5 -left-6",
      color: "text-[#0B0F17] bg-[#CCFF00]", // Neon Matcha
      delay: 0,
    },
    {
      icon: <FaChartBar size={14} />,
      label: "System Analysis",
      rotate: "rotate-3",
      pos: "top-1/2 -right-8 -translate-y-1/2",
      color: "text-white bg-[#FF8B72]", // Salty Salmon
      delay: 0.6,
    },
    {
      icon: <FaPalette size={14} />,
      label: "UI/UX Design",
      rotate: "rotate-6",
      pos: "-bottom-5 -left-4",
      color: "text-[#0B0F17] bg-[#E3D5CA]", // Creamy Gold
      delay: 1.2,
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#0B0F17] overflow-hidden">
      {/* DOT GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(204,255,0,.3) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* SOFT BLOBS WITH NEW COMPLEMENTARY COLORS */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#CCFF00]/5 blur-[100px]" />
      <div className="absolute top-1/3 -right-24 w-[380px] h-[380px] rounded-full bg-[#FF8B72]/5 blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-[#E3D5CA]/5 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen pt-28">
          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            {/* LABEL */}
            <span className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.35em] text-[#CCFF00] text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
              Information Systems Student
            </span>

            {/* NAME */}
            <h1 className="mt-6 leading-none relative">
              <span className="block text-white text-7xl xl:text-8xl font-extrabold tracking-tight">
                Sherly
              </span>
              <span className="relative inline-block mt-2 text-7xl xl:text-8xl font-extrabold bg-gradient-to-r from-[#FF8B72] via-[#E3D5CA] to-[#CCFF00] bg-clip-text text-transparent">
                Dea Aulia
                {/* SQUIGGLE DOODLE */}
                <svg
                  viewBox="0 0 300 20"
                  className="absolute -bottom-3 left-0 w-full h-4"
                  fill="none"
                >
                  <path
                    d="M2 12C40 2 70 20 110 10C150 0 180 18 220 8C250 1 270 14 298 6"
                    stroke="#FF8B72"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* HEADLINE */}
            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-white leading-tight">
              Ready to support{" "}
              <br className="md:hidden" />
              <span className="text-[#CCFF00]">your IT operations.</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 text-lg leading-8 text-slate-400">
              Mahasiswa Sistem Informasi UPN &quot;Veteran&quot; Jawa Timur yang memiliki minat
              pada bidang{" "}
              <span className="inline-flex items-center rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-2.5 py-0.5 text-[#CCFF00] font-medium">
                IT Support
              </span>{" "}
              <span className="inline-flex items-center rounded-full bg-[#FF8B72]/10 border border-[#FF8B72]/30 px-2.5 py-0.5 text-[#FF8B72] font-medium">
                System Analysis
              </span>{" "}
              dan{" "}
              <span className="inline-flex items-center rounded-full bg-[#E3D5CA]/10 border border-[#E3D5CA]/30 px-2.5 py-0.5 text-[#E3D5CA] font-medium">
                UI/UX Design
              </span>
              . Saya senang mempelajari hal baru, mampu bekerja sama dalam tim,
              cepat beradaptasi dengan lingkungan kerja, serta berkomitmen
              memberikan hasil terbaik dalam setiap tanggung jawab yang diberikan.
            </p>

            {/* ACTION & SOCIAL BUTTONS */}
            <div className="mt-12 mb-20 flex flex-wrap items-center gap-6">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center rounded-xl bg-slate-800 px-6 py-3.5 text-xs font-bold tracking-wider text-[#CCFF00] transition-all duration-200 hover:bg-[#CCFF00] hover:text-[#0B0F17] hover:-translate-y-0.5 active:translate-y-0 shadow-md border border-slate-700 cursor-pointer"
              >
                View My Projects
              </button>

              <div className="flex items-center gap-4">
                <SocialButton
                  href="https://github.com/sherlydea"
                  icon={<FaGithub size={20} />}
                />
                <SocialButton
                  href="https://www.linkedin.com/in/sherly-dea-aulia-17aa483b1/"
                  icon={<FaLinkedin size={20} />}
                />
                <SocialButton
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sherlydeaauliaa@gmail.com"
                  icon={<FaEnvelope size={20} />}
                />
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[440px]">
              {/* FLOATING STICKERS */}
              {stickers.map((s, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    delay: s.delay,
                    ease: "easeInOut",
                  }}
                  className={`absolute z-20 ${s.pos} ${s.rotate} ${s.color} flex items-center gap-2 rounded-2xl border-2 border-white/80 px-3.5 py-2 text-xs font-bold shadow-lg`}
                >
                  {s.icon}
                  {s.label}
                </motion.div>
              ))}

              {/* CARD */}
              <div className="relative overflow-hidden rounded-[48px_16px_48px_16px] border border-white/10 bg-[#171B26]/80 backdrop-blur-xl">
                {/* PHOTO */}
                <div className="relative h-[600px]">
                  <Image
                    src="/images/profil-sherly.png"
                    alt="Sherly Dea Aulia"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>

                {/* STATUS OVERLAY (KEMBALI KE KAPSUL HIJAU DESAIN AWAL) */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/80 to-transparent px-8 pb-8 pt-24">
                  <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
                    </span>
                    <span className="text-sm font-medium text-emerald-300">
                      Open for Internship Opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono uppercase tracking-[0.4em] text-[10px] text-slate-500">
          scroll
        </span>
        <div className="relative w-6 h-10 rounded-full border-2 border-[#E3D5CA]/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#E3D5CA]"
          />
        </div>
      </motion.div>
    </section>
  );
}
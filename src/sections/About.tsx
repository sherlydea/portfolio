"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

const FOCUS_ITEMS = [
  {
    code: "01",
    title: "System Analysis",
    desc: "Memetakan proses & kebutuhan sistem secara terstruktur.",
    color: "group-hover:border-[#CCFF00]/40",
    accent: "group-hover:via-[#CCFF00]/50"
  },
  {
    code: "02",
    title: "Business Process Analysis",
    desc: "Menelaah alur bisnis untuk menemukan celah perbaikan.",
    color: "group-hover:border-[#FF8B72]/40",
    accent: "group-hover:via-[#FF8B72]/50"
  },
  {
    code: "03",
    title: "UI/UX Design",
    desc: "Merancang antarmuka yang jelas dan mudah digunakan.",
    color: "group-hover:border-[#E3D5CA]/40",
    accent: "group-hover:via-[#E3D5CA]/50"
  },
  {
    code: "04",
    title: "Software Development",
    desc: "Menerjemahkan rancangan menjadi aplikasi yang berjalan.",
    color: "group-hover:border-[#CCFF00]/40",
    accent: "group-hover:via-[#CCFF00]/50"
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0B0F17] overflow-hidden py-32"
    >
      {/* DOT GRID BACKGROUND — Menyelaraskan dengan Blueprint Hero baru */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(204,255,0,.2) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* SOFT CANDY GLOWS */}
      <div className="absolute -top-44 left-0 w-[500px] h-[500px] bg-[#CCFF00]/5 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF8B72]/5 blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#CCFF00]/20 bg-[#CCFF00]/5 mb-4">
            <span className="w-1 h-1 rounded-full bg-[#CCFF00]" />
            <p className="text-[#CCFF00] uppercase tracking-[.35em] text-[10px] font-bold font-mono">
              About Me
            </p>
          </div>

          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Mengenal Saya Lebih Dekat
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-slate-400 leading-8 text-lg">
            Saya adalah mahasiswa Sistem Informasi di Universitas
            Pembangunan Nasional &quot;Veteran&quot; Jawa Timur yang memiliki
            minat pada bidang system analysis, business process analysis,
            UI/UX design, dan software development. Saya senang memahami
            kebutuhan pengguna, menganalisis proses bisnis, serta merancang
            solusi digital yang mudah digunakan dan memberikan nilai bagi
            pengguna.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              { text: "System Analysis", style: "border-[#CCFF00]/20 bg-[#CCFF00]/5 text-[#CCFF00]" },
              { text: "Business Process Analysis", style: "border-[#FF8B72]/20 bg-[#FF8B72]/5 text-[#FF8B72]" },
              { text: "UI/UX Design", style: "border-[#E3D5CA]/20 bg-[#E3D5CA]/5 text-[#E3D5CA]" },
              { text: "Software Development", style: "border-[#CCFF00]/20 bg-[#CCFF00]/5 text-[#CCFF00]" }
            ].map(
              (tag) => (
                <span
                  key={tag.text}
                  className={`rounded-full border px-4 py-1.5 font-mono text-xs font-semibold tracking-wide ${tag.style}`}
                >
                  {tag.text}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* ================= CURRENT FOCUS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF8B72]/20 bg-[#FF8B72]/5 mb-4">
              <span className="w-1 h-1 rounded-full bg-[#FF8B72]" />
              <p className="text-[#FF8B72] uppercase tracking-[.35em] text-[10px] font-bold font-mono">
                Current Focus
              </p>
            </div>
            <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Bidang yang Sedang Saya Kembangkan
            </h3>
            <p className="mt-8 max-w-3xl mx-auto text-slate-400 leading-8 text-lg">
              Saya berfokus pada pengembangan solusi digital yang dimulai dari
              memahami kebutuhan pengguna, menganalisis proses bisnis, hingga
              merancang sistem yang efektif dan mudah digunakan.
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              Saat ini saya terus mengembangkan kemampuan di bidang{" "}
              <span className="text-white font-semibold underline decoration-[#CCFF00] decoration-2 underline-offset-4">System Analysis</span>,{" "}
              <span className="text-white font-semibold underline decoration-[#FF8B72] decoration-2 underline-offset-4">Business Analysis</span>,{" "}
              <span className="text-white font-semibold underline decoration-[#E3D5CA] decoration-2 underline-offset-4">UI/UX Design</span>, dan{" "}
              <span className="text-white font-semibold underline decoration-[#CCFF00] decoration-2 underline-offset-4">Software Development</span>{" "}
              melalui berbagai proyek akademik maupun personal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {FOCUS_ITEMS.map((item) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={item.code}
                className={`group relative rounded-3xl border border-slate-800 bg-[#121722]/60 p-8 transition-all duration-300 ${item.color}`}
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-xs font-bold text-slate-600 group-hover:text-white transition-colors">
                    // {item.code}
                  </span>

                  <div>
                    <h4 className="text-white text-lg font-bold tracking-tight">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-400 leading-6 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <span className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent ${item.accent} transition-colors`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
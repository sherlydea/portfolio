"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EXPERIENCES = [
  {
    company: "PT Jaring Tuban Televisi (JTV) Bojonegoro",
    role: "Magang",
    period: "Maret 2023 – Mei 2023",
    image: "/images/experience/jtv-activity.jpg", // FOTO AKTIVITAS MAGANG
    description: [
      "Terlibat dalam produksi dan pengelolaan konten digital.",
      "Berkolaborasi dengan tim dalam proses produksi siaran.",
      "Mengikuti alur kerja profesional di lingkungan media.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#0B0F17] py-32 overflow-hidden">
      
      {/* DOT GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(204,255,0,.15) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* SOFT GLOWS */}
      <div className="absolute top-[-100px] right-1/4 w-[500px] h-[500px] bg-[#CCFF00]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] left-1/4 w-[500px] h-[500px] bg-[#FF8B72]/5 blur-[120px] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#CCFF00]/20 bg-[#CCFF00]/5 mb-4">
            <span className="w-1 h-1 rounded-full bg-[#CCFF00]" />
            <p className="text-[#CCFF00] uppercase tracking-[.35em] text-[10px] font-bold font-mono">
              Career Path
            </p>
          </div>

          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Experience
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-slate-400 leading-7 text-base">
            Pengalaman kerja profesional dan aktivitas magang industri.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl border border-slate-800/80 bg-[#121722]/40 backdrop-blur-xl transition duration-300 hover:border-[#CCFF00]/20"
            >

              {/* IMAGE AKTIVITAS (Desain Frame Kotak Sleek) */}
              <div className="w-full md:w-[240px] h-[150px] relative rounded-2xl overflow-hidden border border-slate-800 bg-[#161F30] flex-shrink-0 group">
                {exp.image ? (
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs font-mono text-slate-500">
                    No Preview Available
                  </div>
                )}
              </div>

              {/* TEXT CONTENT */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {exp.company}
                </h3>

                {/* INFO BAR (Desain Minimalis Tanpa Bubble) */}
                <div className="mt-2 flex flex-wrap items-center gap-x-3 text-xs font-mono">
                  <span className="text-[#FF8B72] font-bold tracking-wider uppercase">
                    {exp.role}
                  </span>
                  <span className="text-slate-800">|</span>
                  <span className="text-slate-400 font-medium">
                    {exp.period}
                  </span>
                </div>

                {/* LIST DESKRIPSI */}
                <ul className="mt-5 space-y-2.5 text-slate-400 text-sm leading-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-[#CCFF00] font-bold font-mono mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
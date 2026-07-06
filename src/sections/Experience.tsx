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
    <section id="experience" className="relative py-28 bg-[#070B18]">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white">
            Experience
          </h2>
          <p className="text-slate-400 mt-4">
            Pengalaman kerja profesional
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="space-y-10">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              {/* IMAGE AKTIVITAS */}
              <div className="w-full md:w-[220px] h-[140px] relative rounded-xl overflow-hidden border border-white/10 bg-white/10 flex-shrink-0">
                {exp.image ? (
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">
                    No Image
                  </div>
                )}
              </div>

              {/* TEXT */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {exp.company}
                </h3>

                <p className="text-cyan-400 text-sm mt-1">
                  {exp.role} • {exp.period}
                </p>

                <ul className="mt-4 space-y-1 text-slate-300 text-sm leading-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      {item}
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
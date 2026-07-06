"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Pemrograman",
    items: [
      "PHP",
      "Java",
      "JavaScript",
      "Dart",
      "HTML",
      "CSS",
      "Kotlin",
    ],
  },
  {
    title: "Tools",
    items: [
      "VSCode",
      "Android Studio",
      "NetBeans",
      "Laragon",
      "GitHub",
      "Figma",
      "XAMPP",
      "Microsoft Office",
    ],
  },
  {
    title: "Framework",
    items: [
      "Flutter",
      "Laravel",
    ],
  },
  {
    title: "Basis Data",
    items: [
      "MySQL",
      "phpMyAdmin",
      "HeidiSQL",
    ],
  },
  {
    title: "Analisis Sistem",
    items: [
      "Requirement Gathering",
      "Analisis Proses Bisnis",
      "Flowchart",
      "Use Case Diagram",
      "Activity Diagram",
      "Entity Relationship Diagram (ERD)",
      "Perancangan Basis Data",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem Solving",
      "Komunikasi",
      "Kerja Sama Tim",
      "Manajemen Waktu",
      "Adaptasi",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#070B18] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">Skills</h2>
          <p className="text-slate-400 mt-4">
            Keterampilan teknis dan non-teknis yang saya miliki
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-500/30 transition"
            >

              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {section.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
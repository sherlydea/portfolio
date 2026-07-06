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
  },
  {
    code: "02",
    title: "Business Process Analysis",
    desc: "Menelaah alur bisnis untuk menemukan celah perbaikan.",
  },
  {
    code: "03",
    title: "UI/UX Design",
    desc: "Merancang antarmuka yang jelas dan mudah digunakan.",
  },
  {
    code: "04",
    title: "Software Development",
    desc: "Menerjemahkan rancangan menjadi aplikasi yang berjalan.",
  },
];

const QUICK_FACTS = [
  {
    icon: FaMapMarkerAlt,
    label: "Lokasi",
    value: "Surabaya, Indonesia",
  },
  {
    icon: FaGraduationCap,
    label: "Pendidikan",
    value: "Sistem Informasi",
    sub: 'UPN "Veteran" Jawa Timur',
  },
  {
    icon: FaBriefcase,
    label: "Status",
    value: "Open to Internship",
    accent: true,
  },
  {
    icon: FaLaptopCode,
    label: "Tech Stack",
    value: "Figma · Flutter · PHP",
    sub: "Java · MySQL",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0A0F1F] overflow-hidden py-32"
    >
      {/* Background Grid — same blueprint system as Hero */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(91,141,239,.5) 1px, transparent 1px),linear-gradient(90deg, rgba(91,141,239,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(91,141,239,.8) 1px, transparent 1px),linear-gradient(90deg, rgba(91,141,239,.8) 1px, transparent 1px)",
          backgroundSize: "192px 192px",
        }}
      />

      {/* Glow */}
      <div className="absolute -top-44 left-0 w-[500px] h-[500px] bg-[#5B8DEF]/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F2A93B]/[0.06] blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3">

            <p className="text-[#8FA8E8] uppercase tracking-[.35em] text-xs font-mono">
              About Me
            </p>
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#EEF1F8]">
            Mengenal Saya Lebih Dekat
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-[#A3ADC9] leading-8 text-lg">
            Saya adalah mahasiswa Sistem Informasi di Universitas
            Pembangunan Nasional &quot;Veteran&quot; Jawa Timur yang memiliki
            minat pada bidang system analysis, business process analysis,
            UI/UX design, dan software development. Saya senang memahami
            kebutuhan pengguna, menganalisis proses bisnis, serta merancang
            solusi digital yang mudah digunakan dan memberikan nilai bagi
            pengguna.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {["System Analysis", "Business Process Analysis", "UI/UX Design", "Software Development"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#2B3B66] bg-[#101B36]/60 px-4 py-1.5 font-mono text-xs tracking-wide text-[#C4CDE8]"
                >
                  {tag}
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
          className="mt-28"
        >
          <div className="text-center mb-14">
            <p className="text-[#8FA8E8] uppercase tracking-[.35em] text-xs font-mono">
              Current Focus
            </p>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold text-[#EEF1F8]">
              Bidang yang Sedang Saya Kembangkan
            </h3>
           <p className="mt-8 max-w-3xl mx-auto text-[#A3ADC9] leading-8 text-lg">
  Saya berfokus pada pengembangan solusi digital yang dimulai dari
  memahami kebutuhan pengguna, menganalisis proses bisnis, hingga
  merancang sistem yang efektif dan mudah digunakan.

  Saat ini saya terus mengembangkan kemampuan di bidang
  <span className="text-[#EEF1F8] font-medium"> System Analysis</span>,
  <span className="text-[#EEF1F8] font-medium"> Business Analysis</span>,
  <span className="text-[#EEF1F8] font-medium"> UI/UX Design</span>,
  dan
  <span className="text-[#EEF1F8] font-medium"> Software Development</span>
  melalui berbagai proyek akademik maupun personal.
</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {FOCUS_ITEMS.map((item) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={item.code}
                className="group relative rounded-2xl border border-[#25335C] bg-[#0D1630]/60 p-7 hover:border-[#5B8DEF]/60 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-xs text-[#4A5580] group-hover:text-[#F2A93B] transition-colors">
                    {item.code}
                  </span>

                  <div>
                    <h4 className="text-[#EEF1F8] text-lg font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-[#8892B0] leading-6">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <span className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-[#5B8DEF]/0 via-[#5B8DEF]/30 to-[#5B8DEF]/0 group-hover:via-[#F2A93B]/50 transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
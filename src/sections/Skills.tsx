"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaWrench,
  FaLayerGroup,
  FaDatabase,
  FaProjectDiagram,
  FaUserFriends,
  FaPhp,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaLaptopCode,
  FaTerminal,
  FaServer,
  FaFileInvoice,
  FaBrain,
  FaComments,
  FaClock,
  FaSyncAlt,
} from "react-icons/fa";
import { 
  SiKotlin, 
  SiDart, 
  SiFlutter, 
  SiLaravel, 
  SiMysql, 
  SiAndroidstudio 
} from "react-icons/si";

const sections = [
  {
    title: "Pemrograman",
    icon: <FaCode className="text-[#CCFF00]" />,
    accentColor: "group-hover:border-[#CCFF00]/40",
    titleColor: "text-[#CCFF00]",
    items: [
      { name: "PHP", icon: <FaPhp size={15} /> },
      { name: "Java", icon: <FaJava size={15} /> },
      { name: "JavaScript", icon: <FaJs size={15} /> },
      { name: "Dart", icon: <SiDart size={13} /> },
      { name: "HTML", icon: <FaHtml5 size={15} /> },
      { name: "CSS", icon: <FaCss3Alt size={15} /> },
      { name: "Kotlin", icon: <SiKotlin size={13} /> },
    ],
  },
  {
    title: "Tools",
    icon: <FaWrench className="text-[#FF8B72]" />,
    accentColor: "group-hover:border-[#FF8B72]/40",
    titleColor: "text-[#FF8B72]",
    items: [
      { name: "VSCode", icon: <FaLaptopCode size={14} /> }, // Menggunakan FaLaptopCode yang aman dari error
      { name: "Android Studio", icon: <SiAndroidstudio size={14} /> },
      { name: "NetBeans", icon: <FaLaptopCode size={14} /> },
      { name: "Laragon", icon: <FaTerminal size={14} /> },
      { name: "GitHub", icon: <FaGithub size={14} /> },
      { name: "Figma", icon: <FaFigma size={14} /> },
      { name: "XAMPP", icon: <FaServer size={14} /> },
      { name: "Microsoft Office", icon: <FaFileInvoice size={14} /> },
    ],
  },
  {
    title: "Framework",
    icon: <FaLayerGroup className="text-[#E3D5CA]" />,
    accentColor: "group-hover:border-[#E3D5CA]/40",
    titleColor: "text-[#E3D5CA]",
    items: [
      { name: "Flutter", icon: <SiFlutter size={13} /> },
      { name: "Laravel", icon: <SiLaravel size={14} /> },
    ],
  },
  {
    title: "Basis Data",
    icon: <FaDatabase className="text-[#CCFF00]" />,
    accentColor: "group-hover:border-[#CCFF00]/40",
    titleColor: "text-[#CCFF00]",
    items: [
      { name: "MySQL", icon: <SiMysql size={16} /> },
      { name: "phpMyAdmin", icon: <FaDatabase size={13} /> },
      { name: "HeidiSQL", icon: <FaDatabase size={13} /> },
    ],
  },
  {
    title: "Analisis Sistem",
    icon: <FaProjectDiagram className="text-[#FF8B72]" />,
    accentColor: "group-hover:border-[#FF8B72]/40",
    titleColor: "text-[#FF8B72]",
    items: [
      { name: "Requirement Gathering", icon: <FaFileInvoice size={13} /> },
      { name: "Analisis Proses Bisnis", icon: <FaProjectDiagram size={13} /> },
      { name: "Flowchart", icon: <FaProjectDiagram size={13} /> },
      { name: "Use Case Diagram", icon: <FaProjectDiagram size={13} /> },
      { name: "Activity Diagram", icon: <FaProjectDiagram size={13} /> },
      { name: "Entity Relationship Diagram (ERD)", icon: <FaDatabase size={13} /> },
      { name: "Perancangan Basis Data", icon: <FaDatabase size={13} /> },
    ],
  },
  {
    title: "Soft Skills",
    icon: <FaUserFriends className="text-[#E3D5CA]" />,
    accentColor: "group-hover:border-[#E3D5CA]/40",
    titleColor: "text-[#E3D5CA]",
    items: [
      { name: "Problem Solving", icon: <FaBrain size={13} /> },
      { name: "Komunikasi", icon: <FaComments size={13} /> },
      { name: "Kerja Sama Tim", icon: <FaUserFriends size={13} /> },
      { name: "Manajemen Waktu", icon: <FaClock size={13} /> },
      { name: "Adaptasi", icon: <FaSyncAlt size={13} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-[#0B0F17] text-white overflow-hidden">
      
      {/* DOT GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(204,255,0,.15) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* SOFT BLOBS */}
      <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-[#CCFF00]/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#FF8B72]/5 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#CCFF00]/20 bg-[#CCFF00]/5 mb-4">
            <span className="w-1 h-1 rounded-full bg-[#CCFF00]" />
            <p className="text-[#CCFF00] uppercase tracking-[.35em] text-[10px] font-bold font-mono">
              Expertise
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Skills &amp; Tools</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
            Keterampilan teknis, perangkat analisis, dan soft skills yang saya gunakan untuk mendukung operasional IT.
          </p>
        </motion.div>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-6">

          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className={`group p-8 rounded-3xl border border-slate-800/80 bg-[#121722]/50 backdrop-blur-xl transition-all duration-300 ${section.accentColor}`}
            >
              {/* CATEGORY TITLE WITH ICON */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-base">
                  {section.icon}
                </div>
                <h3 className={`text-lg font-bold tracking-tight ${section.titleColor}`}>
                  {section.title}
                </h3>
              </div>

              {/* PILLS CONTAINER */}
              <div className="flex flex-wrap gap-2.5">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-2xl bg-[#0B0F17]/80 border border-slate-800 text-slate-300 transition-all duration-200 hover:text-white hover:border-slate-700 hover:bg-[#121722]"
                  >
                    <span className="text-slate-400 group-hover:text-inherit">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
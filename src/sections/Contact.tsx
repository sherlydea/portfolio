"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0B0F17] py-32 overflow-hidden">
      
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
      <div className="absolute top-[-100px] left-1/4 w-[500px] h-[500px] bg-[#FF8B72]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-1/4 w-[500px] h-[500px] bg-[#CCFF00]/5 blur-[120px] rounded-full" />

      <div className="relative max-w-4xl mx-auto px-6">

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
              Get In Touch
            </p>
          </div>

          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact
          </h2>
          
          <p className="mt-4 max-w-xl mx-auto text-slate-400 leading-7 text-base">
            Hubungi saya untuk kerja sama, kolaborasi proyek, atau kesempatan berkembang bersama.
          </p>
        </motion.div>

        {/* CONTACT CARDS (Desain Kartu Solid Dop Terpisah) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* EMAIL */}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sherlydeaauliaa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 rounded-2xl border border-slate-800/80 bg-[#121722]/40 backdrop-blur-xl hover:border-[#FF8B72]/30 transition-colors duration-300 group shadow-md flex flex-col justify-between min-h-[180px]"
          >
            <div>
              <Mail className="text-[#FF8B72] mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300" size={22} />
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">Email</p>
              <p className="text-white mt-1.5 text-sm font-semibold tracking-tight break-all">
                sherlydeaauliaa@gmail.com
              </p>
            </div>
            <p className="text-[#FF8B72]/80 text-[11px] font-mono font-bold tracking-wide mt-4">
              Klik untuk kirim email
            </p>
          </motion.a>

          {/* WHATSAPP */}
          <motion.a
            href="https://wa.me/6287716558787"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 rounded-2xl border border-slate-800/80 bg-[#121722]/40 backdrop-blur-xl hover:border-[#CCFF00]/30 transition-colors duration-300 group shadow-md flex flex-col justify-between min-h-[180px]"
          >
            <div>
              <Phone className="text-[#CCFF00] mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300" size={22} />
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">WhatsApp</p>
              <p className="text-white mt-1.5 text-sm font-semibold tracking-tight">
                087716558787
              </p>
            </div>
            <p className="text-[#CCFF00]/80 text-[11px] font-mono font-bold tracking-wide mt-4">
              Chat via WhatsApp
            </p>
          </motion.a>

          {/* LOCATION (Statis Tanpa Hover Klik) */}
          <div className="p-6 rounded-2xl border border-slate-800/80 bg-[#121722]/40 backdrop-blur-xl shadow-md flex flex-col justify-between min-h-[180px]">
            <div>
              <MapPin className="text-slate-400 mb-4 opacity-90" size={22} />
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">Lokasi</p>
              <p className="text-white mt-1.5 text-sm font-semibold tracking-tight">
                Gresik, Jawa Timur
              </p>
            </div>
            <p className="text-slate-500 text-[11px] font-mono font-bold tracking-wide mt-4">
              Indonesia
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
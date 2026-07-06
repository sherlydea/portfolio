"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-[#070B18]">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-white">
            Contact
          </h2>
          <p className="text-slate-400 mt-4">
            Hubungi saya untuk kerja sama atau kesempatan magang
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* EMAIL */}
        <motion.a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sherlydeaauliaa@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-500/40 transition"
>
  <Mail className="text-cyan-400 mb-3" />
  <p className="text-xs text-slate-400">Email</p>
  <p className="text-white mt-1 text-sm font-medium">
    sherlydeaauliaa@gmail.com
  </p>
  <p className="text-cyan-400 text-xs mt-3">
    Klik untuk kirim email →
  </p>
</motion.a>

          {/* WHATSAPP */}
          <motion.a
            href="https://wa.me/6287716558787"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-500/40 transition"
          >
            <Phone className="text-cyan-400 mb-3" />
            <p className="text-xs text-slate-400">WhatsApp</p>
            <p className="text-white mt-1 text-sm font-medium">
              087716558787
            </p>
            <p className="text-cyan-400 text-xs mt-3">
              Chat via WhatsApp →
            </p>
          </motion.a>

          {/* LOCATION */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <MapPin className="text-cyan-400 mb-3" />
            <p className="text-xs text-slate-400">Lokasi</p>
            <p className="text-white mt-1 text-sm font-medium">
              Gresik, Jawa Timur
            </p>
            <p className="text-slate-400 text-xs mt-3">
              Indonesia
            </p>
          </motion.div>

        </div>

        {/* CTA BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-sm">

          </p>
        </motion.div>

      </div>
    </section>
  );
}
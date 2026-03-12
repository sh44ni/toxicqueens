"use client";

import { motion } from "framer-motion";

// Sección de galería
export function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="section-title">Galería</h2>
      <div className="section-divider mt-4" />
      {/* Replace with real images from @toxicqueensbl */}
      <div className="mt-10 columns-1 gap-4 space-y-4 md:columns-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl border border-gold-primary/20 bg-gradient-to-br from-[#1a1a1a] to-[#26200f]"
            style={{ height: `${160 + (index % 3) * 60}px` }}
          >
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/0" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

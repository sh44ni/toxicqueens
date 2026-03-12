"use client";

import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg",
    alt: "Manicure con diseño detallado"
  },
  {
    src: "https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg",
    alt: "Aplicación de extensiones de pestañas"
  },
  {
    src: "https://images.pexels.com/photos/3738344/pexels-photo-3738344.jpeg",
    alt: "Cejas laminadas y definidas"
  },
  {
    src: "https://images.pexels.com/photos/3738364/pexels-photo-3738364.jpeg",
    alt: "Tratamiento facial relajante"
  },
  {
    src: "https://images.pexels.com/photos/3738348/pexels-photo-3738348.jpeg",
    alt: "Uñas acrílicas decoradas"
  },
  {
    src: "https://images.pexels.com/photos/3738363/pexels-photo-3738363.jpeg",
    alt: "Cabello con ondas y estilo"
  },
  {
    src: "https://images.pexels.com/photos/3732655/pexels-photo-3732655.jpeg",
    alt: "Cabello largo y lacio"
  },
  {
    src: "https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg",
    alt: "Aplicación de mascarilla facial"
  },
  {
    src: "https://images.pexels.com/photos/3738340/pexels-photo-3738340.jpeg",
    alt: "Detalle de manicura en proceso"
  }
];

// Sección de galería
export function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="section-title">Galería</h2>
      <div className="section-divider mt-4" />
      <div className="mt-10 columns-1 gap-4 space-y-4 md:columns-3">
        {galleryImages.map((image) => (
          <motion.div
            key={image.src}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl border border-gold-primary/20 bg-black/40"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/5" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

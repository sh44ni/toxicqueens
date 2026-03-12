"use client";

import { motion } from "framer-motion";
import { Eye, Flame, Smile, Sparkles, Star, Wind } from "lucide-react";

const services = [
  { title: "Uñas y Pedicure", icon: Sparkles, desc: "Diseños premium, manicure y pedicure completo.", span: "md:col-span-2" },
  { title: "Pestañas", icon: Eye, desc: "Extensiones, lash lifting y enchinado.", span: "" },
  { title: "Faciales", icon: Smile, desc: "Limpieza profunda, acneico, alta frecuencia, hydrafacial y Dermapen.", span: "md:row-span-2" },
  { title: "Extensiones y Alaciados", icon: Wind, desc: "Extensiones de cabello y alaciados permanentes.", span: "md:col-span-2" },
  { title: "Laminado de Ceja", icon: Eye, desc: "Definición y forma natural con acabado elegante.", span: "" },
  { title: "Wax", icon: Flame, desc: "Depilación profesional para rostro y cuerpo.", span: "" },
  { title: "Blanqueamiento Dental", icon: Star, desc: "Resultados visibles con técnica estética segura.", span: "" }
];

// Sección de servicios en bento grid
export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="section-title">Servicios</h2>
      <div className="section-divider mt-4" />
      <div className="mt-10 grid auto-rows-[180px] gap-4 md:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`glass-card service-card p-5 ${service.span}`}
            >
              <Icon className="h-6 w-6 text-gold-light" />
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-gold-muted">{service.desc}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { MapPin, Phone } from "lucide-react";
import { GoldButton } from "@/components/GoldButton";

// Sección de contacto y ubicación
export function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="section-title">Contacto y Ubicación</h2>
      <div className="section-divider mt-4" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="glass-card space-y-4 p-6">
          <a href="tel:7602144819" className="flex items-center gap-3 text-lg hover:text-gold-light">
            <Phone className="h-5 w-5" /> 760-214-4819
          </a>
          <p className="flex items-center gap-3 text-lg">
            <MapPin className="h-5 w-5" /> 812 Frances Drive, Vista, California
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <GoldButton label="Instagram" onAction={() => window.open("https://instagram.com/toxicqueensbl", "_blank")} />
            <GoldButton label="Facebook" onAction={() => window.open("https://facebook.com", "_blank")} />
          </div>
        </div>
        <div className="glass-card overflow-hidden rounded-xl">
          <iframe
            title="Ubicación Toxic Queens Beauty Studio"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.716610392204!2d-117.263!3d33.2005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDEyJzAyLjAiTiAxMTfCsDE1JzQ2LjgiVw!5e0!3m2!1ses-419!2sus!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}

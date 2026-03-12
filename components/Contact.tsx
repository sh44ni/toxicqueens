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
        <div className="glass-card flex min-h-72 items-center justify-center p-6 text-center text-gold-muted">
          Placeholder de mapa embebido para ubicación del estudio.
        </div>
      </div>
    </section>
  );
}

"use client";

import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { GoldButton } from "@/components/GoldButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Sección de formulario de reservación
export function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setDone(true);
    setTimeout(() => setDone(false), 2000);
  };

  return (
    <section id="reservar" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="section-title">Reservar Cita</h2>
      <div className="section-divider mt-4" />
      <form onSubmit={handleSubmit} className="glass-card mt-10 space-y-4 p-6">
        <div>
          <Label htmlFor="nombre">Nombre</Label>
          <Input id="nombre" required placeholder="Tu nombre completo" />
        </div>
        <div>
          <Label htmlFor="telefono">Teléfono</Label>
          <Input id="telefono" required placeholder="760-214-4819" />
        </div>
        <div>
          <Label htmlFor="servicio">Servicio</Label>
          <Select
            id="servicio"
            defaultValue=""
            required
            options={[
              { value: "", label: "Selecciona un servicio" },
              { value: "uñas", label: "Uñas" },
              { value: "pedicure", label: "Pedicure" },
              { value: "pestañas", label: "Pestañas" },
              { value: "extensiones", label: "Extensiones de cabello" },
              { value: "faciales", label: "Faciales" },
              { value: "wax", label: "Wax" },
              { value: "dental", label: "Blanqueamiento dental" }
            ]}
          />
        </div>
        <div>
          <Label htmlFor="fecha">Fecha preferida</Label>
          <Input id="fecha" type="date" required />
        </div>
        <div>
          <Label htmlFor="mensaje">Mensaje</Label>
          <Textarea id="mensaje" placeholder="Cuéntanos lo que deseas para tu cita" />
        </div>
        <button type="submit" disabled={loading} className="gold-button shimmer-sweep relative inline-flex h-11 min-w-36 items-center justify-center rounded-md px-5 text-sm font-semibold text-black transition-all duration-200 disabled:opacity-70">
          <span className="relative z-10 flex items-center gap-2">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : done ? <Check className="h-4 w-4" /> : null}
            {loading ? "Enviando" : done ? "Solicitud enviada" : "Enviar solicitud"}
          </span>
        </button>
        {done ? <p className="text-sm text-gold-light">Tu solicitud fue enviada. Te contactaremos para confirmar tu cita.</p> : null}
      </form>
      <div className="mt-8">
        <p className="mb-4 text-gold-muted">O contáctanos directamente</p>
        <div className="flex flex-wrap gap-4">
          <GoldButton label="WhatsApp" onAction={() => window.open("https://wa.me/17602144819", "_blank")} className="gap-2" />
          <GoldButton label="Llamar" onAction={() => (window.location.href = "tel:7602144819")} className="gap-2" />
          <GoldButton label="Copiar número" onAction={() => navigator.clipboard.writeText("760-214-4819")} className="gap-2" />
        </div>
      </div>
    </section>
  );
}

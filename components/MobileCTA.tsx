"use client";

import { Phone } from "lucide-react";
import { GoldButton } from "@/components/GoldButton";

// Barra CTA flotante móvil
export function MobileCTA() {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 md:hidden">
      <GoldButton label="Reservar — 760-214-4819" className="h-12 w-full" onAction={() => (window.location.href = "tel:7602144819")} />
      <Phone className="pointer-events-none absolute right-5 top-4 h-4 w-4 text-black" />
    </div>
  );
}

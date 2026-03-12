"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { BookingForm } from "@/components/BookingForm";
import { BookingPolicy } from "@/components/BookingPolicy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { MobileCTA } from "@/components/MobileCTA";
import { Services } from "@/components/Services";
import { Sheet } from "@/components/ui/sheet";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#politica", label: "Política" },
  { href: "#reservar", label: "Reservar" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" }
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-background text-foreground">
      <header className="fixed left-0 right-0 top-0 z-30 border-b border-gold-primary/20 bg-black/60 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <p className="font-serif text-lg">Toxic Queens</p>
          <nav className="hidden gap-6 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-gold-muted hover:text-gold-light">
                {link.label}
              </a>
            ))}
          </nav>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-gold-primary/40 md:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <Sheet open={open} onClose={() => setOpen(false)}>
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-md px-2 py-3 text-lg" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </Sheet>

      <Hero />
      <Services />
      <BookingPolicy />
      <BookingForm />
      <Gallery />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}

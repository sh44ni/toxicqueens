"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GoldButton } from "@/components/GoldButton";
import { SparkleCanvas } from "@/components/SparkleCanvas";

// Sección Hero principal
export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <SparkleCanvas />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 tracking-[0.24em] text-gold-muted">
          by Stephany Robles
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glitter-text text-5xl leading-tight md:text-7xl"
        >
          Toxic Queens Beauty Studio
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mx-auto mt-6 max-w-xl text-lg text-foreground/90">
          Tu salón de confianza en Vista, CA
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-10 flex flex-wrap justify-center gap-4">
          <GoldButton label="Reservar Cita" onAction={() => document.getElementById("reservar")?.scrollIntoView({ behavior: "smooth" })} />
          <GoldButton label="Ver Servicios" className="border border-gold-primary/40 bg-transparent text-foreground" onAction={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })} />
        </motion.div>
      </div>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="absolute bottom-8 z-10 text-gold-light">
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}

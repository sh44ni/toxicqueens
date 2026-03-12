import { AlertCircle, BadgeDollarSign, CreditCard, Smartphone } from "lucide-react";

// Sección de política de reserva
export function BookingPolicy() {
  const rules = [
    { icon: BadgeDollarSign, text: "Para reservar se requiere un depósito de $20." },
    { icon: CreditCard, text: "Métodos: Zelle, Venmo, Cash App y Apple Pay a nombre de Stephany Robles / 760-214-4819." },
    { icon: AlertCircle, text: "Si cancelas con 48 horas de anticipación, tu depósito puede reprogramarse." },
    { icon: AlertCircle, text: "Cancelaciones con menos de 24 horas: depósito no reembolsable." },
    { icon: Smartphone, text: "Sin depósito, no se garantiza tu horario." }
  ];

  return (
    <section id="politica" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="section-title">Política de Reserva</h2>
      <div className="section-divider mt-4" />
      <div className="mt-10 space-y-4">
        {rules.map((rule) => {
          const Icon = rule.icon;
          return (
            <div key={rule.text} className="glass-card flex items-start gap-4 p-4">
              <Icon className="mt-1 h-5 w-5 text-gold-light" />
              <p className="text-foreground/90">{rule.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

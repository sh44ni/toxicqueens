"use client";

import { Check, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GoldButtonProps {
  label: string;
  className?: string;
  onAction?: () => void;
}

export function GoldButton({ label, className, onAction }: GoldButtonProps) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setDone(true);
    onAction?.();
    setTimeout(() => setDone(false), 2000);
  };

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    btn.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  };

  const resetMove = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={resetMove}
      onClick={handleClick}
      disabled={loading}
      className={cn(
        "gold-button group relative inline-flex h-11 min-w-36 items-center justify-center rounded-md px-5 text-sm font-semibold text-black transition-all duration-200 ease-out disabled:opacity-70",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : done ? <Check className="h-4 w-4" /> : null}
        <span>{loading ? "Procesando" : done ? "Listo" : label}</span>
      </span>
      <span className="shimmer-sweep absolute inset-0 rounded-md" />
    </button>
  );
}

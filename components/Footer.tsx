// Sección de pie de página
export function Footer() {
  return (
    <footer className="border-t border-gold-primary/20 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-serif text-2xl">Toxic Queens</p>
        <nav className="flex flex-wrap gap-4 text-sm text-gold-muted">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#reservar">Reservar</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <p className="text-sm text-gold-muted">Diseñado con amor para Toxic Queens Beauty Studio</p>
      </div>
    </footer>
  );
}

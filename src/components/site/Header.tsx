import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/carte", label: "Notre carte" },
  { to: "/maison", label: "La Maison" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-warm text-primary-foreground shadow-soft">
            <span className="font-display text-lg font-bold">C</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-tight">Maison Chopin</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Boulangerie · Massy
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href="tel:0169289107"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" /> 01 69 28 91 07
          </a>
        </nav>

        <button
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm font-medium hover:bg-secondary ${
                    isActive ? "text-primary bg-secondary" : "text-foreground/80"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href="tel:0169289107"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Appeler
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

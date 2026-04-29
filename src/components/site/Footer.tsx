import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-bold">Maison Chopin</div>
          <div className="mt-1 text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
            Boulangerie · Pâtisserie
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            Au cœur de Massy, à deux pas de la Gare TGV, nous façonnons chaque jour des pains et
            viennoiseries dans la plus pure tradition française.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">Adresse</div>
          <div className="flex items-start gap-3 text-primary-foreground/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <span>2 Rue Florence Arthaud<br />91300 Massy</span>
          </div>
          <a href="tel:0169289107" className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold">
            <Phone className="h-4 w-4" /> 01 69 28 91 07
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">Horaires</div>
          <div className="flex items-start gap-3 text-primary-foreground/80">
            <Clock className="mt-0.5 h-4 w-4 shrink-0" />
            <div>
              <div>Lun – Sam : 6h00 – 21h00</div>
              <div>Dimanche : 6h00 – 20h00</div>
            </div>
          </div>
          <div className="flex flex-col gap-1 pt-3">
            <Link to="/carte" className="text-primary-foreground/70 hover:text-gold">Notre carte</Link>
            <Link to="/contact" className="text-primary-foreground/70 hover:text-gold">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Boulangerie Maison Chopin — Massy Gare TGV
        </div>
      </div>
    </footer>
  );
}

import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/Layout";
import { MapPin, Phone, Clock, Navigation, ShoppingBag } from "lucide-react";

export default function Contact() {
  return (
    <SiteLayout>
      <Helmet>
        <title>Contact & Itinéraire — Maison Chopin Massy Gare TGV</title>
        <meta name="description" content="Adresse, horaires et accès : 2 Rue Florence Arthaud, 91300 Massy — à deux pas de la Gare TGV. Tél. 01 69 28 91 07." />
        <meta property="og:title" content="Contact — Maison Chopin Massy" />
        <meta property="og:description" content="Venez nous rendre visite à Massy, à deux pas de la Gare TGV." />
      </Helmet>

      <section className="px-6 pt-20 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Contact</div>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">Venez nous voir</h1>
          <div className="divider-gold mx-auto mt-6" />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-card p-10 shadow-soft">
            <div className="space-y-8">
              <Row icon={<MapPin />} title="Adresse">
                2 Rue Florence Arthaud<br />91300 Massy<br />
                <span className="text-sm text-muted-foreground">À 2 min à pied de la Gare TGV</span>
              </Row>
              <Row icon={<Phone />} title="Téléphone">
                <a href="tel:0169289107" className="hover:text-gold">01 69 28 91 07</a>
              </Row>
              <Row icon={<Clock />} title="Horaires d'ouverture">
                Lundi – Samedi : 6h00 – 21h00<br />
                Dimanche : 6h00 – 20h00
              </Row>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=2+Rue+Florence+Arthaud+91300+Massy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <Navigation className="h-4 w-4" /> Itinéraire
              </a>
              <a
                href="tel:0169289107"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> Appeler
              </a>
              <a
                href="https://www.ubereats.com/fr/store/boulangerie-maison-chopin/Mh_FYgD1SUGIBZqv3pl2eg?srsltid=AfmBOoqoDPt2brRDJIJ3ZnLyUe8beQDKm9vi1fJhHgawz5TdGwg4rZDi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="h-4 w-4" /> Commander sur Uber Eats
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-soft">
            <iframe
              title="Carte Maison Chopin Massy"
              src="https://www.google.com/maps?q=2+Rue+Florence+Arthaud+91300+Massy&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="aspect-square h-full w-full border-0 md:aspect-auto"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Row({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-warm text-primary-foreground [&_svg]:h-5 [&_svg]:w-5">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-gold">{title}</div>
        <div className="mt-1 text-foreground">{children}</div>
      </div>
    </div>
  );
}

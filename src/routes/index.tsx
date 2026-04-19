import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroBread from "@/assets/hero-bread.jpg";
import viennoiseries from "@/assets/viennoiseries.jpg";
import patisserie from "@/assets/patisserie.jpg";
import sandwich from "@/assets/sandwich.jpg";
import bakerHands from "@/assets/baker-hands.jpg";
import { Clock, MapPin, Star, Wheat, Croissant, Cake } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Chopin — Boulangerie artisanale à Massy Gare TGV" },
      {
        name: "description",
        content:
          "Pains, viennoiseries, pâtisseries et sandwichs préparés chaque matin au cœur de Massy. Ouvert dès 6h, à deux pas de la Gare TGV.",
      },
      { property: "og:title", content: "Maison Chopin — Boulangerie à Massy" },
      {
        property: "og:description",
        content: "L'art de la boulangerie française à deux pas de la Gare TGV de Massy.",
      },
      { property: "og:image", content: heroBread },
      { name: "twitter:image", content: heroBread },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroBread}
          alt="Pains artisanaux Maison Chopin"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-overlay" />
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-40 md:pt-44 md:pb-56">
          <div className="max-w-2xl text-primary-foreground">
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Depuis toujours · Massy
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              L'art du pain,<br />
              <span className="italic text-gold">à la française.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              Au cœur du quartier Gare TGV de Massy, Maison Chopin façonne chaque jour
              pains, viennoiseries et pâtisseries dans la plus pure tradition artisanale.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/carte"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Découvrir la carte
              </Link>
              <a
                href="https://maps.google.com/?q=2+Rue+Florence+Arthaud+91300+Massy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-3.5 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/15"
              >
                <MapPin className="h-4 w-4" /> Nous trouver
              </a>
            </div>
          </div>
        </div>

        {/* info bar */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-6">
          <div className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-2xl bg-border shadow-elegant md:grid-cols-3">
            <InfoCard icon={<Clock className="h-5 w-5" />} title="Ouvert dès 6h" subtitle="7j/7 — jusqu'à 21h" />
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="Massy Gare TGV" subtitle="2 Rue Florence Arthaud" />
            <InfoCard icon={<Star className="h-5 w-5" />} title="4,5 / 5 sur Uber Eats" subtitle="900+ avis clients" />
          </div>
        </div>
      </section>

      {/* SAVOIR-FAIRE */}
      <section className="px-6 pt-48 pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div className="relative">
            <img
              src={bakerHands}
              alt="Geste artisanal du boulanger"
              width={1280}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gradient-warm p-6 text-primary-foreground shadow-elegant md:block">
              <div className="font-display text-3xl font-bold">100%</div>
              <div className="text-xs uppercase tracking-widest text-primary-foreground/70">
                Fait maison
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Notre savoir-faire</div>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Le geste artisanal,<br />jour après jour.
            </h2>
            <div className="divider-gold mt-6" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Pétrissage lent, farines sélectionnées, fermentation longue : nos boulangers
              perpétuent les gestes d'une tradition exigeante. Chaque pain raconte une histoire,
              celle d'un savoir-faire transmis et d'une passion intacte.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <Stat n="06h" label="Première fournée" />
              <Stat n="24h" label="Fermentation" />
              <Stat n="15+" label="Pains spéciaux" />
              <Stat n="836" label="Avis Google" />
            </div>
          </div>
        </div>
      </section>

      {/* SPÉCIALITÉS */}
      <section className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Nos spécialités</div>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Trois passions, un seul amour
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <Specialty
              icon={<Wheat className="h-6 w-6" />}
              img={heroBread}
              title="Pains de tradition"
              text="Baguette de tradition, pain de campagne, complet, aux céréales — cuits sur sole toute la journée."
            />
            <Specialty
              icon={<Croissant className="h-6 w-6" />}
              img={viennoiseries}
              title="Viennoiseries pur beurre"
              text="Croissants feuilletés à la main, pains au chocolat, brioches dorées — la gourmandise du matin."
            />
            <Specialty
              icon={<Cake className="h-6 w-6" />}
              img={patisserie}
              title="Pâtisseries fines"
              text="Éclairs, tartes saisonnières, mille-feuille et créations du chef pour vos moments d'exception."
            />
          </div>
        </div>
      </section>

      {/* PAUSE DÉJEUNER */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-elegant md:grid-cols-2">
          <div className="p-10 md:p-16">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Pause déjeuner</div>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Sandwichs, salades<br />& formules midi
            </h2>
            <p className="mt-6 max-w-md text-primary-foreground/80">
              Préparés chaque matin avec nos pains du jour : jambon-beurre, poulet crudités,
              végétariens, salades de saison. La pause déjeuner devient un plaisir.
            </p>
            <Link
              to="/carte"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Voir les formules
            </Link>
          </div>
          <img
            src={sandwich}
            alt="Sandwich gourmand sur baguette artisanale"
            width={1280}
            height={1280}
            loading="lazy"
            className="h-full w-full object-cover md:aspect-auto"
          />
        </div>
      </section>

      {/* AVIS */}
      <section className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Ils en parlent</div>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              La parole à nos clients
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Review
              text="Très bien accueilli avec un sourire mémorable. On prend le temps de vous renseigner sur les pâtisseries — un vrai plaisir."
              author="Avis Google"
              date="il y a 3 mois"
            />
            <Review
              text="Les croissants sont feuilletés à la perfection. Mon arrêt obligé chaque matin avant de prendre le TGV."
              author="Client habitué"
              date="il y a 1 mois"
            />
            <Review
              text="Sandwichs frais, pain délicieux, formules midi parfaites. Le rapport qualité-prix est excellent."
              author="Avis Uber Eats"
              date="récemment"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Passez nous voir <span className="italic text-primary">ce matin.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            2 Rue Florence Arthaud, 91300 Massy — à deux pas de la Gare TGV. Ouvert dès 6h.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="tel:0169289107"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-8 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              01 69 28 91 07
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Itinéraire & contact
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-4 bg-card px-6 py-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-warm text-primary-foreground">
        {icon}
      </div>
      <div>
        <div className="font-display font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-l-2 border-gold pl-4">
      <div className="font-display text-3xl font-bold text-primary">{n}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function Specialty({
  icon,
  img,
  title,
  text,
}: {
  icon: React.ReactNode;
  img: string;
  title: string;
  text: string;
}) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          width={1280}
          height={960}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-7">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
          {icon}
        </div>
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </article>
  );
}

function Review({ text, author, date }: { text: string; author: string; date: string }) {
  return (
    <div className="rounded-2xl bg-card p-7 shadow-soft">
      <div className="mb-3 flex gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-foreground/85">"{text}"</p>
      <div className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">{author}</span> · {date}
      </div>
    </div>
  );
}

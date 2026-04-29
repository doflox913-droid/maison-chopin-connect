import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/Layout";
import patisserie from "@/assets/patisserie.jpg";

const sections = [
  {
    title: "Pains de tradition",
    intro: "Cuits sur sole, façonnés à la main.",
    items: [
      ["Baguette de tradition", "1,30 €"],
      ["Baguette classique", "1,10 €"],
      ["Pain de campagne", "4,50 €"],
      ["Pain complet", "4,80 €"],
      ["Pain aux céréales", "5,20 €"],
      ["Pain au levain", "5,50 €"],
    ],
  },
  {
    title: "Viennoiseries pur beurre",
    intro: "Feuilletées à la main, dorées au four chaque matin.",
    items: [
      ["Croissant", "1,30 €"],
      ["Pain au chocolat", "1,50 €"],
      ["Pain aux raisins", "1,80 €"],
      ["Chausson aux pommes", "2,20 €"],
      ["Brioche tressée", "4,50 €"],
      ["Kouign-amann", "2,80 €"],
    ],
  },
  {
    title: "Pâtisseries de la maison",
    intro: "Créations du chef, fruits de saison.",
    items: [
      ["Éclair chocolat / café", "3,80 €"],
      ["Mille-feuille vanille", "4,20 €"],
      ["Tarte aux fruits du moment", "4,50 €"],
      ["Paris-Brest", "4,80 €"],
      ["Saint-Honoré", "5,20 €"],
      ["Macarons (l'unité)", "1,80 €"],
    ],
  },
  {
    title: "Pause déjeuner",
    intro: "Préparés du jour avec nos pains maison.",
    items: [
      ["Sandwich jambon beurre", "4,50 €"],
      ["Sandwich poulet crudités", "5,80 €"],
      ["Sandwich végétarien", "5,50 €"],
      ["Salade César", "8,50 €"],
      ["Quiche du jour + salade", "7,90 €"],
      ["Formule midi (sandwich + boisson + dessert)", "10,90 €"],
    ],
  },
];

export default function Carte() {
  return (
    <SiteLayout>
      <Helmet>
        <title>Notre carte — Maison Chopin Massy</title>
        <meta name="description" content="Découvrez notre carte : pains de tradition, viennoiseries pur beurre, pâtisseries fines, sandwichs et formules midi." />
        <meta property="og:title" content="Notre carte — Maison Chopin" />
        <meta property="og:description" content="Pains, viennoiseries, pâtisseries et formules midi de la Boulangerie Maison Chopin à Massy." />
        <meta property="og:image" content={patisserie} />
        <meta name="twitter:image" content={patisserie} />
      </Helmet>

      <section className="relative px-6 pt-20 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">La carte</div>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">Notre carte</h1>
          <div className="divider-gold mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground">
            Une sélection renouvelée chaque jour, façonnée avec passion par nos artisans.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {sections.map((s) => (
            <div key={s.title} className="rounded-3xl bg-card p-8 shadow-soft md:p-10">
              <h2 className="font-display text-2xl font-bold text-primary">{s.title}</h2>
              <p className="mt-1 text-sm italic text-muted-foreground">{s.intro}</p>
              <div className="mt-6 divide-y divide-border">
                {s.items.map(([name, price]) => (
                  <div key={name} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-sm font-medium text-foreground">{name}</span>
                    <span className="font-display text-base font-semibold text-gold">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-xs text-muted-foreground">
          * Prix indicatifs, susceptibles d'évoluer. Liste non exhaustive — passez en boutique pour
          découvrir les nouveautés du jour.
        </p>
      </section>
    </SiteLayout>
  );
}

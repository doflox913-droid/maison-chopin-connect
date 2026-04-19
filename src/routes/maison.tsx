import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import bakerHands from "@/assets/baker-hands.jpg";

export const Route = createFileRoute("/maison")({
  head: () => ({
    meta: [
      { title: "La Maison — Notre histoire | Maison Chopin Massy" },
      {
        name: "description",
        content:
          "Découvrez l'histoire et les valeurs de la Boulangerie Maison Chopin, ancrée à Massy depuis des années.",
      },
      { property: "og:title", content: "La Maison Chopin — Notre histoire" },
      {
        property: "og:description",
        content: "Une boulangerie artisanale au cœur de Massy, pour célébrer le pain et le geste juste.",
      },
      { property: "og:image", content: bakerHands },
      { name: "twitter:image", content: bakerHands },
    ],
  }),
  component: Maison,
});

function Maison() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img
          src={bakerHands}
          alt="Boulanger au travail"
          width={1280}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-overlay" />
        <div className="mx-auto max-w-5xl px-6 py-32 text-center text-primary-foreground">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">La Maison</div>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
            Une histoire de <span className="italic text-gold">passion</span>
          </h1>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl space-y-8 text-lg leading-relaxed text-foreground/85">
          <p className="font-display text-2xl text-primary">
            Au cœur de Massy, à deux pas de la Gare TGV, la Boulangerie Maison Chopin perpétue
            chaque jour l'art du pain français.
          </p>
          <p>
            Nos artisans boulangers commencent leur journée bien avant l'aube. Pétrissage,
            façonnage, cuisson : chaque étape est réalisée à la main, dans le plus grand respect
            des traditions. Nous sélectionnons des farines de qualité et accordons à nos pâtes le
            temps long de la fermentation — celui qui donne au pain son goût, sa mâche, son âme.
          </p>
          <p>
            Au-delà du pain, nous mettons la même exigence dans nos viennoiseries pur beurre,
            nos pâtisseries fines et nos formules de midi. Ici, tout est fait maison, chaque
            jour, sans compromis.
          </p>
          <div className="divider-gold !w-20" />
          <p className="italic text-muted-foreground">
            « Faire du bon pain, c'est partager un peu de bonheur, simplement. »
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {[
            ["Tradition", "Des recettes éprouvées, transmises et perfectionnées."],
            ["Exigence", "Des matières premières sélectionnées avec soin."],
            ["Plaisir", "Un accueil chaleureux et le sourire en boutique."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-card p-8 text-center shadow-soft">
              <div className="font-display text-2xl font-bold text-primary">{t}</div>
              <div className="divider-gold mx-auto mt-4" />
              <p className="mt-4 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

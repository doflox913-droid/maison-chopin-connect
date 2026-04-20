import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Boulangerie Maison Chopin — Massy Gare TGV" },
      { name: "description", content: "Boulangerie artisanale à Massy (Gare TGV). Pains, viennoiseries, pâtisseries et sandwichs préparés chaque jour. Ouvert dès 6h." },
      { name: "author", content: "Maison Chopin" },
      { property: "og:title", content: "Boulangerie Maison Chopin — Massy Gare TGV" },
      { property: "og:description", content: "Boulangerie artisanale à Massy (Gare TGV). Pains, viennoiseries, pâtisseries et sandwichs préparés chaque jour. Ouvert dès 6h." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Boulangerie Maison Chopin — Massy Gare TGV" },
      { name: "twitter:description", content: "Boulangerie artisanale à Massy (Gare TGV). Pains, viennoiseries, pâtisseries et sandwichs préparés chaque jour. Ouvert dès 6h." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/09b9a17f-7b81-4542-bd3d-6a8aa9926d62/id-preview-2373c548--d26af670-a8ff-44f8-89b0-929ecb5ffb85.lovable.app-1776623948531.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/09b9a17f-7b81-4542-bd3d-6a8aa9926d62/id-preview-2373c548--d26af670-a8ff-44f8-89b0-929ecb5ffb85.lovable.app-1776623948531.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

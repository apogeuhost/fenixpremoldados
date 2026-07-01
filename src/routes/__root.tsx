import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logoAsset from "@/assets/fenix-logo.webp.asset.json";
import { Menu, X, MessageCircle } from "lucide-react";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/obras", label: "Obras" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-page grid h-20 grid-cols-2 items-center md:grid-cols-3">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img src={logoAsset.url} alt="Fênix Pré Moldados" className="h-20 w-auto" />
          </Link>
        </div>
        <nav className="hidden items-center justify-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center justify-end md:flex">
          <Link
            to="/contato"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-soft transition hover:opacity-90"
          >
            Solicitar Orçamento
          </Link>
        </div>
        <div className="flex justify-end md:hidden">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                activeProps={{ className: "bg-muted text-accent" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 bg-brand text-brand-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <img src={logoAsset.url} alt="Fênix Pré Moldados" className="h-14 w-auto bg-white/95 rounded-md p-2" />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Especialistas em galpões pré-moldados, metálicos e mistos. Soluções construtivas de alta qualidade.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition hover:text-accent">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>R. Álvaro de Freitas, Nº 135 — Esplanada</li>
            <li>Arcos - MG, 35588-000</li>
            <li>
              <a href="mailto:comercial@fenixpremoldados.com.br" className="hover:text-accent">
                comercial@fenixpremoldados.com.br
              </a>
            </li>
            <li>
              <a href="tel:+5537998560640" className="hover:text-accent">
                (37) 99856-0640
              </a>
            </li>
            <li className="flex gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="hover:text-accent">Instagram</a>
              <a href="#" aria-label="Facebook" className="hover:text-accent">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Fênix Pré Moldados. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5537998560640"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-soft transition hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Algo deu errado</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tente novamente ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Tentar novamente
          </button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-muted">
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fênix Pré Moldados — Galpões Pré-Moldados, Metálicos e Mistos" },
      { name: "description", content: "Especialistas em galpões pré-moldados, metálicos e mistos em Arcos/MG. Projetos personalizados, fabricação e execução completa de obras." },
      { name: "author", content: "Fênix Pré Moldados" },
      { property: "og:title", content: "Fênix Pré Moldados — Galpões Pré-Moldados, Metálicos e Mistos" },
      { property: "og:description", content: "Especialistas em galpões pré-moldados, metálicos e mistos em Arcos/MG. Projetos personalizados, fabricação e execução completa de obras." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fênix Pré Moldados — Galpões Pré-Moldados, Metálicos e Mistos" },
      { name: "twitter:description", content: "Especialistas em galpões pré-moldados, metálicos e mistos em Arcos/MG. Projetos personalizados, fabricação e execução completa de obras." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2cbf547d-bbd0-4615-b342-2a660a67defe/id-preview-90c9e06b--71b9e97d-7f0b-4e3d-a5ef-23af60d6b6b4.lovable.app-1782396748660.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2cbf547d-bbd0-4615-b342-2a660a67defe/id-preview-90c9e06b--71b9e97d-7f0b-4e3d-a5ef-23af60d6b6b4.lovable.app-1782396748660.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
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
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </QueryClientProvider>
  );
}

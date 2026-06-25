import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { POSTS } from "@/lib/blog-posts";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Fênix Pré Moldados" },
      { name: "description", content: "Conteúdos sobre construção pré-moldada, galpões e investimentos no setor." },
      { property: "og:title", content: "Blog — Fênix Pré Moldados" },
      { property: "og:description", content: "Artigos sobre o universo dos pré-moldados e da construção civil." },
    ],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId !== "__root__" && m.routeId !== "/blog" && m.routeId.startsWith("/blog"));
  if (isChild) return <Outlet />;

  return (
    <>
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Blog</p>
          <h1 className="mt-3 text-5xl font-bold">Conteúdos da Fênix</h1>
          <p className="mt-4 text-lg text-white/80">
            Artigos sobre construção pré-moldada, mercado e novas tecnologias.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-8 md:grid-cols-2">
          {POSTS.map((p) => (
            <article key={p.slug} className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(p.date).toLocaleDateString("pt-BR")}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.readingTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-brand">{p.title}</h2>
              <p className="mt-3 flex-1 text-muted-foreground">{p.excerpt}</p>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                Ler artigo <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

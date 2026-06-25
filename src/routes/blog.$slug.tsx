import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, POSTS } from "@/lib/blog-posts";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Fênix Pré Moldados` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Artigo — Fênix Pré Moldados" }],
  }),
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl font-bold text-brand">Artigo não encontrado</h1>
      <Link to="/blog" className="mt-6 inline-block text-accent hover:underline">← Voltar ao blog</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-bold text-brand">Erro ao carregar o artigo</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const others = POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="container-page max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> Voltar ao blog
          </Link>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-white/70">
            <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" />{new Date(post.date).toLocaleDateString("pt-BR")}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{post.readingTime} de leitura</span>
          </div>
        </div>
      </section>

      <div className="container-page -mt-10 max-w-4xl">
        <div className="overflow-hidden rounded-xl shadow-soft">
          <img src={post.cover} alt={post.coverAlt} className="aspect-[16/9] w-full object-cover" />
        </div>
      </div>

      <article className="py-16">
        <div className="container-page max-w-3xl space-y-5 text-lg leading-relaxed text-foreground/90">
          {post.body.map((b: { type: "h2" | "p"; text: string }, i: number) =>
            b.type === "h2" ? (
              <h2 key={i} className="pt-6 text-3xl font-bold text-brand">{b.text}</h2>
            ) : (
              <p key={i}>{b.text}</p>
            ),
          )}
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-border bg-surface py-16">
          <div className="container-page max-w-3xl">
            <h2 className="text-2xl font-bold text-brand">Continue lendo</h2>
            <div className="mt-6 grid gap-5">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="block rounded-xl bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <h3 className="text-xl font-semibold text-brand">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

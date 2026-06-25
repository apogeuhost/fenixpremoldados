import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Fênix Pré Moldados" },
      { name: "description", content: "Conheça a história da Fênix Pré Moldados, empresa de Arcos/MG especializada em construção pré-moldada." },
      { property: "og:title", content: "Sobre a Fênix Pré Moldados" },
      { property: "og:description", content: "Nossa história, fundadores e propósito." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Nossa História</p>
          <h1 className="mt-3 text-5xl font-bold">Construindo soluções desde 2020</h1>
          <p className="mt-5 text-lg text-white/80">
            Da visão dos fundadores ao parque fabril em Arcos — Minas Gerais.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[2fr_1fr]">
          <article className="prose-fenix space-y-5 text-foreground/90 leading-relaxed">
            <p>
              O nome <strong>Fênix Pré Moldados</strong> foi criado através dos gestores da empresa
              <strong> Junio Rodrigues</strong> e <strong>Denio Lima</strong>. A Fênix é uma empresa
              do ramo civil voltada para o método construtivo alternativo em pré-moldado, localizada
              na cidade de <strong>Arcos</strong>, no Centro-Oeste de Minas Gerais, nascida em
              <strong> fevereiro de 2020</strong>.
            </p>
            <p>
              Através de viagens em trabalho pelo Brasil e durante os caminhos percorridos na região
              sul do país, Denio Lima visualizou o setor de pré-moldado na construção civil. Na busca
              por maior conhecimento, localizou-se uma fábrica de fôrmas, onde foram feitas as
              compras das quantidades necessárias para o início do empreendimento.
            </p>
            <p>
              Junio Rodrigues, juntamente com sua equipe, deu andamento à produção das peças. Logo
              foram vendidas casas com material em pré-moldado que se expandiu em toda a região.
            </p>
            <p>
              A Fênix atua com qualidade e compromisso em entregar soluções construtivas, reduzindo
              o tempo de entrega dos nossos projetos com a mais alta tecnologia no controle de qualidade.
            </p>
          </article>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-brand">Fundada em</h3>
              <p className="mt-2 text-3xl font-bold text-accent">2020</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-brand">Sede</h3>
              <p className="mt-2 text-foreground">Arcos — Minas Gerais</p>
              <p className="text-sm text-muted-foreground">Centro-Oeste mineiro</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-brand">Gestores</h3>
              <ul className="mt-2 space-y-1 text-foreground">
                <li>Junio Rodrigues</li>
                <li>Denio Lima</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

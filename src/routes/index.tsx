import { createFileRoute, Link } from "@tanstack/react-router";
import videoAsset from "@/assets/fenix-galpao.mp4.asset.json";
import { ArrowRight, HardHat, Zap, ShieldCheck, FileText, Hammer, Building2, Wrench, Briefcase } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fênix Pré Moldados — Galpões Pré-Moldados, Metálicos e Mistos em Arcos/MG" },
      { name: "description", content: "Construção de galpões pré-moldados, metálicos e mistos. Projetos personalizados, fabricação própria e execução de obras com rapidez e qualidade." },
      { property: "og:title", content: "Fênix Pré Moldados" },
      { property: "og:description", content: "Galpões pré-moldados, metálicos e mistos. Soluções construtivas de ponta a ponta." },
    ],
  }),
  component: Home,
});

const PILLARS = [
  { icon: HardHat, title: "Atendimento", text: "Equipe especializada e capacitada para facilitar a vida de quem constrói, com soluções comprovadas de qualidade." },
  { icon: Zap, title: "Rapidez", text: "Do projeto à execução, garantimos a entrega ágil do seu empreendimento sem abrir mão da qualidade." },
  { icon: ShieldCheck, title: "Qualidade", text: "Materiais de primeira linha que garantem maior durabilidade e total segurança aos nossos clientes." },
];

const SERVICES = [
  { icon: FileText, title: "Projetos Executivos", text: "Projetos personalizados conforme a necessidade da sua obra." },
  { icon: Hammer, title: "Execução de Obras Civis", text: "Realizamos toda a execução civil com equipe própria e qualificada." },
  { icon: Building2, title: "Fabricação de Pré-Moldados", text: "Parque fabril equipado com tecnologia de ponta e controle rigoroso." },
  { icon: Wrench, title: "Estruturas Metálicas", text: "Fabricação e montagem de estruturas metálicas para qualquer porte." },
  { icon: Briefcase, title: "Administração de Obras", text: "Administração e execução global, do primeiro traço à entrega das chaves." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand text-brand-foreground">
        <div className="absolute inset-0 -z-10">
          <video
            src={videoAsset.url}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/90 to-brand/40" />
        </div>
        <div className="container-page grid gap-10 py-24 md:grid-cols-2 md:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80">
              Arcos / Minas Gerais
            </span>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] md:text-6xl">
              Galpões <span className="text-accent">pré-moldados,</span> metálicos e mistos
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Soluções construtivas completas, do projeto à entrega, com rapidez,
              qualidade e baixo custo para o seu empreendimento.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contato" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition hover:opacity-90">
                Solicitar Orçamento <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/obras" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Ver Obras
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Nossos Pilares</p>
            <h2 className="mt-2 text-4xl font-bold text-brand">Três compromissos que sustentam cada obra</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="group rounded-xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-brand">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Serviços</p>
              <h2 className="mt-2 text-4xl font-bold text-brand">Projetos totalmente personalizados</h2>
              <p className="mt-3 text-muted-foreground">
                Projetos sob medida, fabricação própria e execução completa — tudo conforme a necessidade da sua obra.
              </p>
            </div>
            <Link to="/contato" className="text-sm font-semibold text-accent hover:underline">
              Fale com um especialista →
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-xl bg-card p-6 shadow-card">
                <s.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 text-xl font-semibold text-brand">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Em obra</p>
            <h2 className="mt-2 text-4xl font-bold text-brand">Veja a Fênix em ação</h2>
            <p className="mt-4 text-muted-foreground">
              Acompanhe a construção de um galpão executado pela nossa equipe. Estruturas
              pré-moldadas que aceleram a obra sem comprometer a qualidade final.
            </p>
            <Link to="/obras" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition hover:bg-brand/90">
              Conheça nossas obras <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <video
              src={videoAsset.url}
              controls
              playsInline
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="container-page max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Depoimento</p>
          <blockquote className="mt-6 text-2xl font-medium leading-snug md:text-3xl">
            “A Fênix Pré Moldados facilita minha vida nas obras, o trabalho é de alto nível
            e o atendimento excepcional.”
          </blockquote>
          <p className="mt-6 text-sm text-white/70">
            <strong className="text-white">Paulo Nunes</strong> — Gerente de Obras
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-page rounded-2xl bg-surface p-10 text-center md:p-16">
          <h2 className="text-4xl font-bold text-brand">Pronto para construir com a Fênix?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Envie os detalhes da sua obra e receba uma proposta sob medida.
          </p>
          <Link to="/contato" className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition hover:opacity-90">
            Solicitar Orçamento <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

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
          <h1 className="mt-3 text-5xl font-bold">Sobre a Fênix Pré Moldados</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[2fr_1fr]">
          <article className="prose-fenix space-y-5 text-foreground/90 leading-relaxed">
            <p>
              Fundada em 2020, em Divinópolis, no Centro-Oeste de Minas Gerais, a Fênix Pré Moldados nasceu com o propósito de transformar a construção civil por meio de soluções estruturais modernas, eficientes e de alto desempenho. Sob a liderança de seus fundadores, Junio Rodrigues e Denio Lima, a empresa consolidou-se como referência em sistemas construtivos em concreto pré-moldado.
            </p>
            <p>
              Contamos com um moderno parque fabril estrategicamente localizado, equipado com tecnologia de ponta e uma equipe técnica altamente qualificada, preparada para desenvolver projetos que atendem aos mais elevados padrões de qualidade, segurança e desempenho.
            </p>
            <p>
              Nossa atuação é pautada pela agilidade, confiabilidade e compromisso com cada cliente, oferecendo soluções que reduzem significativamente o prazo de execução das obras, otimizam custos e garantem excelência em todas as etapas do processo construtivo.
            </p>
            <p>
              Desenvolvemos projetos personalizados, em conformidade com as normas técnicas vigentes, executando estruturas para galpões pré-moldados, metálicos e mistos, além de coberturas metálicas, mezaninos, pontes rolantes e outras soluções estruturais voltadas aos segmentos industrial, comercial e logístico.
            </p>
            <p>
              Mais do que construir estruturas, entregamos engenharia, inovação e confiança para impulsionar o crescimento dos nossos clientes.
            </p>
          </article>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-brand">Fundada em</h3>
              <p className="mt-2 text-3xl font-bold text-accent">2020</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-brand">Sede</h3>
              <p className="mt-2 text-foreground">Divinópolis — Minas Gerais</p>
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

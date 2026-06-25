import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon } from "lucide-react";

export const Route = createFileRoute("/obras")({
  head: () => ({
    meta: [
      { title: "Obras — Fênix Pré Moldados" },
      { name: "description", content: "Conheça galpões pré-moldados, metálicos e mistos construídos pela Fênix Pré Moldados." },
      { property: "og:title", content: "Obras — Fênix Pré Moldados" },
      { property: "og:description", content: "Galeria de galpões entregues pela Fênix Pré Moldados." },
    ],
  }),
  component: Obras,
});

const GALLERY = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `Galpão ${String(i + 1).padStart(2, "0")}`,
  description: "Descrição da obra em breve.",
}));

function Obras() {
  return (
    <>
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Obras</p>
          <h1 className="mt-3 text-5xl font-bold">Galpões executados pela Fênix</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page max-w-4xl">
          <p className="text-lg leading-relaxed text-foreground/90">
            A <strong>Fênix Pré Moldados</strong> é a sua parceira especializada na construção de
            galpões, oferecendo soluções em galpões <strong>pré-moldados, metálicos e mistos</strong>.
            Com o uso de estruturas pré-moldadas em nossos galpões, proporcionamos inúmeros
            benefícios, incluindo otimização do espaço interno, redução do tempo de construção,
            controle de gastos e muito mais. Descubra como podemos ajudar a tornar o seu projeto de
            galpão uma realidade eficiente e econômica. Além disso, convidamos você a conferir
            algumas das nossas obras de galpões abaixo e conhecer a qualidade e excelência dos
            projetos que entregamos.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex aspect-[4/3] items-center justify-center bg-surface text-muted-foreground">
                  <div className="flex flex-col items-center gap-2 opacity-60">
                    <ImageIcon className="h-10 w-10" />
                    <span className="text-xs">Foto em breve</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-brand">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

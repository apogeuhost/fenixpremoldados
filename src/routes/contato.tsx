import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fênix Pré Moldados" },
      { name: "description", content: "Entre em contato com a Fênix Pré Moldados em Arcos/MG. Solicite seu orçamento." },
      { property: "og:title", content: "Contato — Fênix Pré Moldados" },
      { property: "og:description", content: "Solicite seu orçamento. Endereço, telefone e e-mail da Fênix Pré Moldados." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!nome.trim() || nome.trim().length > 100) errs.nome = "Informe um nome válido (até 100 caracteres).";
    if (!/^[\d\s()+-]{8,20}$/.test(telefone.trim())) errs.telefone = "Informe um telefone válido.";
    if (!mensagem.trim() || mensagem.trim().length > 2000) errs.mensagem = "Informe uma mensagem (até 2000 caracteres).";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const subject = encodeURIComponent(`Contato pelo site — ${nome.trim()}`);
    const body = encodeURIComponent(
      `Nome: ${nome.trim()}\nTelefone: ${telefone.trim()}\n\nMensagem:\n${mensagem.trim()}`,
    );
    window.location.href = `mailto:comercial@fenixpremoldados.com.br?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contato</p>
          <h1 className="mt-3 text-5xl font-bold">Vamos conversar sobre sua obra</h1>
          <p className="mt-4 text-lg text-white/80">
            Conte-nos o que você precisa e nossa equipe entrará em contato.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <aside className="space-y-5">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <MapPin className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-lg font-semibold text-brand">Endereço</h3>
              <p className="mt-1 text-muted-foreground">
                Área Rural, S/N<br />
                Bairro: Área Rural de Lagoa da Prata<br />
                CEP: 35593-899<br />
                Lagoa da Prata - MG
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <Mail className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-lg font-semibold text-brand">E-mail</h3>
              <a href="mailto:comercial@fenixpremoldados.com.br" className="mt-1 block text-muted-foreground hover:text-accent">
                comercial@fenixpremoldados.com.br
              </a>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <Phone className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-lg font-semibold text-brand">Telefone</h3>
              <a href="tel:+5537998560640" className="mt-1 block text-muted-foreground hover:text-accent">
                (37) 99856-0640
              </a>
              <a
                href="https://wa.me/5537998560640"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Conversar no WhatsApp
              </a>
            </div>
          </aside>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h2 className="text-2xl font-bold text-brand">Envie sua mensagem</h2>
            <p className="mt-1 text-sm text-muted-foreground">Responderemos o mais breve possível.</p>

            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="nome" className="text-sm font-medium text-foreground">Nome</label>
                <input
                  id="nome"
                  type="text"
                  value={nome}
                  maxLength={100}
                  onChange={(e) => setNome(e.target.value)}
                  className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                {errors.nome && <p className="mt-1 text-xs text-destructive">{errors.nome}</p>}
              </div>
              <div>
                <label htmlFor="telefone" className="text-sm font-medium text-foreground">Telefone</label>
                <input
                  id="telefone"
                  type="tel"
                  value={telefone}
                  maxLength={20}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="(37) 99999-9999"
                  className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                {errors.telefone && <p className="mt-1 text-xs text-destructive">{errors.telefone}</p>}
              </div>
              <div>
                <label htmlFor="mensagem" className="text-sm font-medium text-foreground">Mensagem</label>
                <textarea
                  id="mensagem"
                  rows={6}
                  value={mensagem}
                  maxLength={2000}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                {errors.mensagem && <p className="mt-1 text-xs text-destructive">{errors.mensagem}</p>}
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition hover:opacity-90"
              >
                Enviar mensagem
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Ao enviar, abriremos seu e-mail com a mensagem pronta para envio.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

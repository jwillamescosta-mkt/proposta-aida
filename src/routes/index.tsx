import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Instagram } from "lucide-react";

import {
  CONTATO,
  DIAGNOSTICO,
  OBSERVACAO_PERSONALIZADA,
  PACOTES,
  PROCESSO,
  SOLUCOES,
} from "@/content/proposta";
import { Eyebrow, Reveal, Rule, Section, SectionTitle } from "@/components/proposta/primitives";

export const Route = createFileRoute("/")({
  component: Proposta,
  head: () => ({
    meta: [
      { title: "Proposta de Comunicação — Aida Fotografia" },
      {
        name: "description",
        content:
          "Proposta de consultoria de posicionamento, conteúdo e gestão de redes sociais para Aida, fotógrafa de família, gestante e infância.",
      },
      { property: "og:title", content: "Proposta de Comunicação — Aida Fotografia" },
      {
        property: "og:description",
        content:
          "Proposta de consultoria de posicionamento, conteúdo e gestão de redes sociais para Aida, fotógrafa de família, gestante e infância.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Proposta() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="paper-grain relative overflow-hidden border-b border-border bg-muted px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24">
        <div className="mx-auto w-full max-w-5xl">
          <Reveal>
            <Eyebrow>Proposta de Consultoria &amp; Comunicação</Eyebrow>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 max-w-3xl font-serif text-[2.5rem] font-light leading-[1.06] tracking-[-0.02em] text-foreground sm:text-[3.75rem] lg:text-[4.5rem]">
              Para Aida — cada clique guarda uma{" "}
              <em className="not-italic text-primary">infância inteira</em>.
            </h1>
          </Reveal>

          <Reveal delay={240} className="mt-12 max-w-2xl">
            <blockquote className="border-l border-primary/50 pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-foreground/85 sm:text-2xl">
                “Há 7 anos eternizando a chegada e a infância de crianças incríveis como a sua.”
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={340} className="mt-16">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span>Fotografia de família</span>
              <span aria-hidden className="hidden h-px w-8 bg-border sm:block" />
              <span>Gestante &amp; infância</span>
              <span aria-hidden className="hidden h-px w-8 bg-border sm:block" />
              <span>7 anos de acervo</span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* INTRODUÇÃO */}
      <Section>
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-serif text-2xl font-light leading-[1.55] text-foreground sm:text-[1.75rem]">
              Sete anos registrando primeiros sorrisos, primeiros passos e momentos que as famílias
              vão guardar para sempre — isso não é só um trabalho técnico com câmera. É confiança. É
              ser convidada para entrar num dos momentos mais delicados da vida de uma família.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-base leading-[1.85] text-muted-foreground sm:text-lg">
              Esta proposta não é sobre{" "}
              <span className="text-foreground">“postar mais”</span>. É sobre fazer sua comunicação
              transmitir, para quem ainda não te conhece, a mesma confiança que suas clientes atuais
              já sentem.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* DIAGNÓSTICO */}
      <Section className="border-y border-border bg-card">
        <div className="grid gap-12 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-16">
          <Reveal>
            <Eyebrow>Diagnóstico</Eyebrow>
            <SectionTitle className="mt-4">O que percebo hoje</SectionTitle>
          </Reveal>

          <ul className="space-y-8">
            {DIAGNOSTICO.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 100} className="print-keep">
                <div className="flex gap-5">
                  <span className="mt-2 font-sans text-xs tabular-nums tracking-widest text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-[1.85] text-foreground/85 sm:text-lg">{item}</p>
                </div>
              </Reveal>
            ))}

            <Reveal as="li" delay={220} className="print-keep">
              <div className="rounded-lg border border-dashed border-primary/40 bg-secondary/40 p-6">
                <Eyebrow>Observação personalizada</Eyebrow>
                <p
                  className="mt-3 text-base leading-[1.8] text-muted-foreground italic"
                  data-editable="observacao-personalizada"
                >
                  {OBSERVACAO_PERSONALIZADA}
                </p>
              </div>
            </Reveal>
          </ul>
        </div>
      </Section>

      {/* SOLUÇÕES */}
      <Section>
        <Reveal>
          <Eyebrow>Frentes de trabalho</Eyebrow>
          <SectionTitle className="mt-4 max-w-xl">Como posso ajudar</SectionTitle>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {SOLUCOES.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 120} className="print-keep bg-card">
              <div className="flex h-full flex-col gap-4 p-8">
                <span className="font-serif text-3xl font-light text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl font-normal leading-snug text-foreground">
                  {s.titulo}
                </h3>
                <p className="text-sm leading-[1.8] text-muted-foreground">{s.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PACOTES */}
      <Section className="border-y border-border bg-muted">
        <Reveal>
          <Eyebrow>Modalidades</Eyebrow>
          <SectionTitle className="mt-4 max-w-xl">Caminhos possíveis</SectionTitle>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PACOTES.map((p, i) => (
            <Reveal key={p.nome} delay={i * 120} className="print-keep h-full">
              <article
                className={
                  p.destaque
                    ? "flex h-full flex-col rounded-lg border border-primary bg-card p-8 shadow-[0_1px_0_0_var(--color-primary)]"
                    : "flex h-full flex-col rounded-lg border border-border bg-card/60 p-8"
                }
              >
                <Eyebrow className={p.destaque ? "text-primary" : undefined}>{p.tag}</Eyebrow>
                <h3 className="mt-5 font-serif text-2xl font-normal leading-snug text-foreground">
                  {p.nome}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-[1.8] text-muted-foreground">
                  {p.descricao}
                </p>
                <Rule className="my-7" />
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {p.periodo}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROCESSO */}
      <Section>
        <Reveal>
          <Eyebrow>Processo</Eyebrow>
          <SectionTitle className="mt-4 max-w-xl">Como vamos trabalhar</SectionTitle>
        </Reveal>

        <ol className="mt-14 space-y-10 md:grid md:grid-cols-4 md:gap-10 md:space-y-0">
          {PROCESSO.map((step, i) => (
            <Reveal as="li" key={step} delay={i * 110} className="print-keep">
              <div className="border-t border-border pt-6 md:h-full">
                <span className="font-serif text-5xl font-light leading-none text-primary/40 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-sm leading-[1.85] text-foreground/85">{step}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* CTA */}
      <Section className="paper-grain border-t border-border bg-secondary/50">
        <div className="max-w-2xl">
          <Reveal>
            <SectionTitle className="text-[2.5rem] sm:text-[3.25rem]">Vamos conversar?</SectionTitle>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-6 text-base leading-[1.85] text-muted-foreground sm:text-lg">
              20 minutos para eu entender melhor sua rotina e mostrar, na prática, qual caminho faz
              mais sentido para você.
            </p>
          </Reveal>

          <Reveal delay={200} className="mt-10">
            <a
              href={CONTATO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-md bg-primary px-7 py-4 font-sans text-sm font-medium uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Agendar conversa
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </a>
          </Reveal>

          <Reveal delay={280} className="mt-12">
            <Rule />
            <div className="mt-6 flex flex-col gap-4 font-sans text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-10">
              <a
                href={`mailto:${CONTATO.email}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0" strokeWidth={1.5} />
                {CONTATO.email}
              </a>
              <a
                href={CONTATO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-primary"
              >
                <Instagram className="size-4 shrink-0" strokeWidth={1.5} />
                {CONTATO.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}

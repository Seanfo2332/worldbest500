import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

/**
 * Shared editorial header used at the top of every inner/sub-page
 * (The 500, Companies, Industries, Methodology, About, Insights).
 * Keeps sub-pages visually consistent with the homepage's masthead
 * language (gold eyebrow rule, serif display headline, hairline divider)
 * instead of each page inventing its own header treatment.
 */
export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="border-b border-hairline px-6 pb-14 pt-32 md:px-10 md:pb-16 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="block h-px w-16 bg-gold" />
          <span className="font-sans mt-6 block text-xs uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </span>
          <h1 className="font-serif-cn mt-4 text-4xl font-black leading-[1.1] text-ivory md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="font-sans-cn mt-6 max-w-2xl text-sm leading-7 text-ivory/60 md:text-base">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

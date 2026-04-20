import { ShowcaseIllustration } from "@/components/marketing/Illustrations";
import { links, showcaseCards } from "@/lib/marketingContent";

export function VisualShowcase() {
  return (
    <section
      id="showcase"
      className="bg-white py-14 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl dark:text-white">
            A clean workflow from capture to export
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {showcaseCards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-2xl border border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-900"
            >
              <ShowcaseIllustration
                variant={card.art}
                className="h-auto w-full border-b border-slate-300 dark:border-slate-700"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={links.chromeStore}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            Add to Chrome
          </a>
        </div>
      </div>
    </section>
  );
}

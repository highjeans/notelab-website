import { featureHighlights, links } from "@/lib/marketingContent";

export function FeatureGrid2026() {
  return (
    <section
      id="features"
      className="bg-slate-100 py-14 sm:py-20 lg:py-24 dark:bg-slate-900"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl dark:text-white">
            Built to make extension note-taking faster and more reliable
          </h2>
          <p className="mt-4 text-base text-slate-700 sm:text-lg dark:text-slate-300">
            Every highlight below is based on capabilities implemented in the
            latest NoteLab extension update
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureHighlights.map((feature) => {
            return (
              <article
                key={feature.title}
                className="flex flex-col rounded-2xl border border-slate-300 bg-white p-5 dark:border-slate-700 dark:bg-slate-800/60"
              >
                <div className="flex items-center gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-700 dark:text-blue-200">
                    <feature.icon size={18} strokeWidth={2.3} />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={links.chromeStore}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Add to Chrome
          </a>
        </div>
      </div>
    </section>
  );
}

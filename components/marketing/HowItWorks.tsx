import { links, workflowSteps } from "@/lib/marketingContent";

export function HowItWorks() {
  return (
    <section className="bg-slate-100 py-14 sm:py-20 lg:py-24 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
          How it works
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {workflowSteps.map((item, index) => (
            <article
              key={item.step}
              className="rounded-2xl border border-slate-300 bg-white p-5 dark:border-slate-700 dark:bg-slate-800/60"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                {item.step}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {item.details}
              </p>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href={links.chromeStore}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
          >
            Add to Chrome
          </a>
        </div>
      </div>
    </section>
  );
}

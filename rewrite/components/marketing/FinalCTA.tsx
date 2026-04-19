import { CtaIllustration } from "@/components/marketing/Illustrations";
import { links } from "@/lib/marketingContent";

export function FinalCTA() {
  return (
    <section
      id="install"
      className="bg-white py-14 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 rounded-3xl border border-blue-400/40 bg-blue-100/70 px-6 py-8 sm:px-8 md:grid-cols-[1.2fr_0.8fr] lg:px-10 dark:bg-blue-500/15">
        <div>
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl dark:text-white">
            Move your learning forward with NoteLab
          </h2>
          <p className="mt-4 text-base text-slate-800 sm:text-lg dark:text-blue-100">
            Install the extension and start collecting better notes in seconds
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.chromeStore}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Add to Chrome
            </a>
          </div>
        </div>

        <CtaIllustration className="mx-auto h-auto w-full max-w-xs" />
      </div>
    </section>
  );
}

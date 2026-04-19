import { HeroIllustration } from "@/components/marketing/Illustrations";
import { links } from "@/lib/marketingContent";

export function Hero() {
  return (
    <section className="border-b border-slate-200 bg-linear-to-b from-blue-50 via-white to-slate-100 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:pt-8 sm:pb-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">
            Built for modern study workflows
          </p>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
            Capture and organize smarter notes while you browse
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg dark:text-slate-200">
            NoteLab helps students and researchers save text, media, and ideas
            in one place. The 2026 update adds stronger organization, richer
            editing, and faster capture tools so you can focus on learning.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.chromeStore}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
            >
              Add to Chrome
            </a>
            <a
              href="#features" // TODO change to youtube video
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500 sm:w-auto dark:border-slate-500 dark:text-slate-100 dark:hover:border-slate-300"
            >
              See what&apos;s new in 2026
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-400/50 bg-amber-50 p-5 dark:bg-amber-500/10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-200">
              Awards and Recognitions
            </p>
            <p className="mt-2 text-xl font-black text-amber-900 sm:text-2xl dark:text-amber-100">
              1st Place Winner — Hack the Education and Beyond 2022 Hackathon
            </p>
            <p className="mt-2 text-sm text-amber-800 dark:text-amber-100/90">
              NoteLab started as a winning idea and has continued evolving into
              a practical note-taking tool for real study and research
              workflows.
            </p>
          </div>
        </div>

        <div className="relative hidden mx-auto w-full max-w-xl rounded-3xl border border-slate-300 bg-white/70 p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-2xl lg:grid">
          <HeroIllustration className="mx-auto h-auto w-full" />
        </div>
      </div>
    </section>
  );
}

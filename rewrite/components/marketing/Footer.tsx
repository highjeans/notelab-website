import { links } from "@/lib/marketingContent";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
            Socials
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={links.youtube}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              RTV Software Solutions YouTube
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              NoteLab GitHub
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
            Support
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={links.reportBug}
              className="text-sm text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Report a Bug
            </a>
            <a
              href={links.requestFeature}
              className="text-sm text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Request a Feature
            </a>
          </div>
        </section>
      </div>

      <div className="border-t border-slate-200 px-4 py-5 text-center text-sm text-slate-600 sm:px-6 lg:px-8 dark:border-slate-800 dark:text-slate-400">
        Copyright © {new Date().getFullYear()} RTV Software Solutions
      </div>
    </footer>
  );
}

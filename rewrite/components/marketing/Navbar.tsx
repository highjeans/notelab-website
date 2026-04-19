import { links, navItems } from "@/lib/marketingContent";
import logo from "@/public/logo.png";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-white/10 dark:bg-slate-950/85">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-900 dark:text-white"
        >
          <Image src={logo} alt="Logo" width={28} height={28} />
          <span>NoteLab</span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={links.chromeStore}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
        >
          Add to Chrome
        </a>
      </div>
    </header>
  );
}

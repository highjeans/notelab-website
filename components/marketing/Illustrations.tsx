type IllustrationProps = {
  className?: string;
};

export function HeroIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 560 420"
      role="img"
      aria-label="Abstract note-taking illustration"
      className={className}
    >
      <defs>
        <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      <rect
        x="20"
        y="20"
        width="520"
        height="380"
        rx="28"
        className="fill-slate-200 dark:fill-slate-900"
      />
      <rect
        x="48"
        y="56"
        width="244"
        height="300"
        rx="18"
        className="fill-white dark:fill-slate-800"
      />
      <rect
        x="70"
        y="88"
        width="200"
        height="12"
        rx="6"
        className="fill-slate-300 dark:fill-slate-600"
      />
      <rect
        x="70"
        y="116"
        width="150"
        height="10"
        rx="5"
        className="fill-slate-300 dark:fill-slate-600"
      />
      <rect
        x="70"
        y="142"
        width="170"
        height="10"
        rx="5"
        className="fill-slate-300 dark:fill-slate-600"
      />
      <rect
        x="70"
        y="168"
        width="190"
        height="10"
        rx="5"
        className="fill-slate-300 dark:fill-slate-600"
      />
      <circle cx="412" cy="132" r="84" fill="url(#heroGradient)" />
      <rect
        x="322"
        y="238"
        width="182"
        height="112"
        rx="16"
        className="fill-slate-100 dark:fill-slate-800"
      />
      <rect
        x="340"
        y="260"
        width="146"
        height="10"
        rx="5"
        className="fill-slate-300 dark:fill-slate-600"
      />
      <rect
        x="340"
        y="284"
        width="110"
        height="10"
        rx="5"
        className="fill-slate-300 dark:fill-slate-600"
      />
      <rect
        x="340"
        y="308"
        width="126"
        height="10"
        rx="5"
        className="fill-slate-300 dark:fill-slate-600"
      />
      <path
        d="M332 120 L470 240"
        className="stroke-violet-500 dark:stroke-violet-300"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

type ShowcaseIllustrationProps = {
  variant: "editor" | "capture" | "export";
  className?: string;
};

export function ShowcaseIllustration({
  variant,
  className,
}: ShowcaseIllustrationProps) {
  const accent =
    variant === "editor"
      ? "#3b82f6"
      : variant === "capture"
        ? "#8b5cf6"
        : "#22c55e";

  return (
    <svg
      viewBox="0 0 640 360"
      role="img"
      aria-label="Feature illustration"
      className={className}
    >
      <rect
        x="16"
        y="16"
        width="608"
        height="328"
        rx="24"
        className="fill-slate-200 dark:fill-slate-900"
      />
      <rect
        x="42"
        y="46"
        width="556"
        height="44"
        rx="12"
        className="fill-slate-100 dark:fill-slate-800"
      />
      <circle cx="72" cy="68" r="8" fill={accent} />
      <rect
        x="98"
        y="62"
        width="180"
        height="12"
        rx="6"
        className="fill-slate-300 dark:fill-slate-600"
      />

      {variant === "editor" && (
        <>
          <rect
            x="42"
            y="110"
            width="556"
            height="210"
            rx="16"
            className="fill-white dark:fill-slate-800"
          />
          <rect
            x="68"
            y="136"
            width="240"
            height="14"
            rx="7"
            className="fill-slate-300 dark:fill-slate-600"
          />
          <rect
            x="68"
            y="166"
            width="320"
            height="12"
            rx="6"
            className="fill-slate-300 dark:fill-slate-600"
          />
          <rect
            x="68"
            y="194"
            width="280"
            height="12"
            rx="6"
            className="fill-slate-300 dark:fill-slate-600"
          />
          <rect
            x="68"
            y="222"
            width="210"
            height="12"
            rx="6"
            className="fill-slate-300 dark:fill-slate-600"
          />
        </>
      )}

      {variant === "capture" && (
        <>
          <rect
            x="42"
            y="110"
            width="176"
            height="210"
            rx="16"
            className="fill-white dark:fill-slate-800"
          />
          <rect
            x="236"
            y="110"
            width="176"
            height="210"
            rx="16"
            className="fill-white dark:fill-slate-800"
          />
          <rect
            x="430"
            y="110"
            width="168"
            height="210"
            rx="16"
            className="fill-white dark:fill-slate-800"
          />
          <circle cx="130" cy="170" r="34" fill={accent} opacity="0.7" />
          <rect
            x="96"
            y="226"
            width="68"
            height="10"
            rx="5"
            className="fill-slate-300 dark:fill-slate-600"
          />
          <rect
            x="262"
            y="140"
            width="124"
            height="86"
            rx="10"
            fill={accent}
            opacity="0.35"
          />
          <rect
            x="262"
            y="242"
            width="124"
            height="10"
            rx="5"
            className="fill-slate-300 dark:fill-slate-600"
          />
          <rect
            x="458"
            y="140"
            width="112"
            height="10"
            rx="5"
            className="fill-slate-300 dark:fill-slate-600"
          />
          <rect
            x="458"
            y="168"
            width="96"
            height="10"
            rx="5"
            className="fill-slate-300 dark:fill-slate-600"
          />
          <rect
            x="458"
            y="196"
            width="80"
            height="10"
            rx="5"
            className="fill-slate-300 dark:fill-slate-600"
          />
        </>
      )}

      {variant === "export" && (
        <>
          <rect
            x="42"
            y="110"
            width="388"
            height="210"
            rx="16"
            className="fill-white dark:fill-slate-800"
          />
          <rect
            x="448"
            y="110"
            width="150"
            height="210"
            rx="16"
            className="fill-white dark:fill-slate-800"
          />
          <rect
            x="70"
            y="144"
            width="332"
            height="12"
            rx="6"
            className="fill-slate-300 dark:fill-slate-600"
          />
          <rect
            x="70"
            y="172"
            width="292"
            height="12"
            rx="6"
            className="fill-slate-300 dark:fill-slate-600"
          />
          <rect
            x="70"
            y="200"
            width="312"
            height="12"
            rx="6"
            className="fill-slate-300 dark:fill-slate-600"
          />
          <rect
            x="70"
            y="228"
            width="244"
            height="12"
            rx="6"
            className="fill-slate-300 dark:fill-slate-600"
          />
          <path
            d="M523 158 v76"
            stroke={accent}
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M490 210 l33 33 l33-33"
            fill="none"
            stroke={accent}
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

export function CtaIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 280"
      role="img"
      aria-label="Abstract install illustration"
      className={className}
    >
      <defs>
        <linearGradient id="ctaGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <rect
        x="20"
        y="20"
        width="360"
        height="240"
        rx="28"
        className="fill-slate-200 dark:fill-slate-900"
      />
      <circle cx="110" cy="98" r="46" fill="url(#ctaGradient)" opacity="0.9" />
      <circle cx="286" cy="186" r="54" fill="url(#ctaGradient)" opacity="0.6" />
      <rect
        x="76"
        y="150"
        width="180"
        height="14"
        rx="7"
        className="fill-slate-300 dark:fill-slate-600"
      />
      <rect
        x="76"
        y="178"
        width="132"
        height="12"
        rx="6"
        className="fill-slate-300 dark:fill-slate-600"
      />
      <rect
        x="76"
        y="202"
        width="116"
        height="12"
        rx="6"
        className="fill-slate-300 dark:fill-slate-600"
      />
    </svg>
  );
}

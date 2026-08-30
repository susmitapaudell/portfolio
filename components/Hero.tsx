import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-16 pt-20 sm:pt-28">
      <p className="font-mono text-xs text-muted">{profile.role}</p>

      <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl">
        {profile.name}
        <span className="caret" aria-hidden="true" />
      </h1>

      <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
        {profile.tagline}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-sm border border-border px-3.5 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent"
        >
          <GithubIcon />
          GitHub
        </a>
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-sm border border-border px-3.5 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent"
        >
          <LinkedinIcon />
          LinkedIn
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-sm bg-accent px-3.5 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.64 0 8.13c0 3.6 2.29 6.65 5.47 7.72.4.08.55-.18.55-.39 0-.19-.01-.82-.01-1.49-2.01.38-2.53-.5-2.69-.96-.09-.23-.48-.96-.82-1.15-.28-.15-.68-.53-.01-.54.63-.01 1.08.59 1.23.83.72 1.23 1.87.88 2.33.67.07-.53.28-.88.51-1.08-1.78-.2-3.64-.9-3.64-4.02 0-.89.31-1.62.82-2.19-.08-.2-.36-1.03.08-2.15 0 0 .67-.22 2.2.84a7.5 7.5 0 0 1 4 0c1.53-1.06 2.2-.84 2.2-.84.44 1.12.16 1.95.08 2.15.51.57.82 1.29.82 2.19 0 3.13-1.87 3.82-3.65 4.02.29.25.54.75.54 1.51 0 1.09-.01 1.97-.01 2.24 0 .21.15.48.55.39A8.13 8.13 0 0 0 16 8.13C16 3.64 12.42 0 8 0Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.75h3.47V21H3.4V8.75Zm6.02 0h3.33v1.68h.05c.46-.88 1.6-1.8 3.29-1.8 3.52 0 4.17 2.32 4.17 5.33V21h-3.47v-5.4c0-1.29-.02-2.94-1.79-2.94-1.8 0-2.07 1.4-2.07 2.85V21H9.42V8.75Z" />
    </svg>
  );
}

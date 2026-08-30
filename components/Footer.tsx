import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">
          © {year} {profile.name}
        </p>
        <a
          href="#top"
          className="font-mono text-muted transition-colors hover:text-accent"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  );
}

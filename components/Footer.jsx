import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a className="hover:text-brand" href="#top">
          Back to top
        </a>
      </div>
    </footer>
  );
}

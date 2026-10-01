import Image from "next/image";
import { profile } from "@/data/profile";

const nav = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Education", "#education"],
];

export default function Hero() {
  return (
    <header id="top" className="bg-hero text-white">
      <div className="mx-auto max-w-6xl px-6">
        <nav aria-label="Primary" className="flex items-center justify-between py-5">
          <a
            href="#top"
            className="rounded border border-amber/70 px-2 py-1 font-serif text-sm font-semibold tracking-wide text-amber"
            aria-label="Back to top"
          >
            HPB
          </a>
          <ul className="hidden items-center gap-7 text-sm text-white/80 sm:flex">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a className="transition-colors hover:text-white" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-md border border-white/40 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-white/10"
          >
            Contact
          </a>
        </nav>

        <div className="grid items-center gap-8 pb-12 pt-6 md:grid-cols-[1fr_auto] md:gap-14 md:pb-16 md:pt-10">
          <div className="rise-late order-2 md:order-1">
            <h1 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-amber sm:text-xl">{profile.title}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              {profile.statement}
            </p>
            <p className="mt-3 text-sm text-white/70">
              {profile.location}. {profile.availability}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-md bg-amber px-5 py-2.5 font-semibold text-[#10264A] transition-transform hover:-translate-y-0.5"
              >
                Email me
              </a>
              <a
                href={profile.cv}
                download
                className="rounded-md border border-white/40 px-5 py-2.5 font-semibold transition-colors hover:bg-white/10"
              >
                Download CV
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/40 px-5 py-2.5 font-semibold transition-colors hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rise order-1 md:order-2">
            <div className="relative aspect-[4/5] w-40 overflow-hidden rounded-3xl border-4 border-white bg-white/10 sm:w-48 md:w-60">
              <Image
                src="/photo.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 768px) 240px, 192px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-4 border-t border-white/15 py-6">
          {profile.scope.map((item) => (
            <div key={item.label}>
              <dt className="font-serif text-2xl font-semibold text-amber sm:text-4xl">
                {item.value}
              </dt>
              <dd className="mt-1 text-xs leading-snug text-white/75 sm:text-sm">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div aria-hidden="true" className="flex h-1.5">
        <div className="w-1/3 bg-amber" />
        <div className="flex-1 bg-teal" />
      </div>
    </header>
  );
}

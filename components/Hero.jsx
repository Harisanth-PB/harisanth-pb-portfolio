import Image from "next/image";
import { profile } from "@/data/profile";
import CountUp from "./CountUp";

const nav = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Education", "#education"],
];

const ticker = [
  "Client acquisition",
  "Consultative selling",
  "HR operations",
  "CRM",
  "Advanced Excel",
  "Onboarding",
  "Report writing",
  "English, Hindi, Malayalam",
];

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  const words = [first, rest.join("\u00A0")];
  return (
    <header id="top" className="overflow-hidden bg-hero text-white">
      <div className="mx-auto max-w-6xl px-6">
        <nav aria-label="Primary" className="fade-up flex items-center justify-between py-5">
          <a
            href="#top"
            className="rounded-md bg-white px-2.5 py-1 font-serif text-sm font-bold tracking-wide text-[#D61414]"
            aria-label="Back to top"
          >
            HPB
          </a>
          <ul className="hidden items-center gap-7 text-sm font-medium text-white/90 sm:flex">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a className="transition-opacity hover:opacity-70" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full border-2 border-white px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-white hover:text-[#D61414]"
          >
            Contact
          </a>
        </nav>

        <div className="grid items-end gap-4 md:min-h-[34rem] md:grid-cols-[1.1fr_1fr]">
          <div className="pb-10 pt-6 md:pb-16">
            <h1 className="font-serif text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              {words.map((w, i) => (
                <span key={w} className="word mr-[0.25em]">
                  <span style={{ animationDelay: `${0.1 + i * 0.12}s` }}>{w}</span>
                </span>
              ))}
            </h1>
            <p className="fade-up mt-5 text-xl font-semibold sm:text-2xl" style={{ animationDelay: "0.5s" }}>
              {profile.title}
            </p>
            <p className="fade-up mt-4 max-w-lg text-lg leading-relaxed text-white/90" style={{ animationDelay: "0.65s" }}>
              {profile.statement}
            </p>
            <p className="fade-up mt-3 text-sm text-white/80" style={{ animationDelay: "0.75s" }}>
              {profile.location}. {profile.availability}.
            </p>
            <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.9s" }}>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-white px-6 py-3 font-semibold text-[#D61414] shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Email me
              </a>
              <a
                href={profile.cv}
                download
                className="rounded-full border-2 border-white px-6 py-3 font-semibold transition-colors hover:bg-white hover:text-[#D61414]"
              >
                Download CV
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white px-6 py-3 font-semibold transition-colors hover:bg-white hover:text-[#D61414]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="portrait-in -mb-px">
            <div className="float">
              <Image
                src="/hari.jpg"
                alt={`Portrait of ${profile.name}`}
                width={1000}
                height={721}
                priority
                sizes="(min-width: 768px) 480px, 100vw"
                className="portrait-mask mx-auto h-auto w-full max-w-md md:max-w-none"
              />
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-4 border-t border-white/30 py-7">
          {profile.scope.map((item) => (
            <div key={item.label}>
              <dt className="font-serif text-3xl font-bold sm:text-5xl">
                <CountUp value={item.value} />
              </dt>
              <dd className="mt-1 text-xs leading-snug text-white/85 sm:text-sm">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div aria-hidden="true" className="overflow-hidden bg-[#10264A] py-3 text-sm font-medium text-white">
        <div className="ticker">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="mx-6 whitespace-nowrap">
              {t}
              <span className="ml-12 text-[#FF5252]">+</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

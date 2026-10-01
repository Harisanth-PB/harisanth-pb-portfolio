import Section from "./Section";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[1fr_18rem] md:gap-16">
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="h-fit divide-y divide-line rounded-xl border border-line bg-surface">
          {profile.glance.map((row) => (
            <div key={row.label} className="px-5 py-4">
              <dt className="text-sm text-muted">{row.label}</dt>
              <dd className="mt-0.5 font-medium text-brand">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

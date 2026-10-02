import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {profile.skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 120}>
          <div className="h-full rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-red/60 hover:shadow-lg">
            <h3 className="font-serif text-xl font-semibold text-brand">{group.group}</h3>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 leading-snug">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

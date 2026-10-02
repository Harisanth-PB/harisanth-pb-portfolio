import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div>
        {profile.experience.map((job) => (
          <Reveal key={`${job.company}-${job.period}`}>
          <article
            className="grid gap-4 border-t border-line py-9 first:border-t-0 first:pt-0 md:grid-cols-[11rem_1fr] md:gap-12"
          >
            <div>
              <p className="font-medium text-brand">{job.period}</p>
              <p className="text-sm text-muted">{job.location}</p>
              {job.current && (
                <p className="mt-2 inline-block rounded-full bg-teal/15 px-3 py-0.5 text-xs font-medium text-red">
                  Current role
                </p>
              )}
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-brand">{job.role}</h3>
              <p className="mt-1 font-medium text-red">{job.company}</p>
              <p className="mt-4 inline-block rounded-md bg-amber/20 px-3 py-1 text-sm font-medium">
                {job.scale}
              </p>
              <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed marker:text-red">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import Section from "./Section";
import { profile } from "@/data/profile";

export default function Education() {
  return (
    <Section id="education" title="Education and certifications">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="font-serif text-xl font-semibold text-brand">Education</h3>
          <ul className="mt-4 space-y-5">
            {profile.education.map((item) => (
              <li key={item.degree}>
                <p className="font-medium">{item.degree}</p>
                <p className="text-red">{item.school}</p>
                <p className="text-sm text-muted">{item.period}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-10">
          <div>
            <h3 className="font-serif text-xl font-semibold text-brand">Certifications</h3>
            <ul className="mt-4 space-y-2">
              {profile.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold text-brand">Languages</h3>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {profile.languages.map((lang) => (
                <li key={lang.name}>
                  <span className="font-medium">{lang.name}</span>{" "}
                  <span className="text-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

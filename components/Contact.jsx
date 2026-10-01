import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-16 pt-6 sm:pb-24">
      <div className="rounded-3xl bg-hero p-8 text-white sm:p-12">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Get in touch</h2>
        <p className="mt-3 max-w-xl text-lg text-white/85">
          Based in Dubai and available immediately. Email is the quickest way to reach me.
        </p>

        <dl className="mt-8 grid gap-5 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-white/65">Email</dt>
            <dd className="mt-1 break-all font-medium">
              <a className="underline-offset-4 hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-white/65">Phone</dt>
            <dd className="mt-1 font-medium">
              <a className="underline-offset-4 hover:underline" href={`tel:${profile.phoneHref}`}>
                {profile.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-white/65">LinkedIn</dt>
            <dd className="mt-1 break-all font-medium">
              <a
                className="underline-offset-4 hover:underline"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.linkedinLabel}
              </a>
            </dd>
          </div>
        </dl>

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
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <Reveal>
        <h2 className="mb-10 flex items-center gap-4 font-serif text-4xl font-semibold text-brand sm:text-5xl">
          <span aria-hidden="true" className="h-10 w-2 rounded-full bg-red" />
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}

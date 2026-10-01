export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <h2 className="mb-8 flex items-center gap-3 font-serif text-3xl font-semibold text-brand sm:text-4xl">
        <span aria-hidden="true" className="h-8 w-1.5 rounded-sm bg-teal" />
        {title}
      </h2>
      {children}
    </section>
  );
}

type SectionProps = {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className ?? ""}`}>
      {title ? (
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? <p className="text-[var(--text-muted)] mt-1">{subtitle}</p> : null}
        </header>
      ) : null}
      {children}
    </section>
  );
}


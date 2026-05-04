interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  innerClassName = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-16 md:py-24 ${className}`}
      style={{ scrollMarginTop: "80px" }}
    >
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}

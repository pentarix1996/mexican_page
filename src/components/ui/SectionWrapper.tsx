interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 ${className}`}
      style={{ scrollMarginTop: "80px" }}
    >
      {children}
    </section>
  );
}
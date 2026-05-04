import Image from "next/image";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <Image
          src="/assets/decor/section-flourish-left.png"
          alt=""
          width={535}
          height={282}
          className="hidden h-auto w-14 sm:block md:w-16"
        />
        <h2 className="font-lilita text-[42px] leading-none text-[#5b2f63] md:text-[50px]">
          {title}
        </h2>
        <Image
          src="/assets/decor/section-flourish-right.png"
          alt=""
          width={534}
          height={281}
          className="hidden h-auto w-14 sm:block md:w-16"
        />
      </div>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-2xl font-lato text-[15px] leading-relaxed text-[#4b3420]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

import { formatPrice } from "@/lib/utils";
import { Flame, Leaf, Star } from "lucide-react";
import Image from "next/image";

type Tag = "picante" | "vegetariano" | "recomendado";

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  image?: string;
  tags?: Tag[];
  badge?: string;
}

const tagConfig: Record<Tag, { icon: React.ReactNode; label: string; className: string }> = {
  picante: {
    icon: <Flame className="w-3 h-3" />,
    label: "Picante",
    className: "bg-red/10 text-red",
  },
  vegetariano: {
    icon: <Leaf className="w-3 h-3" />,
    label: "Vegetariano",
    className: "bg-green/10 text-green",
  },
  recomendado: {
    icon: <Star className="w-3 h-3" />,
    label: "Recomendado",
    className: "bg-orange/10 text-orange",
  },
};

export function MenuCard({ name, description, price, image, tags = [], badge }: MenuCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-[#f2d5a7] bg-white shadow-[0_10px_28px_rgba(91,42,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(91,42,0,0.18)]">
      <div className="relative aspect-[1.55] overflow-hidden bg-[#f6d7a8]">
        {image ? (
          <Image
            src={`/assets/menu/${image}`}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,#fcbf49,transparent_30%),linear-gradient(135deg,#e63946,#f77f00)]" />
        )}
        {badge ? (
          <span className="absolute left-2 top-2 rounded-md bg-red px-2.5 py-1 font-lato text-xs font-black uppercase text-white shadow-md">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-lato text-[16px] font-black leading-tight text-dark">{name}</h4>
          <span className="shrink-0 font-lato text-[16px] font-black leading-none text-red">
            {formatPrice(price)}
          </span>
        </div>
        <div>
          <p className="mt-2 min-h-[44px] font-lato text-[13px] leading-relaxed text-[#5a3921]">
            {description || "Especialidad de la casa preparada al momento."}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {tags.map((tag) => {
                const config = tagConfig[tag];
                return (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-lato font-medium ${config.className}`}
                  >
                    {config.icon}
                    {config.label}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

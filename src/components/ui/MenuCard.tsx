import { formatPrice } from "@/lib/utils";
import { Flame, Leaf, Star } from "lucide-react";

type Tag = "picante" | "vegetariano" | "recomendado";

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  tags?: Tag[];
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

export function MenuCard({ name, description, price, tags = [] }: MenuCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border-t-2 border-orange">
      <div className="flex justify-between items-start gap-4 p-4">
        <div className="flex-1">
          <h4 className="font-lato font-bold text-dark text-lg">{name}</h4>
          <p className="font-lato text-gray-600 text-sm mt-1">{description}</p>
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
        <div className="flex-shrink-0">
          <span className="font-lato font-bold text-orange text-xl">
            {formatPrice(price)}
          </span>
        </div>
      </div>
    </div>
  );
}

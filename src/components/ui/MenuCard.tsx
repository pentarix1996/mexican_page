import { formatPrice } from "@/lib/utils";

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
}

export function MenuCard({ name, description, price }: MenuCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h4 className="font-lato font-bold text-dark text-lg">{name}</h4>
          <p className="font-lato text-gray-600 text-sm mt-1">{description}</p>
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

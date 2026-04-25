import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  src?: string;
  alt: string;
  title?: string;
  className?: string;
}

export function ImageCard({ src, alt, title, className = "" }: ImageCardProps) {
  const hasImage = src && src.length > 0;

  return (
    <div
      className={cn(
        "relative aspect-square overflow-hidden rounded-xl bg-gray-100 group",
        className
      )}
    >
      {hasImage ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            {title && (
              <span className="font-lato font-bold text-white text-lg">{title}</span>
            )}
          </div>
        </>
      ) : (
        /* Placeholder state */
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-red/10 to-orange/10">
          <svg
            className="w-16 h-16 text-red/30 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="font-lato text-sm text-gray-500">Imagen pendiente</span>
        </div>
      )}
    </div>
  );
}

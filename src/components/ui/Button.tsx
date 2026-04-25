import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-lato font-bold rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
        // Variant styles
        variant === "primary" && "bg-red text-white hover:bg-orange",
        variant === "secondary" && "bg-transparent border-2 border-red text-red hover:bg-red hover:text-white",
        // Size styles
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-base",
        size === "lg" && "px-8 py-4 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Also create an anchor version for links
interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center font-lato font-bold rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] no-underline",
        // Variant styles
        variant === "primary" && "bg-red text-white hover:bg-orange",
        variant === "secondary" && "bg-transparent border-2 border-red text-red hover:bg-red hover:text-white",
        // Size styles
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-base",
        size === "lg" && "px-8 py-4 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

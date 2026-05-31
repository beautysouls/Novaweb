import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-nova-gradient text-white shadow-glow hover:shadow-glow-lg hover:brightness-110",
  secondary: "glass text-white hover:bg-white/[0.09] hover:border-white/20",
  ghost: "text-slate-300 hover:text-white hover:bg-white/[0.05]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-nova-purple/60 focus-visible:ring-offset-2 focus-visible:ring-offset-nova-bg disabled:pointer-events-none disabled:opacity-50";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<ComponentProps<"button">, keyof BaseProps> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<ComponentProps<typeof Link>, keyof BaseProps> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  if (props.href !== undefined) {
    const { variant = "primary", size = "md", className, children, href, ...rest } =
      props as ButtonAsLink;
    return (
      <Link
        href={href}
        className={cn(base, variants[variant], sizes[size], className)}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { variant = "primary", size = "md", className, children, ...rest } =
    props as ButtonAsButton;
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

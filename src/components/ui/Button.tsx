import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-500 focus-visible:ring-2 focus-visible:ring-brand-200",
  secondary:
    "border border-brand-500 text-brand-500 hover:bg-brand-50 active:bg-brand-100 focus-visible:ring-2 focus-visible:ring-brand-200",
  ghost:
    "text-brand-500 hover:bg-brand-50 active:bg-brand-100 focus-visible:ring-2 focus-visible:ring-brand-200",
};

const sizes = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-3",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}

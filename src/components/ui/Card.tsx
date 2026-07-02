import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hover,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-neutral-100 bg-white p-6 shadow-xs",
        hover && "transition-shadow hover:shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

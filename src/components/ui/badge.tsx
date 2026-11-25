import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border px-2.5 py-0.5 text-xs font-mono tracking-tight transition-colors",
  {
    variants: {
      variant: {
        cyan: "border-cyber-500/40 bg-cyber-500/10 text-cyber-300",
        cobalt: "border-cobalt-500/40 bg-cobalt-500/15 text-cobalt-400",
        subtle: "border-line bg-abyss/85 text-ice-200 hover:border-cobalt-500/50 hover:text-cyber-200",
        live: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
      },
    },
    defaultVariants: {
      variant: "subtle",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

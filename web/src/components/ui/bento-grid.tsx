import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
            "border border-border/60 bg-card",
            "hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
            "hover:-translate-y-0.5 will-change-transform",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            item.hasPersistentHover && [
              "shadow-[0_2px_12px_rgba(0,0,0,0.06)] -translate-y-0.5",
              "dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
            ]
          )}
        >
          {/* dot pattern overlay */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-muted/60 group-hover:bg-muted transition-all duration-300">
                {item.icon}
              </div>
              {item.status && (
                <span className="text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm bg-muted/60 text-muted-foreground transition-colors duration-300 group-hover:bg-muted">
                  {item.status}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-foreground tracking-tight text-[15px]">
                {item.title}
                {item.meta && (
                  <span className="mr-2 text-xs text-muted-foreground font-normal">
                    {item.meta}
                  </span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>

            {(item.tags?.length || item.cta) && (
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2 flex-wrap text-xs text-muted-foreground">
                  {item.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-muted/60 backdrop-blur-sm transition-all duration-200 hover:bg-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                {item.cta && (
                  <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.cta}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* gradient border */}
          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-border/50 to-transparent transition-opacity duration-300",
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          />
        </div>
      ))}
    </div>
  );
}

export { BentoGrid };
